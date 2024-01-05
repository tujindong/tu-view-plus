import { buildProps as t, iconPropType as o } from "@tu-view-plus/utils";
const l = t({
  /**
   * @zh 链接的类型
   * @en Link type
   * @values 'default','primary','warning','success','danger','info'
   */
  type: {
    type: String,
    default: "default"
  },
  /**
   * @zh 是否下划线
   * @description whether the component has underline
   */
  underline: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 链接是否禁用
   * @en Whether the link is disabled
   */
  disabled: { type: Boolean, default: !1 },
  /**
   * @zh 链接地址
   * @en Link address
   */
  href: { type: String, default: "" },
  /**
   * @zh 图标
   * @en icon
   */
  icon: {
    type: o
  }
}), i = {
  click: (e) => e instanceof MouseEvent
};
export {
  i as linkEmits,
  l as linkProps
};
