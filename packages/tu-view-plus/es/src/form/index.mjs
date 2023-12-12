import { withInstall as m, withNoopInstall as r } from "@tu-view-plus/utils";
import t from "./src/form.vue.mjs";
import o from "./src/form-item.vue.mjs";
import { formEmits as I, formProps as _ } from "./src/form.mjs";
import { formItemProps as x, formItemValidateStates as d } from "./src/form-item.mjs";
import "vue";
import "@tu-view-plus/hooks";
const e = m(t, { FormItem: o });
r(o);
export {
  e as TuForm,
  e as default,
  I as formEmits,
  x as formItemProps,
  d as formItemValidateStates,
  _ as formProps
};
