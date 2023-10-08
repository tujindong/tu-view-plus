<template>
  <tu-radio-group v-model="tabType" type="button" style="margin-bottom: 20px">
    <tu-radio label="line">line</tu-radio>
    <tu-radio label="card">card</tu-radio>
    <tu-radio label="slider">slider</tu-radio>
    <tu-radio label="text">text</tu-radio>
    <tu-radio label="button">button</tu-radio>
    <tu-radio label="button-round">button-round</tu-radio>
  </tu-radio-group>

  <tu-tabs default-active-key="1" :type="tabType" style="height: 130px">
    <tu-tab-pane :key="1" title="标签1"> 标签页内容 1 </tu-tab-pane>
    <tu-tab-pane :key="2" title="标签2"> 标签页内容 2 </tu-tab-pane>
    <tu-tab-pane :key="3" title="标签3"> 标签页内容 3 </tu-tab-pane>
  </tu-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const tabType = ref('line');
</script>
