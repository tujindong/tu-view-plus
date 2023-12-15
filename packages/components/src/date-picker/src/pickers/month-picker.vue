<template>
  <div>
    month-picker
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { monthPickerProps } from './month-picker';

defineOptions({
  name: 'TuMonthPicker'
});

const props = defineProps(monthPickerProps);
</script>
