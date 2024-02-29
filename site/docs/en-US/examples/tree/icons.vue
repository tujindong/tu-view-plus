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
    title: 'Trunk 1',
    key: '1',
    children: [
      {
        title: 'Branch 1-1',
        key: '1-1',
        disabled: true,
        children: [
          {
            title: 'Leaf 1-1-1',
            key: '1-1-1'
          },
          {
            title: 'Leaf 1-1-2',
            key: '1-1-2'
          }
        ]
      },
      {
        title: 'Branch 1-2',
        key: '1-2',
        children: [
          {
            title: 'Leaf 1-2-1',
            key: '1-2-1'
          }
        ]
      }
    ]
  }
];
</script>
