<template>
  <tu-row :gutter="20" class="demo-select-row mb-2">
    <tu-col :span="6">
      <tu-select
        placeholder="Please select"
        size="mini"
        allow-clear
        v-model="value1"
        :options="options"
      />
    </tu-col>
    <tu-col :span="6">
      <tu-select
        placeholder="Please select"
        size="small"
        allow-clear
        v-model="value2"
        :options="options"
      />
    </tu-col>
    <tu-col :span="6">
      <tu-select
        placeholder="Please select"
        allow-clear
        v-model="value3"
        :options="options"
      />
    </tu-col>
    <tu-col :span="6">
      <tu-select
        placeholder="Please select"
        size="large"
        allow-clear
        v-model="value4"
        :options="options"
      />
    </tu-col>
  </tu-row>

  <tu-row :gutter="20" class="demo-select-row">
    <tu-col :span="6">
      <tu-select
        placeholder="Please select"
        size="mini"
        multiple
        allow-clear
        v-model="value5"
        :options="options"
      />
    </tu-col>
    <tu-col :span="6">
      <tu-select
        placeholder="Please select"
        size="small"
        multiple
        allow-clear
        v-model="value6"
        :options="options"
      />
    </tu-col>
    <tu-col :span="6">
      <tu-select
        placeholder="Please select"
        multiple
        allow-clear
        v-model="value7"
        :options="options"
      />
    </tu-col>
    <tu-col :span="6">
      <tu-select
        placeholder="Please select"
        size="large"
        multiple
        allow-clear
        v-model="value8"
        :options="options"
      />
    </tu-col>
  </tu-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const options = Array(8)
  .fill(null)
  .map((_, index) => `Option  ${index + 1}`);

const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
const value4 = ref('');
const value5 = ref('');
const value6 = ref('');
const value7 = ref('');
const value8 = ref('');
</script>

<style>
.demo-select-row {
  align-items: baseline;
}
</style>
