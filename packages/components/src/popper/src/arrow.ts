import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type Arrow from './arrow.vue';

export const popperArrowProps = buildProps({
  /**
   * @zh 箭头偏移
   * @en arrow offset
   * @defaultValue 5
   */
  arrowOffset: {
    type: Number,
    default: 5
  }
} as const);

export type PopperArrowProps = ExtractPropTypes<typeof popperArrowProps>;

export type PopperArrowInstance = InstanceType<typeof Arrow>;
