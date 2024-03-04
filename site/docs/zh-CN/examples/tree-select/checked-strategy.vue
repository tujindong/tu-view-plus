<template>
  <tu-radio-group
    class="mb-2"
    type="button"
    v-model="treeCheckedStrategy"
    @change="
      () => {
        selected = [];
      }
    "
  >
    <tu-radio label="all">所有节点</tu-radio>
    <tu-radio label="parent">父节点</tu-radio>
    <tu-radio label="child">子节点</tu-radio>
  </tu-radio-group>

  <tu-tree-select
    v-model="selected"
    allow-search
    allow-clear
    tree-checkable
    placeholder="请输入"
    :tree-checked-strategy="treeCheckedStrategy"
    :data="treeData"
  />
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

const selected = ref([]);
const treeCheckedStrategy = ref('all');
</script>
