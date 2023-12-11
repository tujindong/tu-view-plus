<template>
  <tu-row :gutter="20">
    <tu-col :span="8">
      <tu-select
        placeholder="Please select"
        v-model="value1"
        allow-clear
        allow-search
      >
        <tu-select-option>Option 1</tu-select-option>
        <tu-select-option>Option 2</tu-select-option>
        <tu-select-option>Option 3</tu-select-option>
        <tu-select-option>Option 4</tu-select-option>
        <tu-select-option>Option 5</tu-select-option>
        <tu-select-option>Option 6</tu-select-option>
      </tu-select>
    </tu-col>
    <tu-col :span="8">
      <tu-select
        placeholder="Please select"
        v-model="value2"
        allow-clear
        :allow-search="{ retainInputValue: true }"
      >
        <tu-select-option>Option 1</tu-select-option>
        <tu-select-option>Option 2</tu-select-option>
        <tu-select-option>Option 3</tu-select-option>
        <tu-select-option>Option 4</tu-select-option>
        <tu-select-option>Option 5</tu-select-option>
        <tu-select-option>Option 6</tu-select-option>
      </tu-select>
    </tu-col>
    <tu-col :span="8">
      <tu-select
        placeholder="Please select"
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
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
  'Option 5',
  'Option 6'
]);
const loading = ref(false);

const value1 = ref('');
const value2 = ref('');
const value3 = ref('');

const handleSearch = (val: string) => {
  if (val) {
    loading.value = true;
    setTimeout(() => {
      options.value = [`Option 1(${val})`, `Option 2(${val})`];
      loading.value = false;
    }, 1500);
  } else {
    options.value = [];
  }
};
</script>
