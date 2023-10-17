<template>
  <tu-timeline>
    <tu-timeline-item label="2023-09-30" dotColor="#00B42A">
      第一节点
    </tu-timeline-item>
    <tu-timeline-item label="2023-10-01">第二节点</tu-timeline-item>
    <tu-timeline-item label="2023-10-02" dotColor="#F53F3F">
      第三节点
      <tu-icon>
        <CircleClose
          :style="{
            color: 'F53F3F',
            fontSize: '12px',
            marginLeft: '4px'
          }"
        />
      </tu-icon>
    </tu-timeline-item>
    <tu-timeline-item label="2023-10-10" dotColor="#C9CDD4">
      第四节点
    </tu-timeline-item>
  </tu-timeline>
</template>

<script lang="ts" setup>
import { CircleClose } from '@tu-view-plus/icons-vue';
</script>
