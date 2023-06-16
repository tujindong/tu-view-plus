import { buildProps as o } from "@tu-view-plus/utils";
import { roleTypes as p } from "./constants.mjs";
const e = o({
  /**
   * @zh Tooltip 角色
   * @en Tooltip Role
   * @values 'dialog','grid','group','listbox','menu','navigation','tooltip','tree'
   * @defaultValue 'tooltip'
   */
  role: {
    type: String,
    values: p,
    default: "tootip"
  }
});
export {
  e as popperProps
};
