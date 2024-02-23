<template>
  <tu-tree show-line :data="treeData" />
</template>

<script lang="ts" setup>
const treeData = [
  {
    title: '主干 1',
    key: '1',
    children: [
      {
        title: '分支 1-1',
        key: '1-1',
        children: [
          { title: '叶子 1-1-1', key: '1-1-1' },
          {
            title: '叶子 1-1-2',
            key: '1-1-2',
            children: [{ title: '叶子 1-1-2-1', key: '1-1-2-1' }]
          },
          { title: '叶子 1-1-3', key: '1-1-3' }
        ]
      },
      {
        title: '分支 1-2',
        key: '1-2'
      },
      {
        title: '分支 1-3',
        key: '1-3',
        children: [
          { title: '叶子 1-3-1', key: '1-3-1' },
          {
            title: '叶子 1-3-2',
            key: '1-3-2'
          }
        ]
      }
    ]
  },
  {
    title: '主干 2',
    key: '2'
  },
  {
    title: '主干 3',
    key: '3',
    children: [
      {
        title: '分支 3-1',
        key: '3-1',
        children: [
          { title: '叶子 3-1-1', key: '3-1-1' },
          { title: '叶子 3-1-2', key: '3-1-2' }
        ]
      }
    ]
  }
];
</script>
