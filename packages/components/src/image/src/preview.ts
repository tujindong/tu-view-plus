import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';

export const previewProps = buildProps({
  renderToBody: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 图片获取地址
   * @en Image src
   */
  src: {
    type: String
  },

  /**
   * @zh 是否可见
   * @en Whether is visible
   * @vModel
   */
  visible: {
    type: Boolean,
    default: undefined
  },

  /**
   * @zh 默认是否可见，非受控
   * @en Default visiblity
   */
  defaultVisible: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 点击 mask 是否触发关闭
   * @en Whether to close the modal when mask is clicked
   */
  maskClosable: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 是否显示关闭按钮
   * @en Whether to show close button
   */
  closable: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 操作项的布局
   * @en Layout of action list
   */
  actionsLayout: {
    type: Array as PropType<string[]>,
    default: () => [
      'fullScreen',
      'rotateRight',
      'rotateLeft',
      'zoomIn',
      'zoomOut',
      'originalSize'
    ]
  },

  /**
   * @zh 设置弹出框的挂载点，同 `teleport` 的 `to`，初始值是 document.body
   * @en Set the mount point of the pop-up box, the same as the `to` of `teleport`, the default value is document.body
   */
  popupContainer: {
    type: [Object, String] as PropType<HTMLElement>
  },

  inGroup: {
    type: Boolean,
    default: false
  },

  groupArrowProps: {
    type: Object,
    default: () => ({})
  },

  /**
   * @zh 是否支持 ESC 键关闭预览
   * @en Whether to support the ESC key to close the preview
   */
  escToClose: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 是否开启滚轮缩放
   * @en Whether to enable wheel zoom
   */
  wheelZoom: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 是否开启键盘控制
   * @en Whether to enable keyboard shortcuts
   */
  keyboard: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 默认缩放比
   * @en Default scale
   */
  defaultScale: {
    type: Number,
    default: 1
  },

  /**
   * @zh 缩放速率，仅对滚动缩放生效
   * @en Zoom rate, only for scroll zoom
   */
  zoomRate: {
    type: Number,
    default: 1.1
  }
});

export const previewEmits = {
  close: () => true,
  'update:visible': (visible: boolean) => true
};

export type PreviewProps = ExtractPropTypes<typeof previewProps>;
