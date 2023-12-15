<template>
  <tu-picker v-bind="{ ...props, ...attrs }" mode="date">
    <slot />
  </tu-picker>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue';
import { datePickerProps } from './date-picker';
import TuPicker from '../picker.vue';

defineOptions({
  name: 'TuDatePicker'
});

const props = defineProps(datePickerProps);

const attrs = useAttrs();
</script>
