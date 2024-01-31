<template>
  <tu-radio-group v-model="size" type="button">
    <tu-radio label="mini">Mini</tu-radio>
    <tu-radio label="small">Small</tu-radio>
    <tu-radio label="medium">Medium</tu-radio>
    <tu-radio label="large">Large</tu-radio>
  </tu-radio-group>

  <p>Date</p>
  <tu-date-picker :size="size" />

  <p>DateTime</p>
  <tu-date-picker showTime :size="size" />

  <p>DateRange</p>
  <tu-range-picker :size="size" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const size = ref('medium');
</script>
