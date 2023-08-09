<template>
  <tu-tooltip
    :popup-visible="popupVisible"
    :position="mergedTooltipPosition"
    :content="tooltipContent"
  >
    <div
      v-bind="attrs"
      tabindex="0"
      role="slider"
      :class="nsSlider.e('button')"
      :aria-disabled="disabled"
      :aria-valuemax="max"
      :aria-valuemin="min"
      :aria-valuenow="value"
      :aria-valuetext="tooltipContent"
      @mousedown="handleMouseDown"
      @click.stop
    ></div>
  </tu-tooltip>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { computed, useAttrs } from 'vue';
import { sliderButtonProps, sliderButtonEmits } from './slider-button';
import { useNamespace } from '@tu-view-plus/hooks';
import { off, on } from '@tu-view-plus/utils';
import TuTooltip from '../../tooltip';

defineOptions({
  name: 'TuSliderButton',
  inheritAttrs: false
});

const props = defineProps(sliderButtonProps);
const emit = defineEmits(sliderButtonEmits);

const nsSlider = useNamespace('slider');

const attrs = useAttrs();

const isDragging = ref(false);

const popupVisible = computed(() =>
  props.showTooltip ? (isDragging.value ? true : undefined) : false
);

const mergedTooltipPosition = computed(() =>
  props.tooltipPosition ?? props.direction === 'vertical' ? 'right' : 'top'
);

const tooltipContent = computed(
  () => props.formatTooltip?.(props.value) ?? `${props.value}`
);

const handleMouseDown = (e: MouseEvent) => {
  if (props.disabled) return;
  e.preventDefault();
  isDragging.value = true;
  on(window, 'mousemove', handleMouseMove);
  on(window, 'mouseup', handleMouseUp);
  on(window, 'contextmenu', handleMouseUp);
  emit('movestart');
};

const handleMouseMove = (e: MouseEvent) => {
  emit('moving', e.clientX, e.clientY);
};

const handleMouseUp = () => {
  isDragging.value = false;
  off(window, 'mousemove', handleMouseMove);
  off(window, 'mouseup', handleMouseUp);
  emit('moveend');
};
</script>