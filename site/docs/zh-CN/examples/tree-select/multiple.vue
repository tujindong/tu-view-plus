<template>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <p>基础多选</p>
      <tu-tree-select
        multiple
        allow-search
        allow-clear
        placeholder="请输入"
        :data="treeData"
      />
    </tu-col>
    <tu-col :span="12">
      <p>最多显示2个标签</p>
      <tu-tree-select
        multiple
        allow-search
        allow-clear
        placeholder="请输入"
        :max-tag-count="2"
        :data="treeData"
      />
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
        title: '分支 1-1',
        key: '1-1',
        disabled: true,
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
