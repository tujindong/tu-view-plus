<template>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <tu-time-picker placeholder="请选择时间" defaultValue="18:01:02" />
    </tu-col>
    <tu-col :span="12">
      <tu-time-picker
        type="time-range"
        :placeholder="['开始时间', '结束时间']"
        :defaultValue="['09:01:02', '18:01:02']"
      />
    </tu-col>
  </tu-row>
</template>
