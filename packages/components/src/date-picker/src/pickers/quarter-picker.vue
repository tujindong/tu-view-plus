<template>
  <div>
    month-picker
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { quarterPickerProps } from './quarter-picker';

defineOptions({
  name: 'TuQuarterPicker'
});

const props = defineProps(quarterPickerProps);
</script>
