import { defineComponent as e, ref as l, openBlock as a, createElementBlock as m, normalizeClass as p, unref as n, renderSlot as c } from "vue";
import { collapseProps as i, collapseEmits as u } from "./collapse.mjs";
import { useNamespace as f } from "@tu-view-plus/hooks";
import { ensureArray as d } from "@tu-view-plus/utils";
import "../style/collapse.css";
const _ = e({
  name: "TuCollapse"
}), x = /* @__PURE__ */ e({
  ..._,
  props: i,
  emits: u,
  setup(o, { emit: C }) {
    const r = o, s = f("collapse");
    return l(d(r.modelValue)), (t, b) => (a(), m("div", {
      class: p(n(s).b()),
      role: "tablist",
      "aria-multiselectable": "true"
    }, [
      c(t.$slots, "default")
    ], 2));
  }
});
export {
  x as default
};
