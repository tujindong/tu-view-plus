<template>
  <tu-picker v-bind="{ ...props, ...attrs }" mode="week">
    <slot />
  </tu-picker>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue';
import { weekPickerProps } from './week-picker';
import TuPicker from '../picker.vue';

defineOptions({
  name: 'TuWeekPicker'
});

const props = defineProps(weekPickerProps);

const attrs = useAttrs();
</script>
