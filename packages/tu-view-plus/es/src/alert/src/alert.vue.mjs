import { defineComponent as h, useSlots as V, ref as b, computed as v, openBlock as l, createBlock as i, Transition as z, unref as o, withCtx as c, withDirectives as B, createElementVNode as m, normalizeClass as r, resolveDynamicComponent as D, createCommentVNode as n, createElementBlock as a, renderSlot as y, createTextVNode as C, toDisplayString as p, Fragment as E, createVNode as g, vShow as A } from "vue";
import { alertProps as I, alertEmits as F } from "./alert.mjs";
import { useNamespace as M, defaultNamespace as P } from "@tu-view-plus/hooks";
import { TypeComponentsMap as j } from "@tu-view-plus/utils";
import { TuIcon as k } from "../../icon/index.mjs";
import { Close as q } from "@tu-view-plus/icons-vue";
import "../style/alert.css";
const G = h({
  name: "TuAlert"
}), W = /* @__PURE__ */ h({
  ...G,
  props: I,
  emits: F,
  setup(T, { emit: N }) {
    const s = T, w = N, t = M("alert"), $ = V(), u = b(!0), S = v(() => ({
      [t.b()]: !0,
      [t.m(s.type)]: s.type,
      [t.m(s.size)]: s.size,
      [t.m(s.effect)]: s.effect,
      [t.is("center")]: s.center,
      [t.is("with-description")]: s.description || $.default
    })), d = v(() => j[s.type]), f = (e) => {
      u.value = !1, w("close", e);
    };
    return (e, H) => (l(), i(z, {
      name: `${o(P)}-opacity`
    }, {
      default: c(() => [
        B(m("div", {
          role: "alert",
          class: r(S.value)
        }, [
          m("div", {
            class: r(o(t).e("icon-type"))
          }, [
            e.showIcon && d.value ? (l(), i(o(k), { key: 0 }, {
              default: c(() => [
                (l(), i(D(d.value)))
              ]),
              _: 1
            })) : n("", !0)
          ], 2),
          m("div", {
            class: r(o(t).e("content"))
          }, [
            e.title || e.$slots.title ? (l(), a("span", {
              key: 0,
              class: r(o(t).e("title"))
            }, [
              y(e.$slots, "title", {}, () => [
                C(p(e.title), 1)
              ])
            ], 2)) : n("", !0),
            e.$slots.default || e.description ? (l(), a("div", {
              key: 1,
              class: r(o(t).e("description"))
            }, [
              y(e.$slots, "default", {}, () => [
                C(p(e.description), 1)
              ])
            ], 2)) : n("", !0)
          ], 2),
          e.closable ? (l(), a(E, { key: 0 }, [
            e.closeText ? (l(), a("div", {
              key: 0,
              class: r(o(t).e("icon-close")),
              onClick: f
            }, p(e.closeText), 3)) : (l(), i(o(k), {
              key: 1,
              class: r(o(t).e("icon-close")),
              onClick: f
            }, {
              default: c(() => [
                g(o(q))
              ]),
              _: 1
            }, 8, ["class"]))
          ], 64)) : n("", !0)
        ], 2), [
          [A, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
export {
  W as default
};
