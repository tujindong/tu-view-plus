<template>
  <tu-select
    placeholder="Please select"
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
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
  'Option 5',
  'Option 6'
]);

const value = ref('');
const loading = ref(false);

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
