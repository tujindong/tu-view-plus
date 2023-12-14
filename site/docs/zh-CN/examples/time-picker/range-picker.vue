<template>
  <tu-time-picker
    type="time-range"
    :placeholder="['开始时间', '结束时间']"
    @select="(valueString: String, value: Date) => handleSelect(valueString, value)"
    @change="(valueString: String, value: Date) => handleChange(valueString, value)"
  />
</template>

<script lang="ts" setup>
const handleSelect = (valueString: String, value: Date) => {
  console.log('select', { valueString, value });
};

const handleChange = (valueString: String, value: Date) => {
  console.log('change', { valueString, value });
};
</script>
