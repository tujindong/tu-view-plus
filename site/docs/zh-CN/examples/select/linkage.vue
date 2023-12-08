<template>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <tu-select placeholder="请输入" v-model="value1" allow-clear>
        <tu-select-option v-for="option of Object.keys(options)">
          {{ option }}
        </tu-select-option>
      </tu-select>
    </tu-col>
    <tu-col :span="12">
      <tu-select
        placeholder="请输入"
        v-model="value2"
        allow-clear
        :options="options[value1] || []"
      />
    </tu-col>
  </tu-row>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const value1 = ref('选项 1');
const value2 = ref('选项 1-1');
const options = {
  '选项 1': ['选项 1-1', '选项 1-2', '选项 1-3'],
  '选项 2': ['选项 2-1', '选项 2-2', '选项 2-3'],
  '选项 3': ['选项 3-1', '选项 3-2', '选项 3-3']
};

watch(value1, () => (value2.value = ''));
</script>
