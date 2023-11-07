<template>
  <tu-button @click="visible = true">Open modal</tu-button>

  <tu-modal
    unmountOnClose
    v-model:visible="visible"
    :on-before-ok="handleBeforeOk"
    @cancel="visible = false"
  >
    <template #title> Modal title </template>
    <div class="demo-modal-content">
      <p style="line-height: 2">This is modal content.。</p>
      <p style="line-height: 2">This is modal content.</p>
    </div>
  </tu-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);

const handleBeforeOk = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return true;
};
</script>
