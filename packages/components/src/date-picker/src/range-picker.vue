<template>
  <div>
    range-picker
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { rangePickerProps } from './range-picker';

defineOptions({
  name: 'RangePicker'
});

const props = defineProps(rangePickerProps);
</script>
