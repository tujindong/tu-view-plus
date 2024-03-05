<template>
  <tu-button class="mb-2" @click="toggle">Toggle</tu-button>

  <tu-tree-select
    allow-clear
    :popup-visible="popupVisible"
    :data="treeData"
    placeholder="Please select"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const treeData = [
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

const popupVisible = ref(false);

const toggle = () => {
  popupVisible.value = !popupVisible.value;
};
</script>
