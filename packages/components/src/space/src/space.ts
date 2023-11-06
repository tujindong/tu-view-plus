import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type Space from './space.vue';
import { SpaceSize, SpaceAlign, SpaceDirection } from './constants';

export const spaceProps = buildProps({
  /**
   * @zh 对齐方式
   * @en Alignment
   * @values 'start', 'end', 'center', 'baseline'
   */
  align: {
    type: String as PropType<SpaceAlign>
  },

  /**
   * @zh 间距方向
   * @en Spacing direction
   */
  direction: {
    type: String as PropType<SpaceDirection>,
    default: 'horizontal'
  },

  /**
   * @zh 间距大小，支持分别制定横向和竖向的间距
   * @en Spacing size, support for setting horizontal and vertical spacing separately
   */
  size: {
    type: [Number, String, Array] as PropType<
      SpaceSize | [SpaceSize, SpaceSize]
    >,
    default: 'small'
  },

  /**
   * @zh 环绕类型的间距，用于折行的场景。
   * @en The spacing of the wrapping type, used in the scene of wrapping.
   */
  wrap: {
    type: Boolean
  },

  /**
   * @zh 充满整行
   * @en fill the block
   */
  fill: {
    type: Boolean
  }
} as const);

export type SpaceProps = ExtractPropTypes<typeof spaceProps>;
export type SpaceInstance = InstanceType<typeof Space>;
