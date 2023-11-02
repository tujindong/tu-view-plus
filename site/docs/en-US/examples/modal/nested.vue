<template>
  <tu-button @click="visible = true">Open Modal</tu-button>

  <tu-modal
    v-model:visible="visible"
    @ok="visible = false"
    @cancel="visible = false"
  >
    <template #title> Modal title </template>
    <div class="demo-modal-content">
      <p style="line-height: 2">This is modal content.</p>
      <p style="line-height: 2">This is modal content.</p>
    </div>
    <template #footer>
      <tu-button type="primary" @click="visible1 = true">Open modal</tu-button>
    </template>
  </tu-modal>

  <tu-modal
    v-model:visible="visible1"
    @ok="visible1 = false"
    @cancel="visible1 = false"
  >
    <template #title> Modal title </template>
    <div class="demo-modal-content">
      <p style="line-height: 2">This is inner modal content.</p>
      <p style="line-height: 2">This is inner modal content.</p>
    </div>
  </tu-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);
const visible1 = ref(false);
</script>
