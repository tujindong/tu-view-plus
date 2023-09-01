import { withInstall as o, withInstallFunction as t } from "@tu-view-plus/utils";
import m from "./src/modal.vue.mjs";
import a from "./src/methods.mjs";
import { modalEmits as p, modalProps as c } from "./src/modal.mjs";
const s = o(m), d = t(a, "$modal");
export {
  s as TuModal,
  d as TuModalBox,
  d as default,
  p as modalEmits,
  c as modalProps
};
