import { buildProps } from '@tu-view-plus/utils';
import { SHAPE } from './constants';
import type { ExtractPropTypes, PropType } from 'vue';
import { useSizeProp } from '@tu-view-plus/hooks';
export const skeletonShapeProps = buildProps({
  /**
    * @zh 图形骨架的形状
    * @en The shape of the graph skeleton
    */
  shape: {
    type: String as PropType<(typeof SHAPE)[number]>,
    default: 'square'
  },


  /**
   * @zh 图形骨架的大小
   * @en The size of the graph's skeleton
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...useSizeProp, default: 'medium' },


} as const);

export type SkeletonShapeProps = ExtractPropTypes<typeof skeletonShapeProps>;
