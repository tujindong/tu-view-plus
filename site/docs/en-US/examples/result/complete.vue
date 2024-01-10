<template>
  <tu-result title="This is title content" subtitle="This is subtitle content">
    <template #icon>
      <Camera />
    </template>
    <template #extra>
      <tu-button>Cancel</tu-button>
      <tu-button type="primary">Ok</tu-button>
      <div style="margin-top: 10px; font-size: 14px">extra content</div>
    </template>
  </tu-result>
</template>

<script lang="ts" setup>
import { Camera } from '@tu-view-plus/icons-vue';
</script>
