<template>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <p>Basic</p>
      <tu-tree-select
        multiple
        allow-search
        allow-clear
        placeholder="Please select"
        :data="treeData"
      />
    </tu-col>
    <tu-col :span="12">
      <p>Max tag count is 2</p>
      <tu-tree-select
        multiple
        allow-search
        allow-clear
        placeholder="Please select"
        :max-tag-count="2"
        :data="treeData"
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
