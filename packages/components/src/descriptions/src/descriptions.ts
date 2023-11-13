import { buildProps } from '@tu-view-plus/utils';
import { directionTypes, DirectionTypes } from './constants';
import { useSizeProp } from '@tu-view-plus/hooks';
import type { PropType, ExtractPropTypes } from 'vue';
import type Descriptions from './descriptions.vue';

export const descriptionsProps = buildProps({
  /**
   * @zh 是否带有边框
   * @en is there a border
   */
  border: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 每行放置Descriptions Item的个数
   * @en the number of Descriptions Item placed in each row
   */
  column: {
    type: Number,
    default: 3
  },

  /**
   * @zh 排列的方向
   * @en title of descriptions
   */
  direction: {
    type: String as PropType<DirectionTypes>,
    values: directionTypes,
    default: 'horizontal'
  },

  /**
   * @zh 列表的尺寸
   * @en size of list
   */
  size: useSizeProp,

  /**
   * @zh 标题文本，显示在左上方
   * @en title text, displayed in the upper left corner
   */
  title: {
    type: String,
    default: ''
  },

  /**
   * @zh 操作区文本，显示在右上方
   * @en operation area text, displayed in the upper right corner
   */
  extra: {
    type: String,
    default: ''
  }
} as const);

export type DescriptionsProps = ExtractPropTypes<typeof descriptionsProps>;
export type DescriptionsInstance = InstanceType<typeof Descriptions>;
