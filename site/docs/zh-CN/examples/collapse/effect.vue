<template>
  <tu-radio-group
    v-model="collapseEffect"
    type="button"
    style="margin-bottom: 20px"
  >
    <tu-radio label="line">线型</tu-radio>
    <tu-radio label="up">上方阴影</tu-radio>
    <tu-radio label="down">下方阴影</tu-radio>
  </tu-radio-group>

  <tu-collapse :effect="collapseEffect">
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

const collapseEffect = ref('line');
</script>
