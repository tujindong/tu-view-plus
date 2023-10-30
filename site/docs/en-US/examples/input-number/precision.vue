<template>
  <tu-input-number
    placeholder="请输入"
    v-model="num"
    :precision="2"
    :step="0.1"
    :max="10"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const num = ref(1);
</script>