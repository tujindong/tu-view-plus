<template>
  <div>
    year-picker
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { yearPickerProps } from './year-picker';

defineOptions({
  name: 'TuYearPicker'
});

const props = defineProps(yearPickerProps);
</script>
