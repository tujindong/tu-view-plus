<template>
  <tu-row>
    <tu-col :span="8">
      <p>超小</p>
      <tu-checkbox-group v-model="checked1" size="mini">
        <tu-checkbox :label="1">选项1</tu-checkbox>
        <tu-checkbox :label="2">选项2</tu-checkbox>
      </tu-checkbox-group>
      <p>较小</p>
      <tu-checkbox-group v-model="checked1" size="small">
        <tu-checkbox :label="1">选项1</tu-checkbox>
        <tu-checkbox :label="2">选项2</tu-checkbox>
      </tu-checkbox-group>
      <p>默认</p>
      <tu-checkbox-group v-model="checked1">
        <tu-checkbox :label="1">选项1</tu-checkbox>
        <tu-checkbox :label="2">选项2</tu-checkbox>
      </tu-checkbox-group>
      <p>较大</p>
      <tu-checkbox-group v-model="checked1" size="large">
        <tu-checkbox :label="1">选项1</tu-checkbox>
        <tu-checkbox :label="2">选项2</tu-checkbox>
      </tu-checkbox-group>
    </tu-col>
    <tu-col :span="8">
      <p>超小</p>
      <tu-checkbox-group v-model="checked2" size="mini" type="button">
        <tu-checkbox :label="1">选项1</tu-checkbox>
        <tu-checkbox :label="2">选项2</tu-checkbox>
      </tu-checkbox-group>
      <p>较小</p>
      <tu-checkbox-group v-model="checked2" size="small" type="button">
        <tu-checkbox :label="1">选项1</tu-checkbox>
        <tu-checkbox :label="2">选项2</tu-checkbox>
      </tu-checkbox-group>
      <p>默认</p>
      <tu-checkbox-group v-model="checked2" type="button">
        <tu-checkbox :label="1">选项1</tu-checkbox>
        <tu-checkbox :label="2">选项2</tu-checkbox>
      </tu-checkbox-group>
      <p>较大</p>
      <tu-checkbox-group v-model="checked2" size="large" type="button">
        <tu-checkbox :label="1">选项1</tu-checkbox>
        <tu-checkbox :label="2">选项2</tu-checkbox>
      </tu-checkbox-group>
    </tu-col>
    <tu-col :span="8">
      <p>超小</p>
      <tu-checkbox-group v-model="checked3" size="mini" type="border">
        <tu-checkbox :label="1">选项1</tu-checkbox>
        <tu-checkbox :label="2">选项2</tu-checkbox>
      </tu-checkbox-group>
      <p>较小</p>
      <tu-checkbox-group v-model="checked3" size="small" type="border">
        <tu-checkbox :label="1">选项1</tu-checkbox>
        <tu-checkbox :label="2">选项2</tu-checkbox>
      </tu-checkbox-group>
      <p>默认</p>
      <tu-checkbox-group v-model="checked3" type="border">
        <tu-checkbox :label="1">选项1</tu-checkbox>
        <tu-checkbox :label="2">选项2</tu-checkbox>
      </tu-checkbox-group>
      <p>较大</p>
      <tu-checkbox-group v-model="checked3" size="large" type="border">
        <tu-checkbox :label="1">选项1</tu-checkbox>
        <tu-checkbox :label="2">选项2</tu-checkbox>
      </tu-checkbox-group>
    </tu-col>
  </tu-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked1 = ref([]);
const checked2 = ref([]);
const checked3 = ref([]);
</script>