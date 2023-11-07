import { defineComponent as h, computed as f, Comment as z, createVNode as c, Fragment as S } from "vue";
import { spaceProps as w } from "./space.mjs";
import { useNamespace as C } from "@tu-view-plus/hooks";
import { getAllElements as M, addUnit as g, isArray as v, isNumber as N, isString as R } from "@tu-view-plus/utils";
import { spaceSizeMaps as b } from "./constants.mjs";
import "../style/space.css";
const E = /* @__PURE__ */ h({
  name: "TuSpace",
  props: w,
  setup(e, {
    slots: t
  }) {
    const r = C("space"), d = f(() => e.align ?? (e.direction === "horizontal" ? "center" : "")), s = f(() => ({
      [r.b()]: !0,
      [r.m(e.direction)]: e.direction,
      [r.m(`align-${d.value}`)]: d.value,
      [r.e("wrap")]: e.wrap,
      [r.e("fill")]: e.fill
    })), u = (i) => N(i) ? i : R(i) ? b[i] : 8, l = (i) => {
      const n = {}, a = g(u(v(e.size) ? e.size[0] : e.size)), m = g(u(v(e.size) ? e.size[1] : e.size));
      return i ? e.wrap ? {
        marginBottom: m
      } : {} : (e.direction === "horizontal" && (n.marginRight = a), (e.direction === "vertical" || e.wrap) && (n.marginBottom = m), n);
    };
    return () => {
      var n;
      const i = M((n = t.default) == null ? void 0 : n.call(t), !0).filter((a) => a.type !== z);
      return c("div", {
        class: s.value
      }, [i.map((a, m) => {
        var o;
        const y = t.divider && m > 0;
        return c(S, {
          key: a.key ?? `item-${m}`
        }, [y && c("div", {
          class: r.e("item-divider"),
          style: l(!1)
        }, [(o = t.divider) == null ? void 0 : o.call(t)]), c("div", {
          class: r.e("item"),
          style: l(m === i.length - 1)
        }, [a])]);
      })]);
    };
  }
});
export {
  E as default
};
