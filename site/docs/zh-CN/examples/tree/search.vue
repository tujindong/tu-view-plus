<template>
  <tu-input
    class="mb-2"
    placeholder="请输入关键词搜索"
    allow-clear
    v-model="searchKey"
  >
  </tu-input>

  <tu-tree :data="treeData">
    <template #title="nodeData">
      <template v-if="((index = getMatchIndex(nodeData?.title)), index < 0)">
        {{ nodeData?.title }}
      </template>
      <template v-else>
        <span> {{ nodeData?.title?.substr(0, index) }}</span>
        <span style="color: #5e7ce0">
          {{ nodeData?.title?.substr(index, searchKey.length) }}
        </span>
        <span> {{ nodeData?.title?.substr(index + searchKey.length) }}</span>
      </template>
    </template>
  </tu-tree>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

const originTreeData = [
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
];

const searchKey = ref('');

const treeData = computed(() => {
  if (!searchKey.value) return originTreeData;
  return handleSearch(searchKey.value);
});

const handleSearch = (keyword) => {
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

  return loop(originTreeData);
};

const getMatchIndex = (title) => {
  if (!searchKey.value) return -1;
  return title.toLowerCase().indexOf(searchKey.value.toLowerCase());
};
</script>
