<template>
  <tu-textarea
    maxlength="10"
    v-model="textareaValue"
    placeholder="请输入"
    show-word-limit
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const textareaValue = ref('');
</script>