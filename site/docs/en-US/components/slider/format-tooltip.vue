<template>
  <tu-slider
    :min="0"
    :max="100"
    v-model="sliderValue"
    :format-tooltip="fromatter"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const sliderValue = ref(20);

const fromatter = (value: number): string => {
  return `${Math.round((value / 50) * 100)}°`;
};
</script>