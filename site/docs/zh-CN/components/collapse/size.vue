<template>
  <tu-radio-group
    v-model="collapseSize"
    type="button"
    style="margin-bottom: 20px"
  >
    <tu-radio label="mini">超小</tu-radio>
    <tu-radio label="small">较小</tu-radio>
    <tu-radio label="medium">中等</tu-radio>
    <tu-radio label="large">较大</tu-radio>
  </tu-radio-group>

  <tu-collapse :size="collapseSize">
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

const collapseSize = ref('medium');
</script>
