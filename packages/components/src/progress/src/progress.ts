import { buildProps, definePropType } from '@tu-view-plus/utils';
import {
  progressTypes,
  ProgressTypes,
  statusTypes,
  StatusTypes
} from './constants';

import type { ExtractPropTypes, PropType, SVGAttributes } from 'vue';

export type ProgressColor = { color: string; percentage: number };
export type ProgressFn = (percentage: number) => string;

export const progressProps = buildProps({
  /**
   * @zh 进度条类型
   * @en type of progress bar
   * @values 'line','circle','dashboard'
   * @defaultValue 'line'
   */
  type: {
    type: String as PropType<ProgressTypes>,
    values: progressTypes,
    default: 'line'
  },

  /**
   * @zh 百分比
   * @en percentage of progress bar
   * @defaultValue 0
   */
  percentage: {
    type: Number,
    default: 0,
    validator: (val: number): boolean => val >= 0 && val <= 100
  },

  /**
   * @zh 进度条当前状态
   * @en status of progress bar
   * @defaultValue ''
   */
  status: {
    type: String as PropType<StatusTypes>,
    values: statusTypes,
    default: ''
  },

  /**
   * @zh 设置动画进度条
   * @en set indeterminate progress
   * @defaultValue false
   */
  indeterminate: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 控制动画进度条速度和条纹进度条流动速度
   * @en control the animation duration of indeterminate progress or striped flow progress
   * @defaultValue 3
   */
  duration: {
    type: Number,
    default: 3
  },

  /**
   * @zh 进度条的宽度
   * @en the width of progress bar
   * @defaultValue 8
   */
  strokeWidth: {
    type: Number,
    default: 8
  },

  /**
   * @zh circle/dashboard 类型路径两端的形状
   * @en circle/dashboard type shape at the end path
   * @defaultValue 'round'
   */
  strokeLinecap: {
    type: definePropType<NonNullable<SVGAttributes['stroke-linecap']>>(String),
    default: 'round'
  },

  /**
   * @zh 进度条显示文字内置在进度条内（只在 type=line 时可用）
   * @en whether to place the percentage inside progress bar, only works when `type` is 'line'
   * @defaultValue false
   */
  textInside: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）
   * @en the canvas width of circle/dashboard progress bar
   * @defaultValue 126
   */
  width: {
    type: Number,
    default: 126
  },

  /**
   * @zh 是否显示进度条文字内容
   * @en whether to show text of progress bar content
   * @defaultValue true
   */
  showText: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 进度条背景色（会覆盖进度条当前状态）
   * @en background color of progress bar. Overrides status of progress bar
   */
  color: {
    type: definePropType<string | ProgressColor[] | ProgressFn>([
      String,
      Array,
      Function
    ]),
    default: ''
  },

  /**
   * @zh 进度条上增加条纹
   * @en stripe over the progress bar's color
   * @defaultValue false
   */
  striped: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 是否使进度条上的条纹流动
   * @en whether make the stripes on the progress bar flow
   * @defaultValue false
   */
  stripedFlow: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 指定进度条文字内容
   * @en custom text format
   */
  format: {
    type: definePropType<ProgressFn>(Function),
    default: (percentage: number): string => `${percentage}%`
  }
} as const);

export type ProgressProps = ExtractPropTypes<typeof progressProps>;
