<template>
  <tu-progress :percentage="50">
    <tu-button text>内容</tu-button>
  </tu-progress>
  <tu-progress
    :text-inside="true"
    :stroke-width="20"
    :percentage="50"
    status="exception"
  >
    <span>内容</span>
  </tu-progress>
  <tu-progress type="circle" :percentage="100" status="success">
    <tu-button type="success" :icon="Check" circle />
  </tu-progress>
  <tu-progress type="dashboard" :percentage="80">
    <template #default="{ percentage }">
      <span class="percentage-value">百分比:{{ percentage }}</span>
      <span class="percentage-label">进度</span>
    </template>
  </tu-progress>
</template>

<script lang="ts" setup>
import { Check } from '@tu-view-plus/icons-vue';
</script>

<style scoped>
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 14px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 14px;
}
.tu-progress--line {
  margin-bottom: 15px;
}
.tu-progress--circle {
  margin-right: 15px;
}
</style>
