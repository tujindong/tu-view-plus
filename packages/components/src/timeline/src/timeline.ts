import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type Timeline from './timeline.vue';

import { Direction, ModeType, LabelPositionType } from './constants';

export const timelineProps = buildProps({
  /**
   * @zh 是否倒序
   * @en Whether reverse order
   */
  reverse: {
    type: Boolean
  },

  /**
   * @zh 时间轴方向
   * @en Timeline direction
   * @values 'horizontal', 'vertical'
   * @defaultValue 'vertical
   */
  direction: {
    type: String as PropType<Direction>,
    default: 'vertical'
  },

  /**
   * @zh 时间轴的展示类型：时间轴在左侧，时间轴在右侧, 交替出现。
   * @en The display mode of Timeline
   * @values 'left','right','top','bottom','alternate'
   * @defaultValue 'left
   */
  mode: {
    type: String as PropType<ModeType>,
    default: 'left'
  },

  /**
   * @zh 是否展示幽灵节点，设置为 true 时候只展示幽灵节点。
   * @en Whether to display ghost nodes. When set to true, only ghost nodes are displayed.
   */
  pending: {
    type: [Boolean, String]
  },
  
  /**
     * @zh 设置标签文本的位置
     * @en Position of label text
     * @values 'relative', 'same'
     * @defaultValue 'same'
     */
   labelPosition: {
    type: String as PropType<LabelPositionType>,
    default: 'same',
  },
});

export type TimelineProps = ExtractPropTypes<typeof timelineProps>;
export type TimelineInstance = InstanceType<typeof Timeline>;
