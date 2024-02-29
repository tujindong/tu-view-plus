<template>
  <tu-tree draggable blockNode :data="treeData" @drop="onDrop" />
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

const onDrop = ({ dragNode, dropNode, dropPosition }) => {
  const data = treeData.value;
  const loop = (data, key, callback) => {
    data.some((item, index, arr) => {
      if (item.key === key) {
        callback(item, index, arr);
        return true;
      }
      if (item.children) {
        return loop(item.children, key, callback);
      }
      return false;
    });
  };

  loop(data, dragNode.key, (_, index, arr) => {
    arr.splice(index, 1);
  });

  if (dropPosition === 0) {
    loop(data, dropNode.key, (item) => {
      item.children = item.children || [];
      item.children.push(dragNode);
    });
  } else {
    loop(data, dropNode.key, (_, index, arr) => {
      arr.splice(dropPosition < 0 ? index : index + 1, 0, dragNode);
    });
  }
};
</script>
