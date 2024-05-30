import { defineComponent as B, toRefs as z, reactive as I, computed as p, inject as K, onMounted as P, onUnmounted as U, provide as q, openBlock as s, createBlock as c, resolveDynamicComponent as D, mergeProps as F, unref as t, withCtx as u, createElementVNode as G, normalizeClass as L, renderSlot as N, createElementBlock as h, normalizeStyle as J, createVNode as m, createCommentVNode as O } from "vue";
import { useNamespace as Q, useMergeState as X, useResponsive as Y } from "@tu-view-plus/hooks";
import { isNumber as Z } from "@tu-view-plus/utils";
import { ArrowLeft as W, ArrowRight as $ } from "@tu-view-plus/icons-vue";
import { layoutSiderProps as H, layoutSiderEmits as ee } from "./layout-sider.mjs";
import { LayoutSiderInjectionKey as te, SiderInjectionKey as oe } from "./context.mjs";
import { TuIcon as v } from "../../icon/index.mjs";
import { TuResizeBox as re } from "../../resize-box/index.mjs";
import "../style/layout.css";
const se = { key: 0 }, le = { key: 1 }, ae = B({
  name: "TuLayoutSider"
}), ye = /* @__PURE__ */ B({
  ...ae,
  props: H,
  emits: ee,
  setup(M, { emit: R }) {
    const j = (() => {
      let e = 0;
      return (r = "") => (e += 1, `${r}${e}`);
    })(), w = M, a = R, n = Q("layout"), {
      collapsed: d,
      defaultCollapsed: f,
      collapsible: y,
      hideTrigger: g,
      breakpoint: A,
      collapsedWidth: E,
      resizeDirections: i
    } = z(w), [l, S] = X(
      f == null ? void 0 : f.value,
      I({
        value: d
      })
    ), V = p(
      () => i != null && i.value ? re : "div"
    ), C = p(() => (y == null ? void 0 : y.value) && !(g != null && g.value)), b = p(() => ({
      [n.e("sider")]: !0,
      [n.is("has-trigger")]: C.value,
      [n.is("collapsed")]: d == null ? void 0 : d.value
    })), k = p(() => {
      const { width: e, collapsedWidth: r } = w, _ = l.value ? r : e;
      return Z(_) ? `${_}px` : String(_);
    }), x = () => {
      const e = !l.value;
      S(e), a("update:collapsed", e), a("collapse", e, "clickTrigger");
    };
    Y(A, (e) => {
      const r = !e;
      r !== l.value && (S(r), a("update:collapsed", r), a("collapse", r, "responsive"), a("breakpoint", r));
    });
    const T = j("__tu_layout_sider"), o = K(te, void 0);
    return P(() => {
      var e;
      (e = o == null ? void 0 : o.onSiderMount) == null || e.call(o, T);
    }), U(() => {
      var e;
      (e = o == null ? void 0 : o.onSiderUnMount) == null || e.call(o, T);
    }), q(
      oe,
      I({
        collapsed: l,
        collapsedWidth: E
      })
    ), (e, r) => (s(), c(D(V.value), F({
      class: b.value,
      style: { width: k.value }
    }, t(i) ? { directions: t(i) } : {}), {
      default: u(() => [
        G("div", {
          class: L(t(n).e("sider-children"))
        }, [
          N(e.$slots, "default")
        ], 2),
        C.value ? (s(), h("div", {
          key: 0,
          class: L(t(n).e("sider-trigger")),
          style: J({ width: k.value }),
          onClick: x
        }, [
          N(e.$slots, "trigger", { collapsed: t(l) }, () => [
            e.reverseArrow ? (s(), h("div", le, [
              t(l) ? (s(), c(t(v), { key: 0 }, {
                default: u(() => [
                  m(t(W))
                ]),
                _: 1
              })) : (s(), c(t(v), { key: 1 }, {
                default: u(() => [
                  m(t($))
                ]),
                _: 1
              }))
            ])) : (s(), h("div", se, [
              t(l) ? (s(), c(t(v), { key: 1 }, {
                default: u(() => [
                  m(t($))
                ]),
                _: 1
              })) : (s(), c(t(v), { key: 0 }, {
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
  ye as default
};
