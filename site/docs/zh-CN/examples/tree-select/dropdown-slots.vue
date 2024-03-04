<template>
  <tu-tree-select
    multiple
    allow-search
    allow-clear
    tree-checkable
    v-model="checkedKeys"
    :data="treeData"
    placeholder="请输入"
  >
    <template #header>
      <div style="padding: 6px 12px">
        <tu-checkbox
          v-model="checkAll"
          :indeterminate="indeterminate"
          @change="handleCheckAll"
        >
          全选
        </tu-checkbox>
      </div>
    </template>
    <template #footer>
      <div style="padding: 6px 12px; text-align: right">
        已选择{{ checkedKeys.length }}个节点
      </div>
    </template>
  </tu-tree-select>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

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
const allCheckedKeys = ['1', '1-1', '1-1-1', '1-1-2', '1-2', '1-2-1'];

const checkAll = ref(false);
const indeterminate = ref(false);
const checkedKeys = ref([]);

watch(checkedKeys, (val) => {
  if (val.length === 0) {
    checkAll.value = false;
    indeterminate.value = false;
  } else if (val.length === allCheckedKeys.length) {
    checkAll.value = true;
    indeterminate.value = false;
  } else {
    indeterminate.value = true;
  }
});

const handleCheckAll = (value: boolean) => {
  checkedKeys.value = value ? allCheckedKeys : [];
};
</script>
