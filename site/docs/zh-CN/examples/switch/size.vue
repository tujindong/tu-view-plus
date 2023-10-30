<template>
  <tu-row :gutter="20" class="demo-switch-row">
    <tu-col :span="3">
      <tu-switch v-model="value1" size="mini" />
    </tu-col>

    <tu-col :span="3">
      <tu-switch v-model="value2" size="small" />
    </tu-col>

    <tu-col :span="3">
      <tu-switch v-model="value3" />
    </tu-col>

    <tu-col :span="3">
      <tu-switch v-model="value4" size="large" />
    </tu-col>
  </tu-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const value1 = ref(false);
const value2 = ref(false);
const value3 = ref(false);
const value4 = ref(false);
</script>

<style>
.demo-switch-row {
  align-items: baseline;
}
</style>