<template>
  <tu-button @click="visible = true">开启模态框</tu-button>

  <tu-modal fullscreen v-model:visible="visible" @cancel="visible = false">
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
</script >