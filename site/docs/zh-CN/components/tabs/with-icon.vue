<template>
  <tu-tabs :default-active-key="1">
    <tu-tab-pane :key="1">
      <template #title>
        <tu-icon><Apple /></tu-icon>
        标签1
      </template>
      标签页内容 1
    </tu-tab-pane>
    <tu-tab-pane :key="2">
      <template #title>
        <tu-icon> <Grape /></tu-icon>
        标签2
      </template>
      标签页内容 2
    </tu-tab-pane>
    <tu-tab-pane :key="3">
      <template #title>
        <tu-icon> <Pear /></tu-icon>
        标签3
      </template>
      标签页内容 3
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
