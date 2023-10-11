import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type Empty from './empty.vue';

export const emptyProps = buildProps({
  /**
   * @zh 图像地址
   * @en image URL of empty
   */
  image: {
    type: String,
    default: ''
  },

  /**
   * @zh 组件的图像尺寸（宽度）
   * @en image size (width) of empty
   */
  imageSize: Number,

  /**
   * @zh 组件的描述信息
   * @en description of empty
   */
  description: {
    type: String,
    default: ''
  }
} as const);

export type EmptyProps = ExtractPropTypes<typeof emptyProps>;
export type EmptyInstance = InstanceType<typeof Empty>;
