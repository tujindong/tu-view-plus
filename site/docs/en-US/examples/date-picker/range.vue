<template>
  <p>Date range</p>
  <tu-range-picker allowClear @change="onChange" @select="onSelect" />

  <p>Week range</p>
  <tu-range-picker
    allowClear
    mode="week"
    @change="onChange"
    @select="onSelect"
  />

  <p>Month range</p>
  <tu-range-picker
    allowClear
    mode="month"
    @change="onChange"
    @select="onSelect"
  />

  <p>Quarter range</p>
  <tu-range-picker
    allowClear
    mode="quarter"
    @change="onChange"
    @select="onSelect"
  />

  <p>Year range</p>
  <tu-range-picker
    allowClear
    mode="year"
    @change="onChange"
    @select="onSelect"
  />

  <p>DateTime range</p>
  <tu-range-picker
    allowClear
    showTime
    @change="onChange"
    @select="onSelect"
    @ok="onOk"
  />
</template>

<script lang="ts" setup>
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
