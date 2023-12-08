import { defineComponent as t, openBlock as l, createElementBlock as s, Fragment as n, createElementVNode as a, normalizeClass as p, unref as c, renderSlot as o, createTextVNode as m, toDisplayString as u } from "vue";
import { selectGroupProps as i } from "./select-group.mjs";
import { useNamespace as f } from "@tu-view-plus/hooks";
import "../style/select.css";
const d = t({
  name: "TuSelectGroup"
}), B = /* @__PURE__ */ t({
  ...d,
  props: i,
  setup(_) {
    const r = f("select");
    return (e, S) => (l(), s(n, null, [
      a("li", {
        class: p(c(r).e("group"))
      }, [
        o(e.$slots, "label", {}, () => [
          m(u(e.label), 1)
        ])
      ], 2),
      o(e.$slots, "default")
    ], 64));
  }
});
export {
  B as default
};
