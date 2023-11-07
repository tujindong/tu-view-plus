<template>
  <tu-radio-group v-model="position">
    <tu-radio label="top">top</tu-radio>
    <tu-radio label="right">right</tu-radio>
    <tu-radio label="bottom">bottom</tu-radio>
    <tu-radio label="left">left</tu-radio>
  </tu-radio-group>

  <br />
  <br />

  <tu-button @click="visible = true">Open drawer</tu-button>

  <tu-drawer
    v-model:visible="visible"
    :placement="position"
    @ok="visible = false"
    @cancel="visible = false"
  >
    <template #title> Drawer title </template>
    <p style="line-height: 2">This is drawer content.</p>
    <p style="line-height: 2">This is drawer content.</p>
  </tu-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);
const position = ref('top');
</script>
