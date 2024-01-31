<template>
  <p>Disabled date</p>
  <tu-date-picker
    allowClear
    :disabledDate="(current: Date) => dayjs(current).isBefore(dayjs())"
  />

  <p>Disabled dateRange</p>
  <tu-range-picker
    allowClear
    :disabledDate="(current: Date) => dayjs(current).isBefore(dayjs())"
  />

  <p>Disabled dateTime</p>
  <tu-date-picker
    allowClear
    show-time
    :disabledDate="(current: Date) => dayjs(current).isBefore(dayjs())"
    :disabledTime="
      () => {
        return {
          disabledHours: () => range(6, 24),
          disabledMinutes: () => range(30, 60),
          disabledSeconds: () => range(30, 60)
        };
      }
    "
  />

  <p>Disabled dateTime range</p>
  <tu-range-picker
    allowClear
    show-time
    :timePickerProps="{ hideDisabledOptions: true }"
    :disabledDate="(current: Date) => dayjs(current).isBefore(dayjs())"
    :disabledTime="
      (date: Date, type: String) => {
        return {
          disabledHours: () => (type === 'start' ? range(0, 6) : range(6, 24)),
          disabledMinutes: () => (type === 'end' ? range(0, 30) : [31, 60]),
          disabledSeconds: () => range(30, 60)
        };
      }
    "
  />
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';

const range = (start: number, end: number) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};
</script>
