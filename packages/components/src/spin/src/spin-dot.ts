import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

export const spinDotProps = buildProps({
  /**
   * @zh 尺寸
   * @en Size
   */
  size: {
    type: Number,
    default: 20
  }
});

export type SpinDotProps = ExtractPropTypes<typeof spinDotProps>;
