<template>
  <tu-slider class="mr-2" v-model="sliderValue1" direction="vertical" />
  <tu-slider
    class="mr-2"
    v-model="sliderValue2"
    :show-ticks="true"
    :step="20"
    direction="vertical"
  />
  <tu-slider
    direction="vertical"
    v-model="sliderValue3"
    :max="15"
    :marks="marks"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const sliderValue1 = ref(20);
const sliderValue2 = ref(20);
const sliderValue3 = ref(3);

const marks = {
  5: '5km',
  10: '10km'
};
</script>

