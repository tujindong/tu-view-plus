import { buildProps as e } from "@tu-view-plus/utils";
const i = e({
  renderToBody: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 图片获取地址
   * @en Image src
   */
  src: {
    type: String
  },
  /**
   * @zh 图片显示宽度
   * @en Image width
   */
  width: {
    type: [String, Number]
  },
  /**
   * @zh 图片显示高度
   * @en Image height
   */
  height: {
    type: [String, Number]
  },
  /**
   * @zh 标题
   * @en Title
   */
  title: {
    type: String
  },
  /**
   * @zh 描述，将显示在底部，如果 alt 没有值，则会将其设置给 alt
   * @en Description, will be displayed at the bottom. if alt has no value, it will be set to alt
   */
  description: {
    type: String
  },
  /**
   * @zh 确定图片如何适应容器框
   * @en indicate how the image should be resized to fit its container
   */
  fit: {
    type: String
  },
  /**
   * @zh 图片的文字描述
   * @en Text description of the image
   */
  alt: {
    type: String
  },
  /**
   * @zh 是否隐藏 footer（支持 'never' 参数，支持在加载错误时显示底部内容）
   * @en Whether to hide footer (supports the 'never' parameter, which supports displaying bottom content when loading errors)
   */
  hideFooter: {
    type: [Boolean, String],
    default: !1
  },
  /**
   * @zh 底部显示的位置
   * @en The position shown at the bottom
   */
  footerPosition: {
    type: String,
    default: "inner"
  },
  /**
   * @zh 是否显示加载中效果
   * @en Whether to show the loading effect
   */
  showLoader: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 是否开启预览
   * @en Whether to enable preview
   */
  preview: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 控制预览的打开状态，可与 previewVisibleChange 配合使用
   * @en Control the open state of the preview, can be used in conjunction with previewVisibleChange
   * @vModel
   */
  previewVisible: {
    type: Boolean,
    default: void 0
  },
  /**
   * @zh 预览的默认打开状态
   * @en The default open state of the preview
   */
  defaultPreviewVisible: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 预览的配置项（所有选项都是可选的） [ImagePreviewProps](#image-preview%20Props)
   * @en Preview configuration items (all options are optional) [ImagePreviewProps](#image-preview%20Props)
   */
  previewProps: {
    type: Object
  },
  /**
   * @zh 底部显示区域的类名
   * @en The class name of the bottom display area
   */
  footerClass: {
    type: [String, Array, Object]
  }
}), r = [
  /**
   * @zh 预览的打开和关闭事件
   * @en Preview opening and closing events
   * @param {boolean} visible
   */
  "preview-visible-change",
  "update:previewVisible"
];
export {
  r as imageEmits,
  i as imageProps
};
