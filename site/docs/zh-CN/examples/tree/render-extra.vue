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
]);

const handleAdd = (nodeData) => {
  const children = nodeData.children || [];
  children.push({
    title: '新节点',
    key: `${nodeData.key}-${children.length + 1}`
  });
  nodeData.children = children;

  treeData.value = [...treeData.value];
};
</script>
