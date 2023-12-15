<template>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <tu-time-picker format="HH:mm" placeholder="Please select" />
    </tu-col>
    <tu-col :span="12">
      <tu-time-picker
        type="time-range"
        format="HH:mm"
        :placeholder="['Start time', 'End time']"
      />
    </tu-col>
  </tu-row>
</template>
