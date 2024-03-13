<template>
  <component
    v-bind="$attrs"
    ref="wrapperRef"
    :is="component"
    :class="nsResizeBox.b()"
    :style="styles"
  >
    <slot />
    <TuResizeTrigger
      v-for="direction in allowDirections"
      :key="direction"
      :class="nsResizeBox.e(direction)"
      :direction="isHorizontal(direction) ? 'horizontal' : 'vertical'"
      @mousedown="
        (e) => {
          onMoveStart(direction, e);
        }
      "
      @resize="
        (entry) => {
          onTiggerResize(direction, entry);
        }
      "
    >
      <slot
        v-if="$slots['resize-trigger']"
        name="resize-trigger"
        :direction="direction"
      />
    </TuResizeTrigger>
  </component>
</template>

<script lang="ts" setup>
import { computed, toRefs, ref, reactive } from 'vue';
import { resizeBoxProps, resizeBoxEmits } from './resize-box';
import { useNamespace, useMergeState } from '@tu-view-plus/hooks';
import { isNumber, addUnit, off, on } from '@tu-view-plus/utils';
import TuResizeTrigger from '../../resize-trigger';
import {
  allDirections,
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  DIRECTION_TOP,
  DIRECTION_BOTTOM
} from './interface';
import '../style/resize-box.scss';

import type { PaddingCSSProperties, DirectionType } from './interface';

defineOptions({
  name: 'TuResizeBox',
  inheritAttrs: false
});

const props = defineProps(resizeBoxProps);
const emit = defineEmits(resizeBoxEmits);

const nsResizeBox = useNamespace('resize-box');

const { height: propHeight, width: propWidth, directions } = toRefs(props);

const [width, setWidth] = useMergeState<number | null>(
  null,
  reactive({
    value: propWidth
  })
);

const [height, setHeight] = useMergeState<number | null>(
  null,
  reactive({
    value: propHeight
  })
);

const wrapperRef = ref<HTMLDivElement>();

const allowDirections = computed(() =>
  directions.value.filter((direction) => allDirections.includes(direction))
);

const paddingStyles = reactive<Partial<Record<PaddingCSSProperties, string>>>(
  {}
);

const styles = computed(() => {
  return {
    ...(isNumber(width.value) ? { width: addUnit(width.value) } : {}),
    ...(isNumber(height.value) ? { height: addUnit(height.value) } : {}),
    ...paddingStyles
  };
});

const isHorizontal = (direction: DirectionType) => {
  return [DIRECTION_TOP, DIRECTION_BOTTOM].indexOf(direction) > -1;
};

const getRealSize = (pageSize: number, padding: number) => {
  if (pageSize === 0) return 0;
  const res = pageSize - padding;
  return res <= 0 ? 0 : res;
};

const record = {
  direction: '',
  startPageX: 0,
  startPageY: 0,
  startWidth: 0,
  startHeight: 0,
  moving: false,
  padding: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
};

const onMoveStart = (direction: DirectionType, e: MouseEvent) => {
  emit('movingStart', e);

  record.moving = true;
  record.startPageX = e.pageX;
  record.startPageY = e.pageY;
  record.direction = direction;

  const { top, left, right, bottom } = record.padding;
  record.startWidth = getRealSize(
    wrapperRef.value?.clientWidth || 0,
    left + right
  );
  record.startHeight = getRealSize(
    wrapperRef.value?.clientHeight || 0,
    top + bottom
  );

  on(window, 'mousemove', onMoving);
  on(window, 'mouseup', onMoveEnd);
  on(window, 'contextmenu', onMoveEnd);

  document.body.style.cursor = isHorizontal(direction)
    ? 'row-resize'
    : 'col-resize';
};

const onMoving = (e: MouseEvent) => {
  if (!record.moving) return;

  const { startPageX, startPageY, startWidth, startHeight, direction } = record;
  let newWidth = startWidth;
  let newHeight = startHeight;

  // 往右移动的距离
  const offsetX = e.pageX - startPageX;
  // 往下移动的距离
  const offsetY = e.pageY - startPageY;

  switch (direction) {
    case DIRECTION_LEFT:
      newWidth = startWidth - offsetX;
      setWidth(newWidth);
      emit('update:width', newWidth);
      break;
    case DIRECTION_RIGHT:
      newWidth = startWidth + offsetX;
      setWidth(newWidth);
      emit('update:width', newWidth);
      break;
    case DIRECTION_TOP:
      newHeight = startHeight - offsetY;
      setHeight(newHeight);
      emit('update:height', newHeight);
      break;
    case DIRECTION_BOTTOM:
      newHeight = startHeight + offsetY;
      setHeight(newHeight);
      emit('update:height', newHeight);
      break;
    default:
      break;
  }

  emit(
    'moving',
    {
      width: newWidth,
      height: newHeight
    },
    e
  );
};

const onMoveEnd = (e: MouseEvent) => {
  record.moving = false;

  off(window, 'mousemove', onMoving);
  off(window, 'mouseup', onMoveEnd);
  off(window, 'contextmenu', onMoveEnd);

  document.body.style.cursor = 'default';

  emit('movingEnd', e);
};

const onTiggerResize = (
  direction: DirectionType,
  entry: ResizeObserverEntry
) => {
  const { width, height } = entry.contentRect;
  const size = isHorizontal(direction) ? height : width;
  record.padding[direction] = size;
  paddingStyles[`padding-${direction}` as PaddingCSSProperties] = `${size}px`;
};
</script>
