import { defineComponent as N, inject as E, ref as u, computed as l, openBlock as h, createElementBlock as y, normalizeClass as r, unref as e, createElementVNode as d, withKeys as S, withModifiers as D, createVNode as p, withCtx as I, renderSlot as f, createTextVNode as k, toDisplayString as $, createCommentVNode as F, withDirectives as H, vShow as j } from "vue";
import { collapseItemProps as z } from "./collapse-item.mjs";
import { useNamespace as A, defaultNamespace as w } from "@tu-view-plus/hooks";
import { generateId as M } from "@tu-view-plus/utils";
import { CaretRight as P } from "@tu-view-plus/icons-vue";
import { TuCollapseTransition as R } from "../../collapse-transition/index.mjs";
import { TuIcon as q } from "../../icon/index.mjs";
import { collapseContextKey as G } from "./constants.mjs";
import "../style/collapse.css";
const J = ["aria-expanded", "aria-controls", "aria-describedby"], L = ["id", "tabindex", "onKeypress"], O = ["aria-hidden", "aria-labelledby", "id"], Q = N({
  name: "TuCollapseItem"
}), ie = /* @__PURE__ */ N({
  ...Q,
  props: z,
  setup(x) {
    const o = x, t = A("collapse"), a = E(G), n = u(!1), c = u(!1), v = u(M()), i = l(
      () => a == null ? void 0 : a.activeNames.value.includes(o.name)
    ), m = l(
      () => `${w}-content-${v.value}`
    ), C = l(() => `${w}-head-${v.value}`), T = l(() => ({
      [t.e("item")]: !0,
      [t.is("active")]: i.value,
      [t.is("disabled")]: o.disabled
    })), _ = l(() => ({
      [t.e("item-header")]: !0,
      [t.is("active")]: i.value,
      [t.is("focusing")]: n.value && !o.disabled
    })), g = l(() => ({
      [t.e("item-arrow")]: !0,
      [t.is("active")]: i.value
    })), K = () => {
      o.disabled || (a == null || a.handleItemClick(o.name), n.value = !1, c.value = !0);
    }, V = () => {
      a == null || a.handleItemClick(o.name);
    }, B = () => {
      setTimeout(() => {
        c.value ? c.value = !1 : n.value = !0;
      }, 50);
    };
    return (s, b) => (h(), y("div", {
      class: r(e(T))
    }, [
      d("div", {
        role: "tab",
        "aria-expanded": e(i),
        "aria-controls": e(m),
        "aria-describedby": e(m)
      }, [
        d("div", {
          role: "button",
          id: e(C),
          class: r(e(_)),
          tabindex: s.disabled ? -1 : 0,
          onClick: K,
          onKeypress: S(D(V, ["stop", "prevent"]), ["space", "enter"]),
          onFocus: B,
          onBlur: b[0] || (b[0] = (U) => n.value = !1)
        }, [
          p(e(q), {
            class: r(e(g))
          }, {
            default: I(() => [
              p(e(P))
            ]),
            _: 1
          }, 8, ["class"]),
          f(s.$slots, "title", {}, () => [
            k($(s.title), 1)
          ]),
          s.$slots.extra || s.extra ? (h(), y("div", {
            key: 0,
            class: r(e(t).e("item-extra"))
          }, [
            f(s.$slots, "extra", {}, () => [
              k($(s.extra), 1)
            ])
          ], 2)) : F("", !0)
        ], 42, L)
      ], 8, J),
      p(e(R), null, {
        default: I(() => [
          H(d("div", {
            role: "tabpanel",
            "aria-hidden": !e(i),
            "aria-labelledby": e(C),
            id: e(m),
            class: r(e(t).e("item-wrap"))
          }, [
            d("div", {
              class: r(e(t).e("item-content"))
            }, [
              f(s.$slots, "default")
            ], 2)
          ], 10, O), [
            [j, e(i)]
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
