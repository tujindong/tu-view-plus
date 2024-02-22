import { getCurrentInstance as r, ref as n, onUpdated as u } from "vue";
import { generateKey as y } from "../utils/tree-data.mjs";
function f() {
  const e = r(), t = () => (e == null ? void 0 : e.vnode.key) ?? y(), o = n(t());
  return u(() => {
    o.value = t();
  }), o;
}
export {
  f as useNodeKey
};
