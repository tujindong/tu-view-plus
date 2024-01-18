<template>
  <tu-radio-group v-model="size" type="button">
    <tu-radio label="mini">超小</tu-radio>
    <tu-radio label="small">较小</tu-radio>
    <tu-radio label="medium">中等</tu-radio>
    <tu-radio label="large">较大</tu-radio>
  </tu-radio-group>

  <p>日期选择</p>
  <tu-date-picker :size="size" />

  <p>日期时间</p>
  <tu-date-picker showTime :size="size" />

  <p>日期范围</p>
  <tu-range-picker :size="size" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const size = ref('medium');
</script>
