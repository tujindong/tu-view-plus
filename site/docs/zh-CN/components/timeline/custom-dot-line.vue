<template>
  <tu-timeline>
    <tu-timeline-item label="2023-09-30" lineType="dashed">
      第一节点
      <br />
      <span class="demo-timeline-descrip"> 这是第一节点的描述信息 </span>
    </tu-timeline-item>
    <tu-timeline-item label="2023-10-01" lineType="dashed">
      第二节点
      <br />
      <span class="demo-timeline-descrip"> 这是第二节点的描述信息 </span>
    </tu-timeline-item>
    <tu-timeline-item label="2023-10-02" lineType="dashed">
      第三节点
      <br />
      <span class="demo-timeline-descrip"> 这是第三节点的描述信息 </span>
    </tu-timeline-item>
  </tu-timeline>
</template>
<script lang="ts" setup></script>

<style lang="scss" scoped>
.demo-timeline-descrip {
  font-size: 12px;
  margin-top: 4px;
}
</style>
