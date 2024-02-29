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
    <tu-radio label="all">Show all</tu-radio>
    <tu-radio label="parent">Show parent</tu-radio>
    <tu-radio label="child">Show child</tu-radio>
  </tu-radio-group>

  <tu-tree
    checkable
    v-model:checked-keys="checkedKeys"
    :data="treeData"
    :checked-strategy="checkedStrategy"
  />

  <p>Current: {{ checkedKeys }}</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const treeData = [
  {
    title: 'Trunk 1',
    key: '1',
    children: [
      {
        title: 'Branch 1-1',
        key: '1-1',
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

const checkedKeys = ref([]);
const checkedStrategy = ref('all');
</script>
