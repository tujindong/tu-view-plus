<template>
  <tu-tree-select
    defaultValue="0"
    :fallback-option="
      (key) => {
        return { key, title: 'fallback' };
      }
    "
    :data="treeData"
    placeholder="Please select"
  />
</template>

<script lang="ts" setup>
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
