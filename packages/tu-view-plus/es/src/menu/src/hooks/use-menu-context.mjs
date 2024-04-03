import { inject as n } from "vue";
import { MenuInjectionKey as t } from "../context.mjs";
function u() {
  return n(t) || {};
}
export {
  u as useMenuContext
};
