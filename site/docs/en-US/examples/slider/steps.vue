<template>
  <p>Step is 10</p>
  <tu-slider v-model="sliderValue1" :step="10" />
  <p>Step is 20</p>
  <tu-slider v-model="sliderValue2" :step="20" />
  <p>Step is 20 and show ticks</p>
  <tu-slider v-model="sliderValue3" :step="20" :show-ticks="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const sliderValue1 = ref(20);
const sliderValue2 = ref(20);
const sliderValue3 = ref(20);
</script>
