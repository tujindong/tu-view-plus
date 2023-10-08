import { buildProps as e } from "@tu-view-plus/utils";
const o = e({
  /**
   * @zh 选项卡的标题
   * @en Title of the tab
   */
  title: String,
  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 是否允许关闭此选项卡（仅在可编辑模式生效）
   * @en Whether to allow this tab to be closed (only effective in editable mode)
   */
  closable: {
    type: Boolean,
    default: !0
  },
  /**
   * @zh 是否在不显示标签时销毁内容
   * @en Whether to destroy the content when the label is not displayed
   */
  destroyOnHide: {
    type: Boolean,
    default: !1
  }
});
export {
  o as tabPaneProps
};
