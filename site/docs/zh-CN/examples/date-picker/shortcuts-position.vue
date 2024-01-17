<template>
  <p>左侧</p>
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

  <p>右侧</p>
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
    label: '昨天',
    value: () => dayjs().subtract(1, 'day')
  },
  {
    label: '今天',
    value: () => dayjs()
  },
  {
    label: '1周后',
    value: () => dayjs().add(1, 'week')
  },
  {
    label: '1个月后',
    value: () => dayjs().add(1, 'month')
  },
  {
    label: '2个月后',
    value: () => dayjs().add(2, 'month')
  }
];

const rangeShortcuts = [
  {
    label: '之后2天',
    value: () => [dayjs(), dayjs().add(2, 'day')]
  },
  {
    label: '之后7天',
    value: () => [dayjs(), dayjs().add(1, 'month')]
  },
  {
    label: '之后30天',
    value: () => [dayjs(), dayjs().add(1, 'month')]
  },
  {
    label: '之后6月',
    value: () => [dayjs(), dayjs().add(6, 'month')]
  },
  {
    label: '之后12月',
    value: () => [dayjs(), dayjs().add(1, 'year')]
  },
  {
    label: '之后10年',
    value: () => [dayjs(), dayjs().add(10, 'year')]
  }
];
</script>
