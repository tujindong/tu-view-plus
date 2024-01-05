<template>
  <tu-watermark
    :content="config.content"
    :font="config.font"
    :z-index="config.zIndex"
    :rotate="config.rotate"
    :gap="config.gap"
    :offset="config.offset"
    :staggered="config.staggered"
  >
    <div style="width: 100%; height: 350px" />
  </tu-watermark>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
const config = reactive({
  content: 'TU VIEW PLUS',
  font: {
    fontSize: 16,
    color: 'rgba(128, 128, 128, 0.18)'
  },
  zIndex: -1,
  rotate: 0,
  gap: [50, 50],
  offset: [20, 20],
  staggered: true
});
</script>

<style scoped></style>
