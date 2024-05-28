<template>
  <tu-radio-group class="mb-2" v-model="align" type="button">
    <tu-radio label="start">头部对齐</tu-radio>
    <tu-radio label="center">中间对齐</tu-radio>
    <tu-radio label="end">尾部对齐</tu-radio>
    <tu-radio label="baseline">基础线对齐</tu-radio>
  </tu-radio-group>

  <br />

  <tu-space :align="align">
    <tu-card>
      <p style="line-height: 1">渭城朝雨浥轻尘，客舍青青柳色新。</p>
      <p style="line-height: 1">劝君更尽一杯酒，西出阳关无故人。</p>
    </tu-card>
    <tu-button>按钮1</tu-button>
    <tu-button>按钮2</tu-button>
  </tu-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const align = ref('start');
</script>
