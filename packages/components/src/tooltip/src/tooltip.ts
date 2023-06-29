import { CSSProperties } from 'vue';
import { buildProps, ClassName } from '@tu-view-plus/utils';
import { TriggerPosition } from '@tu-view-plus/constants';
import { useSizeProp } from '@tu-view-plus/hooks';

import type { ExtractPropTypes, PropType } from 'vue';
import type Tooltip from './tooltip.vue';

export const tooltipProps = buildProps({
  /**
   * @zh 文字气泡是否可见
   * @en Whether the tooltip is visible
   * @vModel
   */
  popupVisible: {
    type: Boolean,
    default: undefined
  },

  /**
   * @zh 文字气泡默认是否可见（非受控模式）
   * @en Whether the tooltip is visible by default (uncontrolled mode)
   */
  defaultPopupVisible: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 文字气泡内容
   * @en Tooltip content
   */
  content: String,

  /**
   * @zh 弹出位置
   * @en Popup position
   * @values 'top','tl','tr','bottom','bl','br','left','lt','lb','right','rt','rb'
   */
  position: {
    type: String as PropType<TriggerPosition>,
    default: 'top'
  },

  /**
   * @zh tooltip 尺寸
   * @en size of the Tooltip
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...useSizeProp, default: 'medium' },

  /**
   * @zh 弹出框的背景颜色
   * @en Background color of the popover
   */
  backgroundColor: {
    type: String
  },

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
   * @en Mount container for popup
   */
  popupContainer: {
    type: [String, Object] as PropType<string | HTMLElement>
  }
});

export const tooltipEmits = {
  'update:popupVisible': (visible: boolean) => true,

  /**
   * @zh 文字气泡显示状态改变时触发
   * @en Emitted when the tooltip display status changes
   * @param {boolean} visible
   */
  popupVisibleChange: (visible: boolean) => true
};

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>;
export type TooltipInstance = InstanceType<typeof Tooltip>;
export type TooltipEmits = typeof tooltipEmits;
