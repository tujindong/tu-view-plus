import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type CarouselArrow from './carousel-arrow.vue';

export const carouselArrowProps = buildProps({
  direction: {
    type: String,
    default: 'horizontal'
  },
  showArrow: {
    type: String,
    default: 'always'
  }
});

export const carouselArrowEmits = {
  previousClick: (evt: MouseEvent) => evt instanceof MouseEvent,
  nextClick: (evt: MouseEvent) => evt instanceof MouseEvent
};

export type CarouselArrowProps = ExtractPropTypes<typeof carouselArrowProps>;
export type CarouselArrowInstance = InstanceType<typeof CarouselArrow>;
