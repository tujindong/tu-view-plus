<template>
  <div class="demo-wrapper">
    <tu-timeline class="demo-timeline">
      <tu-timeline-item label="2023-09-30" dotColor="#00B42A">
        第一节点
      </tu-timeline-item>
      <tu-timeline-item label="2023-10-01"> 第二节点 </tu-timeline-item>
      <tu-timeline-item label="2023-10-02">
        <template #dot>
          <tu-icon>
            <CircleClose :style="{ color: 'F53F3F', fontSize: '12px' }" />
          </tu-icon>
        </template>
        第三节点
      </tu-timeline-item>
      <tu-timeline-item label="2023-10-10" dotColor="#C9CDD4">
        第四节点
      </tu-timeline-item>
    </tu-timeline>
    <tu-timeline class="demo-timeline">
      <tu-timeline-item label="2023-09-30">
        <template #dot>
          <tu-icon>
            <SuccessFilled />
          </tu-icon>
        </template>
        第一节点
      </tu-timeline-item>
      <tu-timeline-item label="2023-10-01">
        <template #dot>
          <tu-icon>
            <SuccessFilled />
          </tu-icon>
        </template>
      </tu-timeline-item>
      <tu-timeline-item label="2023-10-02">第三节点</tu-timeline-item>
      <tu-timeline-item label="2023-10-10" dotColor="#C9CDD4">
        第四节点
      </tu-timeline-item>
    </tu-timeline>

    <tu-timeline>
      <tu-timeline-item label="2023-09-30"> 第一节点 </tu-timeline-item>
      <tu-timeline-item label="2023-10-01" dotColor="#C9CDD4">
        第二节点
      </tu-timeline-item>
      <tu-timeline-item label="2023-10-02" dotColor="#C9CDD4">
        第三节点
      </tu-timeline-item>
    </tu-timeline>
  </div>
</template>

<script lang="ts" setup>
import { CircleClose, SuccessFilled } from '@tu-view-plus/icons-vue';
</script>

<style lang="scss" scoped>
.demo-wrapper {
  display: flex;
  .demo-timeline {
    margin-right: 40px;
  }
}
</style>
