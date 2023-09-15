import { defineComponent as T, useSlots as S, ref as V, computed as c, openBlock as l, createBlock as n, Transition as z, unref as t, withCtx as m, withDirectives as B, createElementVNode as C, normalizeClass as r, resolveDynamicComponent as D, createCommentVNode as a, createElementBlock as i, renderSlot as y, createTextVNode as k, toDisplayString as p, Fragment as E, createVNode as g, vShow as A } from "vue";
import { alertProps as I, alertEmits as F } from "./alert.mjs";
import { useNamespace as M, defaultNamespace as P } from "@tu-view-plus/hooks";
import { TypeComponentsMap as j } from "@tu-view-plus/utils";
import { TuIcon as v } from "../../icon/index.mjs";
import { Close as q } from "@tu-view-plus/icons-vue";
import "../style/alert.css";
const G = T({
  name: "TuAlert"
}), W = /* @__PURE__ */ T({
  ...G,
  props: I,
  emits: F,
  setup(h, { emit: N }) {
    const o = h, s = M("alert"), $ = S(), d = V(!0), b = c(() => ({
      [s.b()]: !0,
      [s.m(o.type)]: o.type,
      [s.m(o.size)]: o.size,
      [s.is(o.effect)]: o.effect,
      [s.is("center")]: o.center
    })), w = c(() => ({
      [s.e("title")]: !0,
      [s.is("bold")]: o.description || $.default
    })), u = c(() => j[o.type]), f = (e) => {
      d.value = !1, N("close", e);
    };
    return (e, H) => (l(), n(z, {
      name: `${t(P)}-fade`
    }, {
      default: m(() => [
        B(C("div", {
          role: "alert",
          class: r(t(b))
        }, [
          e.showIcon && t(u) ? (l(), n(t(v), { key: 0 }, {
            default: m(() => [
              (l(), n(D(t(u))))
            ]),
            _: 1
          })) : a("", !0),
          C("div", {
            class: r(t(s).e("content"))
          }, [
            e.title || e.$slots.title ? (l(), i("span", {
              key: 0,
              class: r(t(w))
            }, [
              y(e.$slots, "title", {}, () => [
                k(p(e.title), 1)
              ])
            ], 2)) : a("", !0),
            e.$slots.default || e.description ? (l(), i("div", {
              key: 1,
              class: r(t(s).e("description"))
            }, [
              y(e.$slots, "default", {}, () => [
                k(p(e.description), 1)
              ])
            ], 2)) : a("", !0)
          ], 2),
          e.closable ? (l(), i(E, { key: 1 }, [
            e.closeText ? (l(), i("div", {
              key: 0,
              class: r(t(s).e("icon-close")),
              onClick: f
            }, p(e.closeText), 3)) : (l(), n(t(v), {
              key: 1,
              class: r(t(s).e("icon-close")),
              onClick: f
            }, {
              default: m(() => [
                g(t(q))
              ]),
              _: 1
            }, 8, ["class"]))
          ], 64)) : a("", !0)
        ], 2), [
          [A, d.value]
        ])
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
export {
  W as default
};
