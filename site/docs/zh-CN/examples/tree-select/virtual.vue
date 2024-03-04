<template>
  <tu-tree-select
    :data="treeData"
    :treeProps="{
      virtualListProps: {
        height: 400
      }
    }"
    placeholder="请输入"
  />
</template>

<script lang="ts" setup>
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

const treeData = loop();
</script>
