import { ref as u, inject as r, computed as d, unref as l } from "vue";
import { useProp as n, useGlobalSize as f } from "@tu-view-plus/hooks";
import { formContextKey as m, formItemContextKey as p } from "../constants.mjs";
const x = (s, e = {}) => {
  const o = u(void 0), a = e.prop ? o : n("size"), c = e.global ? o : f(), t = e.form ? { size: void 0 } : r(m, void 0), i = e.formItem ? { size: void 0 } : r(p, void 0);
  return d(
    () => l(s) || a.value || (i == null ? void 0 : i.size) || (t == null ? void 0 : t.size) || c.value || ""
  );
}, y = (s) => {
  const e = n("disabled"), o = r(m, void 0);
  return d(
    () => e.value || l(s) || (o == null ? void 0 : o.disabled) || !1
  );
};
export {
  y as useFormDisabled,
  x as useFormSize
};
