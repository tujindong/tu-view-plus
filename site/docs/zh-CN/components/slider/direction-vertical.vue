<template>
  <tu-slider class="mr-2" :default-value="50" direction="vertical" />
  <tu-slider
    class="mr-2"
    v-model="sliderValue"
    :show-ticks="true"
    :step="20"
    direction="vertical"
  />
  <tu-slider direction="vertical" :default-value="5" :max="15" :marks="marks" />
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const sliderValue = ref(20);

const marks = {
  5: '5km',
  10: '10km'
};
</script>

