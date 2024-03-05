<template>
  <tu-tree-select
    allow-search
    allow-clear
    disable-filter
    placeholder="Please select"
    :loading="loading"
    :data="treeData"
    @search="onSearch"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const defaultTreeData = [
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
];

const loading = ref(false);
const treeData = ref(defaultTreeData);

const onSearch = (searchKey) => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    treeData.value = searchData(searchKey);
  }, 800);
};

const searchData = (keyword) => {
  const loop = (data) => {
    const result = [];
    data.forEach((item) => {
      if (item.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
        result.push({ ...item });
      } else if (item.children) {
        const filterData = loop(item.children);
        if (filterData.length) {
          result.push({
            ...item,
            children: filterData
          });
        }
      }
    });
    return result;
  };

  return loop(defaultTreeData);
};
</script>
