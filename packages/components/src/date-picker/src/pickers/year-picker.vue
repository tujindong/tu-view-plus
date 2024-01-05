<template>
  <tu-picker v-bind="{ ...props, ...attrs }" mode="year">
    <slot />
  </tu-picker>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue';
import { yearPickerProps } from './year-picker';
import TuPicker from '../picker.vue';

defineOptions({
  name: 'TuYearPicker'
});

const props = defineProps(yearPickerProps);

const attrs = useAttrs();
</script>
