<template>
  <tu-button-group class="mb-2">
    <tu-button type="primary" @click="toggleChecked">
      {{ checkedKeys?.length ? 'Deselect all' : 'Select all' }}
    </tu-button>
    <tu-button type="primary" @click="toggleExpanded">
      {{ expandedKeys?.length ? 'Fold all' : 'Unfold all' }}
    </tu-button>
  </tu-button-group>

  <tu-tree
    :data="treeData"
    :checkable="true"
    v-model:selected-keys="selectedKeys"
    v-model:checked-keys="checkedKeys"
    v-model:expanded-keys="expandedKeys"
    @select="onSelect"
    @check="onCheck"
    @expand="onExpand"
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
        title: 'Leaf 1-1',
        key: '1-1'
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
  },
  {
    title: 'Trunk 2',
    key: '2',
    children: [
      {
        title: 'Leaf 2-1',
        key: '2-1'
      },
      {
        title: 'Leaf 2-2',
        key: '2-2'
      }
    ]
  }
];

const allCheckedKeys = ['1', '1-1', '1-2', '1-2-1', '2', '2-1', '2-2'];
const allExpandedKeys = ['1', '1-2', '2'];

const selectedKeys = ref<string[]>([]);
const checkedKeys = ref<string[]>([]);
const expandedKeys = ref<string[]>(allExpandedKeys);

const toggleChecked = () => {
  checkedKeys.value = checkedKeys?.value.length ? [] : allCheckedKeys;
};

const toggleExpanded = () => {
  expandedKeys.value = expandedKeys?.value.length ? [] : allExpandedKeys;
};

const onSelect = (newSelectedKeys: string[], event: any) => {
  console.log('select: ', newSelectedKeys, event);
};

const onCheck = (newCheckedKeys: string[], event: any) => {
  console.log('check: ', newCheckedKeys, event);
};

const onExpand = (newExpandedKeys: string[], event: any) => {
  console.log('expand: ', newExpandedKeys, event);
};
</script>
