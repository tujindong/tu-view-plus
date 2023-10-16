<template>
  <tu-timeline :pending="showPending">
    <template #dot>
      <tu-icon>
        <Ship :style="{ color: '#e70a0a' }" />
      </tu-icon>
    </template>
    <tu-timeline-item label="2023-09-30" dotColor="#52C419">
      第一节点
    </tu-timeline-item>
    <tu-timeline-item label="2023-10-01" dotColor="#F5222D">
      第二节点
    </tu-timeline-item>
    <tu-timeline-item label="2023-10-02">第三节点</tu-timeline-item>
  </tu-timeline>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { Ship } from '@tu-view-plus/icons-vue';

const showPending = ref(true);
</script>
