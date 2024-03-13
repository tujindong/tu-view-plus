<template>
  <tu-resize-box
    style="
      min-width: 200px;
      max-width: 100%;
      min-height: 50px;
      text-align: center;
    "
    :directions="['right', 'bottom', 'top', 'left']"
    v-model:width="width"
    v-model:height="height"
  >
    <p>送元二使安西</p>
    <p style="line-height: 2">渭城朝雨浥轻尘，客舍青青柳色新。</p>
    <p style="line-height: 2">劝君更尽一杯酒，西出阳关无故人。</p>
  </tu-resize-box>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const width = ref(300);
const height = ref(150);
</script>
