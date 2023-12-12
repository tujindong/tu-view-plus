<template>
  <div>
    dropdown
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { timePickerDropdownProps } from './time-picker-dropdown';
import '../style/time-picker.scss';

defineOptions({
  name: 'TuTimePickerDropdown'
});

const props = defineProps(timePickerDropdownProps);
</script>
