<template>
  <div :class="classes">
    <div ref="trackRef" :class="trackClasses" @click="handleTrackClick">
      <div :class="nsSlider.e('bar')"></div>
      <tu-slider-ticks />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useNamespace } from '@tu-view-plus/hooks';
import { isArray } from '@tu-view-plus/utils';
import { sliderProps } from './slider';
import { useFormDisabled } from '../../form';
import TuSliderTicks from './ticks.vue';
import '../style/slider.scss';

defineOptions({
  name: 'TuSlider'
});

const props = defineProps(sliderProps);

const nsSlider = useNamespace('slider');

const sliderDisabled = useFormDisabled();

const trackRef = ref<HTMLElement | null>(null);
const trackRect = ref<DOMRect>();

const defaultValue = props.modelValue ? props.modelValue : props.defaultValue;
const endValue = ref(isArray(defaultValue) ? defaultValue[1] : defaultValue);

const classes = computed(() => ({
  [nsSlider.b()]: true,
  [nsSlider.m('vertical')]: props.direction === 'vertical',
  [nsSlider.m(props.size)]: props.size,
  [nsSlider.is('with-marks')]: Boolean(props.marks)
}));

const trackClasses = computed(() => ({
  [nsSlider.e('track')]: true,
  [nsSlider.m('vertical')]: props.direction === 'vertical',
  [nsSlider.is('disabled')]: sliderDisabled.value
}));

const handleTrackClick = (e: MouseEvent) => {
  if (sliderDisabled.value) return;
  const { clientX, clientY } = e;
  if (trackRef.value) {
    trackRect.value = trackRef.value.getBoundingClientRect();
  }
};
</script>
