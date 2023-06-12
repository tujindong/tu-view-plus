
<template>
  <div>
    <tu-radio v-model="radio1" label="1" size="large">备选项1</tu-radio>
    <tu-radio v-model="radio1" label="2" size="large">备选项2</tu-radio>
  </div>
  <div>
    <tu-radio v-model="radio2" label="1" size="medium">备选项1</tu-radio>
    <tu-radio v-model="radio2" label="2" size="medium">备选项2</tu-radio>
  </div>
  <div>
    <tu-radio v-model="radio3" label="1" size="small">备选项1</tu-radio>
    <tu-radio v-model="radio3" label="2" size="small">备选项2</tu-radio>
  </div>
  <div>
    <tu-radio v-model="radio4" label="1" size="mini">备选项1</tu-radio>
    <tu-radio v-model="radio4" label="2" size="mini">备选项2</tu-radio>
  </div>
  <br />
  <br />
  <h4>禁用状态</h4>
  <tu-radio disabled v-model="radio" label="禁用">备选项</tu-radio>
  <tu-radio disabled v-model="radio" label="选中且禁用">备选项</tu-radio>

  <br />
  <br />
  <h4>单选组框</h4>
  <tu-radio-group v-model="radio5">
    <tu-radio :label="3">备选项</tu-radio>
    <tu-radio :label="6">备选项</tu-radio>
    <tu-radio :label="9">备选项</tu-radio>
  </tu-radio-group>
  <br />
  <br />

  <tu-transition name="fade-in-linear">
    <div v-show="sourceVisible">
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
    </div>
  </tu-transition>
  <tu-button @click="toggleSourceVisible()">123</tu-button>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';
import { useToggle } from '@vueuse/core';

const radio1 = ref('1');
const radio2 = ref('2');
const radio3 = ref('3');
const radio4 = ref('4');
const radio = ref('选中且禁用');
const radio5 = ref(3);

const [sourceVisible, toggleSourceVisible] = useToggle();
</script>
<style lang="scss">
</style>
  