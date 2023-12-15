<template>
  <div>
    picker-dropdown
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { pickerDropdownProps } from './picker-dropdown';

defineOptions({
  name: 'PickerDropdown'
});

const props = defineProps(pickerDropdownProps);
</script>
