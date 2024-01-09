<template>
  <div>
    range-picker-dropdown
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { rangePickerDropdownProps } from './range-picker-dropdown';

defineOptions({
  name: 'TuRangePickerDropdown'
});

const props = defineProps(rangePickerDropdownProps);
</script>
