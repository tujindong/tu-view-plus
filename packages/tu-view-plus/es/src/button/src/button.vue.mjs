import { defineComponent as b, computed as i, openBlock as s, createElementBlock as a, mergeProps as A, unref as n, Fragment as E, renderSlot as u, createBlock as l, normalizeClass as N, withCtx as p, resolveDynamicComponent as k, createCommentVNode as m } from "vue";
import { TuIcon as y } from "../../icon/index.mjs";
import { buttonProps as P, buttonEmits as R } from "./button.mjs";
import { useNamespace as S } from "@tu-view-plus/hooks";
import w from "./use-button.mjs";
import "../style/button.css";
const D = { key: 2 }, F = b({
  name: "TuButton",
  inheritAttrs: !1
}), M = /* @__PURE__ */ b({
  ...F,
  props: P,
  emits: R,
  setup(g, { expose: C, emit: B }) {
    const t = g, { buttonRef: d, buttonGroupInjection: r, buttonAttrs: $, handleClick: c } = w(
      t,
      B
    ), z = i(() => (r == null ? void 0 : r.size) || t.size), h = i(() => (r == null ? void 0 : r.type) || t.type), o = S("button"), v = i(() => ({
      [o.b()]: !0,
      [o.m(h.value)]: !0,
      [o.m(z.value)]: !0,
      [o.is("disabled")]: t.disabled,
      [o.is("loading")]: t.loading,
      [o.is("round")]: t.round,
      [o.is("circle")]: t.circle
    }));
    return C({
      ref: d
    }), (e, f) => (s(), a("button", A({
      ref_key: "buttonRef",
      ref: d
    }, n($), {
      class: n(v),
      onClick: f[0] || (f[0] = //@ts-ignore
      (...T) => n(c) && n(c)(...T))
    }), [
      e.loading ? (s(), a(E, { key: 0 }, [
        e.$slots.loading ? u(e.$slots, "loading", { key: 0 }) : (s(), l(n(y), {
          key: 1,
          class: N(n(o).is("loading"))
        }, {
          default: p(() => [
            (s(), l(k(e.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : m("", !0),
      e.icon || e.$slots.icon ? (s(), l(n(y), { key: 1 }, {
        default: p(() => [
          e.icon ? (s(), l(k(e.icon), { key: 0 })) : u(e.$slots, "icon", { key: 1 })
        ]),
        _: 3
      })) : m("", !0),
      e.$slots.default ? (s(), a("span", D, [
        u(e.$slots, "default")
      ])) : m("", !0)
    ], 16));
  }
});
export {
  M as default
};
