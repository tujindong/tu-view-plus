<template>
  <p>日期范围</p>
  <tu-range-picker allowClear @change="onChange" @select="onSelect" />

  <p>周范围</p>
  <tu-range-picker
    allowClear
    mode="week"
    @change="onChange"
    @select="onSelect"
  />

  <p>月范围</p>
  <tu-range-picker
    allowClear
    mode="month"
    @change="onChange"
    @select="onSelect"
  />

  <p>季度范围</p>
  <tu-range-picker
    allowClear
    mode="quarter"
    @change="onChange"
    @select="onSelect"
  />

  <p>年范围</p>
  <tu-range-picker
    allowClear
    mode="year"
    @change="onChange"
    @select="onSelect"
  />

  <p>日期时间范围</p>
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
