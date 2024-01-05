import { toRefs as m, watch as c, computed as n } from "vue";
import { isUndefined as t } from "@tu-view-plus/utils";
import { useState as s } from "./use-state.mjs";
function d(u, l) {
  const { value: e } = m(l), [o, a] = s(
    t(e.value) ? u : e.value
  );
  return c(e, (r) => {
    t(r) && a(void 0);
  }), [n(
    () => t(e.value) ? o.value : e.value
  ), a, o];
}
export {
  d as useMergeState
};
