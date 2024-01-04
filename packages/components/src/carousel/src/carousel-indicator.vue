<template>
  <div :class="classes" v-bind="eventHandlers">
    <span
      v-if="type === 'slider'"
      :style="sliderStyle"
      :class="[
        nsCarousel.e('indicator-item'),
        nsCarousel.em('indicator-item', 'active')
      ]"
    />
    <template v-else>
      <span
        v-for="(item, index) in Array(count)"
        :key="index"
        :data-index="index"
        :class="[
          nsCarousel.e('indicator-item'),
          { [nsCarousel.em('indicator-item', 'active')]: index === activeIndex }
        ]"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import {
  carouselIndicatorProps,
  carouselIndicatorEmits
} from './carousel-indicator';
import { useNamespace } from '@tu-view-plus/hooks';

defineOptions({
  name: 'TuCarouselIndicator'
});

const props = defineProps(carouselIndicatorProps);
const emit = defineEmits(carouselIndicatorEmits);

const nsCarousel = useNamespace('carousel');

const classes = computed(() => ({
  [nsCarousel.e('indicator')]: true,
  [nsCarousel.em('indicator',props.type)]: props.type,
  [nsCarousel.em('indicator',props.position)]: props.position,
}));

const onClick = (event: MouseEvent) => {
  event.preventDefault();
  if (props.type == 'slider') {
    const x = event.offsetX;
    const width = (event.currentTarget as HTMLElement).clientWidth;
    if (event.target === event.currentTarget) {
      const index = Math.floor((x / width) * props.count);
      index !== props.activeIndex && emit('select', index);
    }
  } else {
    const index = Number.parseInt(
      (event.target as HTMLElement).getAttribute('data-index') ?? '',
      10
    );
    if (!Number.isNaN(index) && index !== props.activeIndex) {
      emit('select', index);
    }
  }
};

const eventHandlers = computed(() => {
  return props.trigger === 'click'
    ? { onClick }
    : { onMouseover: onClick };
});

const sliderStyle = computed(() => {
  const step = 100 / props.count
  return {width:`${step}%`,left:`${props.activeIndex * step}%`}
})
</script>
