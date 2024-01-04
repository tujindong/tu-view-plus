<template>
  <div :class="classes">
    <div
      :class="leftClasses"
      @click="handlePreviousClick"
    >
      <tu-icon v-if="direction === 'horizontal'">
        <ArrowLeft />
      </tu-icon>
      <tu-icon v-else>
        <ArrowUp />
      </tu-icon>
    </div>

    <div
      :class="rightClasses"
      @click="handleNextClick"
    >
      <tu-icon v-if="direction === 'horizontal'">
        <ArrowRight />
      </tu-icon>
      <tu-icon v-else>
        <ArrowDown />
      </tu-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { carouselArrowProps, carouselArrowEmits } from './carousel-arrow';
import { TuIcon } from '../../icon';
import { useNamespace } from '@tu-view-plus/hooks';
import {
  ArrowLeft,
  ArrowUp,
  ArrowRight,
  ArrowDown
} from '@tu-view-plus/icons-vue';

defineOptions({
  name: 'TuCarouselArrow'
});

const props = defineProps(carouselArrowProps);
const emit = defineEmits(carouselArrowEmits);

const nsCarousel = useNamespace('carousel');

const classes = computed(() => ({
  [nsCarousel.e('arrow')]: true,
  [nsCarousel.em('arrow',props.showArrow)]: props.showArrow === 'hover'
}));

const leftClasses = computed(() => ({
  [nsCarousel.em('arrow', 'top')]: props.direction === 'vertical',
  [nsCarousel.em('arrow', 'left')]: props.direction !== 'vertical',
}))

const rightClasses = computed(() => ({
  [nsCarousel.em('arrow', 'bottom')]: props.direction === 'vertical',
  [nsCarousel.em('arrow', 'right')]: props.direction !== 'vertical',
}))

const handlePreviousClick = (evt: MouseEvent) => {
  emit('previousClick', evt);
};

const handleNextClick = (evt: MouseEvent) => {
  emit('nextClick', evt);
};
</script>
