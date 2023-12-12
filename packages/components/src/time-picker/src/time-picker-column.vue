<template>
  <div>
    timepicker
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { timePickerColumnProps } from './time-picker-column';
import '../style/time-picker.scss';

defineOptions({
  name: 'TuTimePickerDropdown'
});

const props = defineProps(timePickerColumnProps);
</script>
