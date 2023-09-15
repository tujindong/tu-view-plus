import { buildProps as t, keysOf as o, TypeComponentsMap as r } from "@tu-view-plus/utils";
import { useSizeProp as l } from "@tu-view-plus/hooks";
import { alertEffects as n } from "./constants.mjs";
const a = t({
  /**
   * @zh Alert标题。
   * @en alert title.
   */
  title: {
    type: String,
    default: ""
  },
  /**
   * @zh 描述性文本
   * @en alert description.
   */
  description: {
    type: String,
    default: ""
  },
  /**
   * @zh Alert类型。
   * @en alert type.
   */
  type: {
    type: String,
    values: o(r),
    default: "info"
  },
  /**
   * @zh 是否可以关闭
   * @en whether alert can be dismissed.
   */
  closable: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 自定义关闭按钮文本
   * @en text for replacing x button
   */
  closeText: {
    type: String,
    default: ""
  },
  /**
   * @zh 是否显示类型图标
   * @en whether show icon
   */
  showIcon: Boolean,
  /**
   * @zh 文字是否居中
   * @en should content be placed in center.
   */
  center: Boolean,
  /**
   * @zh 警告的尺寸
   * @en Alert size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...l, default: "medium" },
  /**
   * @zh 主题样式
   * @en theme style.
   */
  effect: {
    type: String,
    values: n,
    default: "neumorphic"
  }
}), f = {
  lose: (e) => e instanceof MouseEvent
};
export {
  f as alertEmits,
  a as alertProps
};
