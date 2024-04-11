import { buildProps } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';
import { messageTypes, messageDefaults } from '../../message';

import type {
  ExtractPropTypes,
  PropType,
  CSSProperties,
  StyleValue
} from 'vue';
import type { ButtonProps } from '../../button';
import type { MessageType } from '../../message';

export const modalProps = buildProps({
  /**
   * @zh 对话框是否可见
   * @en Whether the modal is visible
   * @vModel
   */
  visible: {
    type: Boolean,
    default: undefined
  },

  /**
   * @zh 对话框默认是否可见（非受控状态）
   * @en Whether the modal is visible by default (uncontrolled state)
   */
  defaultVisible: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 对话框的宽度，不设置的情况下会使用样式中的宽度值
   * @en The width of the dialog box, if not set, the width value in the style will be used
   */
  width: {
    type: [Number, String]
  },

  /**
   * @zh 对话框的距离顶部的高度，居中显示开启的情况下不生效
   * @en The height from the top of the dialog box. It does not take effect when the center display is turned on.
   */
  top: {
    type: [Number, String]
  },

  /**
   * @zh 是否显示遮罩层
   * @en Whether to show the mask
   */
  mask: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 标题
   * @en Title
   */
  title: {
    type: String
  },

  /**
   * @zh 标题的水平对齐方向
   * @en horizontal alignment of the title
   */
  titleAlign: {
    type: String as PropType<'start' | 'center'>,
    default: 'start'
  },

  /**
   * @zh 对话框是否居中显示
   * @en Whether the dialog box is displayed in the center
   */
  alignCenter: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 关闭时是否卸载节点
   * @en Whether to uninstall the node when close
   */
  unmountOnClose: Boolean,

  /**
   * @zh 是否点击遮罩层可以关闭对话框
   * @en Whether to close the modal when click the mask
   */
  maskClosable: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 是否隐藏取消按钮
   * @en Whether to hide the cancel button
   */
  hideCancel: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 是否开启简单模式
   * @en Whether to enable simple mode
   */
  simple: {
    type: Boolean,
    default: (props: any) => {
      return props.notice;
    }
  },

  /**
   * @zh 是否显示关闭按钮
   * @en Whether to show the close button
   */
  closable: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 确认按钮的内容
   * @en The content of the confirm button
   */
  okText: String,

  /**
   * @zh 取消按钮的内容
   * @en The content of the cancel button
   */
  cancelText: String,

  /**
   * @zh 确认按钮是否为加载中状态
   * @en Whether the confirm button is in the loading state
   */
  okLoading: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 确认按钮的Props
   * @en Props of confirm button
   */
  okButtonProps: {
    type: Object as PropType<ButtonProps>
  },

  /**
   * @zh 取消按钮的Props
   * @en Props of cancel button
   */
  cancelButtonProps: {
    type: Object as PropType<ButtonProps>
  },

  /**
   * @zh 是否展示页脚部分
   * @en Whether to show the footer
   */
  footer: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 对话框是否挂载在 `body` 元素下
   * @en Whether the modal is mounted under the `body` element
   */
  renderToBody: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 弹出框的挂载容器
   * @en Mount container for modal
   */
  popupContainer: {
    type: [String, Object] as PropType<string | HTMLElement>,
    default: 'body'
  },

  /**
   * @zh 蒙层的样式
   * @en Mask style
   */
  maskStyle: {
    type: Object as PropType<CSSProperties>
  },

  /**
   * @zh 对话框的类名
   * @en The classname of the modal
   */
  modalClass: {
    type: [String, Array] as PropType<string | any[]>
  },

  /**
   * @zh 对话框的样式
   * @en Modal style
   */
  modalStyle: {
    type: Object as PropType<CSSProperties>
  },

  /**
   * @zh 触发 ok 事件前的回调函数。如果返回 false 则不会触发后续事件，也可使用 done 进行异步关闭。
   * @en The callback function before the ok event is triggered. If false is returned, subsequent events will not be triggered, and done can also be used to close asynchronously.
   */
  onBeforeOk: {
    type: Function as PropType<
      (
        done: (closed: boolean) => void
      ) => void | boolean | Promise<void | boolean>
    >
  },

  /**
   * @zh 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。
   * @en The callback function before the cancel event is triggered. If it returns false, no subsequent events will be triggered.
   */
  onBeforeCancel: {
    type: Function as PropType<() => boolean>
  },

  /**
   * @zh 是否支持 ESC 键关闭对话框
   * @en Whether to support the ESC key to close the dialog
   */
  escToClose: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 模态框的尺寸
   * @en Modal size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...useSizeProp, default: 'medium' },

  /**
   * @zh 是否支持拖动
   * @en Whether to support drag
   */
  draggable: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 是否开启全屏
   * @en Whether to enable full screen
   */
  fullscreen: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 遮罩层动画名字
   * @en Mask layer animation name
   * @defaultValue -
   */
  maskAnimationName: {
    type: String,
    default: (props: Record<string, any>) => {
      return props.fullscreen ? 'fade-in-standard' : 'fade-modal';
    }
  },

  /**
   * @zh 对话框动画名字
   * @en Modal animation name
   * @defaultValue -
   */
  modalAnimationName: {
    type: String,
    default: (props: Record<string, any>) => {
      if (props.fullscreen) {
        return 'zoom-in';
      }
      return 'zoom-modal';
    }
  },

  /**
   * @zh 对话框内容部分的类名
   * @en The classname of the modal
   */
  bodyClass: {
    type: [String, Array] as PropType<string | any[]>
  },

  /**
   * @zh 对话框内容部分的样式
   * @en Modal style
   */
  bodyStyle: {
    type: [String, Object, Array] as PropType<StyleValue>
  },

  // private
  messageType: {
    type: String as PropType<MessageType>,
    values: messageTypes,
    default: messageDefaults.type
  }
} as const);

export const modalEmits = {
  'update:visible': (visible: boolean) => true,
  ok: (e: Event) => true,
  cancel: (e: Event) => true,
  open: () => true,
  close: () => true,
  beforeOpen: () => true,
  beforeClose: () => true
};

export type ModalProps = ExtractPropTypes<typeof modalProps>;