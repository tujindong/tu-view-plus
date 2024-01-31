<template>
  <tu-date-picker class="mb-2" defaultValue="2024-01-01" disabled />

  <tu-range-picker
    class="mb-2"
    disabled
    :defaultValue="['2024-01-01', '2024-06-01']"
  />

  <tu-range-picker
    class="mb-2"
    :defaultValue="['2020-08-08']"
    :disabled="[true, false]"
    :disabledDate="(current: Date) => dayjs(current).isBefore(dayjs('2020-08-08'))"
  />

  <tu-range-picker
    showTime
    :defaultValue="['2020-08-08 02:02:02']"
    :disabled="[true, false]"
  />
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
</script>
