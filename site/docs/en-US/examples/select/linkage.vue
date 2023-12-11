<template>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <tu-select placeholder="Please select" v-model="value1" allow-clear>
        <tu-select-option v-for="option of Object.keys(options)">
          {{ option }}
        </tu-select-option>
      </tu-select>
    </tu-col>
    <tu-col :span="12">
      <tu-select
        placeholder="Please select"
        v-model="value2"
        allow-clear
        :options="options[value1] || []"
      />
    </tu-col>
  </tu-row>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const value1 = ref('Option 1');
const value2 = ref('Option 1-1');
const options = {
  'Option 1': ['Option 1-1', 'Option 1-2', 'Option 1-3'],
  'Option 2': ['Option 2-1', 'Option 2-2', 'Option 2-3'],
  'Option 3': ['Option 3-1', 'Option 3-2', 'Option 3-3']
};

watch(value1, () => (value2.value = ''));
</script>
