<template>
  <tu-tree :data="treeData" :load-more="loadMore" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const treeData = ref([
  {
    title: 'Trunk 1',
    key: '1'
  },
  {
    title: 'Trunk 2',
    key: '2',
    children: [
      {
        title: 'Branch 2-1',
        key: '2-1'
      }
    ]
  }
]);

const loadMore = (nodeData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      nodeData.children = [
        {
          title: `Leaf ${nodeData.key}-1`,
          key: `${nodeData.key}-1`,
          isLeaf: true
        }
      ];
      resolve();
    }, 1000);
  });
};
</script>
