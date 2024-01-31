<template>
  <p>Select the range of 7 days</p>
  <tu-range-picker
    :disabledDate="disabledDate"
    @select="onSelect"
    @popupVisibleChange="onPopupVisibleChange"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dates = ref<Date[]>([]);

const onSelect = (valueString: string, value: Date[]) => {
  dates.value = value;
};

const onPopupVisibleChange = (visible: Boolean) => {
  if (!visible) dates.value = [];
};

const disabledDate = (current: Date) => {
  if (dates.value && dates.value.length) {
    const tooLate =
      dates.value[0] &&
      Math.abs((new Date(current) - dates.value[0]) / (24 * 60 * 60 * 1000)) >
        7;
    const tooEarly =
      dates.value[1] &&
      Math.abs((new Date(current) - dates.value[1]) / (24 * 60 * 60 * 1000)) >
        7;
    return tooEarly || tooLate;
  }
  return false;
};
</script>
