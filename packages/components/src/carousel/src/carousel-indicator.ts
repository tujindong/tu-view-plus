import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';

import {
  CarouselIndicatorPosition,
  CarouselIndicatorType,
  CarouselTriggerEvent
} from './constants';

export const carouselIndicatorProps = buildProps({
  count: {
    type: Number,
    default: 2
  },

  activeIndex: {
    type: Number,
    default: 0
  },

  type: {
    type: String as PropType<CarouselIndicatorType>,
    default: 'line'
  },

  position: {
    type: String as PropType<CarouselIndicatorPosition>,
    default: 'bottom'
  },

  trigger: {
    type: String as PropType<CarouselTriggerEvent>,
    default: 'click'
  }
});

export const carouselIndicatorEmits = {
  select: (cur: number | undefined, prev: number | undefined) => prev !== cur
};

export type CarouselIndicatorProps = ExtractPropTypes<
  typeof carouselIndicatorProps
>;
