<template>
  <tu-row :gutter="20">
    <tu-col :span="12">
      <tu-time-picker
        placeholder="Please select"
        :disabledHours="() => [1, 2, 4, 14]"
        :disabledMinutes="() => [1, 2, 3, 4, 14, 15, 16, 20, 50]"
        :disabledSeconds="() => [1, 2, 3, 4, 5, 6, 7, 10, 14, 60]"
      />
    </tu-col>
    <tu-col :span="12">
      <tu-time-picker
        type="time-range"
        :placeholder="['Start time', 'End time']"
        :disabledHours="() => [1, 2, 4, 14]"
        :disabledMinutes="() => [1, 2, 3, 4, 14, 15, 16, 20, 50]"
        :disabledSeconds="() => [1, 2, 3, 4, 5, 6, 7, 10, 14, 60]"
      />
    </tu-col>
  </tu-row>
</template>
