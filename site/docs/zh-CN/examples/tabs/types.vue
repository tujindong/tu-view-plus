<template>
  <tu-radio-group v-model="tabType" type="button" style="margin-bottom: 20px">
    <tu-radio label="line">线型</tu-radio>
    <tu-radio label="card-up">上方卡片</tu-radio>
    <tu-radio label="card-down">下方卡片</tu-radio>
    <tu-radio label="slider-up">上方滑动</tu-radio>
    <tu-radio label="slider-down">下方滑动</tu-radio>
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

const tabType = ref('line');
</script>
