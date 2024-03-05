import { buildProps as o } from "@tu-view-plus/utils";
const p = o({
  /**
   * @zh 名称
   * @en the name of the action
   */
  name: {
    type: String
  },
  /**
   * @zh 是否禁用
   * @en Whether to disable the action
   */
  disabled: {
    type: Boolean
  }
});
export {
  p as previewActionProps
};
