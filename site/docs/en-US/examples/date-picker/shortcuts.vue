<template>
  <p>Date time</p>
  <tu-date-picker
    allowClear
    show-time
    :shortcuts="[
      {
        label: '2 hours later',
        value: () => dayjs().add(2, 'hour')
      },
      {
        label: 'a week later',
        value: () => dayjs().add(1, 'week')
      },
      {
        label: 'a month later',
        value: () => dayjs().add(1, 'month')
      }
    ]"
  />

  <p>Month</p>
  <tu-month-picker
    allowClear
    :shortcuts="[
      {
        label: 'last month',
        value: () => dayjs().subtract(1, 'month')
      },
      {
        label: 'six months later',
        value: () => dayjs().add(6, 'month')
      },
      {
        label: 'two years later',
        value: () => dayjs().add(2, 'year')
      }
    ]"
  />

  <p>Date time range</p>
  <tu-range-picker
    allowClear
    :shortcuts="[
      {
        label: 'next 7 days',
        value: () => [dayjs(), dayjs().add(1, 'week')]
      },
      {
        label: 'next 30 days',
        value: () => [dayjs(), dayjs().add(1, 'month')]
      },
      {
        label: 'next 365 days',
        value: () => [dayjs(), dayjs().add(1, 'year')]
      }
    ]"
  />

  <p>Month range</p>
  <tu-range-picker
    allowClear
    mode="month"
    :shortcuts="[
      {
        label: 'next 6 months',
        value: () => [dayjs(), dayjs().add(6, 'month')]
      },
      {
        label: 'next 12 months',
        value: () => [dayjs(), dayjs().add(1, 'year')]
      },
      {
        label: 'next 10 years',
        value: () => [dayjs(), dayjs().add(10, 'year')]
      }
    ]"
  />
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
</script>
