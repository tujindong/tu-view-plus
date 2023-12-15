<template>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <tu-time-picker disabled placeholder="Please select" />
    </tu-col>
    <tu-col :span="12">
      <tu-time-picker
        type="time-range"
        disabled
        :placeholder="['Start time', 'Emd time']"
      />
    </tu-col>
  </tu-row>
</template>
