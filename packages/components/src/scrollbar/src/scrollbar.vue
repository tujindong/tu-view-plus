<template>
  <div ref="scrollbarRef" :class="nsScrollbar.b()">
    <div
      ref="wrapRef"
      :class="wrapClasses"
      :style="wrapStyles"
      @scroll="handleScroll"
    >
      <component
        :is="tag"
        ref="viewRef"
        :class="[nsScrollbar.e('view'), viewClass]"
        :style="viewStyle"
      >
        <slot />
      </component>
      <template v-if="!native">
        <bar
          ref="barRef"
          :height="sizeHeight"
          :width="sizeWidth"
          :always="always"
          :ratio-x="ratioX"
          :ratio-y="ratioY"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  nextTick,
  onMounted,
  onUpdated,
  provide,
  reactive,
  ref,
  watch
} from 'vue';
import { useEventListener, useResizeObserver } from '@vueuse/core';
import { scrollbarProps, scrollbarEmits } from './scrollbar';
import { useNamespace } from '@tu-view-plus/hooks';
import { addUnit, debugWarn, isNumber, isObject } from '@tu-view-plus/utils';
import { GAP } from './util';
import { scrollbarContextKey } from './constants';
import Bar from './bar.vue';
import '../style/scrollbar.scss';

import type { BarInstance } from './bar';
import type { CSSProperties, StyleValue } from 'vue';

defineOptions({
  name: 'TuScrollbar'
});

const props = defineProps(scrollbarProps);
const emit = defineEmits(scrollbarEmits);

let stopResizeObserver: (() => void) | undefined = undefined;
let stopResizeListener: (() => void) | undefined = undefined;

const nsScrollbar = useNamespace('scrollbar');

const scrollbarRef = ref<HTMLDivElement>();
const wrapRef = ref<HTMLDivElement>();
const resizeRef = ref<HTMLElement>();

const sizeWidth = ref('0');
const sizeHeight = ref('0');
const barRef = ref<BarInstance>();
const ratioY = ref(1);
const ratioX = ref(1);

const wrapClasses = computed(() => [
  props.wrapClass,
  nsScrollbar.e('wrap'),
  { [nsScrollbar.em('wrap', 'hidden-default')]: !props.native }
]);

const wrapStyles = computed<StyleValue>(() => {
  const style: CSSProperties = {};
  if (props.height) style.height = addUnit(props.height);
  if (props.maxHeight) style.maxHeight = addUnit(props.maxHeight);
  return [props.wrapStyle, style];
});

const handleScroll = () => {
  if (wrapRef.value) {
    barRef.value?.handleScroll(wrapRef.value);

    emit('scroll', {
      scrollTop: wrapRef.value.scrollTop,
      scrollLeft: wrapRef.value.scrollLeft
    });
  }
};

function scrollTo(xCord: number, yCord?: number): void;
function scrollTo(options: ScrollToOptions): void;
function scrollTo(arg1: unknown, arg2?: number) {
  if (isObject(arg1)) {
    wrapRef.value!.scrollTo(arg1);
  } else if (isNumber(arg1) && isNumber(arg2)) {
    wrapRef.value!.scrollTo(arg1, arg2);
  }
}

const setScrollTop = (value: number) => {
  if (!isNumber(value)) {
    debugWarn('TuSrollbar', 'value must be a number');
    return;
  }
  wrapRef.value!.scrollTop = value;
};

const setScrollLeft = (value: number) => {
  if (!isNumber(value)) {
    debugWarn('TuSrollbar', 'value must be a number');
    return;
  }
  wrapRef.value!.scrollLeft = value;
};

const update = () => {
  if (!wrapRef.value) return;
  const offsetHeight = wrapRef.value.offsetHeight - GAP;
  const offsetWidth = wrapRef.value.offsetWidth - GAP;

  const originalHeight = offsetHeight ** 2 / wrapRef.value.scrollHeight;
  const originalWidth = offsetWidth ** 2 / wrapRef.value.scrollWidth;
  const height = Math.max(originalHeight, props.minSize);
  const width = Math.max(originalWidth, props.minSize);

  ratioY.value =
    originalHeight /
    (offsetHeight - originalHeight) /
    (height / (offsetHeight - height));

  ratioX.value =
    originalWidth /
    (offsetWidth - originalWidth) /
    (width / (offsetWidth - width));

  sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : '';
  sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : '';
};

provide(
  scrollbarContextKey,
  reactive({
    scrollbarElement: scrollbarRef,
    wrapElement: wrapRef
  })
);

watch(
  () => props.noresize,
  (noresize) => {
    if (noresize) {
      stopResizeObserver?.();
      stopResizeListener?.();
    } else {
      ({ stop: stopResizeObserver } = useResizeObserver(resizeRef, update));
      stopResizeListener = useEventListener('resize', update);
    }
  },
  { immediate: true }
);

watch(
  () => [props.maxHeight, props.height],
  () => {
    if (!props.native)
      nextTick(() => {
        update();
        if (wrapRef.value) {
          barRef.value?.handleScroll(wrapRef.value);
        }
      });
  }
);

onMounted(async () => {
  if (!props.native) {
    await nextTick();
    update();
  }
});

onUpdated(() => update());

defineExpose({
  wrapRef,
  update,
  scrollTo,
  setScrollTop,
  setScrollLeft,
  handleScroll
});
</script>
