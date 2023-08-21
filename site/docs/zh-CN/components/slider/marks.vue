<template>
  <tu-slider class="mb-4" v-model="sliderValue" :max="15" :marks="marks" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const sliderValue = ref(20);

const marks = {
  0: '0km',
  5: '5km',
  10: '10km',
  15: '15km'
};
</script>
