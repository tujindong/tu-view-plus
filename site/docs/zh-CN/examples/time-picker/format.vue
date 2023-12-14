<template>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <tu-time-picker format="HH:mm" placeholder="请选择时间" />
    </tu-col>
    <tu-col :span="12">
      <tu-time-picker
        type="time-range"
        format="HH:mm"
        :placeholder="['开始时间', '结束时间']"
      />
    </tu-col>
  </tu-row>
</template>
