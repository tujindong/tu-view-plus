import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type VirtualList from './virtual-list.vue';

export const virtualListProps = buildProps({
  /**
   * @zh 可视区域高度
   * @en Viewable area height
   */
  height: {
    type: [Number, String],
    default: 200
  },

  data: {
    type: Array as PropType<Array<any>>,
    default: () => []
  },

  /**
   * @zh 开启虚拟滚动的元素数量阈值，当数据数量小于阈值时不会开启虚拟滚动。
   * @en The threshold of the number of elements to enable virtual scrolling. When the number of data is less than the threshold, virtual scrolling will not be enabled.
   */
  threshold: {
    type: Number,
    default: 0
  },

  itemKey: {
    type: String,
    default: 'key'
  },

  /**
   * @zh 元素高度是否是固定的。
   * @en Is the element height fixed.
   */
  fixedSize: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 元素高度不固定时的预估高度。
   * @en Is the element height fixed.
   */
  estimatedSize: {
    type: Number,
    default: 30
  },

  /**
   * @zh 视口边界外提前挂载的元素数量。
   * @en The number of elements mounted in advance outside the boundary of the viewport.
   * @defaultValue 10
   */
  buffer: {
    type: Number,
    default: 10
  },

  component: {
    type: [String, Object],
    default: 'div'
  },

  listAttrs: {
    type: Object
  },

  contentAttrs: {
    type: Object
  },

  paddingPosition: {
    type: String,
    default: 'content'
  }
} as const);

export const virtualListEmits = {
  scroll: (evt: Event) => true,
  reachBottom: (evt: Event) => true
};

export type VirtualListProps = ExtractPropTypes<typeof virtualListProps>;
export type VirtualListInstance = InstanceType<typeof VirtualList>;
export type VirtualListEmits = typeof virtualListEmits;
