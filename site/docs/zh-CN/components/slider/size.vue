<template>
  <tu-slider class="mb-2" v-model="sliderValue" size="mini" />
  <tu-slider class="mb-2" v-model="sliderValue" size="small" />
  <tu-slider class="mb-2" v-model="sliderValue" />
  <tu-slider v-model="sliderValue" size="large" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const sliderValue = ref(20);
</script>
