<template>
  <tu-input v-model="inputValue" disabled placeholder="Please input" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const inputValue = ref('');
</script>
