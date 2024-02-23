<template>
  <tu-button-group class="mb-2">
    <tu-button type="primary" @click="toggleChecked">
      {{ checkedKeys?.length ? '取消选择' : '全部选择' }}
    </tu-button>
    <tu-button type="primary" @click="toggleExpanded">
      {{ expandedKeys?.length ? '折叠全部' : '展开全部' }}
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
    title: '主干 1',
    key: '1',
    children: [
      {
        title: '叶子 1-1',
        key: '1-1'
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
  },
  {
    title: '主干 2',
    key: '2',
    children: [
      {
        title: '叶子 2-1',
        key: '2-1'
      },
      {
        title: '叶子 2-2',
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
