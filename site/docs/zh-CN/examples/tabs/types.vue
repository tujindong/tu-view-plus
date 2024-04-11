<template>
  <tu-radio-group class="mb-2" v-model="tabType" type="button" size="small">
    <tu-radio label="default">默认</tu-radio>
    <tu-radio label="flat">扁平</tu-radio>
    <tu-radio label="card-outset">上方卡片</tu-radio>
    <tu-radio label="card-inset">下方卡片</tu-radio>
    <tu-radio label="slider-outset">上方滑动</tu-radio>
    <tu-radio label="slider-inset">下方滑动</tu-radio>
    <tu-radio label="text">文字</tu-radio>
    <tu-radio label="button">按钮</tu-radio>
    <tu-radio label="button-round">圆形按钮</tu-radio>
  </tu-radio-group>

  <tu-tabs :default-active-key="1" :type="tabType" style="height: 130px">
    <tu-tab-pane :key="1" title="标签1"> 标签页内容 1 </tu-tab-pane>
    <tu-tab-pane :key="2" title="标签2"> 标签页内容 2 </tu-tab-pane>
    <tu-tab-pane :key="3" title="标签3"> 标签页内容 3 </tu-tab-pane>
  </tu-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const tabType = ref('default');
</script>
