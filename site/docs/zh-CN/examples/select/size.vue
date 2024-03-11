<template>
  <tu-radio-group class="mb-2" v-model="size" type="button">
    <tu-radio label="mini">超小</tu-radio>
    <tu-radio label="small">较小</tu-radio>
    <tu-radio label="medium">中等</tu-radio>
    <tu-radio label="large">较大</tu-radio>
  </tu-radio-group>

  <tu-row :gutter="20" class="demo-select-row mb-2">
    <tu-col :span="12">
      <tu-select
        placeholder="请选择"
        allow-clear
        v-model="value1"
        :size="size"
        :options="options"
      />
    </tu-col>
    <tu-col :span="12">
      <tu-select
        placeholder="请选择"
        multiple
        allow-clear
        v-model="value2"
        :size="size"
        :options="options"
      />
    </tu-col>
  </tu-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const options = Array(8)
  .fill(null)
  .map((_, index) => `选项  ${index + 1}`);

const value1 = ref('');
const value2 = ref('');

const size = ref('medium');
</script>

<style>
.demo-select-row {
  align-items: baseline;
}
</style>
