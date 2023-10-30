<template>
  <tu-button @click="visible = true">开启抽屉</tu-button>

  <tu-drawer
    v-model:visible="visible"
    :width="500"
    @ok="visible = false"
    @cancel="visible = false"
  >
    <template #title> 送元二使安西 </template>
    <div class="demo-modal-content">
      <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
      <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
    </div>
    <template #footer>
      <tu-button type="primary" @click="visible1 = true">开启抽屉</tu-button>
    </template>
  </tu-drawer>

  <tu-drawer
    v-model:visible="visible1"
    @ok="visible1 = false"
    @cancel="visible1 = false"
  >
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
const visible1 = ref(false);
</script>
