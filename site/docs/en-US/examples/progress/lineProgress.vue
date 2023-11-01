<template>
  <tu-progress :percentage="50"></tu-progress>
  <tu-progress :percentage="100" :format="format"></tu-progress>
  <tu-progress status="success" :percentage="100"></tu-progress>
  <tu-progress status="warning" :percentage="100"></tu-progress>
  <tu-progress status="exception" :percentage="100"></tu-progress>
</template>

<script lang="ts" setup>
const format = (percentage: number) => {
  return percentage === 100 ? 'full' : `percent:${percentage}`;
};
</script>

<style scoped>
.tu-progress {
  margin-bottom: 20px;
}
</style>
