<template>
  <tu-radio-group v-model="trigger" type="button" style="margin-bottom: 20px">
    <tu-radio label="click">click</tu-radio>
    <tu-radio label="hover">hover</tu-radio>
  </tu-radio-group>

  <tu-tabs :default-active-key="1" :trigger="trigger">
    <tu-tab-pane :key="1" title="Tab 1"> Content of Tab Panel 1 </tu-tab-pane>
    <tu-tab-pane :key="2" title="Tab 2"> Content of Tab Panel 2 </tu-tab-pane>
    <tu-tab-pane :key="3" title="Tab 3"> Content of Tab Panel 3 </tu-tab-pane>
  </tu-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const trigger = ref('click');
</script>
