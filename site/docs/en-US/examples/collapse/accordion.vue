<template>
  <tu-collapse v-model="activeName" accordion>
    <tu-collapse-item title="送元二使安西" name="1">
      <p style="line-height: 1">渭城朝雨浥轻尘，客舍青青柳色新。</p>
      <p style="line-height: 1">劝君更尽一杯酒，西出阳关无故人。</p>
    </tu-collapse-item>
    <tu-collapse-item title="送元二使安西" name="2">
      <p style="line-height: 1">渭城朝雨浥轻尘，客舍青青柳色新。</p>
      <p style="line-height: 1">劝君更尽一杯酒，西出阳关无故人。</p>
    </tu-collapse-item>
    <tu-collapse-item title="送元二使安西" name="3">
      <p style="line-height: 1">渭城朝雨浥轻尘，客舍青青柳色新。</p>
      <p style="line-height: 1">劝君更尽一杯酒，西出阳关无故人。</p>
    </tu-collapse-item>
  </tu-collapse>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeName = ref('1');
</script>
