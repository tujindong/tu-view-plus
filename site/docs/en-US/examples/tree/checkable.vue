<template>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <p>Checkable</p>
      <tu-tree checkable :data="treeData" />
    </tu-col>
    <tu-col :span="12">
      <p>Check strictly</p>
      <tu-tree checkable check-strictly :data="treeData" />
    </tu-col>
  </tu-row>
</template>

<script lang="ts" setup>
const treeData = [
  {
    title: 'Trunk 1',
    key: '1',
    children: [
      {
        title: 'Leaf 1-1',
        key: '1-1'
      },
      {
        title: 'Branch 1-2',
        key: '1-2',
        disabled: true,
        children: [
          {
            title: 'Leaf 1-2-1',
            key: '1-2-1'
          },
          {
            title: 'Leaf 1-2-2',
            key: '1-2-2',
            disableCheckbox: true
          }
        ]
      }
    ]
  },
  {
    title: 'Trunk 2',
    key: '2',
    children: [
      {
        title: 'Branch 2-1',
        key: '2-1',
        children: [
          {
            title: 'Leaf 2-1-1',
            key: '2-1-1'
          },
          {
            title: 'Leaf 2-1-2',
            key: '2-1-2'
          }
        ]
      },
      {
        title: 'Leaf 2-2',
        key: '2-2'
      }
    ]
  }
];
</script>
