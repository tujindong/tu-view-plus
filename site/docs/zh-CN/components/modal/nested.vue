<template>
  <tu-button @click="visible = true">开启模态框</tu-button>

  <tu-modal
    v-model:visible="visible"
    :footer="false"
    @ok="visible = false"
    @cancel="visible = false"
  >
    <template #title> 送元二使安西 </template>
    <div class="demo-modal-content">
      <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
      <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
    </div>
    <div class="demo-modal-footer">
      <tu-button type="primary" @click="visible1 = true">开启模态框</tu-button>
    </div>
  </tu-modal>

  <tu-modal
    v-model:visible="visible1"
    @ok="visible1 = false"
    @cancel="visible1 = false"
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

const visible = ref(false);
const visible1 = ref(false);
</script>

<style scoped>
.demo-modal-footer {
  display: flex;
  flex-direction: row-reverse;
}
</style>
