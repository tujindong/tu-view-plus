<template>
  <div
    ref="formItemRef"
    :class="formItemClasses"
    :role="isGroup ? 'group' : undefined"
    :aria-labelledby="isGroup ? labelId : undefined"
  >
    <form-label-wrap
      :is-auto-width="labelStyle.width === 'auto'"
      :update-all="formContext?.labelWidth === 'auto'"
    >
      <component
        v-if="hasLabel"
        :is="labelFor ? 'label' : 'div'"
        :id="labelId"
        :for="labelFor"
        :class="nsForm.e('item-label')"
        :style="labelStyle"
      >
        <slot name="label" :label="currentLabel">
          {{ currentLabel }}
        </slot>
      </component>
    </form-label-wrap>

    <div :class="nsForm.e('item-content')" :style="contentStyle">
      <slot />
      <transition-group :name="`${defaultNamespace}-zoom-in-top`">
        <slot v-if="shouldShowError" name="error" :error="validateMessage">
          <div :class="validateClasses">
            {{ validateMessage }}
          </div>
        </slot>
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  computed,
  inject,
  useSlots,
  reactive,
  toRefs,
  watch,
  nextTick,
  provide,
  onMounted,
  onBeforeUnmount
} from 'vue';
import AsyncValidator from 'async-validator';
import { refDebounced } from '@vueuse/core';
import { formItemProps } from './form-item';
import { clone } from 'lodash-unified';
import { formContextKey, formItemContextKey } from './constants';
import { useId, useNamespace, defaultNamespace } from '@tu-view-plus/hooks';
import {
  ensureArray,
  getProp,
  addUnit,
  isBoolean,
  isString,
  isFunction
} from '@tu-view-plus/utils';
import { useFormSize } from './hooks';
import FormLabelWrap from './form-label-wrap';
import '../style/form.scss';

import type { CSSProperties } from 'vue';
import type { RuleItem } from 'async-validator';
import type { Arrayable } from '@tu-view-plus/utils';
import type {
  FormItemContext,
  FormItemRule,
  FormValidateFailure
} from './types';
import type { FormItemValidateState } from './form-item';

defineOptions({
  name: 'TuFormItem'
});

const props = defineProps(formItemProps);
const slots = useSlots();

const formContext = inject(formContextKey, undefined);
const parentFormItemContext = inject(formItemContextKey, undefined);

const formItemSize = useFormSize(undefined, { formItem: false });

const nsForm = useNamespace('form');

const labelId = useId().value;
const inputIds = ref<string[]>([]);

const validateState = ref<FormItemValidateState>('');
const validateStateDebounced = refDebounced(validateState, 100);
const validateMessage = ref('');
const formItemRef = ref<HTMLDivElement>();
// special inline value.
let initialValue: any = undefined;
let isResettingField = false;

const isNested = !!parentFormItemContext;

const fieldValue = computed(() => {
  const model = formContext?.model;
  if (!model || !props.prop) {
    return;
  }
  return getProp(model, props.prop).value;
});

const normalizedRules = computed(() => {
  const { required } = props;

  const rules: FormItemRule[] = [];

  if (props.rules) {
    rules.push(...ensureArray(props.rules));
  }

  const formRules = formContext?.rules;
  if (formRules && props.prop) {
    const _rules = getProp<Arrayable<FormItemRule> | undefined>(
      formRules,
      props.prop
    ).value;
    if (_rules) {
      rules.push(...ensureArray(_rules));
    }
  }

  if (required !== undefined) {
    const requiredRules = rules
      .map((rule, i) => [rule, i] as const)
      .filter(([rule]) => Object.keys(rule).includes('required'));

    if (requiredRules.length > 0) {
      for (const [rule, i] of requiredRules) {
        if (rule.required === required) continue;
        rules[i] = { ...rule, required };
      }
    } else {
      rules.push({ required });
    }
  }

  return rules;
});

const validateEnabled = computed(() => normalizedRules.value.length > 0);

const currentLabel = computed(
  () => `${props.label || ''}${formContext?.labelSuffix || ''}`
);

const isRequired = computed(() =>
  normalizedRules.value.some((rule) => rule.required)
);

const shouldShowError = computed(
  () =>
    validateStateDebounced.value === 'error' &&
    props.showMessage &&
    (formContext?.showMessage ?? true)
);

const hasLabel = computed<boolean>(() => {
  return !!(props.label || slots.label);
});

const labelFor = computed<string | undefined>(() => {
  return props.for || inputIds.value.length === 1
    ? inputIds.value[0]
    : undefined;
});

const isGroup = computed<boolean>(() => {
  return !labelFor.value && hasLabel.value;
});

const propString = computed(() => {
  if (!props.prop) return '';
  return isString(props.prop) ? props.prop : props.prop.join('.');
});

const _inlineMessage = computed(() =>
  isBoolean(props.inlineMessage)
    ? props.inlineMessage
    : formContext?.inlineMessage || false
);

const labelStyle = computed<CSSProperties>(() => {
  if (formContext?.labelPosition === 'top') {
    return {};
  }

  const labelWidth = addUnit(props.labelWidth || formContext?.labelWidth || '');
  if (labelWidth) return { width: labelWidth };
  return {};
});

const contentStyle = computed<CSSProperties>(() => {
  if (formContext?.labelPosition === 'top' || formContext?.inline) {
    return {};
  }
  if (!props.label && !props.labelWidth && isNested) {
    return {};
  }
  const labelWidth = addUnit(props.labelWidth || formContext?.labelWidth || '');
  if (!props.label && !slots.label) {
    return { marginLeft: labelWidth };
  }
  return {};
});

const asteriskClassName = computed(() =>
  formContext?.requireAsteriskPosition === 'right'
    ? 'asterisk-right'
    : 'asterisk-left'
);

const formItemClasses = computed(() => ({
  [nsForm.e('item')]: true,
  [nsForm.em('item', formItemSize.value)]: formItemSize.value,
  [nsForm.em('item', asteriskClassName.value)]: true,
  [nsForm.em('item', 'feedback')]: formContext?.statusIcon,
  [nsForm.is('error')]: validateState.value === 'error',
  [nsForm.is('validating')]: validateState.value === 'validating',
  [nsForm.is('success')]: validateState.value === 'success',
  [nsForm.is('required')]: isRequired.value || props.required,
  [nsForm.is('no-asterisk')]: formContext?.hideRequiredAsterisk
}));

const validateClasses = computed(() => ({
  [nsForm.e('item-error')]: true,
  [nsForm.em('item-error', 'inline')]: _inlineMessage.value
}));

const getFilteredRule = (trigger: string) => {
  const rules = normalizedRules.value;
  return rules
    .filter((rule) => {
      if (!rule.trigger || !trigger) return true;
      if (Array.isArray(rule.trigger)) {
        return rule.trigger.includes(trigger);
      } else {
        return rule.trigger === trigger;
      }
    })
    .map(({ trigger, ...rule }): RuleItem => rule);
};

const setValidationState = (state: FormItemValidateState) => {
  validateState.value = state;
};

const onValidationFailed = (error: FormValidateFailure) => {
  const { errors, fields } = error;
  if (!errors || !fields) {
    console.error(error);
  }

  setValidationState('error');
  validateMessage.value = errors
    ? errors?.[0]?.message ?? `${props.prop} is required`
    : '';

  formContext?.emit('validate', props.prop!, false, validateMessage.value);
};

const onValidationSucceeded = () => {
  setValidationState('success');
  formContext?.emit('validate', props.prop!, true, '');
};

const doValidate = async (rules: RuleItem[]): Promise<true> => {
  const modelName = propString.value;
  const validator = new AsyncValidator({
    [modelName]: rules
  });
  return validator
    .validate({ [modelName]: fieldValue.value }, { firstFields: true })
    .then(() => {
      onValidationSucceeded();
      return true as const;
    })
    .catch((err: FormValidateFailure) => {
      onValidationFailed(err as FormValidateFailure);
      return Promise.reject(err);
    });
};

const validate: FormItemContext['validate'] = async (trigger, callback) => {
  if (isResettingField || !props.prop) {
    return false;
  }

  const hasCallback = isFunction(callback);
  if (!validateEnabled.value) {
    callback?.(false);
    return false;
  }

  const rules = getFilteredRule(trigger);
  if (rules.length === 0) {
    callback?.(true);
    return true;
  }

  setValidationState('validating');

  return doValidate(rules)
    .then(() => {
      callback?.(true);
      return true as const;
    })
    .catch((err: FormValidateFailure) => {
      const { fields } = err;
      callback?.(false, fields);
      return hasCallback ? false : Promise.reject(fields);
    });
};

const clearValidate: FormItemContext['clearValidate'] = () => {
  setValidationState('');
  validateMessage.value = '';
  isResettingField = false;
};

const resetField: FormItemContext['resetField'] = async () => {
  const model = formContext?.model;
  if (!model || !props.prop) return;

  const computedValue = getProp(model, props.prop);

  // prevent validation from being triggered
  isResettingField = true;

  computedValue.value = clone(initialValue);

  await nextTick();
  clearValidate();

  isResettingField = false;
};

const addInputId: FormItemContext['addInputId'] = (id: string) => {
  if (!inputIds.value.includes(id)) {
    inputIds.value.push(id);
  }
};

const removeInputId: FormItemContext['removeInputId'] = (id: string) => {
  inputIds.value = inputIds.value.filter((listId) => listId !== id);
};

watch(
  () => props.error,
  (val) => {
    validateMessage.value = val || '';
    setValidationState(val ? 'error' : '');
  },
  { immediate: true }
);

watch(
  () => props.validateStatus,
  (val) => setValidationState(val || '')
);

const context: FormItemContext = reactive({
  ...toRefs(props),
  $el: formItemRef,
  size: formItemSize,
  validateState,
  labelId,
  inputIds,
  isGroup,
  hasLabel,
  addInputId,
  removeInputId,
  resetField,
  clearValidate,
  validate
});

provide(formItemContextKey, context);

onMounted(() => {
  if (props.prop) {
    formContext?.addField(context);
    initialValue = clone(fieldValue.value);
  }
});

onBeforeUnmount(() => {
  formContext?.removeField(context);
});

defineExpose({
  size: formItemSize,
  validateMessage,
  validateState,
  validate,
  clearValidate,
  resetField
});
</script>
