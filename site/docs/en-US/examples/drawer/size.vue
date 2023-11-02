<template>
  <tu-radio-group v-model="size">
    <tu-radio label="mini">mini</tu-radio>
    <tu-radio label="small">small</tu-radio>
    <tu-radio label="medium">medium</tu-radio>
    <tu-radio label="large">large</tu-radio>
  </tu-radio-group>

  <br />
  <br />

  <tu-button @click="visible = true">Open drawer</tu-button>

  <tu-drawer v-model:visible="visible" :size="size" @cancel="visible = false">
    <template #title> Drawer title </template>
    <div class="demo-modal-content">
      <p style="line-height: 2">This is drawer content.</p>
      <p style="line-height: 2">This is drawer content.</p>
    </div>
  </tu-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);
const size = ref('mini');
</script>
