<template>
  <tu-tree :data="treeData">
    <template #switcher-icon="node, { isLeaf }">
      <ArrowDown v-if="!isLeaf" />
      <Star v-if="isLeaf" />
    </template>
  </tu-tree>
</template>

<script lang="ts" setup>
import { Star, ArrowDown } from '@tu-view-plus/icons-vue';

const treeData = [
  {
    title: '主干 1',
    key: '1',
    children: [
      {
        title: '分支 1-1',
        key: '1-1',
        disabled: true,
        children: [
          {
            title: '叶子 1-1-1',
            key: '1-1-1'
          },
          {
            title: '叶子 1-1-2',
            key: '1-1-2'
          }
        ]
      },
      {
        title: '分支 1-2',
        key: '1-2',
        children: [
          {
            title: '叶子 1-2-1',
            key: '1-2-1'
          }
        ]
      }
    ]
  }
];
</script>
