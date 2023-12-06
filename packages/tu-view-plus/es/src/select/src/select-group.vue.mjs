import { defineComponent as o, openBlock as l, createElementBlock as s, Fragment as n, createElementVNode as a, normalizeClass as p, unref as m, renderSlot as t, createTextVNode as c, toDisplayString as i } from "vue";
import { selectGroupProps as u } from "./select-group.mjs";
import { useNamespace as f } from "@tu-view-plus/hooks";
import "../style/select.css";
const d = o({
  name: "TuList"
}), B = /* @__PURE__ */ o({
  ...d,
  props: u,
  setup(_) {
    const r = f("select");
    return (e, g) => (l(), s(n, null, [
      a("li", {
        class: p(m(r).e("group-title"))
      }, [
        t(e.$slots, "label", {}, () => [
          c(i(e.label), 1)
        ])
      ], 2),
      t(e.$slots, "default")
    ], 64));
  }
});
export {
  B as default
};
