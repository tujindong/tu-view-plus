<template>
  <tu-tree-select
    defaultValue="0"
    :fallback-option="
      (key) => {
        return { key, title: 'fallback' };
      }
    "
    :data="treeData"
    placeholder="请输入"
  />
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
