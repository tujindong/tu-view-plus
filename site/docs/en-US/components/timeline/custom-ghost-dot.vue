<template>
  <tu-timeline pending>
    <template #dot>
      <tu-icon class="is-loading">
        <RefreshRight />
      </tu-icon>
    </template>
    <tu-timeline-item label="2023-09-30"> 节点1 </tu-timeline-item>
    <tu-timeline-item label="2023-10-01"> 节点2 </tu-timeline-item>
  </tu-timeline>
</template>

<script lang="ts" setup>
import { RefreshRight } from '@tu-view-plus/icons-vue';
</script>
