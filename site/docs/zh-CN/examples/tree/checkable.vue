<template>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <p>父子关联</p>
      <tu-tree checkable :data="treeData" />
    </tu-col>
    <tu-col :span="12">
      <p>不关联</p>
      <tu-tree checkable check-strictly :data="treeData" />
    </tu-col>
  </tu-row>
</template>

<script lang="ts" setup>
const treeData = [
  {
    title: '主干 1',
    key: '1',
    children: [
      {
        title: '叶子',
        key: '1-1'
      },
      {
        title: '分支 1-2',
        key: '1-2',
        disabled: true,
        children: [
          {
            title: '叶子 1-2-1',
            key: '1-2-1'
          },
          {
            title: '叶子 1-2-2',
            key: '1-2-2',
            disableCheckbox: true
          }
        ]
      }
    ]
  },
  {
    title: '主干 2',
    key: '2',
    children: [
      {
        title: '分支 2-1',
        key: '2-1',
        children: [
          {
            title: '叶子 2-1-1',
            key: '2-1-1'
          },
          {
            title: '叶子 2-1-2',
            key: '2-1-2'
          }
        ]
      },
      {
        title: '叶子 2-2',
        key: '2-2'
      }
    ]
  }
];
</script>
