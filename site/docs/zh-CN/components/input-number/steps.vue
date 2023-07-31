<template>
  <tu-input-number placeholder="请输入" v-model="num" :step="2" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const num = ref(5);
</script>