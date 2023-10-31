import { defineComponent as N, inject as E, ref as m, computed as o, openBlock as h, createElementBlock as y, normalizeClass as i, createElementVNode as d, withKeys as S, withModifiers as D, createVNode as v, unref as r, withCtx as I, renderSlot as p, createTextVNode as k, toDisplayString as $, createCommentVNode as F, withDirectives as H, vShow as j } from "vue";
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
}), oe = /* @__PURE__ */ N({
  ...Q,
  props: z,
  setup(x) {
    const s = x, e = A("collapse"), a = E(G), n = m(!1), c = m(!1), f = m(M()), l = o(
      () => a == null ? void 0 : a.activeNames.value.includes(s.name)
    ), u = o(
      () => `${w}-content-${f.value}`
    ), C = o(() => `${w}-head-${f.value}`), T = o(() => ({
      [e.e("item")]: !0,
      [e.is("active")]: l.value,
      [e.is("disabled")]: s.disabled
    })), _ = o(() => ({
      [e.e("item-header")]: !0,
      [e.is("active")]: l.value,
      [e.is("focusing")]: n.value && !s.disabled
    })), g = o(() => ({
      [e.e("item-arrow")]: !0,
      [e.is("active")]: l.value
    })), K = () => {
      s.disabled || (a == null || a.handleItemClick(s.name), n.value = !1, c.value = !0);
    }, V = () => {
      a == null || a.handleItemClick(s.name);
    }, B = () => {
      setTimeout(() => {
        c.value ? c.value = !1 : n.value = !0;
      }, 50);
    };
    return (t, b) => (h(), y("div", {
      class: i(T.value)
    }, [
      d("div", {
        role: "tab",
        "aria-expanded": l.value,
        "aria-controls": u.value,
        "aria-describedby": u.value
      }, [
        d("div", {
          role: "button",
          id: C.value,
          class: i(_.value),
          tabindex: t.disabled ? -1 : 0,
          onClick: K,
          onKeypress: S(D(V, ["stop", "prevent"]), ["space", "enter"]),
          onFocus: B,
          onBlur: b[0] || (b[0] = (U) => n.value = !1)
        }, [
          v(r(q), {
            class: i(g.value)
          }, {
            default: I(() => [
              v(r(P))
            ]),
            _: 1
          }, 8, ["class"]),
          p(t.$slots, "title", {}, () => [
            k($(t.title), 1)
          ]),
          t.$slots.extra || t.extra ? (h(), y("div", {
            key: 0,
            class: i(r(e).e("item-extra"))
          }, [
            p(t.$slots, "extra", {}, () => [
              k($(t.extra), 1)
            ])
          ], 2)) : F("", !0)
        ], 42, L)
      ], 8, J),
      v(r(R), null, {
        default: I(() => [
          H(d("div", {
            role: "tabpanel",
            "aria-hidden": !l.value,
            "aria-labelledby": C.value,
            id: u.value,
            class: i(r(e).e("item-wrap"))
          }, [
            d("div", {
              class: i(r(e).e("item-content"))
            }, [
              p(t.$slots, "default")
            ], 2)
          ], 10, O), [
            [j, l.value]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
});
export {
  oe as default
};
