<template>
  <tu-row>
    <tu-col :span="8">
      <p>超小</p>
      <tu-radio-group v-model="radio1" size="mini">
        <tu-radio :label="1">选项1</tu-radio>
        <tu-radio :label="2">选项2</tu-radio>
      </tu-radio-group>
      <p>较小</p>
      <tu-radio-group v-model="radio1" size="small">
        <tu-radio :label="1">选项1</tu-radio>
        <tu-radio :label="2">选项2</tu-radio>
      </tu-radio-group>
      <p>默认</p>
      <tu-radio-group v-model="radio1">
        <tu-radio :label="1">选项1</tu-radio>
        <tu-radio :label="2">选项2</tu-radio>
      </tu-radio-group>
      <p>较大</p>
      <tu-radio-group v-model="radio1" size="large">
        <tu-radio :label="1">选项1</tu-radio>
        <tu-radio :label="2">选项2</tu-radio>
      </tu-radio-group>
    </tu-col>
    <tu-col :span="8">
      <p>超小</p>
      <tu-radio-group v-model="radio2" size="mini" type="button">
        <tu-radio :label="1">选项1</tu-radio>
        <tu-radio :label="2">选项2</tu-radio>
      </tu-radio-group>
      <p>较小</p>
      <tu-radio-group v-model="radio2" size="small" type="button">
        <tu-radio :label="1">选项1</tu-radio>
        <tu-radio :label="2">选项2</tu-radio>
      </tu-radio-group>
      <p>默认</p>
      <tu-radio-group v-model="radio2" type="button">
        <tu-radio :label="1">选项1</tu-radio>
        <tu-radio :label="2">选项2</tu-radio>
      </tu-radio-group>
      <p>较大</p>
      <tu-radio-group v-model="radio2" size="large" type="button">
        <tu-radio :label="1">选项1</tu-radio>
        <tu-radio :label="2">选项2</tu-radio>
      </tu-radio-group>
    </tu-col>
    <tu-col :span="8">
      <p>超小</p>
      <tu-radio-group v-model="radio3" size="mini" type="border">
        <tu-radio :label="1">选项1</tu-radio>
        <tu-radio :label="2">选项2</tu-radio>
      </tu-radio-group>
      <p>较小</p>
      <tu-radio-group v-model="radio3" size="small" type="border">
        <tu-radio :label="1">选项1</tu-radio>
        <tu-radio :label="2">选项2</tu-radio>
      </tu-radio-group>
      <p>默认</p>
      <tu-radio-group v-model="radio3" type="border">
        <tu-radio :label="1">选项1</tu-radio>
        <tu-radio :label="2">选项2</tu-radio>
      </tu-radio-group>
      <p>较大</p>
      <tu-radio-group v-model="radio3" size="large" type="border">
        <tu-radio :label="1">选项1</tu-radio>
        <tu-radio :label="2">选项2</tu-radio>
      </tu-radio-group>
    </tu-col>
  </tu-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio1 = ref(1);
const radio2 = ref(1);
const radio3 = ref(1);
</script>