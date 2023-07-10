import { buildProps } from '@tu-view-plus/utils';
import { TriggerEvent, TriggerPosition } from '@tu-view-plus/constants';
import { useSizeProp } from '@tu-view-plus/hooks';

import type { ExtractPropTypes, PropType, CSSProperties } from 'vue';
import type Trigger from './trigger.vue';
export type TriggerPopupTranslate =
  | [number, number]
  | { [key in TriggerPosition]?: [number, number] };

export const triggerProps = buildProps({
  /**
   * @zh 弹出框是否可见
   * @en Whether the popup is visible
   * @vModel
   */
  popupVisible: {
    type: Boolean,
    default: undefined
  },

  /**
   * @zh 弹出框默认是否可见（非受控模式）
   * @en Whether the popup is visible by default (uncontrolled mode)
   */
  defaultPopupVisible: {
    type: Boolean,
    default: false
  },

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
   * @en Popup position
   * @values 'top','tl','tr','bottom','bl','br','left','lt','lb','right','rt','rb'
   */
  position: {
    type: String as PropType<TriggerPosition>,
    default: 'bottom'
  },

  /**
   * @zh 触发器是否禁用
   * @en Whether the trigger is disabled
   */
  disabled: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 弹出框的偏移量（弹出框距离触发器的偏移距离）
   * @en The offset of the popup (the offset distance of the popup from the trigger)
   */
  popupOffset: {
    type: Number,
    default: 0
  },

  /**
   * @zh 弹出框的移动距离
   * @en The moving distance of the popup
   */
  popupTranslate: {
    type: [Array, Object] as PropType<TriggerPopupTranslate>
  },

  /**
   * @zh 弹出框是否显示箭头
   * @en Whether the popup shows an arrow
   */
  showArrow: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 弹出框是否跟随鼠标
   * @en Whether the popup follows the mouse
   */
  alignPoint: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 是否在移出触发器，并移入弹出框时保持弹出框显示
   * @en Whether to keep the popup displayed when the trigger is moved out and moved into the popup
   */
  popupHoverStay: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 是否在触发器失去焦点时关闭弹出框
   * @en Whether to close the popup when the trigger loses focus
   */
  blurToClose: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 是否在点击触发器时关闭弹出框
   * @en Whether to close the popup when the trigger is clicked
   */
  clickToClose: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 是否在点击外部区域时关闭弹出框
   * @en Whether to close the popup when clicking on the outer area
   */
  clickOutsideToClose: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 是否在关闭时卸载弹出框节点
   * @en Whether to uninstall the popup node when closing
   */
  unmountOnClose: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 弹出框内容的类名
   * @en The class name of the popup content
   */
  contentClass: {
    type: [String, Array, Object]
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
    type: [String, Array, Object]
  },

  /**
   * @zh 弹出框箭头的样式
   * @en The style of the popup arrow
   */
  arrowStyle: {
    type: Object as PropType<CSSProperties>
  },

  /**
   * @zh 弹出框的样式
   * @en The style of the popup
   */
  popupStyle: {
    type: Object as PropType<CSSProperties>
  },

  /**
   * @zh 弹出动画的name
   * @en The name of the popup animation
   */
  animationName: {
    type: String,
    default: 'fade-in'
  },

  /**
   * @zh 弹出动画的持续时间
   * @en The duration of the popup animation
   */
  duration: {
    type: [Number, Object] as PropType<
      | number
      | {
          enter: number;
          leave: number;
        }
    >
  },

  /**
   * @zh mouseenter事件延时触发的时间（毫秒）
   * @en Delay trigger time of mouseenter event (ms)
   */
  mouseEnterDelay: {
    type: Number,
    default: 100
  },

  /**
   * @zh mouseleave事件延时触发的时间（毫秒）
   * @en Delay trigger time of mouseleave event (ms)
   */
  mouseLeaveDelay: {
    type: Number,
    default: 100
  },

  /**
   * @zh focus事件延时触发的时间（毫秒）
   * @en Delay trigger time of focus event (ms)
   */
  focusDelay: {
    type: Number,
    default: 0
  },

  /**
   * @zh 是否将弹出框宽度设置为触发器宽度
   * @en Whether to set the width of the popup to the width of the trigger
   */
  autoFitPopupWidth: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 是否将弹出框的最小宽度设置为触发器宽度
   * @en Whether to set the minimum width of the popup to the trigger width
   */
  autoFitPopupMinWidth: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 当触发器的尺寸发生变化时，是否重新计算弹出框位置
   * @en When the size of the trigger changes, whether to recalculate the position of the popup
   */
  autoFixPosition: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 弹出框的挂载容器
   * @en Mount container for popup
   */
  popupContainer: {
    type: [String, Object] as PropType<string | HTMLElement>
  },

  /**
   * @zh 是否在容器滚动时更新弹出框的位置
   * @us Whether to update the position of the popup when the container is scrolled
   */
  updateAtScroll: {
    type: Boolean,
    default: false
  },

  autoFitTransformOrigin: {
    type: Boolean,
    default: false
  },

  hideEmpty: {
    type: Boolean,
    default: false
  },

  openedClass: {
    type: [String, Array, Object]
  },

  /**
   * @zh 是否自动调整弹出框位置，以适应窗口大小
   * @en Whether to automatically adjust the position of the popup to fit the window size
   */
  autoFitPosition: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 是否挂载在 `body` 元素下
   * @en Whether to mount under the `body` element
   */
  renderToBody: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 是否阻止弹出层中的元素点击时获取焦点
   * @en Whether to prevent elements in the pop-up layer from gaining focus when clicked
   */
  preventFocus: {
    type: Boolean,
    default: false
  },

  /**
   * @zh trigger 尺寸
   * @en size of the Trigger
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...useSizeProp, default: 'medium' }
});

export const triggerEmits = {
  /**
   * @zh 弹出框显示状态改变时触发
   * @en Emitted when the status of the popup changes
   * @param {boolean} visible
   */
  'update:popupVisible': (visible: boolean) => true,

  /**
   * @zh 弹出框显示状态改变时触发
   * @en Emitted when the status of the popup changes
   * @param {boolean} visible
   */
  popupVisibleChange: (visible: boolean) => true,

  /**
   * @zh 弹出框显示后（动画结束）触发
   * @en Triggered after the trigger is shown (the animation ends)
   */
  show: () => true,

  /**
   * @zh 弹出框隐藏后（动画结束）触发
   * @en Triggered after the popup is hidden (the animation ends)
   */
  hide: () => true,

  /**
   * @zh 内部使用
   * @en for internal
   */
  resize: () => true
};

export type TriggerInstance = InstanceType<typeof Trigger>;
export type TriggerProps = ExtractPropTypes<typeof triggerProps>;
export type TriggerEmits = typeof triggerEmits;
