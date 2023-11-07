<template>
  <tu-radio-group class="mb-2" v-model="tabPositon" type="button">
    <tu-radio label="top">top</tu-radio>
    <tu-radio label="left">left</tu-radio>
    <tu-radio label="right">right</tu-radio>
    <tu-radio label="bottom">bottom</tu-radio>
  </tu-radio-group>

  <tu-tabs :default-active-key="1" :position="tabPositon" style="height: 146px">
    <tu-tab-pane :key="1" title="Tab 1"> Content of Tab Panel 1 </tu-tab-pane>
    <tu-tab-pane :key="2" title="Tab 2"> Content of Tab Panel 2 </tu-tab-pane>
    <tu-tab-pane :key="3" title="Tab 3"> Content of Tab Panel 3 </tu-tab-pane>
  </tu-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const tabPositon = ref('top');
</script>
