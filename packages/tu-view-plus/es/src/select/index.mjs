import { withInstall as e, withNoopInstall as t } from "@tu-view-plus/utils";
import m from "./src/select.vue.mjs";
import o from "./src/select-option.vue.mjs";
import r from "./src/select-group.vue.mjs";
import { selectEmits as u, selectProps as S } from "./src/select.mjs";
const p = e(m, { SelectOption: o }), n = t(o), f = t(r);
export {
  p as TuSelect,
  f as TuSelectGroup,
  n as TuSelectOption,
  p as default,
  u as selectEmits,
  S as selectProps
};
