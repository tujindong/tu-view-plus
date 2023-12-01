<template>
  <div v-bind="wrapAttrs" :class="wrapClasses" @mousedown="handleMouseDown">
    <span v-if="slots.prefix" :class="nsInputLabel.e('prefix')">
      <slot name="prefix" />
    </span>
    <input
      ref="inputRef"
      v-bind="inputAttrs"
      :class="inputClasses"
      :value="computedValue"
      :readonly="!enabledInput"
      :placeholder="mergedPlaceholder"
      :disabled="inputLabelDisabled"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @compositionstart="handleComposition"
      @compositionupdate="handleComposition"
      @compositionend="handleComposition"
    />
    <span :class="innerClasses">{{ labelData }}</span>
    <span v-if="slots.suffix" :class="nsInputLabel.e('suffix')">
      <slot name="suffix" />
    </span>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  computed,
  useAttrs,
  useSlots,
  toRefs,
  nextTick,
  watch
} from 'vue';
import { inputLabelProps, inputLabelEmits } from './input-label';
import { useNamespace } from '@tu-view-plus/hooks';
import { omit, pick } from '@tu-view-plus/utils';
import { INPUT_EVENTS } from '@tu-view-plus/constants';
import { useFormDisabled, useFormSize } from '../../form';
import '../style/input-label.scss';

defineOptions({
  name: 'TuInputLabel'
});

let initialValue: string;

const props = defineProps(inputLabelProps);
const emit = defineEmits(inputLabelEmits);
const attrs = useAttrs();
const slots = useSlots();

const { inputValue } = toRefs(props);

const nsInputLabel = useNamespace('input-label');

const inputLabelSize = useFormSize();
const inputLabelDisabled = useFormDisabled();

const inputRef = ref<HTMLInputElement>();

const focusedData = ref(false);
const isComposition = ref(false);
const compositionValue = ref('');
const inputLabelValue = ref('');

const wrapAttrs = computed(() => omit(attrs, INPUT_EVENTS));
const inputAttrs = computed(() => pick(attrs, INPUT_EVENTS));

const showInput = computed(
  () => (props.enabledInput && focusedData.value) || !props.modelValue
);

const computedValue = computed(
  () => inputValue?.value ?? inputLabelValue.value
);

const mergedPlaceholder = computed(() =>
  props.enabledInput && props.modelValue
    ? props.modelValue.label
    : props.placeholder
);

const mergedFocused = computed(() => props.focused ?? focusedData.value);

const labelData = computed(() => {
  if (props.modelValue) {
    return (
      slots.default?.({ data: props.modelValue }) ??
      props.formatLabel?.(props.modelValue) ??
      props.modelValue.label
    );
  }
  return '';
});

const wrapClasses = computed(() => ({
  [nsInputLabel.b()]: true,
  [nsInputLabel.m(inputLabelSize.value)]: true,
  [nsInputLabel.is('search')]: props.enabledInput,
  [nsInputLabel.is('focus')]: mergedFocused.value,
  [nsInputLabel.is('disabled')]: inputLabelDisabled.value
}));

const inputClasses = computed(() => ({
  [nsInputLabel.e('input')]: true,
  [nsInputLabel.is('hidden')]: !showInput.value
}));

const innerClasses = computed(() => ({
  [nsInputLabel.e('inner')]: true,
  [nsInputLabel.is('hidden')]: showInput.value
}));

const handleMouseDown = (evt: MouseEvent) => {
  if (inputRef.value && evt.target !== inputRef.value) {
    console.log('handleMouseDown', inputRef.value);
    evt.preventDefault();
    inputRef.value.focus();
  }
};

const handleInput = (evt: Event) => {
  const { value } = evt.target as HTMLInputElement;
  if (!isComposition.value) {
    updateValue(value, evt);
  }
  nextTick(() => {
    if (inputRef.value && computedValue.value !== inputRef.value.value) {
      inputRef.value.value = computedValue.value;
    }
  });
};

const handleFocus = (evt: FocusEvent) => {
  console.log('handleFocus');
  focusedData.value = true;
  initialValue = computedValue.value;
  emit('focus', evt);
};

const handleBlur = (evt: FocusEvent) => {
  focusedData.value = false;
  emit('blur', evt);
  handleChange(evt);
};

const handleChange = (evt: Event) => {
  if (computedValue.value !== initialValue) {
    initialValue = computedValue.value;
    emit('change', computedValue.value, evt);
  }
};

const handleComposition = (evt: CompositionEvent) => {
  const { value } = evt.target as HTMLInputElement;
  if (evt.type === 'compositionend') {
    isComposition.value = false;
    compositionValue.value = '';
    updateValue(value, evt);

    nextTick(() => {
      if (inputRef.value && computedValue.value !== inputRef.value.value) {
        inputRef.value.value = computedValue.value;
      }
    });
  } else {
    isComposition.value = true;
    compositionValue.value = computedValue.value + (evt.data ?? '');
  }
};

const updateValue = (value: string, evt: Event) => {
  inputLabelValue.value = value;
  emit('update:modelValue', value);
  emit('input', value, evt);
};

const focus = () => {
  (inputRef.value as HTMLInputElement)?.focus();
};

const blur = () => {
  (inputRef.value as HTMLInputElement)?.blur();
};

watch(computedValue, (value) => {
  if (inputRef.value && value !== inputRef.value.value) {
    inputRef.value.value = value;
  }
});
</script>
