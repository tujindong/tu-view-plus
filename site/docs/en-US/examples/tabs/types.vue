<template>
  <tu-radio-group class="mb-2" v-model="tabType" type="button" size="small">
    <tu-radio label="default">default</tu-radio>
    <tu-radio label="flat">flat</tu-radio>
    <tu-radio label="card-outset">card outset</tu-radio>
    <tu-radio label="card-inset">card inset</tu-radio>
    <tu-radio label="slider-outset">slide outset</tu-radio>
    <tu-radio label="slider-inset">slide inset</tu-radio>
    <tu-radio label="text">text</tu-radio>
    <tu-radio label="button">button</tu-radio>
    <tu-radio label="button-round">button round</tu-radio>
  </tu-radio-group>

  <tu-tabs :default-active-key="1" :type="tabType" style="height: 130px">
    <tu-tab-pane :key="1" title="Tab 1"> Content of Tab Panel 1 </tu-tab-pane>
    <tu-tab-pane :key="2" title="Tab 2"> Content of Tab Panel 2 </tu-tab-pane>
    <tu-tab-pane :key="3" title="Tab 3"> Content of Tab Panel 3 </tu-tab-pane>
  </tu-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const tabType = ref('default');
</script>
