import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';

export const skeletonLineProps = buildProps({
  /**
    * @zh 展示的行数
    * @en The number of rows to display
    */
  rows: {
    type: Number,
    default: 1
  },
  /**
     * @zh 线型骨架的宽度
     * @en The width of the linear skeleton
     */
  widths: {
    type: Array<number | string>,
    default: []
  },
  /**
     * @zh 线型骨架的行高
     * @en The row height of a linear skeleton
     */
  lineHeight: {
    type: Number,
    default: 20
  },
  /**
     * @zh 线型骨架的行间距
     * @en Line spacing for a linear skeleton
     */
  lineSpacing: {
    type: Number,
    default: 15
  },

} as const);

export type SkeletonLineProps = ExtractPropTypes<typeof skeletonLineProps>;
