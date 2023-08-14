<template>
  <tu-slider
    :min="0"
    :max="100"
    :default-value="20"
    :format-tooltip="fromatter"
  />
</template>

<script lang="ts" setup>
const fromatter = (value: number): string => {
  return `${Math.round((value / 50) * 100)}°`;
};
</script>