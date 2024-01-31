<template>
  <tu-date-picker
    class="mb-2"
    v-model:pickerValue="pickerValue"
    hide-trigger
    default-value="2019-06-03"
  />

  <tu-range-picker
    v-model:pickerValue="rangePickerValue"
    hide-trigger
    :default-value="['2019-08-01', '2020-06-01']"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const pickerValue = ref();
const rangePickerValue = ref();
</script>
