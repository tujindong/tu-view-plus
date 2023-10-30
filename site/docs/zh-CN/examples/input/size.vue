<template>
  <tu-row :gutter="20" class="demo-input-row">
    <tu-col :span="6">
      <tu-input v-model="inputValue1" size="mini" placeholder="请输入" />
    </tu-col>

    <tu-col :span="6">
      <tu-input v-model="inputValue2" size="small" placeholder="请输入" />
    </tu-col>

    <tu-col :span="6">
      <tu-input v-model="inputValue3" placeholder="请输入" />
    </tu-col>

    <tu-col :span="6">
      <tu-input v-model="inputValue4" size="large" placeholder="请输入" />
    </tu-col>
  </tu-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue1 = ref('');
const inputValue2 = ref('');
const inputValue3 = ref('');
const inputValue4 = ref('');
</script>

<style>
.demo-input-row {
  align-items: baseline;
}
</style>