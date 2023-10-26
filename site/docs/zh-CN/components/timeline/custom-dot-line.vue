<template>
  <tu-timeline>
    <tu-timeline-item label="2023-09-30" lineType="dashed">
      节点1
      <div class="demo-timeline-description">节点1的描述信息</div>
    </tu-timeline-item>
    <tu-timeline-item label="2023-10-01" lineType="dashed">
      节点2
      <div class="demo-timeline-description">节点2的描述信息</div>
    </tu-timeline-item>
    <tu-timeline-item label="2023-10-02" lineType="dashed">
      节点3
      <div class="demo-timeline-description">节点3的描述信息</div>
    </tu-timeline-item>
  </tu-timeline>
</template>
<script lang="ts" setup></script>

<style lang="scss" scoped>
.demo-timeline-description {
  font-size: 12px;
  margin-top: 4px;
}
</style>
