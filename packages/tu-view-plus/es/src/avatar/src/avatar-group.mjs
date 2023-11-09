import { buildProps as e } from "@tu-view-plus/utils";
const a = e({
  /**
   * @zh 头像的形状，有圆形(circle)和正方形(square)两种
   * @en The shape of the avatar in the group, there are two kinds of circle (circle) and square (square)
   * @values 'circle', 'square'
   */
  shape: {
    type: String,
    default: "circle"
  },
  /**
   * @zh 头像的尺寸大小，单位是 `px`
   * @en The size of the avatar in the group, the unit is `px`
   */
  size: Number,
  /**
   * @zh 是否自动根据头像尺寸调整字体大小
   * @en Whether to automatically adjust the font size according to the size of the avatar.
   */
  autoFixFontSize: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 头像组最多显示的头像数量，多余头像将以 `+x` 的形式展示。
   * @en The maximum number of avatars displayed in the avatar group. The excess avatars will be displayed in the form of `+x`.
   */
  maxCount: {
    type: Number,
    default: 0
  },
  /**
   * @zh 头像组内的头像 `z-index` 递增，默认是递减。
   * @en The avatar `z-index` in the avatar group increases, and the default is decreasing.
   */
  zIndexAscend: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 多余头像样式。
   * @en Style for +x.
   */
  maxStyle: {
    type: Object
  }
});
export {
  a as avatarGroupProps
};
