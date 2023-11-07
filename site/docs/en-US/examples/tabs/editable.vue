<template>
  <tu-radio-group class="mb-2" v-model="tabType" type="button">
    <tu-radio label="line">line</tu-radio>
    <tu-radio label="card-up">card up</tu-radio>
    <tu-radio label="card-down">card down</tu-radio>
    <tu-radio label="slider-up">slide up</tu-radio>
    <tu-radio label="slider-down">slide down</tu-radio>
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

const tabType = ref('line');
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
