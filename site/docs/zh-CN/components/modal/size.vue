<template>
  <tu-button @click="openModal('mini')">超小模态框</tu-button>
  <tu-button @click="openModal('small')">小型模态框</tu-button>
  <tu-button @click="openModal('medium')">默认模态框</tu-button>
  <tu-button @click="openModal('large')">大型模态框</tu-button>

  <tu-modal v-model:visible="visible" :size="size" @cancel="visible = false">
    <template #title> 送元二使安西 </template>
    <div class="demo-modal-content">
      <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
      <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
    </div>
  </tu-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);
const size = ref();

const openModal = (modalSize: string) => {
  size.value = modalSize;
  visible.value = true;
};
</script >