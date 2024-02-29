<template>
  <tu-button class="mb-2" @click="scrollIntoView">Scroll to 1-6-6-6</tu-button>

  <tu-tree
    ref="treeRef"
    blockNode
    checkable
    :data="treeData"
    :virtualListProps="{
      height: 300
    }"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const loop = (path = '1', level = 2) => {
  const list = [];
  for (let i = 0; i < 10; i += 1) {
    const key = `${path}-${i + 1}`;
    const treeNode = {
      title: key,
      key
    };

    if (level > 0) {
      treeNode.children = loop(key, level - 1);
    }

    list.push(treeNode);
  }
  return list;
};

const treeRef = ref();
const treeData = loop();

const scrollIntoView = () => {
  treeRef.value && treeRef.value.scrollIntoView({ key: '1-6-6-6' });
};
</script>
