<template>
  <p>Show hours & minutes</p>
  <tu-date-picker
    allowClear
    show-time
    format="YYYY-MM-DD HH:mm"
    @change="onChange"
    @select="onSelect"
    @ok="onOk"
  />

  <p>Show hours & minutes & seconds</p>
  <tu-date-picker
    allowClear
    show-time
    format="YYYY-MM-DD HH:mm:ss"
    :time-picker-props="{ defaultValue: '09:09:06' }"
    @change="onChange"
    @select="onSelect"
    @ok="onOk"
  />

  <p>Time range</p>
  <tu-range-picker
    allowClear
    show-time
    format="YYYY-MM-DD HH:mm"
    :time-picker-props="{ defaultValue: ['00:00:00', '09:09:06'] }"
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
