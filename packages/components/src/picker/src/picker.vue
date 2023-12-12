<template>
  <div :class="classes">
    <div v-if="$slots.prefix" :class="nsPicker.e('prefix')">
      <slot name="perfix" />
    </div>
    <div :class="nsPicker.e('input-wrap')">
      <input
        ref="inputRef"
        v-bind="readonly ? { readonly: true } : {}"
        :disabled="pickerDisabled"
        :placeholder="placeholder"
        :class="nsPicker.e('input')"
        :value="displayValue"
        @keydown.enter="handlePressEnter"
        @input="handleChange"
        @blur="handleBlur"
      />
    </div>
    <div :class="nsPicker.e('suffix')">
      <tu-icon
        v-if="allowClear && !pickerDisabled && displayValue"
        :class="[nsPicker.e('icon'), nsPicker.em('icon', 'clear')]"
        @click="handleClear"
      >
      </tu-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, toRefs, useSlots } from 'vue';
import { pickerProps, pickerEmits } from './picker';
import { useNamespace } from '@tu-view-plus/hooks';
import { isFunction, isDayjs } from '@tu-view-plus/utils';
import { useFormDisabled, useFormSize } from '../../form';
import TuIcon from '../../icon';
import '../style/picker.scss';

defineOptions({
  name: 'TuPicker'
});

const props = defineProps(pickerProps);
const emit = defineEmits(pickerEmits);

const { focused, value, format, inputValue } = toRefs(props);

const refInput = ref<HTMLInputElement>();

const nsPicker = useNamespace('picker');

const slot = useSlots();

const pickerDisabled = useFormDisabled();
const pickerSize = useFormSize();

const displayValue = computed(() => {
  if (inputValue?.value) return inputValue?.value;
  if (value?.value && isDayjs(value.value)) {
    return isFunction(format.value)
      ? format.value(value.value)
      : value.value.format(format.value);
  }
  return undefined;
});

const classes = computed(() => ({
  [nsPicker.b()]: true,
  [nsPicker.m(pickerSize.value)]: pickerSize.value,
  [nsPicker.is('focused')]: focused?.value,
  [nsPicker.is('disabled')]: pickerDisabled.value,
  [nsPicker.is('has-prefix')]: slot.prefix
}));

const handlePressEnter = () => {
  emit('press-enter');
};

const handleChange = (e: Event) => {
  emit('change', e);
};

const handleBlur = (e: Event) => {
  emit('blur', e);
};

const handleClear = (e: Event) => {
  emit('clear', e);
};

const focus = () => {
  refInput.value && refInput.value.focus && refInput.value.focus();
};

const blur = () => {
  refInput.value && refInput.value.blur && refInput.value.blur();
};

defineExpose({ focus, blur });
</script>
