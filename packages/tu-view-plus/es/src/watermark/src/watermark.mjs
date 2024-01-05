import { buildProps as e } from "@tu-view-plus/utils";
const a = e({
  /**
   * @zh 水印文字内容
   * @en watermark text content
   */
  content: {
    type: [String, Array]
  },
  /**
   * @zh 图片源，建议使用 2 倍或 3 倍图
   * @en image watermark address
   */
  image: {
    type: String
  },
  /**
   * @zh 水印宽度（默认为内容宽度）
   * @en watermark width
   */
  width: {
    type: Number
  },
  /**
   * @zh 水印高度（默认为内容高度）
   * @en watermark height
   */
  height: {
    type: Number
  },
  /**
   * @zh 水印间的间距
   * @en watermark spacing
   */
  gap: {
    type: Array,
    default: () => [90, 90]
  },
  /**
   * @zh 距离容器左上角的偏移量，默认为水印间距的一半
   * @en The offset from the upper left corner of the container, the default is half the watermark spacing
   * @defaultValue [gap[0]/2, gap[1]/2]
   */
  offset: {
    type: Array
  },
  /**
   * @zh 旋转角度
   * @en Watermark rotation angle
   */
  rotate: {
    type: Number,
    default: -22
  },
  /**
   * @zh 水印字体样式，具体参数配置看 [WatermarkFont](#WatermarkFont)
   * @en Watermark font style, specific parameter configuration see [WatermarkFont](#WatermarkFont)
   */
  font: {
    type: Object
  },
  /**
   * @zh 水印层级
   * @en watermark z-index
   */
  zIndex: {
    type: Number,
    default: 6
  },
  /**
   * @zh 透明度
   * @en watermark opacity
   */
  alpha: {
    type: Number,
    default: 1
  },
  /**
   * @zh 水印防篡改
   * @en watermark anti-tampering
   */
  antiTamper: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 灰阶水印
   * @en grayscale watermark
   */
  grayscale: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 是否重复水印
   * @en whether to repeat the watermark
   */
  repeat: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 是否错开排列
   * @en whether to stagger the arrangement layout
   */
  staggered: {
    type: Boolean,
    default: !0
  }
});
export {
  a as watermarkProps
};
