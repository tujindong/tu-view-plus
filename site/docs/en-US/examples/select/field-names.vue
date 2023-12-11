<template>
  <tu-select
    placeholder="Please select"
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
    name: 'Option1'
  },
  {
    key: '2',
    name: 'Option2'
  },
  {
    key: '3',
    name: 'Option3'
  },
  {
    key: '4',
    name: 'Option4'
  }
]);
</script>
