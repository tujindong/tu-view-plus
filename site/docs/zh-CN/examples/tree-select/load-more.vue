<template>
  <tu-tree-select :data="treeData" placeholder="请输入" :load-more="loadMore" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const treeData = ref([
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
]);

const loadMore = (nodeData) => {
  const { title, key } = nodeData;
  const children = [
    {
      title: `${title}-1`,
      key: `${key}-1`
    },
    {
      title: `${title}-2`,
      key: `${key}-2`
    }
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      nodeData.children = children;
      resolve();
    }, 1000);
  });
};
</script>
