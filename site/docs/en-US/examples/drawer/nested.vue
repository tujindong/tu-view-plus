<template>
  <tu-button @click="visible = true">Open drawer</tu-button>

  <tu-drawer
    v-model:visible="visible"
    :width="500"
    @ok="visible = false"
    @cancel="visible = false"
  >
    <template #title> Drawer title </template>
    <div class="demo-modal-content">
      <p style="line-height: 2">This is drawer content.</p>
      <p style="line-height: 2">This is drawer content.</p>
    </div>
    <template #footer>
      <tu-button type="primary" @click="visible1 = true">Open drawer</tu-button>
    </template>
  </tu-drawer>

  <tu-drawer
    v-model:visible="visible1"
    @ok="visible1 = false"
    @cancel="visible1 = false"
  >
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
const visible1 = ref(false);
</script>
