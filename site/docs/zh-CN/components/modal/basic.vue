<template>
  <tu-button @click="visible = true">单独引用</tu-button>

  <tu-button @click="openFunc">函数调用</tu-button>

  <tu-modal
    v-model:visible="visible"
    @ok="visible = false"
    @cancel="visible = false"
  >
    <template #title> 送元二使安西 </template>
    <div class="demo-modal-content">
      <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
      <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
    </div>
  </tu-modal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { TuModal } from 'tu-view-plus';

const visible = ref(false);

const openFunc = () => {
  TuModal.info({
    simple: false,
    hideCancel: false,
    title: '送元二使安西',
    content: '渭城朝雨浥轻尘，客舍青青柳色新。'
  });
};
</script>
