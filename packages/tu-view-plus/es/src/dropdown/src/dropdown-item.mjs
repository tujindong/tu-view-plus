import { buildProps as e } from "@tu-view-plus/utils";
const n = e({
  /**
   * @zh 选项值
   * @en Value
   */
  value: {
    type: [String, Number, Object]
  },
  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled: {
    type: Boolean,
    default: !1
  },
  // private
  active: Boolean,
  uninjectContext: Boolean
}), r = {
  click: (o) => !0
};
export {
  r as dropdownItemEmits,
  n as dropdownItemProps
};
