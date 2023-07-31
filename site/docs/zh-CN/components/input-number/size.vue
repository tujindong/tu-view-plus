<template>
  <tu-row :gutter="20" class="demo-input-row mb-2">
    <tu-col :span="6">
      <tu-input-number
        v-model="inputNumberValue1"
        size="mini"
        placeholder="请输入"
      />
    </tu-col>

    <tu-col :span="6">
      <tu-input-number
        v-model="inputNumberValue2"
        size="small"
        placeholder="请输入"
      />
    </tu-col>

    <tu-col :span="6">
      <tu-input-number v-model="inputNumberValue3" placeholder="请输入" />
    </tu-col>

    <tu-col :span="6">
      <tu-input-number
        v-model="inputNumberValue4"
        size="large"
        placeholder="请输入"
      />
    </tu-col>
  </tu-row>

  <tu-row :gutter="20" class="demo-input-row">
    <tu-col :span="6">
      <tu-input-number
        v-model="inputNumberValue1"
        size="mini"
        placeholder="请输入"
        controls-position="right"
      />
    </tu-col>

    <tu-col :span="6">
      <tu-input-number
        v-model="inputNumberValue2"
        size="small"
        placeholder="请输入"
        controls-position="right"
      />
    </tu-col>

    <tu-col :span="6">
      <tu-input-number
        v-model="inputNumberValue3"
        placeholder="请输入"
        controls-position="right"
      />
    </tu-col>

    <tu-col :span="6">
      <tu-input-number
        v-model="inputNumberValue4"
        size="large"
        placeholder="请输入"
        controls-position="right"
      />
    </tu-col>
  </tu-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputNumberValue1 = ref('');
const inputNumberValue2 = ref('');
const inputNumberValue3 = ref('');
const inputNumberValue4 = ref('');
</script>

<style>
.demo-input-row {
  align-items: baseline;
}
</style>