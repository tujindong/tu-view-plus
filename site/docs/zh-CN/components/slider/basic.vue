<template>
  <tu-slider v-model="sliderValue" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const sliderValue = ref(20);
</script>
