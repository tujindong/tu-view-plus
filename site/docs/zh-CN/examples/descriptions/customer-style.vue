<template>
  <tu-descriptions title="自定义样式" :column="3" border>
    <tu-descriptions-item
      label="姓名"
      label-align="right"
      align="center"
      label-class-name="my-label"
      class-name="my-content"
      width="150px"
      >汤姆</tu-descriptions-item
    >
    <tu-descriptions-item label="手机号" label-align="right" align="center">
      18100000000
    </tu-descriptions-item>
    <tu-descriptions-item label="地点" label-align="right" align="center">
      合肥
    </tu-descriptions-item>
    <tu-descriptions-item label="备注" label-align="right" align="center">
      <tu-tag size="medium">学校</tu-tag>
    </tu-descriptions-item>
    <tu-descriptions-item label="住址" label-align="right" align="center">
      安徽省合肥市高新区
    </tu-descriptions-item>
  </tu-descriptions>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
</script>

<style lang="scss" scoped>
:deep(.my-label) {
  background: #f0f9eb !important;
}
:deep(.my-content) {
  background: #fef0f0;
}
</style>
