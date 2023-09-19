import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type BackTop from './back-top.vue';

export const backTopProps = buildProps({
  /**
   * @zh 显示回到顶部按钮的触发滚动高度
   * @en Display the trigger scroll height of the back to top button
   */
  visibleHeight: {
    type: Number as PropType<number>,
    default: 200
  },

  /**
   * @zh 滚动事件的监听容器
   * @en Scroll event listener container
   */
  target: {
    type: String
  },

  /**
   * @zh 距离右侧距离
   * @en right distance.
   */
  right: {
    type: Number,
    default: 30
  },

  /**
   * @zh 距离底部距离
   * @en bottom distance.
   */
  bottom: {
    type: Number,
    default: 20
  }
} as const);

export const backtopEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent
};

export type BackTopProps = ExtractPropTypes<typeof backTopProps>;
export type BackTopInstance = InstanceType<typeof BackTop>;
export type BacktopEmits = typeof backtopEmits;
