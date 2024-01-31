<template>
  <p>Date value {{ value }}</p>
  <tu-date-picker v-model="value" allowClear />
  <p>DateRange value {{ rangeValue }}</p>
  <tu-range-picker v-model="rangeValue" allowClear />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref<Date>();
const rangeValue = ref<Date[]>();
</script>
