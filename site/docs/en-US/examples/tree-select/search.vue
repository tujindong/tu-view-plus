<template>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <p>Basic search</p>
      <tu-tree-select
        allow-search
        allow-clear
        placeholder="Please select"
        :data="treeData"
      />
    </tu-col>
    <tu-col :span="12">
      <p>Custom search</p>
      <tu-tree-select
        allow-search
        allow-clear
        placeholder="Please select"
        :data="treeData"
        :filter-tree-node="
          (searchValue, nodeData) =>
            nodeData.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
        "
      />
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
