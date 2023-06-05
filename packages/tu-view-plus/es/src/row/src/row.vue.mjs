import { defineComponent as n, computed as r, provide as m, openBlock as p, createBlock as c, resolveDynamicComponent as f, normalizeClass as g, unref as s, normalizeStyle as y, withCtx as d, renderSlot as _ } from "vue";
import { rowProps as w } from "./row.mjs";
import { rowContextKey as C } from "./constants.mjs";
import { useNamespace as $ } from "@tu-view-plus/hooks";
import "../style/row.css";
const h = n({
  name: "TuRow"
}), B = /* @__PURE__ */ n({
  ...h,
  props: w,
  setup(a) {
    const t = a, i = r(() => t.gutter);
    m(C, { gutter: i });
    const o = $("row"), l = r(() => ({
      [o.b()]: !0,
      [o.is(`justify-${t.justify}`)]: t.justify !== "start",
      [o.is(`align-${t.align}`)]: t.align !== "top"
    })), u = r(() => {
      const e = {};
      return t.gutter && (e.marginRight = e.marginLeft = `-${t.gutter / 2}px`), e;
    });
    return (e, j) => (p(), c(f(e.tag), {
      class: g(s(l)),
      style: y(s(u))
    }, {
      default: d(() => [
        _(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
export {
  B as default
};
