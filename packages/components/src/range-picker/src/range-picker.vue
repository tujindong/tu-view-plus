<template>
  <div>
    range-picker
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { rangePickerProps } from './range-picker';
import '../style/range-picker.scss';

defineOptions({
  name: 'TuRangePicker'
});

const props = defineProps(rangePickerProps);
</script>
