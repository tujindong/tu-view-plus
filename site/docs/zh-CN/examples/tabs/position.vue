<template>
  <tu-radio-group class="mb-2" v-model="tabPositon" type="button">
    <tu-radio label="top">上方</tu-radio>
    <tu-radio label="left">左方</tu-radio>
    <tu-radio label="right">右方</tu-radio>
    <tu-radio label="bottom">下方</tu-radio>
  </tu-radio-group>

  <tu-tabs :default-active-key="1" :position="tabPositon" style="height: 146px">
    <tu-tab-pane :key="1" title="标签1"> 标签页内容 1 </tu-tab-pane>
    <tu-tab-pane :key="2" title="标签2"> 标签页内容 2 </tu-tab-pane>
    <tu-tab-pane :key="3" title="标签3"> 标签页内容 3 </tu-tab-pane>
  </tu-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const tabPositon = ref('top');
</script>
