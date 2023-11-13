import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type DescriptionsItem from './descriptions-item.vue';

export const descriptionsItemProps = buildProps({
  /**
   * @zh 标签文本
   * @en label text
   */
  label: {
    type: String
  },
  /**
   * @zh 列数量
   * @en number of columns
   */
  span: {
    type: Number,
    default: 1
  },
  /**
   * @zh 列的宽度，不同行相同列的宽度按最大值设定
   * @en the width of the column is set according to the maximum value for the same column in different rows
   */
  width: {
    type: [String, Number],
    default: ''
  },
  /**
   * @zh 列的最小宽度
   * @en minimum width of column
   */
  minWidth: {
    type: [String, Number],
    default: ''
  },
  /**
   * @zh 列的内容对齐方式
   * @en the minimum width of the column and the alignment of the content of the column
   */
  align: {
    type: String,
    default: 'left'
  },
  /**
   * @zh 列的标签对齐方式，若不设置该项，则使用内容的对齐方式
   * @en the alignment of column labels. If this item is not set, the alignment of the content will be used
   */
  labelAlign: {
    type: String,
    default: ''
  },
  /**
   * @zh 列的内容自定义类名
   * @en custom class name for column content
   */
  className: {
    type: String,
    default: ''
  },
  /**
   * @zh 列标签的自定义类名
   * @en column label custom class name
   */
  labelClassName: {
    type: String,
    default: ''
  }
});

export type DescriptionsItemProps = ExtractPropTypes<
  typeof descriptionsItemProps
>;
export type DescriptionsItemInstance = InstanceType<typeof DescriptionsItem>;
