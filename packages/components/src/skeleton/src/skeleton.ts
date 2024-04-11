import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';

export const skeletonProps = buildProps({
  /**
   * @zh 是否展示骨架屏
   * @en Whether to display a skeleton screen
   */
  loading: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 是否开启骨架屏动画
   * @en Whether to enable skeleton screen animation
   */
  animation: {
    type: Boolean,
    default: false
  }
} as const);

export type SkeletonProps = ExtractPropTypes<typeof skeletonProps>;
