<template>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <tu-select placeholder="Please select" v-model="value1">
        <tu-select-group label="Title 1">
          <tu-select-option>Option1</tu-select-option>
          <tu-select-option>Option2</tu-select-option>
        </tu-select-group>
        <tu-select-group label="Title 2">
          <tu-select-option>Option3</tu-select-option>
          <tu-select-option>Option4</tu-select-option>
          <tu-select-option>Option5</tu-select-option>
          <tu-select-option>Option6</tu-select-option>
        </tu-select-group>
      </tu-select>
    </tu-col>
    <tu-col :span="12">
      <tu-select placeholder="Please select" v-model="value2" multiple>
        <tu-select-group label="Title 1">
          <tu-select-option>Option1</tu-select-option>
          <tu-select-option>Option2</tu-select-option>
        </tu-select-group>
        <tu-select-group label="Title 2">
          <tu-select-option>Option3</tu-select-option>
          <tu-select-option>Option4</tu-select-option>
          <tu-select-option>Option5</tu-select-option>
          <tu-select-option>Option6</tu-select-option>
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
