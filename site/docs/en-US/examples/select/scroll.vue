<template>
  <tu-select
    placeholder="Please select"
    v-model="value"
    allow-clear
    @dropdown-scroll="handleScroll"
    @dropdown-reach-bottom="handleReachBottom"
  >
    <tu-select-option v-for="option in options" :key="option">
      {{ option }}
    </tu-select-option>
  </tu-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { TuMessage } from 'tu-view-plus';

const options = Array(20)
  .fill(null)
  .map((_, index) => `Option  ${index + 1}`);

const value = ref('');

const handleScroll = () => {};

const handleReachBottom = () => {
  TuMessage.success('触底了');
};
</script>
