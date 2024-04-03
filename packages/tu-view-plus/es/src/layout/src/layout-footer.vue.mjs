import { defineComponent as e, openBlock as r, createElementBlock as a, normalizeClass as n, unref as s, renderSlot as l } from "vue";
import { useNamespace as u } from "@tu-view-plus/hooks";
import "../style/layout.css";
const c = e({
  name: "TuLayoutFooter"
}), d = /* @__PURE__ */ e({
  ...c,
  setup(m) {
    const o = u("layout");
    return (t, f) => (r(), a("footer", {
      class: n(s(o).e("footer"))
    }, [
      l(t.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
