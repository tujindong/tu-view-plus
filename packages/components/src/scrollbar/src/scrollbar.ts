import { buildProps, definePropType, isNumber } from '@tu-view-plus/utils';

import type { ExtractPropTypes, StyleValue } from 'vue';
import type Scrollbar from './scrollbar.vue';

export const scrollbarProps = buildProps({
  /**
   * @zh 滚动条高度
   * @en height of scrollbar
   */
  height: {
    type: [String, Number],
    default: ''
  },

  /**
   * @zh 滚动条最大高度
   * @en max height of scrollbar
   */
  maxHeight: {
    type: [String, Number],
    default: ''
  },

  /**
   * @zh 是否使用原生滚动条样式
   * @en whether to use the native scrollbar
   */
  native: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 包裹容器的自定义样式
   * @en style of wrap
   */
  wrapStyle: {
    type: definePropType<StyleValue>([String, Object, Array]),
    default: ''
  },

  /**
   * @zh 包裹容器的自定义类名
   * @en class of wrap
   */
  wrapClass: {
    type: [String, Array],
    default: ''
  },

  /**
   * @zh 视图的自定义类名
   * @en class of view
   */
  viewClass: {
    type: [String, Array],
    default: ''
  },

  /**
   * @zh 视图的自定义样式
   * @en style of view
   */
  viewStyle: {
    type: [String, Array, Object],
    default: ''
  },

  /**
   * @zh 不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能
   * @en do not respond to container size changes, if the container size does not change, it is better to set it to optimize performance
   */
  noresize: Boolean,

  /**
   * @zh 视图的元素标签
   * @en element tag of the view
   */
  tag: {
    type: String,
    default: 'div'
  },

  /**
   * @zh 总是显示滚动条
   * @en always show
   */
  always: Boolean,

  /**
   * @zh 	滚动条最小尺寸
   * @en minimum size of scrollbar
   */
  minSize: {
    type: Number,
    default: 20
  }
} as const);

export const scrollbarEmits = {
  scroll: ({
    scrollTop,
    scrollLeft
  }: {
    scrollTop: number;
    scrollLeft: number;
  }) => [scrollTop, scrollLeft].every(isNumber)
};

export type ScrollbarEmits = typeof scrollbarEmits;
export type ScrollbarProps = ExtractPropTypes<typeof scrollbarProps>;
export type ScrollbarInstance = InstanceType<typeof Scrollbar>;
