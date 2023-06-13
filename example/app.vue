
<template>
  <tu-radio v-model="radio" label="a" />
  <br />
  <br />
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
  <h4>按钮样式</h4>
  <tu-radio-group type="border" v-model="radio6">
    <tu-radio label="上海" disabled></tu-radio>
    <tu-radio label="北京"></tu-radio>
    <tu-radio label="广州"></tu-radio>
    <tu-radio label="深圳"></tu-radio>
  </tu-radio-group>
  <tu-radio-group type="border" v-model="radio6" size="large">
    <tu-radio label="上海"></tu-radio>
    <tu-radio label="北京"></tu-radio>
    <tu-radio label="广州"></tu-radio>
    <tu-radio label="深圳"></tu-radio>
  </tu-radio-group>
  <tu-radio-group type="border" v-model="radio6" size="small">
    <tu-radio label="上海"></tu-radio>
    <tu-radio label="北京"></tu-radio>
    <tu-radio label="广州"></tu-radio>
    <tu-radio label="深圳"></tu-radio>
  </tu-radio-group>
  <tu-radio-group type="border" v-model="radio6" size="mini">
    <tu-radio label="上海"></tu-radio>
    <tu-radio label="北京"></tu-radio>
    <tu-radio label="广州"></tu-radio>
    <tu-radio label="深圳"></tu-radio>
  </tu-radio-group>

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
const radio6 = ref('上海');

const [sourceVisible, toggleSourceVisible] = useToggle();
</script>
<style lang="scss">
</style>
  