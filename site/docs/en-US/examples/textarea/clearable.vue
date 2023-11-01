<template>
  <tu-textarea v-model="textareaValue" placeholder="Please input" clearable />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const textareaValue = ref('');
</script>
