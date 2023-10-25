<template>
  <div style="width: 100%">
    <br />
    <br />
    <tu-configProvider :locale="en">
      <tu-button>provider按钮</tu-button>
    </tu-configProvider>
    <br />
    <br />
    <tu-select placeholder="请输入">
      <tu-option>北京</tu-option>
      <tu-option>上海</tu-option>
      <tu-option>广州</tu-option>
      <tu-option disabled>禁用</tu-option>
    </tu-select>
    <br />
    <br />
    <br />
    <tu-pagination layout="prev, pager, next" :total="50" />
    <br />
    <br />
    <br />
    <div style="width: 500px; height: 20px; border: 1px solid red"></div>
    <br />
    <br />

    <tu-timeline>
      <tu-timeline-item dot-type="hollow" label="2023-10-10"
        >第一节点</tu-timeline-item
      >
      <tu-timeline-item dotColor="red" label="2023-10-01"
        >第二节点</tu-timeline-item
      >
      <tu-timeline-item dot-type="solid" label="2023-09-30"
        >第三节点</tu-timeline-item
      >
    </tu-timeline>
    <br />
    <br />
    <tu-timeline class="demo-timeline">
      <tu-timeline-item label="2023-09-30" dotColor="#00B42A">
        第一节点
      </tu-timeline-item>
      <tu-timeline-item label="2023-10-01"> 第二节点 </tu-timeline-item>
      <tu-timeline-item label="2023-10-02">
        <template #dot>
          <tu-icon>
            <CircleClose />
          </tu-icon>
        </template>
        第三节点
      </tu-timeline-item>
      <tu-timeline-item label="2023-10-10" dotColor="#C9CDD4">
        第四节点
      </tu-timeline-item>
    </tu-timeline>
    <br />
    <br />
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
    <br />
    <br />
    <tu-timeline>
      <tu-timeline-item label="2023-09-30" dotColor="#00B42A">
        第一节点
      </tu-timeline-item>
      <tu-timeline-item label="2023-10-01">第二节点</tu-timeline-item>
      <tu-timeline-item label="2023-10-02" dotColor="#F53F3F">
        第三节点
        <tu-icon>
          <CircleClose />
        </tu-icon>
      </tu-timeline-item>
      <tu-timeline-item label="2023-10-10" dotColor="#C9CDD4">
        第四节点
      </tu-timeline-item>
    </tu-timeline>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <tu-pagination layout="prev, pager, next" :total="1000" />
    <br />
    <div style="height: 800px"></div>

    <tu-progress :percentage="50" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, getCurrentInstance, h } from 'vue';
import { useToggle } from '@vueuse/core';
import { CircleClose, SuccessFilled } from '@tu-view-plus/icons-vue';
</script>
<style lang="scss"></style>
