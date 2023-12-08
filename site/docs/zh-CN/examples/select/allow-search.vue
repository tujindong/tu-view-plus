<template>
  <tu-row :gutter="20">
    <tu-col :span="8">
      <tu-select placeholder="请选择" v-model="value1" allow-clear allow-search>
        <tu-select-option>选项 1</tu-select-option>
        <tu-select-option>选项 2</tu-select-option>
        <tu-select-option>选项 3</tu-select-option>
        <tu-select-option>选项 4</tu-select-option>
        <tu-select-option>选项 5</tu-select-option>
        <tu-select-option>选项 6</tu-select-option>
      </tu-select>
    </tu-col>
    <tu-col :span="8">
      <tu-select
        placeholder="请选择"
        v-model="value2"
        allow-clear
        :allow-search="{ retainInputValue: true }"
      >
        <tu-select-option>选项 1</tu-select-option>
        <tu-select-option>选项 2</tu-select-option>
        <tu-select-option>选项 3</tu-select-option>
        <tu-select-option>选项 4</tu-select-option>
        <tu-select-option>选项 5</tu-select-option>
        <tu-select-option>选项 6</tu-select-option>
      </tu-select>
    </tu-col>
    <tu-col :span="8">
      <tu-select
        placeholder="请选择"
        v-model="value3"
        allow-clear
        allow-search
        :options="options"
        :loading="loading"
        @search="handleSearch"
      >
      </tu-select>
    </tu-col>
  </tu-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const options = ref([
  '选项 1',
  '选项 2',
  '选项 3',
  '选项 4',
  '选项 5',
  '选项 6'
]);
const loading = ref(false);

const value1 = ref('');
const value2 = ref('');
const value3 = ref('');

const handleSearch = (val: string) => {
  if (val) {
    loading.value = true;
    setTimeout(() => {
      options.value = [`选项 1(${val})`, `选项 2(${val})`];
      loading.value = false;
    }, 1500);
  } else {
    options.value = [];
  }
};
</script>
