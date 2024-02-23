<template>
  <tu-radio-group
    class="mb-2"
    type="button"
    v-model="checkedStrategy"
    @change="
      () => {
        checkedKeys = [];
      }
    "
  >
    <tu-radio label="all">所有节点</tu-radio>
    <tu-radio label="parent">父节点</tu-radio>
    <tu-radio label="child">子节点</tu-radio>
  </tu-radio-group>

  <tu-tree
    checkable
    v-model:checked-keys="checkedKeys"
    :data="treeData"
    :checked-strategy="checkedStrategy"
  />

  <p>当前选择节点：{{ checkedKeys }}</p>
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

const checkedKeys = ref([]);
const checkedStrategy = ref('all');
</script>
