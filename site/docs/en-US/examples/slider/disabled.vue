<template>
  <tu-slider v-model="sliderValue" disabled />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const sliderValue = ref(20);
</script>

