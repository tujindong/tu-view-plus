<template>
  <tu-radio-group v-model="tabType" type="button" style="margin-bottom: 20px">
    <tu-radio label="line">line</tu-radio>
    <tu-radio label="card">card</tu-radio>
    <tu-radio label="slider">slider</tu-radio>
    <tu-radio label="text">text</tu-radio>
    <tu-radio label="button">button</tu-radio>
    <tu-radio label="button-round">button-round</tu-radio>
  </tu-radio-group>

  <tu-tabs
    default-active-key="1"
    :type="tabType"
    editable
    show-add-button
    auto-switch
    @add="handleAdd"
    @delete="handleDelete"
  >
    <tu-tab-pane
      v-for="(item, index) in tabData"
      :key="item.key"
      :title="`标签${index + 1}`"
      :closable="index !== 0"
    >
      {{ `标签页内容 ${index + 1}` }}
    </tu-tab-pane>
  </tu-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const tabType = ref('line');
const tabData = ref([{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }]);

const handleAdd = () => {
  console.log('add');
  const count = tabData.value.length + 1;
  tabData.value = [...tabData.value, { key: count }];
};

const handleDelete = () => {
  console.log('delete');
};
</script>
