<template>
  <tu-textarea v-model="textareaValue" placeholder="请输入" clearable />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const textareaValue = ref('');
</script>