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
    <br />
    <br />
    <tu-radio-group
      class="mb-2"
      type="button"
      v-model="mode"
      @change="handleModeChange"
    >
      <tu-radio label="top">上方</tu-radio>
      <tu-radio label="alternate">交替</tu-radio>
      <tu-radio label="bottom">下方</tu-radio>
    </tu-radio-group>
    <br />
    <br />
    <tu-timeline direction="horizontal" :mode="mode">
      <tu-timeline-item label="2023-08">
        <div style="margin-bottom: 6px">TuViewPlus</div>
        <div style="font-size: 12px">一款有触觉的 vue3.0 UI组件库</div>
      </tu-timeline-item>
      <tu-timeline-item label="2023-09">
        <div style="margin-bottom: 6px">TuViewPlus</div>
        <div style="font-size: 12px">一款有触觉的 vue3.0 UI组件库</div>
      </tu-timeline-item>
      <tu-timeline-item label="2023-10">
        <div style="margin-bottom: 6px">TuViewPlus</div>
        <div style="font-size: 12px">一款有触觉的 vue3.0 UI组件库</div>
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
import { CircleClose, SuccessFilled, Star } from '@tu-view-plus/icons-vue';

const mode = ref('top');

const handleModeChange = (_mode: string) => {
  mode.value = _mode;
};
</script>
<style lang="scss"></style>
