<template>
  <div style="padding-bottom: 500px">
    <tu-textarea
      v-model="inputValue"
      :rows="4"
      placeholder="请输入"
      clearable
    />
    <br />
    <br />
    <tu-textarea disabled v-model="inputValue" placeholder="请输入" />
    <br />
    <br />
    <tu-textarea
      v-model="inputValue"
      :rows="2"
      type="textarea"
      placeholder="Please input"
    />
    <br />
    <br />
    <p>autosize true</p>
    <tu-textarea
      v-model="textarea1"
      autosize
      type="textarea"
      placeholder="Please input"
    />
    <div style="margin: 20px 0" />
    <p>autosize { minRows: 2, maxRows: 4 }</p>
    <tu-textarea
      v-model="textarea2"
      :autosize="{ minRows: 2, maxRows: 4 }"
      type="textarea"
      placeholder="Please input"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useToggle } from '@vueuse/core';
import { Search, ArrowLeft, ArrowRight } from '@tu-view-plus/icons-vue';

const [visible, toggleVisible] = useToggle();

const radio = ref(1);
const inputValue = ref('');
const textarea1 = ref(
  '1\t2\t3\t3\t3\t2\t3\t3\t\t2\t3\t3\t\t2\t3\t3\t\t2\t3\t3\t\t2\t3\t3\t\t2\t3\t3\t\t2\t3\t3\t\t2\t3\t3\t\t2\t3\t3\t\t2\t3\t3\t\t2\t3\t3\t'
);
const textarea2 = ref('');
const inputExceed = ref('exceed');
</script>
<style lang="scss"></style>
