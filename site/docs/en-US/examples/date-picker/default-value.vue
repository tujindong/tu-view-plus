<template>
  <p>Date</p>
  <tu-date-picker
    allowClear
    defaultValue="2024-01-01"
    @select="onSelect"
    @change="onChange"
  />

  <p>Format date</p>
  <tu-date-picker
    allowClear
    defaultValue="2024-01-01"
    :format="(value: Date) => `Format date： ${dayjs(value).format('YYYY-MM-DD')}`"
    @select="onSelect"
    @change="onChange"
  />

  <p>DateTime</p>
  <tu-date-picker
    allowClear
    showTime
    defaultValue="2024-01-01 10:01:01"
    @select="onSelect"
    @change="onChange"
  />

  <p>Week</p>
  <tu-week-picker
    allowClear
    :defaultValue="dayjs('2024-01-01')"
    @select="onSelect"
    @change="onChange"
  />

  <p>Month</p>
  <tu-month-picker
    allowClear
    defaultValue="2024-01"
    @select="onSelect"
    @change="onChange"
  />

  <p>Year</p>
  <tu-year-picker
    allowClear
    defaultValue="2024"
    @select="onSelect"
    @change="onChange"
  />

  <p>DateRange</p>
  <tu-range-picker
    allowClear
    showTime
    :defaultValue="['2024-01-01 01:01:01', '2024-02-14 02:02:02']"
    @select="onSelect"
    @change="onChange"
  />

  <p>MonthRange</p>
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
