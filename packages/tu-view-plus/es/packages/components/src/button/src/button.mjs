import { buildProps as e, SIZES as n, iconPropType as t } from "@tu-view-plus/utils";
import { Loading as a } from "../../../../../node_modules/.pnpm/@tu-view-plus_icons-vue@1.0.1/node_modules/@tu-view-plus/icons-vue/dist/index.mjs";
const i = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], u = ["button", "submit", "reset"], r = e({
  disabled: Boolean,
  /**
   * @zh 按钮的尺寸
   * @en Button size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: {
    type: String,
    values: n,
    default: "medium"
  },
  /**
   * @zh 按钮的类型
   * @en Button type
   * @values 'default','primary','success','warning', 'info', 'danger', 'text', ''
   * @defaultValue 'default'
   */
  type: {
    type: String,
    values: i,
    default: "default"
  },
  /**
   * @zh 图标
   * @en Icon
   * @slot icon
   */
  icon: {
    type: t
  },
  /**
   * @zh 按钮的原始类型
   * @en native button type
   */
  nativeType: {
    type: String,
    values: u,
    default: "button"
  },
  /**
   * @zh 按钮是否为加载中状态
   * @en Whether the button is in the loading state
   */
  loading: Boolean,
  /**
   * @zh 按钮加载中状态使用的组件
   * @en customize loading icon component
   */
  loadingIcon: {
    type: t,
    default: () => a
  },
  /**
   * @zh 按钮是否为文字链接
   * @en determine whether it's a link button
   */
  text: Boolean,
  /**
   * @zh 按钮原始属性 autofocus
   * @en native button autofocus
   */
  autofocus: Boolean,
  /**
   * @zh 按钮是否为圆角属性
   * @en determine whether it's a round button
   */
  round: Boolean,
  /**
   * @zh 按钮是否为圆型属性
   * @en determine whether it's a circle button
   */
  circle: Boolean
}), d = {
  click: (o) => o instanceof MouseEvent
};
export {
  d as buttonEmits,
  u as buttonNativeTypes,
  r as buttonProps,
  i as buttonTypes
};
