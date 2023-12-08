<template>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <tu-select placeholder="请选择" v-model="value1">
        <tu-select-option>选项 1</tu-select-option>
        <tu-select-option>选项 2</tu-select-option>
        <tu-select-option>选项 3</tu-select-option>
        <tu-select-option disabled>选项 4(禁用)</tu-select-option>
      </tu-select>
    </tu-col>
    <tu-col :span="12">
      <tu-select placeholder="请选择" v-model="value2">
        <tu-select-option :value="true">是</tu-select-option>
        <tu-select-option :value="false">否</tu-select-option>
      </tu-select>
    </tu-col>
  </tu-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');
</script>
