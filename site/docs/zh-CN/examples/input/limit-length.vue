<template>
  <tu-input
    maxlength="10"
    type="text"
    v-model="inputValue"
    placeholder="请输入"
    show-word-limit
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const inputValue = ref('');
</script>