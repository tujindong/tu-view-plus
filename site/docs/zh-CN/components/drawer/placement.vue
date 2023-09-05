<template>
  <tu-radio-group v-model="position">
    <tu-radio label="top">上方</tu-radio>
    <tu-radio label="right">右侧</tu-radio>
    <tu-radio label="bottom">下方</tu-radio>
    <tu-radio label="left">左侧</tu-radio>
  </tu-radio-group>

  <br />
  <br />

  <tu-button @click="visible = true">开启抽屉</tu-button>

  <tu-drawer
    v-model:visible="visible"
    :placement="position"
    @ok="visible = false"
    @cancel="visible = false"
  >
    <template #title> 送元二使安西 </template>
    <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
    <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
  </tu-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);
const position = ref('top');
</script>
