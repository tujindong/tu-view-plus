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
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, useAttrs, useSlots, toRefs } from 'vue';
import { inputLabelProps, inputLabelEmits } from './input-label';
import { useNamespace } from '@tu-view-plus/hooks';
import { omit, pick } from '@tu-view-plus/utils';
import { INPUT_EVENTS } from '@tu-view-plus/constants';
import { useFormDisabled, useFormSize, useFormItem } from '../../form';
import '../style/input-label.scss';

defineOptions({
  name: 'TuInputLabel'
});

const props = defineProps(inputLabelProps);
const emit = defineEmits(inputLabelEmits);
const attrs = useAttrs();
const slots = useSlots();

const { size, disabled, inputValue, uninjectFormItemContext } = toRefs(props);

const nsInputLabel = useNamespace('input-label');

const inputLabelSize = useFormSize();
const inputLabelDisabled = useFormDisabled();
const { form, formItem } = useFormItem();

const inputRef = ref<HTMLInputElement>();

const focusedData = ref(false);
const isComposition = ref(false);
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

const wrapClasses = computed(() => ({}));

const inputClasses = computed(() => ({
  [nsInputLabel.b()]: true,
  [nsInputLabel.is('hidden')]: !showInput.value
}));

const handleMouseDown = () => {};

const handleInput = (evt: Event) => {
  const { value } = evt.target as HTMLInputElement;
  if (!isComposition.value) {
  }
};

const handleFocus = () => {};

const handleBlur = () => {};

const handleComposition = () => {};

const updateValue = (value: string, ev: Event) => {
  inputLabelValue.value = value;
};
</script>
