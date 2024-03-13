import { withInstall as o } from "@tu-view-plus/utils";
import m from "./src/menu.vue.mjs";
import t from "./src/menu-item.vue.mjs";
import r from "./src/menu-item-group.vue.mjs";
import n from "./src/sub-menu.vue.mjs";
import { menuProps as l } from "./src/menu.mjs";
const p = o(m), c = o(t), _ = o(r), a = o(n);
export {
  p as TuMenu,
  c as TuMenuItem,
  _ as TuMenuItemGroup,
  a as TuSubMenu,
  p as default,
  l as menuProps
};
