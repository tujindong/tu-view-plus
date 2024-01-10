<template>
  <tu-result status="custom" title="这是标题内容" subtitle="这是子标题内容">
    <template #icon>
      <Bell />
    </template>
    <template #extra>
      <tu-button>取消</tu-button>
      <tu-button type="primary">确定</tu-button>
    </template>
  </tu-result>
</template>

<script lang="ts" setup>
import { Bell } from '@tu-view-plus/icons-vue';
</script>
