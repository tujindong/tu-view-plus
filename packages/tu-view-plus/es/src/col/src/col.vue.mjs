import { defineComponent as u, inject as h, computed as l, openBlock as $, createBlock as g, resolveDynamicComponent as y, normalizeClass as C, unref as a, normalizeStyle as _, withCtx as x, renderSlot as b } from "vue";
import { colProps as v } from "./col.mjs";
import { useNamespace as j } from "@tu-view-plus/hooks";
import "../../row/index.mjs";
import { isNumber as p, isObject as E } from "@tu-view-plus/utils";
import "../style/col.css";
import { rowContextKey as k } from "../../row/src/constants.mjs";
const w = u({
  name: "TuCol"
}), T = /* @__PURE__ */ u({
  ...w,
  props: v,
  setup(f) {
    const n = f, { gutter: r } = h(k, { gutter: l(() => 0) }), t = j("col"), i = l(() => {
      const e = {};
      return r.value && (e.paddingLeft = e.paddingRight = `${r.value / 2}px`), e;
    }), m = l(() => {
      const e = [];
      return ["span", "offset", "pull", "push"].forEach((s) => {
        const o = n[s];
        p(o) && (s === "span" ? e.push(t.e(`${o}`)) : o > 0 && e.push(t.e(`${s}-${o}`)));
      }), ["xs", "sm", "md", "lg", "xl"].forEach((s) => {
        p(n[s]) ? e.push(t.e(`${s}-${n[s]}`)) : E(n[s]) && Object.entries(n[s]).forEach(([o, c]) => {
          e.push(
            o !== "span" ? t.e(`${s}-${o}-${c}`) : t.e(`${s}-${c}`)
          );
        });
      }), r.value && e.push(t.is("guttered")), [t.b(), e];
    });
    return (e, d) => ($(), g(y(e.tag), {
      class: C(a(m)),
      style: _(a(i))
    }, {
      default: x(() => [
        b(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
export {
  T as default
};
