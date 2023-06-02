import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes } from 'vue';
import type Row from './row.vue';

export const RowJustify = [
  'start',
  'center',
  'end',
  'space-around',
  'space-between',
  'space-evenly'
] as const;

export const RowAlign = ['top', 'middle', 'bottom'] as const;

export const rowProps = buildProps({
  /**
   * @zh 自定义元素标签
   * @en custom element tag
   * @defaultValue 'div'
   */
  tag: {
    type: String,
    default: 'div'
  },
  /**
   * @zh 栅格间距
   * @en grid spacing
   * @values
   * @defaultValue 0
   */
  gutter: {
    type: Number,
    default: 0
  },
  /**
   * @zh flex 布局下的水平排列方式
   * @en horizontal alignment of flex layout
   * @values 'start', 'end', 'center', 'space-around', 'space-between'
   * @defaultValue 'start'
   */
  justify: {
    type: String,
    values: RowJustify,
    default: 'start'
  },
  /**
   * @zh flex 布局下的垂直排列方式
   * @en vertical alignment of flex layout
   * @values 'top', 'middle', 'bottom'
   * @defaultValue 'top'
   */
  align: {
    type: String,
    values: RowAlign,
    default: 'top'
  }
});

export type RowProps = ExtractPropTypes<typeof rowProps>;
export type RowInstance = InstanceType<typeof Row>;
