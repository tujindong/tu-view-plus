<template>
  <tu-button @click="visible = true">Use component</tu-button>

  <tu-button @click="openFunc">Local import</tu-button>

  <tu-button @click="openGlobal">Global method</tu-button>

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
  </tu-modal>
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance } from 'vue';
import { TuModalBox } from 'tu-view-plus';

const vm = getCurrentInstance()!;

const { $modal } = vm.appContext.config.globalProperties;

const visible = ref(false);

const openFunc = () => {
  TuModalBox.info({
    simple: false,
    hideCancel: false,
    title: 'Modal title',
    content: 'This is modal content.'
  });
};

const openGlobal = () => {
  $modal.info({
    simple: false,
    hideCancel: false,
    title: 'Modal title',
    content: 'This is modal content.'
  });
};
</script>
