<template>
  <tu-row :gutter="20" class="mb-2">
    <tu-col :span="12">
      <tu-time-picker
        use12Hours
        defaultValue="12:20:20 AM"
        format="hh:mm:ss A"
        placeholder="请选择时间"
      />
    </tu-col>
    <tu-col :span="12">
      <tu-time-picker
        use12Hours
        defaultValue="09:20:20 pm"
        format="hh:mm:ss a"
        placeholder="请选择时间"
      />
    </tu-col>
  </tu-row>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <tu-time-picker
        use12Hours
        defaultValue="2:20 AM"
        format="h:mm A"
        placeholder="请选择时间"
      />
    </tu-col>
    <tu-col :span="12">
      <tu-time-picker
        type="time-range"
        use12Hours
        format="hh:mm:ss A"
        placeholder="请选择时间"
        :defaultValue="['12:20:20 AM', '08:30:30 PM']"
      />
    </tu-col>
  </tu-row>
</template>
