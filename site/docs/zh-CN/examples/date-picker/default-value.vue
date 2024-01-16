<template>
  <p>日期</p>
  <tu-date-picker
    allowClear
    defaultValue="2024-01-01"
    @select="onSelect"
    @change="onChange"
  />

  <p>自定义日期格式</p>
  <tu-date-picker
    allowClear
    defaultValue="2024-01-01"
    :format="(value: Date) => `自定义格式： ${dayjs(value).format('YYYY-MM-DD')}`"
    @select="onSelect"
    @change="onChange"
  />

  <p>日期时间</p>
  <tu-date-picker
    allowClear
    showTime
    defaultValue="2024-01-01 10:01:01"
    @select="onSelect"
    @change="onChange"
  />

  <p>周</p>
  <tu-week-picker
    allowClear
    :defaultValue="dayjs('2024-01-01')"
    @select="onSelect"
    @change="onChange"
  />

  <p>月</p>
  <tu-month-picker
    allowClear
    defaultValue="2024-01"
    @select="onSelect"
    @change="onChange"
  />

  <p>年</p>
  <tu-year-picker
    allowClear
    defaultValue="2024"
    @select="onSelect"
    @change="onChange"
  />

  <p>日期范围</p>
  <tu-range-picker
    allowClear
    showTime
    :defaultValue="['2024-01-01 01:01:01', '2024-02-14 02:02:02']"
    @select="onSelect"
    @change="onChange"
  />

  <p>月份范围</p>
  <tu-range-picker
    allowClear
    mode="month"
    :defaultValue="['2024-01', '2025-01']"
    @select="onSelect"
    @change="onChange"
  />
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';

const onChange = (dateString: string, date: Date) => {
  console.log('onChange', dateString, date);
};

const onSelect = (dateString: string, date: Date) => {
  console.log('onSelect', dateString, date);
};

const onOk = (dateString: string, date: Date) => {
  console.log('onOk', dateString, date);
};
</script>
