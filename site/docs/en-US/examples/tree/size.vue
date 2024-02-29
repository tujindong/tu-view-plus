<template>
  <tu-radio-group class="mb-2" v-model="size" type="button">
    <tu-radio label="mini">Mini</tu-radio>
    <tu-radio label="small">Small</tu-radio>
    <tu-radio label="medium">Medium</tu-radio>
    <tu-radio label="large">Large</tu-radio>
  </tu-radio-group>

  <tu-tree :data="treeData" :size="size" checkable />
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

const size = ref('medium');
</script>
