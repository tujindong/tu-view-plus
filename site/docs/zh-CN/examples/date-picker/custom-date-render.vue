<template>
  <tu-date-picker allowClear>
    <template #cell="{ date }">
      <div class="tu-picker__date">
        <div class="tu-picker__date-value" :style="getCellStyle(date)">
          {{ date.getDate() }}
        </div>
      </div>
    </template>
  </tu-date-picker>
</template>

<script lang="ts" setup>
const highlightDates = [11, 23];

const highlightStyle = {
  background: 'teal',
  color: 'white'
};

const getCellStyle = (date: Date) => {
  return highlightDates.includes(date.getDate()) ? highlightStyle : {};
};
</script>
