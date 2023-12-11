<template>
  <form :class="formClasses">
    <slot />
  </form>
</template>

<script lang="ts" setup>
import { provide, reactive, toRefs, computed, watch } from 'vue';
import { formProps, formEmits } from './form';
import { useFormSize } from './hooks';
import { formContextKey } from './constants';
import { filterFields, useFormLabelWidth } from './utils';
import { useNamespace } from '@tu-view-plus/hooks';
import { debugWarn, isFunction } from '@tu-view-plus/utils';
import '../style/form.scss';

import type { ValidateFieldsError } from 'async-validator';
import type { Arrayable } from '@tu-view-plus/utils';
import type {
  FormContext,
  FormItemContext,
  FormValidateCallback,
  FormValidationResult
} from './types';
import type { FormItemProp } from './form-item';

defineOptions({
  name: 'TuForm'
});

const props = defineProps(formProps);
const emit = defineEmits(formEmits);

const nsForm = useNamespace('form');
const formSize = useFormSize();

const fields: FormItemContext[] = [];

const formClasses = computed(() => ({
  [nsForm.b()]: true,
  [nsForm.m(formSize.value || 'default')]: true,
  [nsForm.m(`label-${props.labelPosition}`)]: props.labelPosition,
  [nsForm.m('inline')]: props.inline
}));

const addField: FormContext['addField'] = (field) => {
  fields.push(field);
};

const removeField: FormContext['removeField'] = (field) => {
  if (field.prop) {
    fields.splice(fields.indexOf(field), 1);
  }
};

const resetFields: FormContext['resetFields'] = (properties = []) => {
  if (!props.model) {
    debugWarn('TuForm', 'model is required for resetFields to work.');
    return;
  }
  filterFields(fields, properties).forEach((field) => field.resetField());
};

const clearValidate: FormContext['clearValidate'] = (props = []) => {
  filterFields(fields, props).forEach((field) => field.clearValidate());
};

const isValidatable = computed(() => {
  const hasModel = !!props.model;
  if (!hasModel) {
    debugWarn('TuForm', 'model is required for validate to work.');
  }
  return hasModel;
});

const obtainValidateFields = (props: Arrayable<FormItemProp>) => {
  if (fields.length === 0) return [];

  const filteredFields = filterFields(fields, props);
  if (!filteredFields.length) {
    debugWarn('TuForm', 'please pass correct props!');
    return [];
  }
  return filteredFields;
};

const validate = async (
  callback?: FormValidateCallback
): FormValidationResult => validateField(undefined, callback);

const doValidateField = async (
  props: Arrayable<FormItemProp> = []
): Promise<boolean> => {
  if (!isValidatable.value) return false;

  const fields = obtainValidateFields(props);
  if (fields.length === 0) return true;

  let validationErrors: ValidateFieldsError = {};
  for (const field of fields) {
    try {
      await field.validate('');
    } catch (fields) {
      validationErrors = {
        ...validationErrors,
        ...(fields as ValidateFieldsError)
      };
    }
  }

  if (Object.keys(validationErrors).length === 0) return true;
  return Promise.reject(validationErrors);
};

const validateField: FormContext['validateField'] = async (
  modelProps = [],
  callback
) => {
  const shouldThrow = !isFunction(callback);
  try {
    const result = await doValidateField(modelProps);
    if (result === true) {
      callback?.(result);
    }
    return result;
  } catch (e) {
    if (e instanceof Error) throw e;

    const invalidFields = e as ValidateFieldsError;

    if (props.scrollToError) {
      scrollToField(Object.keys(invalidFields)[0]);
    }
    callback?.(false, invalidFields);
    return shouldThrow && Promise.reject(invalidFields);
  }
};

const scrollToField = (prop: FormItemProp) => {
  const field = filterFields(fields, prop)[0];
  if (field) {
    field.$el?.scrollIntoView(props.scrollIntoViewOptions);
  }
};

watch(
  () => props.rules,
  () => {
    if (props.validateOnRuleChange) {
      validate().catch((err) => debugWarn(err));
    }
  },
  { deep: true }
);

provide(
  formContextKey,
  reactive({
    ...toRefs(props),
    emit,

    resetFields,
    clearValidate,
    validateField,
    addField,
    removeField,

    ...useFormLabelWidth()
  })
);

defineExpose({
  validate,
  validateField,
  resetFields,
  clearValidate,
  scrollToField
});
</script>
