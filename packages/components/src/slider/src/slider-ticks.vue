<template>
  <div :class="nsSlider.e('ticks')">
    <div
      v-for="step in steps"
      :key="step.key"
      :class="[nsSlider.e('tick'), { [nsSlider.is('active')]: step.isActive }]"
      :style="getStepStyle(step.key)"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useNamespace } from '@tu-view-plus/hooks';
import { sliderTicksProps } from './slider-ticks';
import { getOffsetPercent, getPositionStyle } from './utils';
import NP from 'number-precision';

defineOptions({
  name: 'TuSliderTicks'
});

const props = defineProps(sliderTicksProps);

const nsSlider = useNamespace('slider');

const steps = computed(() => {
  const steps: Array<{ key: number; isActive: boolean }> = [];
  const stepsLength = Math.floor((props.max - props.min) / props.step);
  for (let i = 0; i <= stepsLength; i++) {
    const stepVal = NP.plus(i * props.step, props.min);
    if (stepVal <= props.min || stepVal >= props.max) continue;
    steps.push({
      key: stepVal,
      isActive: stepVal >= props.value[0] && stepVal <= props.value[1]
    });
  }
  return steps;
});

const getStepStyle = (value: number) => {
  return getPositionStyle(
    getOffsetPercent(value, [props.min, props.max]),
    props.direction
  );
};
</script>

<style>
</style>