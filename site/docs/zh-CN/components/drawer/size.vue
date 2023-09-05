<template>
  <tu-radio-group v-model="size">
    <tu-radio label="mini">超小</tu-radio>
    <tu-radio label="small">小型</tu-radio>
    <tu-radio label="medium">默认</tu-radio>
    <tu-radio label="large">大型</tu-radio>
  </tu-radio-group>

  <br />
  <br />

  <tu-button @click="visible = true">开启模态框</tu-button>

  <tu-drawer v-model:visible="visible" :size="size" @cancel="visible = false">
    <template #title> 送元二使安西 </template>
    <div class="demo-modal-content">
      <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
      <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
    </div>
  </tu-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);
const size = ref('mini');
</script >