import { buildProps } from '@tu-view-plus/utils';

import type { ExtractPropTypes, PropType } from 'vue';

export const imagePreviewGroupProps = buildProps({
  renderToBody: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 图片列表（设置了本属性之后，将不再收集 tu-image 子组件的图片信息）
   * @en Picture list (after setting this property, the picture information of a-image subcomponent will no longer be collected)
   */
  srcList: {
    type: Array as PropType<string[]>
  },

  /**
   * @zh 当前展示的图片的下标
   * @en The index of the currently displayed image
   * @vModel
   */
  current: {
    type: Number
  },

  /**
   * @zh 第一张展示的图片的下标
   * @en The index of the first image shown
   */
  defaultCurrent: {
    type: Number,
    default: 0
  },

  /**
   * @zh 是否无限循环
   * @en Whether to loop infinitely
   */
  infinite: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 是否可见，受控属性
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
   * @zh 控制条的布局
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
    type: [Object, String] as PropType<HTMLElement | string>
  },
} as const);

export const imagePreviewGroupEmits = [
  /**
   * @zh 切换图片
   * @en Image switch
   */
  'change',
  'update:current',
  /**
   * @zh 预览的打开和关闭
   * @en Preview visibility change
   */
  'visible-change',
  'update:visible'
];

export type ImagePreviewGroupProps = ExtractPropTypes<typeof imagePreviewGroupProps>;
