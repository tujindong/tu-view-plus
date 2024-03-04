<template>
  <tu-button class="mb-2" @click="toggle">切换</tu-button>

  <tu-tree-select
    allow-clear
    :popup-visible="popupVisible"
    :data="treeData"
    placeholder="请输入"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const treeData = [
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

const popupVisible = ref(false);

const toggle = () => {
  popupVisible.value = !popupVisible.value;
};
</script>
