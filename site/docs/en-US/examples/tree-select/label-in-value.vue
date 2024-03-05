<template>
  <tu-tree-select
    label-in-value
    placeholder="Please select"
    :data="treeData"
    v-model="value"
  />

  <p>Selected value: {{ value }}</p>
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

const value = ref();
</script>
