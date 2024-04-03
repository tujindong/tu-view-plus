import { buildProps as e } from "@tu-view-plus/utils";
const o = e({
  /**
   * @zh 唯一标志
   * @en Unique key
   */
  key: {
    type: String
  },
  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled: {
    type: Boolean,
    default: !1
  }
}), m = ["click"];
export {
  m as menuItemEmits,
  o as menuItemProps
};
