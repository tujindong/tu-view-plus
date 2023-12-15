<template>
  <p>时间选择</p>
  <tu-row :gutter="20" class="demo-time-picker-row mb-2">
    <tu-col :span="6">
      <tu-time-picker size="mini" placeholder="Please select" />
    </tu-col>

    <tu-col :span="6">
      <tu-time-picker size="small" placeholder="Please select" />
    </tu-col>

    <tu-col :span="6">
      <tu-time-picker placeholder="Please select" />
    </tu-col>

    <tu-col :span="6">
      <tu-time-picker size="large" placeholder="Please select" />
    </tu-col>
  </tu-row>

  <p>时间范围选择</p>
  <tu-row :gutter="20" class="demo-time-picker-row mb-2">
    <tu-col :span="12">
      <tu-time-picker
        size="mini"
        type="time-range"
        :placeholder="['Start time', 'Emd time']"
      />
    </tu-col>

    <tu-col :span="12">
      <tu-time-picker
        size="small"
        type="time-range"
        :placeholder="['Start time', 'Emd time']"
      />
    </tu-col>
  </tu-row>

  <tu-row :gutter="20" class="demo-time-picker-row">
    <tu-col :span="12">
      <tu-time-picker
        type="time-range"
        :placeholder="['Start time', 'Emd time']"
      />
    </tu-col>

    <tu-col :span="12">
      <tu-time-picker
        size="large"
        type="time-range"
        :placeholder="['Start time', 'Emd time']"
      />
    </tu-col>
  </tu-row>
</template>

<style>
.demo-time-picker-row {
  align-items: baseline;
}
</style>
