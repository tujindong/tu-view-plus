import { buildProps as t, keysOf as o, TypeComponentsMap as l } from "@tu-view-plus/utils";
import { useSizeProp as r } from "@tu-view-plus/hooks";
import { alertEffects as p } from "./constants.mjs";
const i = t({
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
    values: o(l),
    default: ""
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
  size: { ...r, default: "medium" },
  /**
   * @zh 主题样式
   * @en theme style.
   * @values 'dark', 'light', 'plain', 'up', 'down'
   */
  effect: {
    type: String,
    values: p,
    default: "up"
  }
}), f = {
  close: (e) => e instanceof MouseEvent
};
export {
  f as alertEmits,
  i as alertProps
};
