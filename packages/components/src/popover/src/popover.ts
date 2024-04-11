import { buildProps } from '@tu-view-plus/utils';
import { TriggerEvent, TriggerPosition } from '@tu-view-plus/constants';
import { useSizeProp } from '@tu-view-plus/hooks';

import type { ExtractPropTypes, PropType, CSSProperties } from 'vue';
import type { ClassName } from '@tu-view-plus/utils';

export const popoverProps = buildProps({
  /**
   * @zh 文字气泡是否可见
   * @en Whether the popover is visible
   * @vModel
   */
  popupVisible: {
    type: Boolean,
    default: undefined
  },

  /**
   * @zh 文字气泡默认是否可见（非受控模式）
   * @en Whether the popover is visible by default (uncontrolled mode)
   */
  defaultPopupVisible: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 标题
   * @en Title
   */
  title: String,

  /**
   * @zh 内容
   * @en Content
   */
  content: String,

  /**
   * @zh 触发方式
   * @en Trigger method
   * @values 'hover','click','focus','contextMenu'
   */
  trigger: {
    type: [String, Array] as PropType<TriggerEvent | TriggerEvent[]>,
    default: 'hover'
  },

  /**
   * @zh 弹出位置
   * @en Pop-up position
   * @values 'top','tl','tr','bottom','bl','br','left','lt','lb','right','rt','rb'
   */
  position: {
    type: String as PropType<TriggerPosition>,
    default: 'top'
  },

  /**
   * @zh popover 尺寸
   * @en size of the popover
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...useSizeProp, default: 'medium' },

  /**
   * @zh 弹出框内容的类名
   * @en The class name of the popup content
   */
  contentClass: {
    type: [String, Array, Object] as PropType<ClassName>
  },

  /**
   * @zh 弹出框内容的样式
   * @en The style of the popup content
   */
  contentStyle: {
    type: Object as PropType<CSSProperties>
  },

  /**
   * @zh 弹出框箭头的类名
   * @en The class name of the popup arrow
   */
  arrowClass: {
    type: [String, Array, Object] as PropType<ClassName>
  },

  /**
   * @zh 弹出框箭头的样式
   * @en The style of the popup arrow
   */
  arrowStyle: {
    type: Object as PropType<CSSProperties>
  },

  /**
   * @zh 弹出框的挂载容器
   * @en Mount container for pop-up box
   */
  popupContainer: {
    type: [String, Object] as PropType<string | HTMLElement>
  }
} as const);

export const popoverEmits = {
  'update:popupVisible': (visible: boolean) => true,
  popupVisibleChange: (visible: boolean) => true
};

export type PopoverProps = ExtractPropTypes<typeof popoverProps>;
export type PopoverEmits = typeof popoverEmits;
