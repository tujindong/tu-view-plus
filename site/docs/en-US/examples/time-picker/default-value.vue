<template>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <tu-time-picker placeholder="Please select" defaultValue="18:01:02" />
    </tu-col>
    <tu-col :span="12">
      <tu-time-picker
        type="time-range"
        :placeholder="['Start time', 'Emd time']"
        :defaultValue="['09:01:02', '18:01:02']"
      />
    </tu-col>
  </tu-row>
</template>
