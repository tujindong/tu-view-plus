<template>
  <tu-progress :percentage="50" :indeterminate="true" />
  <tu-progress :percentage="100" :format="format" :indeterminate="true" />
  <tu-progress
    :percentage="100"
    status="success"
    :indeterminate="true"
    :duration="5"
  />
  <tu-progress
    :percentage="100"
    status="warning"
    :indeterminate="true"
    :duration="1"
  />
  <tu-progress :percentage="50" status="exception" :indeterminate="true" />
</template>

<script lang="ts" setup>
const format = (percentage: number) =>
  percentage === 100 ? '满' : `百分比:${percentage}`;
</script>
<style scoped>
.tu-progress--line {
  margin-bottom: 15px;
}
</style>
