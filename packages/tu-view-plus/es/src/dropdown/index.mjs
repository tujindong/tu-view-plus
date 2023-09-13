import { withInstall as o } from "@tu-view-plus/utils";
import r from "./src/dropdown.vue.mjs";
import n from "./src/dropdown-group.vue.mjs";
import m from "./src/dropdown-item.vue.mjs";
import t from "./src/dropdown-button.vue.mjs";
import p from "./src/dropdown-submenu.vue.mjs";
import { dropdownEmits as x, dropdownProps as I } from "./src/dropdown.mjs";
const s = o(r), w = o(n), a = o(m), D = o(t), T = o(p), e = s;
export {
  s as TuDropdown,
  D as TuDropdownButton,
  w as TuDropdownGroup,
  a as TuDropdownItem,
  T as TuDropdownSubmenu,
  e as default,
  x as dropdownEmits,
  I as dropdownProps
};
