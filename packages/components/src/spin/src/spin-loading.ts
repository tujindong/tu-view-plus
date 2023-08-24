import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

export const spinLoadingProps = buildProps({
  /**
   * @zh 尺寸
   * @en Size
   */
  size: {
    type: Number,
    default: 20
  }
});

export type SpinLoadingProps = ExtractPropTypes<typeof spinLoadingProps>;
