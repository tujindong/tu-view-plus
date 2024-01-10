<template>
  <tu-result title="这是标题内容" subtitle="这是子标题内容">
    <template #icon>
      <Camera />
    </template>
    <template #extra>
      <tu-button>取消</tu-button>
      <tu-button type="primary">确定</tu-button>
      <div style="margin-top: 10px; font-size: 14px">额外展示内容</div>
    </template>
  </tu-result>
</template>

<script lang="ts" setup>
import { Camera } from '@tu-view-plus/icons-vue';
</script>
