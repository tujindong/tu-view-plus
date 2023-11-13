<template>
  <tu-radio-group v-model="size">
    <tu-radio label="mini">超小</tu-radio>
    <tu-radio label="small">较小</tu-radio>
    <tu-radio label="medium">默认</tu-radio>
    <tu-radio label="large">较大</tu-radio>
  </tu-radio-group>

  <tu-descriptions
    title="有边框"
    direction="vertical"
    :column="4"
    :size="size"
    border
  >
    <tu-descriptions-item label="姓名">汤姆</tu-descriptions-item>
    <tu-descriptions-item label="手机号">18100000000</tu-descriptions-item>
    <tu-descriptions-item label="地点" :span="2">合肥</tu-descriptions-item>
    <tu-descriptions-item label="备注">
      <tu-tag :size="size">学校</tu-tag>
    </tu-descriptions-item>
    <tu-descriptions-item label="住址">安徽省合肥市高新区</tu-descriptions-item>
  </tu-descriptions>

  <tu-descriptions title="无边框" :column="4" :size="size" direction="vertical">
    <tu-descriptions-item label="姓名">汤姆</tu-descriptions-item>
    <tu-descriptions-item label="手机号">18100000000</tu-descriptions-item>
    <tu-descriptions-item label="地点" :span="2">合肥</tu-descriptions-item>
    <tu-descriptions-item label="备注">
      <tu-tag :size="size">学校</tu-tag>
    </tu-descriptions-item>
    <tu-descriptions-item label="住址">安徽省合肥市高新区</tu-descriptions-item>
  </tu-descriptions>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const size = ref('medium');
</script>

<style>
.tu-descriptions {
  margin-top: 20px;
}
</style>
