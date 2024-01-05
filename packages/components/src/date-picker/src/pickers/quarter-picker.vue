<template>
  <tu-picker v-bind="{ ...props, ...attrs }" mode="quarter">
    <slot />
  </tu-picker>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue';
import { quarterPickerProps } from './quarter-picker';
import TuPicker from '../picker.vue';

defineOptions({
  name: 'TuQuarterPicker'
});

const props = defineProps(quarterPickerProps);

const attrs = useAttrs();
</script>
