<template>
  <tu-radio-group class="mb-2" v-model="size" type="button">
    <tu-radio label="mini">超小</tu-radio>
    <tu-radio label="small">较小</tu-radio>
    <tu-radio label="medium">中等</tu-radio>
    <tu-radio label="large">较大</tu-radio>
  </tu-radio-group>

  <tu-row :gutter="20">
    <tu-col :span="12">
      <tu-tree-select :size="size" :data="treeData" placeholder="请输入" />
    </tu-col>
    <tu-col :span="12">
      <tu-tree-select
        multiple
        allow-search
        allow-clear
        tree-checkable
        :size="size"
        :data="treeData"
        placeholder="请输入"
      />
    </tu-col>
  </tu-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

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

const size = ref('medium');
</script>
