import { defineComponent as _, inject as x, ref as m, computed as o, openBlock as K, createElementBlock as z, normalizeClass as n, unref as e, createElementVNode as d, withKeys as B, withModifiers as E, createVNode as p, withCtx as h, renderSlot as C, createTextVNode as S, toDisplayString as V, withDirectives as D, vShow as F } from "vue";
import { collapseItemProps as H } from "./collapse-item.mjs";
import { useNamespace as j, defaultNamespace as I } from "@tu-view-plus/hooks";
import { generateId as A } from "@tu-view-plus/utils";
import { CaretRight as M } from "@tu-view-plus/icons-vue";
import { TuCollapseTransition as P } from "../../collapse-transition/index.mjs";
import { TuIcon as R } from "../../icon/index.mjs";
import { collapseContextKey as q } from "./constants.mjs";
import "../style/collapse.css";
const G = ["aria-expanded", "aria-controls", "aria-describedby"], J = ["id", "tabindex", "onKeypress"], L = ["aria-hidden", "aria-labelledby", "id"], O = _({
  name: "TuCollapseItem"
}), ie = /* @__PURE__ */ _({
  ...O,
  props: H,
  setup(y) {
    const s = y, a = j("collapse-item"), t = x(q), r = m(!1), c = m(!1), f = m(A()), i = o(
      () => t == null ? void 0 : t.activeNames.value.includes(s.name)
    ), u = o(
      () => `${I}-content-${f.value}`
    ), v = o(() => `${I}-head-${f.value}`), k = o(() => ({
      [a.b()]: !0,
      [a.m(t == null ? void 0 : t.size)]: t == null ? void 0 : t.size,
      [a.is("active")]: i.value,
      [a.is("disabled")]: s.disabled
    })), w = o(() => ({
      [a.e("header")]: !0,
      [a.is("active")]: i.value,
      [a.is("focusing")]: r.value && !s.disabled
    })), $ = o(() => ({
      [a.e("arrow")]: !0,
      [a.is("active")]: i.value
    })), N = () => {
      s.disabled || (t == null || t.handleItemClick(s.name), r.value = !1, c.value = !0);
    }, T = () => {
      t == null || t.handleItemClick(s.name);
    }, g = () => {
      setTimeout(() => {
        c.value ? c.value = !1 : r.value = !0;
      }, 50);
    };
    return (l, b) => (K(), z("div", {
      class: n(e(k))
    }, [
      d("div", {
        role: "tab",
        "aria-expanded": e(i),
        "aria-controls": e(u),
        "aria-describedby": e(u)
      }, [
        d("div", {
          role: "button",
          id: e(v),
          class: n(e(w)),
          tabindex: l.disabled ? -1 : 0,
          onClick: N,
          onKeypress: B(E(T, ["stop", "prevent"]), ["space", "enter"]),
          onFocus: g,
          onBlur: b[0] || (b[0] = (Q) => r.value = !1)
        }, [
          p(e(R), {
            class: n(e($))
          }, {
            default: h(() => [
              p(e(M))
            ]),
            _: 1
          }, 8, ["class"]),
          C(l.$slots, "title", {}, () => [
            S(V(l.title), 1)
          ])
        ], 42, J)
      ], 8, G),
      p(e(P), null, {
        default: h(() => [
          D(d("div", {
            role: "tabpanel",
            "aria-hidden": !e(i),
            "aria-labelledby": e(v),
            id: e(u),
            class: n(e(a).e("wrap"))
          }, [
            d("div", {
              class: n(e(a).e("content"))
            }, [
              C(l.$slots, "default")
            ], 2)
          ], 10, L), [
            [F, e(i)]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
});
export {
  ie as default
};
