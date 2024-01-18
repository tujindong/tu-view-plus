<template>
  <p>日期绑定值 {{ value }}</p>
  <tu-date-picker v-model="value" allowClear />
  <p>日期范围绑定值 {{ rangeValue }}</p>
  <tu-range-picker v-model="rangeValue" allowClear />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref<Date>();
const rangeValue = ref<Date[]>();
</script>
