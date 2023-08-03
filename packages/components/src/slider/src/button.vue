<template>
  <div
    ref="button"
    :class="classes"
    :style="style"
    :tabindex="disabled ? -1 : 0"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousedown="onButtonDown"
    @touchstart="onButtonDown"
    @focus="handleMouseEnter"
    @blur="handleMouseLeave"
    @keydown="onKeyDown"
  >
    <tu-tooltip
      ref="tooltip"
      :popupVisible="tooltipVisible"
      :placement="placement"
      :fallback-placements="['top', 'bottom', 'right', 'left']"
      :popper-class="tooltipClass"
      :disabled="!showTooltip"
    >
      <template #content>
        <span>{{ formatValue }}</span>
      </template>
      <div :class="[nsSlider.e('button'), { hover: hovering, dragging }]"></div>
    </tu-tooltip>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  CSSProperties,
  reactive,
  toRefs,
  inject,
  ref,
  nextTick,
  watch
} from 'vue';
import { buttonProps, buttonEmits } from './button';
import { useNamespace } from '@tu-view-plus/hooks';
import { sliderContextKey } from './constants';
import { debounce } from 'lodash-unified';
import { EVENT_CODE, UPDATE_MODEL_EVENT } from '@tu-view-plus/constants';
import TuTooltip from '../../tooltip';

import type { ButtonInitData } from './button';

const { left, down, right, up, home, end, pageUp, pageDown } = EVENT_CODE;

const props = defineProps(buttonProps);

const emit = defineEmits(buttonEmits);

const nsSlider = useNamespace('slider');

const tooltip = ref<any>();
const tooltipVisible = ref(false);

const button = ref<HTMLDivElement>();

const {
  disabled,
  min,
  max,
  step,
  showTooltip,
  precision,
  sliderSize,
  formatTooltip,
  emitChange,
  resetSize,
  updateDragging
} = inject(sliderContextKey)!;

const initData = reactive<ButtonInitData>({
  hovering: false,
  dragging: false,
  isClick: false,
  startX: 0,
  currentX: 0,
  startY: 0,
  currentY: 0,
  startPosition: 0,
  newPosition: 0,
  oldValue: props.modelValue
});

const { hovering, dragging } = toRefs(initData);

const currentPosition = computed(() => {
  return `${((props.modelValue - min.value) / (max.value - min.value)) * 100}%`;
});

const enableFormat = computed(() => {
  return formatTooltip?.value instanceof Function;
});

const formatValue = computed(() => {
  return (
    (enableFormat.value && formatTooltip?.value!(props.modelValue)) ||
    props.modelValue
  );
});

const classes = computed(() => ({
  [nsSlider.e('button-wrapper')]: true,
  hover: hovering,
  dragging
}));

const style = computed<CSSProperties>(() => {
  return props.vertical
    ? { bottom: currentPosition.value }
    : { left: currentPosition.value };
});

const displayTooltip = debounce(() => {
  showTooltip.value && (tooltipVisible.value = true);
}, 50);

const hideTooltip = debounce(() => {
  showTooltip.value && (tooltipVisible.value = false);
}, 50);

const setPosition = async (newPosition: number) => {
  if (newPosition === null || Number.isNaN(+newPosition)) return;
  if (newPosition < 0) {
    newPosition = 0;
  } else if (newPosition > 100) {
    newPosition = 100;
  }
  const lengthPerStep = 100 / ((max.value - min.value) / step.value);
  const steps = Math.round(newPosition / lengthPerStep);
  let value =
    steps * lengthPerStep * (max.value - min.value) * 0.01 + min.value;
  value = Number.parseFloat(value.toFixed(precision.value));

  if (value !== props.modelValue) {
    emit(UPDATE_MODEL_EVENT, value);
  }

  if (!initData.dragging && props.modelValue !== initData.oldValue) {
    initData.oldValue = props.modelValue;
  }

  await nextTick();
  initData.dragging && displayTooltip();
  tooltip.value!.updatePopper();
};

const getClientXY = (event: MouseEvent | TouchEvent) => {
  let clientX: number;
  let clientY: number;
  if (event.type.startsWith('touch')) {
    clientY = (event as TouchEvent).touches[0].clientY;
    clientX = (event as TouchEvent).touches[0].clientX;
  } else {
    clientY = (event as MouseEvent).clientY;
    clientX = (event as MouseEvent).clientX;
  }
  return {
    clientX,
    clientY
  };
};

const onDragStart = (event: MouseEvent | TouchEvent) => {
  initData.dragging = true;
  initData.isClick = true;
  const { clientX, clientY } = getClientXY(event);
  if (props.vertical) {
    initData.startY = clientY;
  } else {
    initData.startX = clientX;
  }
  initData.startPosition = Number.parseFloat(currentPosition.value);
  initData.newPosition = initData.startPosition;
};

const onDragging = (event: MouseEvent | TouchEvent) => {
  if (initData.dragging) {
    initData.isClick = false;
    displayTooltip();
    resetSize();
    let diff: number;
    const { clientX, clientY } = getClientXY(event);
    if (props.vertical) {
      initData.currentY = clientY;
      diff = ((initData.startY - initData.currentY) / sliderSize.value) * 100;
    } else {
      initData.currentX = clientX;
      diff = ((initData.currentX - initData.startX) / sliderSize.value) * 100;
    }
    initData.newPosition = initData.startPosition + diff;
    setPosition(initData.newPosition);
  }
};

const onDragEnd = () => {
  if (initData.dragging) {
    setTimeout(() => {
      initData.dragging = false;
      if (!initData.hovering) {
        hideTooltip();
      }
      if (!initData.isClick) {
        setPosition(initData.newPosition);
      }
      emitChange();
    }, 0);
    window.removeEventListener('mousemove', onDragging);
    window.removeEventListener('touchmove', onDragging);
    window.removeEventListener('mouseup', onDragEnd);
    window.removeEventListener('touchend', onDragEnd);
    window.removeEventListener('contextmenu', onDragEnd);
  }
};

const handleMouseEnter = () => {
  initData.hovering = true;
  displayTooltip();
};

const handleMouseLeave = () => {
  initData.hovering = false;
  if (!initData.dragging) hideTooltip();
};

const onButtonDown = (event: MouseEvent | TouchEvent) => {
  if (disabled.value) return;
  event.preventDefault();
  onDragStart(event);
  window.addEventListener('mousemove', onDragging);
  window.addEventListener('touchmove', onDragging);
  window.addEventListener('mouseup', onDragEnd);
  window.addEventListener('touchend', onDragEnd);
  window.addEventListener('contextmenu', onDragEnd);
  button.value!.focus();
};

const incrementPosition = (amount: number) => {
  if (disabled.value) return;
  initData.newPosition =
    Number.parseFloat(currentPosition.value) +
    (amount / (max.value - min.value)) * 100;
  setPosition(initData.newPosition);
  emitChange();
};

const onLeftKeyDown = () => {
  incrementPosition(-step.value);
};

const onRightKeyDown = () => {
  incrementPosition(step.value);
};

const onPageDownKeyDown = () => {
  incrementPosition(-step.value * 4);
};

const onPageUpKeyDown = () => {
  incrementPosition(step.value * 4);
};

const onHomeKeyDown = () => {
  if (disabled.value) return;
  setPosition(0);
  emitChange();
};

const onEndKeyDown = () => {
  if (disabled.value) return;
  setPosition(100);
  emitChange();
};

const onKeyDown = (event: KeyboardEvent) => {
  let isPreventDefault = true;
  if ([left, down].includes(event.key)) {
    onLeftKeyDown();
  } else if ([right, up].includes(event.key)) {
    onRightKeyDown();
  } else if (event.key === home) {
    onHomeKeyDown();
  } else if (event.key === end) {
    onEndKeyDown();
  } else if (event.key === pageDown) {
    onPageDownKeyDown();
  } else if (event.key === pageUp) {
    onPageUpKeyDown();
  } else {
    isPreventDefault = false;
  }
  isPreventDefault && event.preventDefault();
};

watch(
  () => initData.dragging,
  (val) => {
    updateDragging(val);
  }
);
</script>