<template>
  <tu-tabs :default-active-key="1">
    <tu-tab-pane :key="1">
      <template #title>
        <tu-icon><Apple /></tu-icon>
        Tab 1
      </template>
      Content of Tab Panel 1
    </tu-tab-pane>
    <tu-tab-pane :key="2">
      <template #title>
        <tu-icon> <Grape /></tu-icon>
        Tab 2
      </template>
      Content of Tab Panel 2
    </tu-tab-pane>
    <tu-tab-pane :key="3">
      <template #title>
        <tu-icon> <Pear /></tu-icon>
        Tab 3
      </template>
      Content of Tab Panel 3
    </tu-tab-pane>
  </tu-tabs>
</template>

<script lang="ts" setup>
import { Apple, Grape, Pear } from '@tu-view-plus/icons-vue';
</script>

<style scoped>
.tu-icon {
  margin-right: 4px;
}
</style>
