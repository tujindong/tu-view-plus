import { defineComponent as h, useSlots as S, ref as V, computed as y, openBlock as l, createBlock as i, Transition as b, unref as t, withCtx as c, withDirectives as z, createElementVNode as p, normalizeClass as r, resolveDynamicComponent as B, createCommentVNode as n, createElementBlock as a, renderSlot as C, createTextVNode as k, toDisplayString as m, Fragment as D, createVNode as E, vShow as g } from "vue";
import { alertProps as A, alertEmits as I } from "./alert.mjs";
import { useNamespace as F, defaultNamespace as M } from "@tu-view-plus/hooks";
import { TypeComponentsMap as P } from "@tu-view-plus/utils";
import { TuIcon as v } from "../../icon/index.mjs";
import { Close as j } from "@tu-view-plus/icons-vue";
import "../style/alert.css";
const q = h({
  name: "TuAlert"
}), U = /* @__PURE__ */ h({
  ...q,
  props: A,
  emits: I,
  setup(T, { emit: N }) {
    const s = T, o = F("alert"), w = S(), d = V(!0), $ = y(() => ({
      [o.b()]: !0,
      [o.m(s.type)]: s.type,
      [o.m(s.size)]: s.size,
      [o.is(s.effect)]: s.effect,
      [o.is("center")]: s.center,
      [o.is("with-description")]: s.description || w.default
    })), u = y(() => P[s.type]), f = (e) => {
      d.value = !1, N("close", e);
    };
    return (e, G) => (l(), i(b, {
      name: `${t(M)}-opacity`
    }, {
      default: c(() => [
        z(p("div", {
          role: "alert",
          class: r(t($))
        }, [
          p("div", {
            class: r(t(o).e("icon-type"))
          }, [
            e.showIcon && t(u) ? (l(), i(t(v), { key: 0 }, {
              default: c(() => [
                (l(), i(B(t(u))))
              ]),
              _: 1
            })) : n("", !0)
          ], 2),
          p("div", {
            class: r(t(o).e("content"))
          }, [
            e.title || e.$slots.title ? (l(), a("span", {
              key: 0,
              class: r(t(o).e("title"))
            }, [
              C(e.$slots, "title", {}, () => [
                k(m(e.title), 1)
              ])
            ], 2)) : n("", !0),
            e.$slots.default || e.description ? (l(), a("div", {
              key: 1,
              class: r(t(o).e("description"))
            }, [
              C(e.$slots, "default", {}, () => [
                k(m(e.description), 1)
              ])
            ], 2)) : n("", !0)
          ], 2),
          e.closable ? (l(), a(D, { key: 0 }, [
            e.closeText ? (l(), a("div", {
              key: 0,
              class: r(t(o).e("icon-close")),
              onClick: f
            }, m(e.closeText), 3)) : (l(), i(t(v), {
              key: 1,
              class: r(t(o).e("icon-close")),
              onClick: f
            }, {
              default: c(() => [
                E(t(j))
              ]),
              _: 1
            }, 8, ["class"]))
          ], 64)) : n("", !0)
        ], 2), [
          [g, d.value]
        ])
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
export {
  U as default
};
