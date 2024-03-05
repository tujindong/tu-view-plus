<template>
  <tu-radio-group class="mb-2" v-model="size" type="button">
    <tu-radio label="mini">Mini</tu-radio>
    <tu-radio label="small">Small</tu-radio>
    <tu-radio label="medium">Medium</tu-radio>
    <tu-radio label="large">Large</tu-radio>
  </tu-radio-group>

  <tu-row :gutter="20">
    <tu-col :span="12">
      <tu-tree-select
        :size="size"
        :data="treeData"
        placeholder="Please select"
      />
    </tu-col>
    <tu-col :span="12">
      <tu-tree-select
        multiple
        allow-search
        allow-clear
        tree-checkable
        :size="size"
        :data="treeData"
        placeholder="Please select"
      />
    </tu-col>
  </tu-row>
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
