<template>
  <div :class="nsSlider.e('dots')">
    <div
      v-for="dot in dots"
      :key="dot.key"
      :class="nsSlider.e('dot-wrap')"
      :style="getDotsWrapStyle(dot.key)"
    >
      <div
        :class="[nsSlider.e('dot'), { [nsSlider.is('active')]: dot.isActive }]"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@tu-view-plus/hooks';
import { sliderDotsProps } from './slider-dots';
import { getOffsetPercent, getPositionStyle } from './utils';

defineOptions({
  name: 'TuSliderDots'
});

const props = defineProps(sliderDotsProps);

const nsSlider = useNamespace('slider');

const getDotsWrapStyle = (value: number) => {
  return getPositionStyle(
    getOffsetPercent(value, [props.min, props.max]),
    props.direction
  );
};
</script>