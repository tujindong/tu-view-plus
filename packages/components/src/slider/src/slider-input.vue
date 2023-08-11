<template>
  <div :class="nsSlider.e('input')">
    <tu-input-number
      v-if="range"
      hide-button
      :size="size"
      :min="min"
      :max="max"
      :step="step"
      :disabled="disabled"
      :controls="false"
      :model-value="modelValue[0]"
      @change="(value?: number) => emit('startChange', value)"
    />
    <tu-input-number
      hide-button
      :size="size"
      :min="min"
      :max="max"
      :step="step"
      :disabled="disabled"
      :controls="false"
      :model-value="modelValue[1]"
      @change="(value?: number) => emit('endChange', value)"
    />
  </div>
</template>


<script lang="ts" setup>
import { useNamespace } from '@tu-view-plus/hooks';
import { sliderInputProps, sliderInputEmits } from './slider-input';
import TuInputNumber from '../../input-number';

defineOptions({
  name: 'TuSliderInput'
});

defineProps(sliderInputProps);
const emit = defineEmits(sliderInputEmits);

const nsSlider = useNamespace('slider');
</script>