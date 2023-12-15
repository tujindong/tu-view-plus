<template>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <tu-time-picker allow-clear placeholder="Please select" />
    </tu-col>
    <tu-col :span="12">
      <tu-time-picker
        type="time-range"
        allow-clear
        :placeholder="['Start time', 'End time']"
      />
    </tu-col>
  </tu-row>
</template>
