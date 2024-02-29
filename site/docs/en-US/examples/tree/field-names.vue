<template>
  <tu-tree
    :data="treeData"
    :fieldNames="{
      key: 'value',
      title: 'label',
      children: 'options',
      icon: 'customIcon'
    }"
  />
</template>

<script lang="ts" setup>
import { h } from 'vue';
import { Star } from '@tu-view-plus/icons-vue';

const treeData = [
  {
    label: 'Trunk 1',
    value: '1',
    options: [
      {
        label: 'Branch 1-1',
        value: '1-1',
        customIcon: () => h(Star),
        options: [
          {
            label: 'Leaf 1-1-1',
            value: '1-1-1'
          },
          {
            label: 'Leaf 1-1-2',
            value: '1-1-2'
          }
        ]
      },
      {
        label: 'Branch 1-2',
        value: '1-2',
        options: [
          {
            label: 'Leaf 1-2-1',
            value: '1-2-1'
          }
        ]
      }
    ]
  }
];
</script>
