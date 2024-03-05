<template>
  <tu-tree-select
    :data="treeData"
    placeholder="Please select"
    :load-more="loadMore"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const treeData = ref([
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
