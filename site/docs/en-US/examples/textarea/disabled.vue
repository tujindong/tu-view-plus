<template>
  <tu-textarea v-model="textareaValue" disabled placeholder="Please input" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const textareaValue = ref('');
</script>
