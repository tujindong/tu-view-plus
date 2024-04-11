<template>
  <tu-radio-group class="mb-2" v-model="tabType" type="button" size="small">
    <tu-radio label="default">默认</tu-radio>
    <tu-radio label="flat">扁平</tu-radio>
    <tu-radio label="card-outset">上方卡片</tu-radio>
    <tu-radio label="card-inset">下方卡片</tu-radio>
    <tu-radio label="slider-outset">上方滑动</tu-radio>
    <tu-radio label="slider-inset">下方滑动</tu-radio>
    <tu-radio label="text">文字</tu-radio>
    <tu-radio label="button">按钮</tu-radio>
    <tu-radio label="button-round">圆形按钮</tu-radio>
  </tu-radio-group>

  <tu-tabs
    v-model="tabValue"
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
      :title="`标签${item.key}`"
      :closable="index !== 0"
    >
      {{ `标签页内容 ${item.key}` }}
    </tu-tab-pane>
  </tu-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const tabType = ref('default');
const tabData = ref([{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }]);
const tabValue = ref(1);

const handleAdd = () => {
  const count = tabData.value.length + 1;
  tabData.value = [...tabData.value, { key: count }];
};

const handleDelete = (key: number) => {
  if (key === tabValue.value) {
    const targetIndex = tabData.value.findIndex((i) => i.key === key);
    tabValue.value = tabData.value[targetIndex - 1].key;
  }
  tabData.value = tabData.value.filter((i) => i.key !== key);
};
</script>
