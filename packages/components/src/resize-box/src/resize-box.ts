import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';
import type ResizeBox from './resize-box.vue';

export const resizeBoxProps = buildProps({
  /**
   * @zh 宽度
   * @en Width
   * @vModel
   */
  width: {
    type: Number
  },
  /**
   * @zh 高度
   * @en Height
   * @vModel
   */
  height: {
    type: Number
  },
  /**
   * @zh 伸缩框的 html 标签
   * @en The html tag of the telescopic box
   */
  component: {
    type: String,
    default: 'div'
  },
  /**
   * @zh 可以进行伸缩的边，有上、下、左、右可以使用
   * @en Can be stretched side, there are up, down, left and right can be used
   * */
  directions: {
    type: Array as PropType<('left' | 'right' | 'top' | 'bottom')[]>,
    default: () => ['right']
  }
} as const);

export const resizeBoxEmits = {
  'update:width': (width: number) => true,
  'update:height': (height: number) => true,
  /**
   * @zh 拖拽开始时触发
   * @en Triggered when dragging starts
   * @param {MouseEvent} ev
   */
  movingStart: (ev: MouseEvent) => true,
  /**
   * @zh 拖拽时触发
   * @en Triggered when dragging
   * @param {{ width: number; height: number; }} size
   * @param {MouseEvent} ev
   */
  moving: (size: { width: number; height: number }, ev: MouseEvent) => true,
  /**
   * @zh 拖拽结束时触发
   * @en Triggered when the drag ends
   * @param {MouseEvent} ev
   */
  movingEnd: (ev: MouseEvent) => true
};

export type ResizeBoxProps = ExtractPropTypes<typeof resizeBoxProps>;
export type ResizeBoxInstance = InstanceType<typeof ResizeBox>;
