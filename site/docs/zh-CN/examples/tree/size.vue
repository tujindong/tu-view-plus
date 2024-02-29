<template>
  <tu-radio-group class="mb-2" v-model="size" type="button">
    <tu-radio label="mini">超小</tu-radio>
    <tu-radio label="small">较小</tu-radio>
    <tu-radio label="medium">中等</tu-radio>
    <tu-radio label="large">较大</tu-radio>
  </tu-radio-group>

  <tu-tree :data="treeData" :size="size" checkable />
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

const size = ref('medium');
</script>
