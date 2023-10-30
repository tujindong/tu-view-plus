<template>
  <tu-checkbox v-model="checked1" disabled>选项1</tu-checkbox>
  <tu-checkbox v-model="checked2" disabled>选项2</tu-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked1 = ref(false);
const checked2 = ref(true);
</script>