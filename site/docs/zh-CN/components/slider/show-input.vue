<template>
  <tu-slider class="mb-2" :default-value="10" show-input />
  <tu-slider v-model="sliderValue" range show-input />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const sliderValue = ref([0, 10]);
</script>



