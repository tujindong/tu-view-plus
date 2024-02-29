<template>
  <tu-tree block-node :data="treeData">
    <template #extra="nodeData">
      <tu-button class="ml-2" size="mini" @click="() => handleAdd(nodeData)">
        <template #icon><Plus /></template>
      </tu-button>
    </template>
  </tu-tree>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Plus } from '@tu-view-plus/icons-vue';

const treeData = ref([
  {
    title: 'Trunk 1',
    key: '1',
    children: [
      {
        title: 'Branch 1-1',
        key: '1-1',
        disabled: true,
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
]);

const handleAdd = (nodeData) => {
  const children = nodeData.children || [];
  children.push({
    title: 'New node',
    key: `${nodeData.key}-${children.length + 1}`
  });
  nodeData.children = children;

  treeData.value = [...treeData.value];
};
</script>
