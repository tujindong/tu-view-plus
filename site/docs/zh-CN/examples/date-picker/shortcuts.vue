<template>
  <p>日期时间</p>
  <tu-date-picker
    allowClear
    show-time
    :shortcuts="[
      {
        label: '2小时后',
        value: () => dayjs().add(2, 'hour')
      },
      {
        label: '1周后',
        value: () => dayjs().add(1, 'week')
      },
      {
        label: '1个月后',
        value: () => dayjs().add(1, 'month')
      }
    ]"
  />

  <p>月份</p>
  <tu-month-picker
    allowClear
    :shortcuts="[
      {
        label: '上1个月',
        value: () => dayjs().subtract(1, 'month')
      },
      {
        label: '6个月后',
        value: () => dayjs().add(6, 'month')
      },
      {
        label: '2年以后',
        value: () => dayjs().add(2, 'year')
      }
    ]"
  />

  <p>日期时间范围</p>
  <tu-range-picker
    allowClear
    :shortcuts="[
      {
        label: '7天后',
        value: () => [dayjs(), dayjs().add(1, 'week')]
      },
      {
        label: '30天后',
        value: () => [dayjs(), dayjs().add(1, 'month')]
      },
      {
        label: '1年后',
        value: () => [dayjs(), dayjs().add(1, 'year')]
      }
    ]"
  />

  <p>月份范围</p>
  <tu-range-picker
    allowClear
    mode="month"
    :shortcuts="[
      {
        label: '6个月后',
        value: () => [dayjs(), dayjs().add(6, 'month')]
      },
      {
        label: '12个月后',
        value: () => [dayjs(), dayjs().add(1, 'year')]
      },
      {
        label: '10年后',
        value: () => [dayjs(), dayjs().add(10, 'year')]
      }
    ]"
  />
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
</script>
