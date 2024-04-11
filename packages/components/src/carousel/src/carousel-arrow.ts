import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

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
