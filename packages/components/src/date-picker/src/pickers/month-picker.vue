<template>
  <tu-picker v-bind="{ ...props, ...attrs }" mode="month">
    <slot />
  </tu-picker>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue';
import { monthPickerProps } from './month-picker';
import TuPicker from '../picker.vue';

defineOptions({
  name: 'TuMonthPicker'
});

const props = defineProps(monthPickerProps);

const attrs = useAttrs();
</script>
