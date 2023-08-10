<template>
  <div :class="nsSlider.e('marks')">
    <div
      aria-hidden="true"
      v-for="mark in marks"
      :key="mark.key"
      :class="nsSlider.e('mark')"
      :style="getMarkStyle(mark.key)"
    >
      {{ mark.content }}
    </div>
  </div>
</template>


<script lang="ts" setup>
import { useNamespace } from '@tu-view-plus/hooks';
import { sliderMarksProps } from './slider-marks';
import { getOffsetPercent, getPositionStyle } from './utils';

defineOptions({
  name: 'TuSliderMarks'
});

const props = defineProps(sliderMarksProps);

const nsSlider = useNamespace('slider');

const getMarkStyle = (value: number) => {
  return getPositionStyle(
    getOffsetPercent(value, [props.min, props.max]),
    props.direction
  );
};
</script>