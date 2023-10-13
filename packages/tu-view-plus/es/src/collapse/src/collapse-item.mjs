import { buildProps as e, definePropType as t, generateId as o } from "@tu-view-plus/utils";
const p = e({
  /**
   * @zh 面板标题
   * @en title of the panel
   */
  title: {
    type: String,
    default: ""
  },
  /**
   * @zh 唯一标志符
   * @en unique identification of the panel
   */
  name: {
    type: t([String, Number]),
    default: () => o()
  },
  /**
   * @zh 是否禁用
   * @en disable the collapse item
   */
  disabled: Boolean
});
export {
  p as collapseItemProps
};
