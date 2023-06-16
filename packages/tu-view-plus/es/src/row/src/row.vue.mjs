import { defineComponent as r, computed as s, provide as u, openBlock as m, createBlock as p, resolveDynamicComponent as c, normalizeClass as f, normalizeStyle as g, withCtx as y, renderSlot as d } from "vue";
import { rowProps as _ } from "./row.mjs";
import { rowContextKey as w } from "./constants.mjs";
import { useNamespace as C } from "@tu-view-plus/hooks";
import "../style/row.css";
const v = r({
  name: "TuRow"
}), z = /* @__PURE__ */ r({
  ...v,
  props: _,
  setup(n) {
    const t = n, a = s(() => t.gutter);
    u(w, { gutter: a });
    const o = C("row"), l = s(() => ({
      [o.b()]: !0,
      [o.is(`justify-${t.justify}`)]: t.justify !== "start",
      [o.is(`align-${t.align}`)]: t.align !== "top"
    })), i = s(() => {
      const e = {};
      return t.gutter && (e.marginRight = e.marginLeft = `-${t.gutter / 2}px`), e;
    });
    return (e, $) => (m(), p(c(e.tag), {
      class: f(l.value),
      style: g(i.value)
    }, {
      default: y(() => [
        d(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
export {
  z as default
};
