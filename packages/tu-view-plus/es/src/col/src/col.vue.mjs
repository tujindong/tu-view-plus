import { defineComponent as u, inject as d, computed as r, openBlock as h, createBlock as $, resolveDynamicComponent as g, normalizeClass as y, normalizeStyle as C, withCtx as _, renderSlot as v } from "vue";
import { colProps as x } from "./col.mjs";
import { useNamespace as b } from "@tu-view-plus/hooks";
import "../../row/index.mjs";
import { isNumber as c, isObject as j } from "@tu-view-plus/utils";
import "../style/col.css";
import { rowContextKey as E } from "../../row/src/constants.mjs";
const k = u({
  name: "TuCol"
}), R = /* @__PURE__ */ u({
  ...k,
  props: x,
  setup(p) {
    const n = p, { gutter: l } = d(E, { gutter: r(() => 0) }), t = b("col"), f = r(() => {
      const e = {};
      return l.value && (e.paddingLeft = e.paddingRight = `${l.value / 2}px`), e;
    }), i = r(() => {
      const e = [];
      return ["span", "offset", "pull", "push"].forEach((s) => {
        const o = n[s];
        c(o) && (s === "span" ? e.push(t.e(`${o}`)) : o > 0 && e.push(t.e(`${s}-${o}`)));
      }), ["xs", "sm", "md", "lg", "xl"].forEach((s) => {
        c(n[s]) ? e.push(t.e(`${s}-${n[s]}`)) : j(n[s]) && Object.entries(n[s]).forEach(([o, a]) => {
          e.push(
            o !== "span" ? t.e(`${s}-${o}-${a}`) : t.e(`${s}-${a}`)
          );
        });
      }), l.value && e.push(t.is("guttered")), [t.b(), e];
    });
    return (e, m) => (h(), $(g(e.tag), {
      class: y(i.value),
      style: C(f.value)
    }, {
      default: _(() => [
        v(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
export {
  R as default
};
