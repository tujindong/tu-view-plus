<template>
  <tu-row>
    <tu-timeline mode="alternate" class="demo-timeline">
      <tu-timeline-item label="2023-09-30"
        >第一节点</tu-timeline-item
      >
      <tu-timeline-item label="2023-10-01"
        >第二节点</tu-timeline-item
      >
      <tu-timeline-item label="2023-10-02" position="bottom">
        第三节点
      </tu-timeline-item>
    </tu-timeline>
    <tu-timeline mode="right" class="demo-timeline">
      <tu-timeline-item label="2023-09-30"
        >第一节点</tu-timeline-item
      >
      <tu-timeline-item label="2023-10-01"
        >第二节点</tu-timeline-item
      >
      <tu-timeline-item label="2023-10-02" position="bottom">
        第三节点
      </tu-timeline-item>
    </tu-timeline>
  </tu-row>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.demo-timeline {
  flex: 1;
}
</style>
