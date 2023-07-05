<template>
  <div>
    <tu-input
      size="small"
      disabled
      v-model="input"
      placeholder="请输入"
      :prefix-icon="Search"
    >
      <template #prepend>
        <span>123</span>
      </template>
      <template #append>
        <span>456</span>
      </template>
    </tu-input>

    <br />
    <br />
    <tu-input placeholder="请输入" :validateEvent="true"></tu-input>
    <br />
    <br />
    <tu-input size="mini" placeholder="请输入"></tu-input>
    <br />
    <br />
    <tu-input size="large" placeholder="请输入"></tu-input>
    <br />
    <br />
    <tu-input v-model="input" disabled placeholder="Please input" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useToggle } from '@vueuse/core';
import { Tools, Search } from '@tu-view-plus/icons-vue';

const [visible, toggleVisible] = useToggle();

const radio = ref(1);
const input = ref('');
</script>
<style lang="scss"></style>
