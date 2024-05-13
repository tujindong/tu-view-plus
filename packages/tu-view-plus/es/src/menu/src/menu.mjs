import { buildProps as e } from "@tu-view-plus/utils";
import { effectTypes as t } from "./context.mjs";
const f = e({
  mode: {
    type: String,
    default: "vertical"
  },
  /**
  * @zh  主题
  * @en  theme of Menu
  * @values '', 'inset', 'outset', 'bordered', 'outlined', 'flat'
  * @defaultValue 'outset'
  */
  effect: {
    type: String,
    values: t,
    default: "outset"
  }
});
export {
  f as menuProps
};
