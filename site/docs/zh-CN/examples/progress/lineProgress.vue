<template>
  <tu-progress :percentage="50"></tu-progress>
  <tu-progress :percentage="100" :format="format"></tu-progress>
  <tu-progress :percentage="100" status="success"></tu-progress>
  <tu-progress :percentage="100" status="warning"></tu-progress>
  <tu-progress :percentage="100" status="exception"></tu-progress>
</template>

<script lang="ts" setup>
const format = (percentage: number) => {
  return percentage === 100 ? '满' : `百分比:${percentage}`;
};
</script>

<style scoped>
.tu-progress {
  margin-bottom: 20px;
}
</style>
