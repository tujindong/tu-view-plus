<template>
  <tu-tree :data="treeData">
    <template #icon>
      <Sunny />
    </template>
  </tu-tree>
</template>

<script lang="ts" setup>
import { h } from 'vue';
import { Sunny, Pouring } from '@tu-view-plus/icons-vue';

const treeData = [
  {
    title: 'Trunk 1',
    key: '1',
    children: [
      {
        title: 'Branch 1-1',
        key: '1-1',
        children: [
          {
            title: 'Leaf 1-1-1',
            key: '1-1-1',
            icon: () => h(Pouring)
          },
          {
            title: 'Leaf 1-1-2',
            key: '1-1-2',
            icon: () => h(Pouring)
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
