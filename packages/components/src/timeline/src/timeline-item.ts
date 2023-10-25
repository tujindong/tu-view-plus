import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type TimelineItem from './timeline-item.vue';

import { DotType, LineType, PositionType } from './constants';

export const timelineItemProps = buildProps({
  /**
   * @zh 节点颜色
   * @en Dot color
   */
  dotColor: {
    type: String
  },

  /**
   * @zh 节点类型：空心圆/实心圆
   * @en Dot type
   * @values 'default', 'hollow', 'solid'
   * @defaultValue 'default'
   */
  dotType: {
    type: String as PropType<DotType>,
    default: 'default'
  },

  /**
   * @zh 时间轴类型：实线/虚线/点状线
   * @en Line type
   * @values 'solid', 'dashed', 'dotted'
   * @defaultValue 'solid
   */
  lineType: {
    type: String as PropType<LineType>,
    default: 'solid'
  },

  /**
   * @zh 时间轴颜色
   * @en Line Color
   */
  lineColor: {
    type: String
  },

  /**
   * @zh 标签文本
   * @en Label text
   */
  label: {
    type: String
  },

  /**
   * @zh Item 位置
   * @en Item position
   * @values 'left', 'right', 'top', 'bottom'
   */
  position: {
    type: String as PropType<PositionType>
  }
});

export type TimelineItemProps = ExtractPropTypes<typeof timelineItemProps>;
export type TimelineItemInstance = InstanceType<typeof TimelineItem>;
