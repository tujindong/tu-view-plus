import { defineComponent as e, openBlock as a, createElementBlock as r, normalizeClass as n, unref as s, renderSlot as l } from "vue";
import { useNamespace as u } from "@tu-view-plus/hooks";
import "../style/layout.css";
const c = e({
  name: "TuLayoutHeader"
}), i = /* @__PURE__ */ e({
  ...c,
  setup(m) {
    const o = u("layout");
    return (t, p) => (a(), r("header", {
      class: n(s(o).e("header"))
    }, [
      l(t.$slots, "default")
    ], 2));
  }
});
export {
  i as default
};
