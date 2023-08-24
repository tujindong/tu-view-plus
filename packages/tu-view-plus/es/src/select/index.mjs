import { withInstall as o, withNoopInstall as e } from "@tu-view-plus/utils";
import s from "./src/select.vue.mjs";
import t from "./src/select-option.vue.mjs";
import { selectEmits as f, selectProps as a } from "./src/select.mjs";
const r = o(s, { SelectOption: t }), c = e(t);
export {
  r as TuSelect,
  c as TuSelectOption,
  r as default,
  f as selectEmits,
  a as selectProps
};
