<template>
  <tu-tree show-line :data="treeData" />
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
          { title: 'Leaf 1-1-1', key: '1-1-1' },
          {
            title: 'Leaf 1-1-2',
            key: '1-1-2',
            children: [{ title: 'Leaf 1-1-2-1', key: '1-1-2-1' }]
          },
          { title: 'Leaf 1-1-3', key: '1-1-3' }
        ]
      },
      {
        title: 'Branch 1-2',
        key: '1-2'
      },
      {
        title: 'Branch 1-3',
        key: '1-3',
        children: [
          { title: 'Leaf 1-3-1', key: '1-3-1' },
          {
            title: 'Leaf 1-3-2',
            key: '1-3-2'
          }
        ]
      }
    ]
  },
  {
    title: 'Trunk 2',
    key: '2'
  },
  {
    title: 'Trunk 3',
    key: '3',
    children: [
      {
        title: 'Branch 3-1',
        key: '3-1',
        children: [
          { title: 'Leaf 3-1-1', key: '3-1-1' },
          { title: 'Leaf 3-1-2', key: '3-1-2' }
        ]
      }
    ]
  }
];
</script>
