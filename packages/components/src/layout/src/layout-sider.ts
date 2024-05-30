import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';

export const layoutSiderProps = buildProps({
  /**
   * @zh 当前收起状态
   * @en Current collapsed state
   */
  collapsed: {
    type: Boolean,
    default: undefined
  },
  /**
   * @zh 默认的收起状态
   * @en The default collapsed state
   */
  defaultCollapsed: {
    type: Boolean
  },
  /**
   * @zh 是否可收起
   * @en Whether is collapsible
   */
  collapsible: {
    type: Boolean
  },
  /**
   * @zh 宽度
   * @en Width
   */
  width: {
    type: Number,
    default: 200
  },
  /**
   * @zh 收缩宽度
   * @en Collapsed width
   */
  collapsedWidth: {
    type: Number,
    default: 56
  },
  /**
   * @zh 翻转折叠提示箭头的方向，当 Sider 在右边时可以使用
   * @en Flip and fold the direction of the hint arrow, which can be used when Sider is on the right
   */
  reverseArrow: {
    type: Boolean
  },
  /**
   * @zh 触发响应式布局的断点, 详见[响应式栅格](/vue/component/grid)
   * @en Trigger breakpoints for responsive layout, see [Responsive Grid](/vue/component/grid) for details
   */
  breakpoint: {
    type: String as PropType<'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'>
  },
  /**
   * @zh 可以用 ResizeBox 替换原生的 `aside` 标签，这个参数即 ResizeBox的 `directions` 参数。详情请看 [ResizeBox](/vue/component/resize-box)。
   * @en Can replace the native `aside` tag with ResizeBox. This is the `directions` parameter of ResizeBox. For details, please see [ResizeBox](/vue/component/resize-box)
   */
  resizeDirections: {
    type: Array as PropType<Array<'left' | 'right' | 'top' | 'bottom'>>,
    default: undefined
  },
  /**
   * @zh 隐藏底部折叠触发器
   * @en Whether to hide the bottom fold trigger
   */
  hideTrigger: {
    type: Boolean
  }
} as const);

export const layoutSiderEmits = [
  /**
   * @zh 展开-收起时的事件，有点击 trigger 以及响应式反馈两种方式可以触发
   * @en Events on expand/collapse. There are two ways to trigger click trigger and responsive feedback
   * @param {boolean} collapsed
   * @param {'clickTrigger'|'responsive'} type
   */
  'collapse',
  'update:collapsed',
  /**
   * @zh 触发响应式布局断点时的事件
   * @en Events when a responsive layout breakpoint is triggered
   * @param {boolean} collapsed
   */
  'breakpoint'
];

export type LayoutSiderProps = ExtractPropTypes<typeof layoutSiderProps>;
