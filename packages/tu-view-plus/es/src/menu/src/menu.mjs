import { buildProps as e } from "@tu-view-plus/utils";
import { effectTypes as t } from "./context.mjs";
const o = e({
  mode: {
    type: String,
    default: "vertical"
  },
  /**
  * @zh  主题
  * @en  theme of Menu
  * @values 'default' 'inset' 'bordered', 'outlined', 'flat'
  * @defaultValue 'outset'
  */
  effect: {
    type: String,
    values: t,
    default: "default"
  }
});
export {
  o as menuProps
};
