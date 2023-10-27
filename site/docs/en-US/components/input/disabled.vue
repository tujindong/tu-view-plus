<template>
  <tu-input v-model="inputValue" disabled placeholder="请输入" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const inputValue = ref('');
</script>