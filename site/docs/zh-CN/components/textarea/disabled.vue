<template>
  <tu-textarea v-model="textareaValue" disabled placeholder="请输入" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const textareaValue = ref('');
</script>