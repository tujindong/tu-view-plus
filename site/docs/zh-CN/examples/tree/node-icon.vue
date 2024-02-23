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
    title: '主干 1',
    key: '1',
    children: [
      {
        title: '分支 1-1',
        key: '1-1',
        children: [
          {
            title: '叶子 1-1-1',
            key: '1-1-1',
            icon: () => h(Pouring)
          },
          {
            title: '叶子 1-1-2',
            key: '1-1-2',
            icon: () => h(Pouring)
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
