<template>
  <tu-select
    placeholder="请选择"
    v-model="value"
    allow-clear
    allow-search
    :options="options"
    :loading="loading"
    @search="handleSearch"
  >
  </tu-select>
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

const value = ref('');
const loading = ref(false);

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
