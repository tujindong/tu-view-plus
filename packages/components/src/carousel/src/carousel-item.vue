<template>
  <div :aria-hidden="!isCurrent" :class="classes" :style="animationStyle">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance, inject } from 'vue';
import { useNamespace } from '@tu-view-plus/hooks';
import { carouselInjectionKey, CarouselContext } from './constants';

defineOptions({
  name: 'TuCarouselItem'
});

const nsCarousel = useNamespace('carousel');

const itemInstance = getCurrentInstance();

const itemContext = inject<Partial<CarouselContext>>(carouselInjectionKey, {});

const index = computed(
  () => itemContext.items?.indexOf(itemInstance?.uid ?? -1) ?? -1
);

const isCurrent = computed(
  () => itemContext.mergedIndexes?.mergedIndex === index.value
);

const classes = computed(() => {
  const { previousIndex, animationName, slideDirection, mergedIndexes } =
    itemContext;
  return {
    [nsCarousel.e('item')]:true,
    [nsCarousel.em('item','prev')]: index.value === mergedIndexes?.mergedPrevIndex,
    [nsCarousel.em('item','next')]: index.value === mergedIndexes?.mergedNextIndex,
    [nsCarousel.em('item','current')]: isCurrent.value,
    [nsCarousel.em('item','slide-in')]:
      animationName === 'slide' && slideDirection && isCurrent.value,
    [nsCarousel.em('item','slide-out')]:
      animationName === 'slide' &&
      slideDirection &&
      index.value === previousIndex
  };
});

const animationStyle = computed(() => {
  const { transitionTimingFunction, moveSpeed } = itemContext;
  return {
    transitionTimingFunction,
    transitionDuration: `${moveSpeed}ms`,
    animationTimingFunction: transitionTimingFunction,
    animationDuration: `${moveSpeed}ms`
  };
});
</script>
