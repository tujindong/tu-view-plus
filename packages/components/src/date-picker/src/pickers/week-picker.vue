<template>
  <div>
    week-picker
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { weekPickerProps } from './week-picker';

defineOptions({
  name: 'TuWeekPicker'
});

const props = defineProps(weekPickerProps);
</script>
