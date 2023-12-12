<template>
  <div>
    range-dropdown
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { timePickerRangeDropdownProps } from './time-picker-range-dropdown';
import '../style/time-picker.scss';

defineOptions({
  name: 'TuTimePickerRangeDropdown'
});

const props = defineProps(timePickerRangeDropdownProps);
</script>
