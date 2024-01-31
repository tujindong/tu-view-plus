<template>
  <p>Left</p>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <tu-date-picker
        allowClear
        shortcuts-position="left"
        :shortcuts="shortcuts"
      />
    </tu-col>
    <tu-col :span="12">
      <tu-range-picker
        allowClear
        shortcuts-position="left"
        :shortcuts="rangeShortcuts"
      />
    </tu-col>
  </tu-row>

  <p>Right</p>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <tu-date-picker
        allowClear
        shortcuts-position="right"
        :shortcuts="shortcuts"
      />
    </tu-col>
    <tu-col :span="12">
      <tu-range-picker
        allowClear
        shortcuts-position="right"
        :shortcuts="rangeShortcuts"
      />
    </tu-col>
  </tu-row>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';

const shortcuts = [
  {
    label: 'yesterday',
    value: () => dayjs().subtract(1, 'day')
  },
  {
    label: 'today',
    value: () => dayjs()
  },
  {
    label: 'a week later',
    value: () => dayjs().add(1, 'week')
  },
  {
    label: 'a month later',
    value: () => dayjs().add(1, 'month')
  },
  {
    label: '2 months later',
    value: () => dayjs().add(2, 'month')
  }
];

const rangeShortcuts = [
  {
    label: 'next 2 days',
    value: () => [dayjs(), dayjs().add(2, 'day')]
  },
  {
    label: 'next 7 days',
    value: () => [dayjs(), dayjs().add(1, 'month')]
  },
  {
    label: 'next 30 days',
    value: () => [dayjs(), dayjs().add(1, 'month')]
  },
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
];
</script>
