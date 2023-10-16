import { defineComponent as a, inject as r, computed as o, openBlock as p, createElementBlock as i, normalizeClass as u, unref as d, renderSlot as f } from "vue";
import { collapseItemProps as _ } from "./collapse-item.mjs";
import { useNamespace as v } from "@tu-view-plus/hooks";
import { collapseContextKey as C } from "./constants.mjs";
import "../style/collapse.css";
const I = a({
  name: "TuCollapseItem"
}), j = /* @__PURE__ */ a({
  ...I,
  props: _,
  setup(l) {
    const t = l, e = v("collapse-item"), s = r(C), c = o(
      () => s == null ? void 0 : s.activeNames.value.includes(t.name)
    ), n = o(() => ({
      [e.b()]: !0,
      [e.is("active")]: c.value,
      [e.is("disabled")]: t.disabled
    }));
    return (m, b) => (p(), i("div", {
      class: u(d(n))
    }, [
      f(m.$slots, "default")
    ], 2));
  }
});
export {
  j as default
};
