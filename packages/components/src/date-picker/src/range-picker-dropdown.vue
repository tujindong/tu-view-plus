<template>
  <div>
    range-picker-dropdown
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { rangePickerDropdownProps } from './range-picker-dropdown';

defineOptions({
  name: 'RangePickerDropdown'
});

const props = defineProps(rangePickerDropdownProps);
</script>
