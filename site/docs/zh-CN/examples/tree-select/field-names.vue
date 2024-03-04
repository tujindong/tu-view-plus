<template>
  <tu-tree-select
    :data="treeData"
    :fieldNames="{
      key: 'value',
      title: 'label',
      children: 'options'
    }"
    placeholder="请输入"
  />
</template>

<script lang="ts" setup>
const treeData = [
  {
    label: '主干 1',
    value: '1',
    options: [
      {
        label: '分支 1-1',
        value: '1-1',
        options: [
          {
            label: '叶子 1-1-1',
            value: '1-1-1'
          },
          {
            label: '叶子 1-1-2',
            value: '1-1-2'
          }
        ]
      },
      {
        label: '分支 1-2',
        value: '1-2',
        options: [
          {
            label: '叶子 1-2-1',
            value: '1-2-1'
          }
        ]
      }
    ]
  }
];
</script>
