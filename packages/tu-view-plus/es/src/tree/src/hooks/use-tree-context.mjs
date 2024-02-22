import { inject as e } from "vue";
import { TreeInjectionKey as t } from "../context.mjs";
function i() {
  return e(t) || {};
}
export {
  i as useTreeContext
};
