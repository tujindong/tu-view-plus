<template>
  <tu-tree-select
    :data="treeData"
    :fieldNames="{
      key: 'value',
      title: 'label',
      children: 'options'
    }"
    placeholder="Please select"
  />
</template>

<script lang="ts" setup>
const treeData = [
  {
    label: 'Trunk 1',
    value: '1',
    options: [
      {
        label: 'Branch 1-1',
        value: '1-1',
        options: [
          {
            label: 'Leaf 1-1-1',
            value: '1-1-1'
          },
          {
            label: 'Leaf 1-1-2',
            value: '1-1-2'
          }
        ]
      },
      {
        label: 'Branch 1-2',
        value: '1-2',
        options: [
          {
            label: 'Leaf 1-2-1',
            value: '1-2-1'
          }
        ]
      }
    ]
  }
];
</script>
