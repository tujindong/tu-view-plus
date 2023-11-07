<template>
  <div class="demo-drawer-container" id="parentNode">
    <tu-button @click="visible = true">Open drawer</tu-button>
  </div>

  <tu-drawer
    v-model:visible="visible"
    popup-container="#parentNode"
    width="280"
    size="small"
    @ok="visible = false"
    @cancel="visible = false"
  >
    <template #title> Drawer title </template>
    <p>This is drawer content.</p>
    <p>This is drawer content.</p>
    <p>This is drawer content.</p>
    <p>This is drawer content.</p>
  </tu-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);
</script>

<style scoped>
.demo-drawer-container {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 240px;
  box-shadow: 0px 0px 6px var(--vp-c-divider);
}
</style>
