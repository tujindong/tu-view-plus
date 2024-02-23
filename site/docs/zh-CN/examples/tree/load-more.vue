<template>
  <tu-tree :data="treeData" :load-more="loadMore" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const treeData = ref([
  {
    title: '主干 1',
    key: '1'
  },
  {
    title: '主干 2',
    key: '2',
    children: [
      {
        title: '分支 2-1',
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
          title: `叶子 ${nodeData.key}-1`,
          key: `${nodeData.key}-1`,
          isLeaf: true
        }
      ];
      resolve();
    }, 1000);
  });
};
</script>
