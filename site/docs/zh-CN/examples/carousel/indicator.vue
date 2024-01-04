<template>
  <div class="mb-2">
    <tu-radio-group
      type="button"
      v-model="indicatorType"
      @change="handleIndicatorTypeChange"
    >
      <tu-radio label="dot">dot</tu-radio>
      <tu-radio label="line">line</tu-radio>
      <tu-radio label="slider">slider</tu-radio>
    </tu-radio-group>
  </div>
  <div class="mb-2">
    <tu-radio-group
      type="button"
      v-model="indicatorPosition"
      @change="handleIndicatorPositionChange"
    >
      <tu-radio label="left">left</tu-radio>
      <tu-radio label="right">right</tu-radio>
      <tu-radio label="top">top</tu-radio>
      <tu-radio label="bottom">bottom</tu-radio>
      <tu-radio label="outer">outer</tu-radio>
    </tu-radio-group>
  </div>

  <tu-carousel
    show-arrow="never"
    :indicator-type="indicatorType"
    :indicator-position="indicatorPosition"
    :style="{ height: '240px' }"
  >
    <tu-carousel-item v-for="item in 3">
      <h3>{{ item }}</h3>
    </tu-carousel-item>
  </tu-carousel>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const indicatorType = ref('dot');
const handleIndicatorTypeChange = (_indicatorType: string) => {
  indicatorType.value = _indicatorType;
};

const indicatorPosition = ref('bottom');
const handleIndicatorPositionChange = (_indicatorPosition: string) => {
  indicatorPosition.value = _indicatorPosition;
};
</script>

<style scoped>
.tu-carousel__item:first-child {
  background-color: #875c00;
}

.tu-carousel__item:nth-child(2n) {
  background-color: #035880;
}

.tu-carousel__item:last-child {
  background-color: #2a3c85;
}

.tu-carousel h3 {
  text-align: center;
  line-height: 240px;
  margin-top: 0;
  color: #fff;
}
</style>
