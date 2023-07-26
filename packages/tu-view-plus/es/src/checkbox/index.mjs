import { withInstall as r, withNoopInstall as c } from "@tu-view-plus/utils";
import t from "./src/checkbox.vue.mjs";
import o from "./src/checkbox-group.vue.mjs";
import { checkboxEmits as b, checkboxProps as f } from "./src/checkbox.mjs";
import { checkboxGroupEmits as n, checkboxGroupProps as u } from "./src/checkbox-group.mjs";
const s = r(t, { CheckboxGroup: o }), x = c(o);
export {
  s as TuCheckbox,
  x as TuCheckboxGroup,
  b as checkboxEmits,
  n as checkboxGroupEmits,
  u as checkboxGroupProps,
  f as checkboxProps
};
