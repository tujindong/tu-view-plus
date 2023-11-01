<template>
  <tu-input
    v-model="inputValue"
    type="password"
    placeholder="Please input"
    show-password
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const inputValue = ref('');
</script>
