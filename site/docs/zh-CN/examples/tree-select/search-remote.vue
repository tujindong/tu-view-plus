<template>
  <tu-tree-select
    allow-search
    allow-clear
    disable-filter
    placeholder="请输入"
    :loading="loading"
    :data="treeData"
    @search="onSearch"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const defaultTreeData = [
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
