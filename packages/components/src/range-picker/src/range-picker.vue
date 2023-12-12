<template>
  <div :class="classes">
    range-picker
    <div v-if="$slots.prefix" :class="nsRangePicker.e('prefix')">
      <slot name="perfix" />
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs, useSlots } from 'vue';
import { rangePickerProps, rangePickerEmits } from './range-picker';
import { useNamespace } from '@tu-view-plus/hooks';
import { useFormDisabled, useFormSize } from '../../form';
import '../style/range-picker.scss';

defineOptions({
  name: 'TuRangePicker'
});

const props = defineProps(rangePickerProps);
const emit = defineEmits(rangePickerEmits);

const { focused, disabled, size, value, format, focusedIndex, inputValue } =
  toRefs(props);

const nsRangePicker = useNamespace('range-picker');

const slot = useSlots();

const rangePickerDisabled = useFormDisabled();
const rangePickerSize = useFormSize();

const classes = computed(() => ({
  [nsRangePicker.b()]: true,
  [nsRangePicker.m(rangePickerSize.value)]: rangePickerSize.value,
  [nsRangePicker.is('focused')]: focused?.value,
  [nsRangePicker.is('disabled')]: rangePickerDisabled.value,
  [nsRangePicker.is('has-prefix')]: slot.prefix
}));
</script>
