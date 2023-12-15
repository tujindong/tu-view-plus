<template>
  <tu-time-picker
    type="time-range"
    :placeholder="['Start time', 'Emd time']"
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
