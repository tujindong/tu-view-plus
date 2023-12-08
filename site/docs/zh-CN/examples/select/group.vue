<template>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <tu-select placeholder="请选择" v-model="value1">
        <tu-select-group label="标题1">
          <tu-select-option>选项1</tu-select-option>
          <tu-select-option>选项2</tu-select-option>
        </tu-select-group>
        <tu-select-group label="标题2">
          <tu-select-option>选项3</tu-select-option>
          <tu-select-option>选项4</tu-select-option>
          <tu-select-option>选项5</tu-select-option>
          <tu-select-option>选项6</tu-select-option>
        </tu-select-group>
      </tu-select>
    </tu-col>
    <tu-col :span="12">
      <tu-select placeholder="请选择" v-model="value2" multiple>
        <tu-select-group label="标题1">
          <tu-select-option>选项1</tu-select-option>
          <tu-select-option>选项2</tu-select-option>
        </tu-select-group>
        <tu-select-group label="标题2">
          <tu-select-option>选项3</tu-select-option>
          <tu-select-option>选项4</tu-select-option>
          <tu-select-option>选项5</tu-select-option>
          <tu-select-option>选项6</tu-select-option>
        </tu-select-group>
      </tu-select>
    </tu-col>
  </tu-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');
</script>
