<template>
  <tu-select
    placeholder="请输入"
    v-model="value"
    allow-clear
    :options="options"
    :field-names="fieldNames"
  />
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';

const fieldNames = { value: 'key', label: 'name' };

const value = ref('1');

const options = reactive([
  {
    key: '1',
    name: '选项1'
  },
  {
    key: '2',
    name: '选项2'
  },
  {
    key: '3',
    name: '选项3'
  },
  {
    key: '4',
    name: '选项4'
  }
]);
</script>
