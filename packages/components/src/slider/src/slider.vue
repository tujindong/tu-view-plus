<template>
  <div :class="classes">
    <div ref="trackRef" :class="trackClasses" @click="handleTrackClick">
      <div :class="nsSlider.e('bar')"></div>
      <tu-slider-ticks />
      <tu-slider-button
        v-if="range"
        :style="getButtonStyle(computedValue[0])"
        :min="min"
        :max="max"
        :disabled="sliderDisabled"
        :direction="direction"
        :value="computedValue[0]"
        :format-tooltip="formatTooltip"
        :show-tooltip="showTooltip"
        @movestart="handleMoveStart"
        @moving="handleStartMoving"
        @moveend="handleMoveEnd"
      />
      <tu-slider-button
        :style="getButtonStyle(computedValue[1])"
        :min="min"
        :max="max"
        :direction="direction"
        :disabled="sliderDisabled"
        :value="computedValue[1]"
        :format-tooltip="formatTooltip"
        :show-tooltip="showTooltip"
        @movestart="handleMoveStart"
        @moving="handleEndMoving"
        @moveend="handleMoveEnd"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useNamespace } from '@tu-view-plus/hooks';
import { isArray, isUndefined } from '@tu-view-plus/utils';
import { sliderProps, sliderEmits } from './slider';
import { useFormDisabled } from '../../form';
import NP from 'number-precision';
import { getOffsetPercent, getPositionStyle } from './utils';
import TuSliderTicks from './slider-ticks.vue';
import TuSliderButton from './slider-button.vue';
import '../style/slider.scss';

NP.enableBoundaryChecking(false);

defineOptions({
  name: 'TuSlider'
});

const props = defineProps(sliderProps);
const emit = defineEmits(sliderEmits);

const nsSlider = useNamespace('slider');

const sliderDisabled = useFormDisabled();

const trackRef = ref<HTMLElement | null>(null);
const trackRect = ref<DOMRect>();

const defaultValue = props.modelValue ? props.modelValue : props.defaultValue;
const startValue = ref(isArray(defaultValue) ? defaultValue[0] : 0);
const endValue = ref(isArray(defaultValue) ? defaultValue[1] : defaultValue);

const isDragging = ref(false);

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

const computedValue = computed<[number, number]>(() => {
  if (props.range) {
    if (isArray(props.modelValue)) {
      return props.modelValue;
    }
    return [startValue.value, props.modelValue ?? endValue.value];
  }
  if (isUndefined(props.modelValue)) {
    return [startValue.value, endValue.value];
  }
  if (isArray(props.modelValue)) {
    return [props.min ?? 0, props.modelValue[1]];
  }
  return [props.min ?? 0, props.modelValue];
});

const getValueByCoords = (x: number, y: number) => {
  if (!trackRect.value) return 0;
  const { left, top, width, height } = trackRect.value;
  const trackLength = props.direction === 'horizontal' ? width : height;
  const stepLength = (trackLength * props.step) / (props.max - props.min);
  let diff = props.direction === 'horizontal' ? x - left : top + height - y;
  if (diff < 0) diff = 0;
  if (diff > trackLength) diff = trackLength;
  const steps = Math.round(diff / stepLength);
  return NP.plus(props.min, NP.times(steps, props.step));
};

const getButtonStyle = (value: number) => {
  return getPositionStyle(
    getOffsetPercent(value, [props.min, props.max]),
    props.direction
  );
};

const handleChange = () => {
  if (props.range) {
    emit('update:modelValue', [startValue.value, endValue.value]);
    emit('change', [startValue.value, endValue.value]);
  } else {
    emit('update:modelValue', endValue.value);
    emit('change', endValue.value);
  }
};

const handleTrackClick = (e: MouseEvent) => {
  if (sliderDisabled.value) return;
  const { clientX, clientY } = e;
  if (trackRef.value) {
    trackRect.value = trackRef.value.getBoundingClientRect();
  }
  endValue.value = getValueByCoords(clientX, clientY);
  handleChange();
};

const handleMoveStart = () => {
  isDragging.value = true;
  if (trackRef.value) {
    trackRect.value = trackRef.value.getBoundingClientRect();
  }
};

const handleStartMoving = (x: number, y: number) => {
  startValue.value = getValueByCoords(x, y);
  handleChange();
};

const handleMoveEnd = () => {
  isDragging.value = false;
};

const handleEndMoving = (x: number, y: number) => {
  endValue.value = getValueByCoords(x, y);
  handleChange();
};
</script>
