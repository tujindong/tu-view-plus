import { withInstall as r, withNoopInstall as t } from "@tu-view-plus/utils";
import c from "./src/select.vue.mjs";
import o from "./src/select-option.vue.mjs";
import e from "./src/select-group.vue.mjs";
import { selectEmits as _, selectProps as S } from "./src/select.mjs";
const p = r(c, { SelectOption: o, SelectGroup: e }), n = t(o), f = t(e);
export {
  p as TuSelect,
  f as TuSelectGroup,
  n as TuSelectOption,
  p as default,
  _ as selectEmits,
  S as selectProps
};
