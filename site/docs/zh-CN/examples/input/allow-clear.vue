<template>
  <tu-input v-model="inputValue" placeholder="请输入" allowClear />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const inputValue = ref('');
</script>
