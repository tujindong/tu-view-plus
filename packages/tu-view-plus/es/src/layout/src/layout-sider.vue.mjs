import { defineComponent as B, toRefs as z, reactive as L, computed as p, inject as K, onMounted as P, onUnmounted as U, provide as q, openBlock as r, createBlock as c, resolveDynamicComponent as D, mergeProps as F, unref as t, withCtx as u, createElementVNode as G, normalizeClass as N, renderSlot as T, createElementBlock as h, normalizeStyle as J, createVNode as m, createCommentVNode as O } from "vue";
import { useNamespace as Q, useMergeState as X, useResponsive as Y } from "@tu-view-plus/hooks";
import { isNumber as Z } from "@tu-view-plus/utils";
import { ArrowLeft as W, ArrowRight as $ } from "@tu-view-plus/icons-vue";
import { layoutSiderProps as H, layoutSiderEmits as ee } from "./layout-sider.mjs";
import { LayoutSiderInjectionKey as te, SiderInjectionKey as oe } from "./context.mjs";
import { TuIcon as v } from "../../icon/index.mjs";
import "../style/layout.css";
const se = { key: 0 }, re = { key: 1 }, le = B({
  name: "TuLayoutSider"
}), ve = /* @__PURE__ */ B({
  ...le,
  props: H,
  emits: ee,
  setup(M, { emit: R }) {
    const j = (() => {
      let e = 0;
      return (s = "") => (e += 1, `${s}${e}`);
    })(), w = M, a = R, n = Q("layout"), {
      collapsed: d,
      defaultCollapsed: y,
      collapsible: f,
      hideTrigger: g,
      breakpoint: A,
      collapsedWidth: E,
      resizeDirections: i
    } = z(w), [l, S] = X(
      y == null ? void 0 : y.value,
      L({
        value: d
      })
    ), V = p(
      () => i != null && i.value ? "ResizeBox" : "div"
    ), C = p(() => (f == null ? void 0 : f.value) && !(g != null && g.value)), b = p(() => ({
      [n.e("sider")]: !0,
      [n.is("has-trigger")]: C.value,
      [n.is("collapsed")]: d == null ? void 0 : d.value
    })), k = p(() => {
      const { width: e, collapsedWidth: s } = w, _ = l.value ? s : e;
      return Z(_) ? `${_}px` : String(_);
    }), x = () => {
      const e = !l.value;
      S(e), a("update:collapsed", e), a("collapse", e, "clickTrigger");
    };
    Y(A, (e) => {
      const s = !e;
      s !== l.value && (S(s), a("update:collapsed", s), a("collapse", s, "responsive"), a("breakpoint", s));
    });
    const I = j("__tu_layout_sider"), o = K(te, void 0);
    return P(() => {
      var e;
      (e = o == null ? void 0 : o.onSiderMount) == null || e.call(o, I);
    }), U(() => {
      var e;
      (e = o == null ? void 0 : o.onSiderUnMount) == null || e.call(o, I);
    }), q(
      oe,
      L({
        collapsed: l,
        collapsedWidth: E
      })
    ), (e, s) => (r(), c(D(V.value), F({
      class: b.value,
      style: { width: k.value }
    }, t(i) ? { directions: t(i) } : {}), {
      default: u(() => [
        G("div", {
          class: N(t(n).e("sider-children"))
        }, [
          T(e.$slots, "default")
        ], 2),
        C.value ? (r(), h("div", {
          key: 0,
          class: N(t(n).e("sider-trigger")),
          style: J({ width: k.value }),
          onClick: x
        }, [
          T(e.$slots, "trigger", { collapsed: t(l) }, () => [
            e.reverseArrow ? (r(), h("div", re, [
              t(l) ? (r(), c(t(v), { key: 0 }, {
                default: u(() => [
                  m(t(W))
                ]),
                _: 1
              })) : (r(), c(t(v), { key: 1 }, {
                default: u(() => [
                  m(t($))
                ]),
                _: 1
              }))
            ])) : (r(), h("div", se, [
              t(l) ? (r(), c(t(v), { key: 1 }, {
                default: u(() => [
                  m(t($))
                ]),
                _: 1
              })) : (r(), c(t(v), { key: 0 }, {
                default: u(() => [
                  m(t(W))
                ]),
                _: 1
              }))
            ]))
          ])
        ], 6)) : O("", !0)
      ]),
      _: 3
    }, 16, ["class", "style"]));
  }
});
export {
  ve as default
};
