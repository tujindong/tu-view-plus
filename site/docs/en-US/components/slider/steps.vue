<template>
  <p>步长为 10</p>
  <tu-slider v-model="sliderValue1" :step="10" />
  <p>步长为 20</p>
  <tu-slider v-model="sliderValue2" :step="20" />
  <p>步长为 20 并显示步长刻度线</p>
  <tu-slider v-model="sliderValue3" :step="20" :show-ticks="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const sliderValue1 = ref(20);
const sliderValue2 = ref(20);
const sliderValue3 = ref(20);
</script>
