<template>
  <tu-radio v-model="radio" :label="1" disabled>Option 1</tu-radio>
  <tu-radio v-model="radio" :label="2" disabled>Option 2</tu-radio>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio = ref(1);
</script>
