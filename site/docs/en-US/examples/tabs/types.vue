<template>
  <tu-radio-group class="mb-2" v-model="tabType" type="button">
    <tu-radio label="line">line</tu-radio>
    <tu-radio label="card-up">card up</tu-radio>
    <tu-radio label="card-down">card down</tu-radio>
    <tu-radio label="slider-up">slide up</tu-radio>
    <tu-radio label="slider-down">slide down</tu-radio>
    <tu-radio label="text">text</tu-radio>
    <tu-radio label="button">button</tu-radio>
    <tu-radio label="button-round">button-round</tu-radio>
  </tu-radio-group>

  <tu-tabs :default-active-key="1" :type="tabType" style="height: 130px">
    <tu-tab-pane :key="1" title="Tab 1"> Content of Tab Panel 1 </tu-tab-pane>
    <tu-tab-pane :key="2" title="Tab 2"> Content of Tab Panel 2 </tu-tab-pane>
    <tu-tab-pane :key="3" title="Tab 3"> Content of Tab Panel 3 </tu-tab-pane>
  </tu-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const tabType = ref('line');
</script>
