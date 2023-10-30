<template>
  <tu-radio-group v-model="trigger" type="button" style="margin-bottom: 20px">
    <tu-radio label="click">点击</tu-radio>
    <tu-radio label="hover">悬停</tu-radio>
  </tu-radio-group>

  <tu-tabs :default-active-key="1" :trigger="trigger">
    <tu-tab-pane :key="1" title="标签1"> 标签页内容 1 </tu-tab-pane>
    <tu-tab-pane :key="2" title="标签2"> 标签页内容 2 </tu-tab-pane>
    <tu-tab-pane :key="3" title="标签3"> 标签页内容 3 </tu-tab-pane>
  </tu-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const trigger = ref('click');
</script>
