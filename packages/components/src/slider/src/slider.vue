<template>
  <div
    ref="sliderWrapper"
    :class="wrapperClasses"
    :id="range ? inputId : undefined"
    :role="range ? 'group' : undefined"
    :aria-label="range && !isLabeledByFormItem ? groupLabel : undefined"
    :aria-labelledby="
      range && isLabeledByFormItem ? tuFormItem?.labelId : undefined
    "
    @touchstart="onSliderWrapperPrevent"
    @touchmove="onSliderWrapperPrevent"
  >
    <div
      ref="slider"
      :class="classes"
      :style="sliderStyle"
      @mousedown="handleSliderDown"
      @touchstart="handleSliderDown"
    >
      <div :class="nsSlider.e('bar')" :style="barStyle"></div>
      <slider-button
        ref="firstButton"
        role="slider"
        :id="!range ? inputId : undefined"
        :model-value="firstValue"
        :vertical="vertical"
        :tooltip-class="tooltipClass"
        :placement="placement"
        :aria-label="
          range || !isLabeledByFormItem ? firstButtonLabel : undefined
        "
        :aria-labelledby="
          !range && isLabeledByFormItem ? tuFormItem?.labelId : undefined
        "
        :aria-valuemin="min"
        :aria-valuemax="range ? secondValue : max"
        :aria-valuenow="firstValue"
        :aria-valuetext="firstValueText"
        :aria-orientation="vertical ? 'vertical' : 'horizontal'"
        :aria-disabled="sliderDisabled"
        @update:model-value="setFirstValue"
      />
      <slider-button
        v-if="range"
        ref="secondButton"
        :model-value="secondValue"
        :vertical="vertical"
        :tooltip-class="tooltipClass"
        :placement="placement"
        role="slider"
        :aria-label="secondButtonLabel"
        :aria-valuemin="firstValue"
        :aria-valuemax="max"
        :aria-valuenow="secondValue"
        :aria-valuetext="secondValueText"
        :aria-orientation="vertical ? 'vertical' : 'horizontal'"
        :aria-disabled="sliderDisabled"
        @update:model-value="setSecondValue"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  CSSProperties,
  reactive,
  provide,
  toRefs,
  nextTick,
  shallowRef
} from 'vue';
import { sliderProps, sliderEmits, SliderInitData } from './slider';
import { useNamespace, useLocale } from '@tu-view-plus/hooks';
import { sliderContextKey } from './constants';
import {
  useFormItemInputId,
  useFormSize,
  useFormItem,
  useFormDisabled
} from '../../form';
import {
  CHANGE_EVENT,
  UPDATE_MODEL_EVENT,
  INPUT_EVENT
} from '@tu-view-plus/constants';
import SliderButton from './button.vue';
import '../style/slider.scss';

defineOptions({
  name: 'TuSlider'
});

const props = defineProps(sliderProps);

const emit = defineEmits(sliderEmits);

const nsSlider = useNamespace('slider');

const { t } = useLocale();

const { formItem: tuFormItem } = useFormItem();
const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
  formItemContext: tuFormItem
});

const initData = reactive<SliderInitData>({
  firstValue: 0,
  secondValue: 0,
  oldValue: 0,
  dragging: false,
  sliderSize: 1
});

const { firstValue, secondValue, sliderSize } = toRefs(initData);

const slider = shallowRef<HTMLElement>();

const sliderWrapperSize = useFormSize();

const sliderDisabled = useFormDisabled();

const groupLabel = computed<string>(
  () =>
    props.label ||
    t('tu.slider.defaultLabel', { min: props.min, max: props.max })
);

const wrapperClasses = computed(() => ({
  [nsSlider.b()]: true,
  [nsSlider.m(sliderWrapperSize.value)]: sliderWrapperSize.value,
  [nsSlider.m('with-input')]: props.showInput,
  [nsSlider.is('vertical')]: props.vertical
}));

const classes = computed(() => ({
  [nsSlider.e('runway')]: true,
  [nsSlider.is('show-input')]: props.showInput && !props.range,
  [nsSlider.is('disabled')]: sliderDisabled.value
}));

const sliderStyle = computed<CSSProperties>(() => {
  return props.vertical ? { height: props.height } : {};
});

const minValue = computed(() =>
  Math.min(initData.firstValue, initData.secondValue)
);

const maxValue = computed(() =>
  Math.max(initData.firstValue, initData.secondValue)
);

// bar
const barSize = computed(() => {
  return props.range
    ? `${((maxValue.value - minValue.value) / (props.max - props.min)) * 100}%`
    : `${((initData.firstValue - props.min) / (props.max - props.min)) * 100}%`;
});

const barStyle = computed<CSSProperties>(() => {
  return props.vertical
    ? { height: barSize.value, bottom: barStart.value }
    : { width: barSize.value, left: barStart.value };
});

const barStart = computed(() => {
  return props.range
    ? `${((minValue.value - props.min) / (props.max - props.min)) * 100}%`
    : '0%';
});

const precision = computed(() => {
  const { min, max, step } = props;
  const precision = [min, max, step].map((i) => {
    const decimal = String(i).split('.')[1];
    return decimal ? decimal.length : 0;
  });
  return Math.max.apply(null, precision);
});

// button
const firstButtonLabel = computed<string>(() => {
  if (props.range) {
    return props.rangeStartLabel || t('tu.slider.defaultRangeStartLabel');
  } else {
    return groupLabel.value;
  }
});

const secondButtonLabel = computed<string>(() => {
  return props.rangeEndLabel || t('tu.slider.defaultRangeEndLabel');
});

const firstValueText = computed<string>(() => {
  return props.formatValueText
    ? props.formatValueText(firstValue.value)
    : `${firstValue.value}`;
});

const secondValueText = computed<string>(() => {
  return props.formatValueText
    ? props.formatValueText(secondValue.value)
    : `${secondValue.value}`;
});

const setFirstValue = (firstValue: number | undefined) => {
  initData.firstValue = firstValue!;
  const value = props.range ? [minValue.value, maxValue.value] : firstValue!;
  emit(UPDATE_MODEL_EVENT, value);
  emit(INPUT_EVENT, value);
};

const setSecondValue = (secondValue: number) => {
  initData.secondValue = secondValue;
  if (props.range) {
    const value = [minValue.value, maxValue.value];
    emit(UPDATE_MODEL_EVENT, value);
    emit(INPUT_EVENT, value);
  }
};

const emitChange = async () => {
  await nextTick();
  emit(
    CHANGE_EVENT,
    props.range ? [minValue.value, maxValue.value] : props.modelValue
  );
};

const resetSize = () => {
  if (slider.value)
    initData.sliderSize =
      slider.value[`client${props.vertical ? 'Height' : 'Width'}`];
};

const updateDragging = (val: boolean) => {
  initData.dragging = val;
};

const onSliderWrapperPrevent = (event: TouchEvent) => {};

const handleSliderDown = () => {};

provide(sliderContextKey, {
  ...toRefs(props),
  sliderSize,
  disabled: sliderDisabled,
  precision,
  emitChange,
  resetSize,
  updateDragging
});
</script>
