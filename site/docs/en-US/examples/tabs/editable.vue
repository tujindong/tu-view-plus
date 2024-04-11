<template>
  <tu-radio-group class="mb-2" v-model="tabType" type="button" size="small">
    <tu-radio label="default">default</tu-radio>
    <tu-radio label="flat">flat</tu-radio>
    <tu-radio label="card-outset">card outset</tu-radio>
    <tu-radio label="card-inset">card inset</tu-radio>
    <tu-radio label="slider-outset">slide outset</tu-radio>
    <tu-radio label="slider-inset">slide inset</tu-radio>
    <tu-radio label="text">text</tu-radio>
    <tu-radio label="button">button</tu-radio>
    <tu-radio label="button-round">button-round</tu-radio>
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
      :title="`Tab ${item.key}`"
      :closable="index !== 0"
    >
      {{ `Content of Tab Panel ${item.key}` }}
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
