<template>
  <tu-radio-group v-model="size" class="mb-2">
    <tu-radio label="mini">mini</tu-radio>
    <tu-radio label="small">small</tu-radio>
    <tu-radio label="medium">medium</tu-radio>
    <tu-radio label="large">large</tu-radio>
  </tu-radio-group>

  <br />

  <tu-button @click="visible = true">Open modal</tu-button>

  <tu-modal v-model:visible="visible" :size="size" @cancel="visible = false">
    <template #title> Modal title </template>
    <div class="demo-modal-content">
      <p style="line-height: 2">This is modal content.</p>
      <p style="line-height: 2">This is modal content.</p>
    </div>
  </tu-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);
const size = ref('mini');
</script>
