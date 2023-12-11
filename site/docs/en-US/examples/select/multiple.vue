<template>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <tu-select placeholder="Please select" v-model="value1" multiple>
        <tu-select-option>Option 1</tu-select-option>
        <tu-select-option>Option 2</tu-select-option>
        <tu-select-option>Option 3</tu-select-option>
        <tu-select-option>Option 4</tu-select-option>
        <tu-select-option>Option 5</tu-select-option>
        <tu-select-option>Option 6</tu-select-option>
      </tu-select>
    </tu-col>
    <tu-col :span="12">
      <tu-select
        placeholder="Please select"
        v-model="value2"
        multiple
        :max-tag-count="2"
      >
        <tu-select-option>Option 1</tu-select-option>
        <tu-select-option>Option 2</tu-select-option>
        <tu-select-option>Option 3</tu-select-option>
        <tu-select-option>Option 4</tu-select-option>
        <tu-select-option>Option 5</tu-select-option>
        <tu-select-option>Option 6</tu-select-option>
      </tu-select>
    </tu-col>
  </tu-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref([]);
const value2 = ref([]);
</script>
