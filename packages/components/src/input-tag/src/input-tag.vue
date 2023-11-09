<template>
  <div :class="wrapClasses" @mousedown="handleMouseDown" v-bind="wrapAttrs">
    <tu-resize-observer @resize="handleResize">
      <span ref="mirrorRef" :class="nsInputTag.e('mirror')">
        {{ mirrorValue }}
      </span>
    </tu-resize-observer>
    <span v-if="slots.prefix" :class="nsInputTag.e('prefix')">
      <slot name="prefix" />
    </span>
    <transition-group
      tag="span"
      name="input-tag-zoom"
      :class="nsInputTag.e('inner')"
    >
      <tu-tag
        closable
        v-for="(item, index) in tags"
        v-bind="item.tagProps"
        :key="`tag-${item.value}`"
        :class="nsInputTag.e('tag')"
        @close="(evt: MouseEvent) => handleRemove(item.value, index, evt)"
      >
        {{ formatTag?.(item.raw) ?? item.label }}
      </tu-tag>
      <input
        ref="inputRef"
        key="input-tag-input"
        v-bind="inputAttrs"
        :class="nsInputTag.e('input')"
        :style="inputStyles"
        :placeholder="tags.length === 0 ? props.placeholder : undefined"
        :disabled="inputTagDisabled"
        :readonly="props.readonly || props.disabledInput"
        @input="handleInput"
        @keydown="handleKeydown"
        @focus="handleFocus"
        @blur="handleBlur"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
      />
    </transition-group>
    <tu-icon v-if="showClearVisible" @click="handleClear">
      <Close />
    </tu-icon>
    <tu-icon
      v-if="validateState && validateIcon && needStatusIcon"
      :class="[
        nsInputTag.e('icon'),
        nsInputTag.e('validateIcon'),
        nsInputTag.is('loading', validateState === 'validating')
      ]"
    >
      <component :is="validateIcon" />
    </tu-icon>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  useAttrs,
  ref,
  useSlots,
  reactive,
  nextTick,
  onMounted
} from 'vue';
import { inputTagProps, inputTagEmits } from './input-tag';
import { useNamespace } from '@tu-view-plus/hooks';
import { INPUT_EVENTS } from '@tu-view-plus/constants';
import { omit, ValidateComponentsMap } from '@tu-view-plus/utils';
import { Close } from '@tu-view-plus/icons-vue';
import TuResizeObserver from '../../resize-observer';
import { getValueData } from './utils';
import { useFormDisabled, useFormSize, useFormItem } from '../../form';
import { InputTagFieldNames, TagData } from './interface';
import { isUndefined, isNull, pick, isObject } from 'lodash';
import TuTag from '../../tag';
import TuIcon from '../../icon';
import '../style/input-tag.scss';

const DEFAULT_FIELD_NAMES = {
  value: 'value',
  label: 'label',
  closable: 'closable',
  tagProps: 'tagProps'
};

defineOptions({
  name: 'TuInputTag'
});

const props = defineProps(inputTagProps);
const emit = defineEmits(inputTagEmits);
const attrs = useAttrs();
const slots = useSlots();

const nsInputTag = useNamespace('input-tag');

const inputTagSize = useFormSize();
const inputTagDisabled = useFormDisabled();
const { form, formItem } = useFormItem();

const mirrorRef = ref<HTMLElement>();
const inputRef = ref<HTMLInputElement>();

const isComposition = ref(false);
const compositionValue = ref('');

const mergedFieldNames = computed(() => ({
  ...DEFAULT_FIELD_NAMES,
  ...props.fieldNames
}));

const focusValue = ref(false);
const inputTagValue = ref(props.defaultValue);
const inputValueData = ref(props.defaultInputValue);

const wrapAttrs = computed(() => omit(attrs, INPUT_EVENTS));
const inputAttrs = computed(() => pick(attrs, INPUT_EVENTS));

const mirrorValue = computed(() => {});
const computedValue = computed(() => props.modelValue ?? inputTagValue.value);
const computedInputValue = computed(
  () => props.inputValue ?? inputValueData.value
);

const valueData = computed(() =>
  getValueData(computedValue.value, mergedFieldNames.value)
);

const tags = computed(() => {
  console.log('tags', valueData.value);
  if (props.maxTagCount > 0) {
    const invisibleTags = valueData.value.length - props.maxTagCount;
    if (invisibleTags > 0) {
      const result = valueData.value.slice(0, props.maxTagCount);
      const raw = {
        value: '__tu__more',
        label: `+${invisibleTags}..`,
        closable: false
      };
      result.push({
        raw,
        ...raw
      });
      return result;
    }
  }
  return valueData.value;
});

const showClearVisible = computed(
  () =>
    !inputTagDisabled.value &&
    !props.readonly &&
    props.allowClear &&
    Boolean(computedValue.value.length)
);

const needStatusIcon = computed(() => form?.statusIcon ?? false);

const validateState = computed(() => formItem?.validateState || '');

const retainInputValue = computed(() => {
  if (isObject(props.retainInputValue)) {
    return {
      create: false,
      blur: false,
      ...props.retainInputValue
    };
  }
  return {
    create: props.retainInputValue,
    blur: props.retainInputValue
  };
});

const inputStyle = reactive({ width: '12px' });

const validateIcon = computed(
  () => validateState.value && ValidateComponentsMap[validateState.value]
);

const inputStyles = reactive({ width: '12px' });

const wrapClasses = computed(() => ({
  [nsInputTag.b()]: true,
  [nsInputTag.m(inputTagSize.value)]: inputTagSize.value,
  [nsInputTag.is('disabled')]: inputTagDisabled.value
}));

const handleMouseDown = (e: MouseEvent) => {
  if (inputRef.value && e.target !== inputRef.value) {
    e.preventDefault();
    inputRef.value.focus();
  }
};

const handleResize = () => {
  console.log('resize');
};

const handleInput = (evt: Event) => {
  const { value } = evt.target as HTMLInputElement;

  if (!isComposition.value) {
    updateInputValue(value, evt);

    nextTick(() => {
      if (inputRef.value && computedInputValue.value !== inputRef.value.value) {
        inputRef.value.value = computedInputValue.value;
      }
    });
  }
};

const handleKeydown = (evt: KeyboardEvent) => {
  console.log('handleKeydown');
  const keyCode = evt.key || evt.code;
  if (!isComposition.value && computedInputValue.value && keyCode === 'Enter') {
    handlePressEnter(evt);
  }
  if (
    !isComposition.value &&
    tags.value.length > 0 &&
    !computedInputValue.value &&
    keyCode === 'Backspace'
  ) {
    const lastIndex = getLastClosableIndex();
    if (lastIndex >= 0) {
      handleRemove(valueData.value[lastIndex].value, lastIndex, evt);
    }
  }
};

const handleFocus = (evt: FocusEvent) => {
  console.log('handleFocus');
  focusValue.value = true;
  emit('focus', evt);
};

const handleBlur = (evt: FocusEvent) => {
  console.log('handleBlur');
  focusValue.value = false;
  if (!retainInputValue.value.blur && computedInputValue.value) {
    updateInputValue('', evt);
  }
  emit('blur', evt);
};

const handleComposition = (evt: CompositionEvent) => {
  console.log('handleComposition', evt);
  const { value } = evt.target as HTMLInputElement;
  if (evt.type === 'compositionend') {
    isComposition.value = false;
    compositionValue.value = '';
    updateInputValue(value, evt);

    nextTick(() => {
      if (inputRef.value && computedInputValue.value !== inputRef.value.value) {
        inputRef.value.value = computedInputValue.value;
      }
    });
  } else {
    isComposition.value = true;
    compositionValue.value = computedInputValue.value + (evt.data ?? '');
  }
};

const handleClear = (evt: MouseEvent) => {
  console.log('clear');
  const newValue: any[] = [];
  updateValue(newValue, evt);
  emit('clear', evt);
};

const handleRemove = (value: string | number, index: number, evt: Event) => {
  console.log('handleRemove');
  const newValue = computedValue.value?.filter((_, i) => i !== index);
  updateValue(newValue, evt);
  emit('remove', value, evt);
};

const handlePressEnter = (evt: KeyboardEvent) => {
  if (computedInputValue.value) {
    evt.preventDefault();
    if (
      props.uniqueValue &&
      computedValue.value?.includes(computedInputValue.value)
    ) {
      emit('pressEnter', computedInputValue.value, evt);
      return;
    }
    const newValue = computedValue.value.concat(computedInputValue.value);
    updateValue(newValue, evt);
    emit('pressEnter', computedInputValue.value, evt);
    if (!retainInputValue.value.create) {
      updateInputValue('', evt);
    }
  }
};

const updateInputValue = (value: string, evt: Event) => {
  inputValueData.value = value;
  emit('update:inputValue', value);
  emit('inputValueChange', value, evt);
};

const getLastClosableIndex = () => {
  for (let i = valueData.value.length - 1; i >= 0; i--) {
    if (valueData.value[i].closable) {
      return i;
    }
  }
  return -1;
};

const updateValue = (value: (string | number | TagData)[], evt: Event) => {
  inputTagValue.value = value;
  emit('update:modelValue', value);
  emit('change', value, evt);
};

const setInputWidth = (width: number) => {
  if (width > 12) {
    inputStyle.width = `${width}px`;
  } else {
    inputStyle.width = '12px';
  }
};

onMounted(() => {
  if (mirrorRef.value) {
    setInputWidth(mirrorRef.value.offsetWidth);
  }
});
</script>
