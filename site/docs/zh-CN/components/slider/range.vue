<template>
  <tu-slider v-model="value" range />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref([10, 20]);
</script>
