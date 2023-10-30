<template>
  <p>属性方式</p>
  <tu-row :gutter="20" class="mb-2">
    <tu-col :span="12">
      <tu-input
        v-model="inputValue1"
        placeholder="请输入"
        :suffix-icon="Search"
      ></tu-input>
    </tu-col>
    <tu-col :span="12">
      <tu-input
        v-model="inputValue2"
        placeholder="请输入"
        :prefix-icon="Search"
      ></tu-input>
    </tu-col>
  </tu-row>
  <p>slot方式</p>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <tu-input v-model="inputValue3" placeholder="请输入">
        <template #suffix>
          <tu-icon><Search /></tu-icon>
        </template>
      </tu-input>
    </tu-col>
    <tu-col :span="12">
      <tu-input v-model="inputValue4" placeholder="请输入">
        <template #prefix>
          <tu-icon><Search /></tu-icon>
        </template>
      </tu-input>
    </tu-col>
  </tu-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Search } from '@tu-view-plus/icons-vue';
const inputValue1 = ref('');
const inputValue2 = ref('');
const inputValue3 = ref('');
const inputValue4 = ref('');
</script>