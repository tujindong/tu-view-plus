<template>
  <tu-button @click="visible = true">Open Modal</tu-button>

  <tu-modal draggable v-model:visible="visible" @cancel="visible = false">
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
</script>
