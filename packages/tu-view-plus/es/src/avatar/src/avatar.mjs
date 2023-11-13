import { buildProps as t } from "@tu-view-plus/utils";
import { shape as e, triggerType as r, avartEffects as a } from "./constants.mjs";
const u = t({
  /**
   * @zh 头像的形状
   * @en The shape of the head
   */
  shape: {
    values: e,
    type: String,
    default: "circle"
  },
  /**
   * @zh 头像图片的地址
   * @en The address of the avatar image
   */
  imageUrl: {
    type: String
  },
  /**
   * @zh 头像的大小
   * @en The size of the avatar
   */
  size: {
    type: Number,
    default: 40
  },
  /**
   * @zh 是否自动根据头像尺寸调整字体大小
   * @en Whether to automatically resize the font based on the avatar size
   */
  autoFixFontSize: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 可点击的头像交互类型
   * @en Clickable avatar interaction type
   */
  triggerType: {
    values: r,
    type: String,
    default: "button"
  },
  /**
   * @zh 交互图标的样式
   * @en Interactive icon styles
   */
  triggerIconStyle: {
    type: Object
  },
  /**
   * @zh  主题
   * @en  theme of Avatr
   * @values 'line' 'down', 'up'
   * @defaultValue 'line'
   */
  effect: {
    type: String,
    values: a,
    default: "up"
  },
  /**
   * @zh 头像背景颜色
   * @en background color of avatar
   */
  background: {
    type: String
  },
  /**
   * @zh 头像文字颜色
   * @en color of avatar
   */
  color: {
    type: String
  }
}), l = {
  click: (o) => !0,
  error: () => !0,
  load: () => !0
};
export {
  l as avatarEmits,
  u as avatarProps
};
