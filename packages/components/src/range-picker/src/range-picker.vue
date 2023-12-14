<template>
  <div :class="classes">
    <div v-if="$slots.prefix" :class="nsRangePicker.e('prefix')">
      <slot name="perfix" />
    </div>
    <div :class="getInputWrapClassName(0)">
      <input
        ref="refInput0"
        :class="nsRangePicker.e('input')"
        :disabled="disabled0"
        :placeholder="placeholder[0]"
        :value="displayValue0"
        v-bind="readonly ? { readonly: true } : {}"
        @input="handleChange"
        @keydown.enter="handlePressEnter"
        @keydown.tab="handlePressTab"
        @click="() => changeFocusedInput(0)"
      />
    </div>
    <span :class="nsRangePicker.e('separator')">
      <slot name="separator">~</slot>
    </span>
    <div :class="getInputWrapClassName(1)">
      <input
        ref="refInput1"
        :class="nsRangePicker.e('input')"
        :disabled="disabled1"
        :placeholder="placeholder[1]"
        :value="displayValue1"
        v-bind="readonly ? { readonly: true } : {}"
        @input="handleChange"
        @keydown.enter="handlePressEnter"
        @keydown.tab="handlePressTab"
        @click="() => changeFocusedInput(1)"
      />
    </div>
    <div :class="nsRangePicker.e('suffix')">
      <tu-icon
        v-if="allowClear && !rangePickerDisabled && value.length === 2"
        :class="[nsRangePicker.e('icon'), nsRangePicker.em('icon', 'clear')]"
        @click="handleClear"
      >
        <Close />
      </tu-icon>
      <tu-icon :class="nsRangePicker.e('icon')">
        <slot name="suffix-icon" />
      </tu-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, toRefs, useSlots } from 'vue';
import { rangePickerProps, rangePickerEmits } from './range-picker';
import { useNamespace } from '@tu-view-plus/hooks';
import {
  isArray,
  isDayjs,
  isFunction,
  isNumber,
  isUndefined
} from '@tu-view-plus/utils';
import { Close } from '@tu-view-plus/icons-vue';
import { useFormDisabled, useFormSize } from '../../form';
import '../style/range-picker.scss';

defineOptions({
  name: 'TuRangePicker'
});

const props = defineProps(rangePickerProps);
const emit = defineEmits(rangePickerEmits);

const { focused, disabled, value, format, focusedIndex, inputValue } =
  toRefs(props);

const nsRangePicker = useNamespace('range-picker');

const slot = useSlots();

const rangePickerDisabled = useFormDisabled();
const rangePickerSize = useFormSize();

const refInput0 = ref<HTMLInputElement>();
const refInput1 = ref<HTMLInputElement>();

const disabled0 = computed(() => getDisabled(0));
const disabled1 = computed(() => getDisabled(1));

const displayValue0 = computed(() => getDisplayValue(0));
const displayValue1 = computed(() => getDisplayValue(1));

const classes = computed(() => ({
  [nsRangePicker.b()]: true,
  [nsRangePicker.m(rangePickerSize.value)]: rangePickerSize.value,
  [nsRangePicker.is('focused')]: focused?.value,
  [nsRangePicker.is('disabled')]: rangePickerDisabled.value,
  [nsRangePicker.is('has-prefix')]: slot.prefix
}));

const getDisabled = (index: number): boolean => {
  if (rangePickerDisabled.value) {
    return rangePickerDisabled.value;
  }
  return isArray(disabled.value) ? disabled.value[index] : disabled.value;
};

const getDisplayValue = (index: number) => {
  if (inputValue?.value) {
    return inputValue?.value?.[index];
  }
  const targetValue = value?.value?.[index];
  if (targetValue && isDayjs(targetValue)) {
    return isFunction(format.value)
      ? format.value(targetValue)
      : targetValue.format(format.value);
  }
  return undefined;
};

const changeFocusedInput = (index: number) => {
  emit('focused-index-change', index);
  emit('update:focusedIndex', index);
};

const getInputWrapClassName = (index: number) => {
  return {
    [nsRangePicker.e('input-wrap')]: true,
    [nsRangePicker.is('active')]: index === focusedIndex?.value
  };
};

const handleChange = (e: Event) => {
  e.stopPropagation();
  emit('change', e);
};

const handlePressEnter = () => {
  emit('press-enter');
};

const handlePressTab = (e: Event) => {
  e.preventDefault();
};

const handleClear = (e: Event) => {
  emit('clear', e);
};

const focus = (index?: number) => {
  const targetIndex = isNumber(index) ? index : focusedIndex?.value;
  const targetElement = targetIndex === 0 ? refInput0.value : refInput1.value;
  !isUndefined(targetIndex) &&
    !getDisabled(targetIndex) &&
    targetElement &&
    targetElement.focus &&
    targetElement.focus();
};

const blur = () => {
  const targetElement =
    focusedIndex?.value === 0 ? refInput0.value : refInput1.value;
  targetElement && targetElement.blur && targetElement.blur();
};

defineExpose({ focus, blur });
</script>
