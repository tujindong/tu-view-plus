import { defineComponent as b, computed as i, openBlock as s, createElementBlock as a, mergeProps as A, unref as r, Fragment as E, renderSlot as u, createBlock as l, normalizeClass as N, withCtx as f, resolveDynamicComponent as k, createCommentVNode as m } from "vue";
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
    const t = g, { buttonRef: d, buttonGroupInjection: n, buttonAttrs: $, handleClick: c } = w(
      t,
      B
    ), v = i(() => (n == null ? void 0 : n.size) || t.size), z = i(() => (n == null ? void 0 : n.type) || t.type), o = S("button"), h = i(() => ({
      [o.b()]: !0,
      [o.m(z.value)]: !0,
      [o.m(v.value)]: !0,
      [o.is("disabled")]: t.disabled,
      [o.is("loading")]: t.loading,
      [o.is("round")]: t.round,
      [o.is("circle")]: t.circle
    }));
    return C({
      ref: d
    }), (e, p) => (s(), a("button", A({
      ref_key: "buttonRef",
      ref: d
    }, r($), {
      class: h.value,
      onClick: p[0] || (p[0] = //@ts-ignore
      (...T) => r(c) && r(c)(...T))
    }), [
      e.loading ? (s(), a(E, { key: 0 }, [
        e.$slots.loading ? u(e.$slots, "loading", { key: 0 }) : (s(), l(r(y), {
          key: 1,
          class: N(r(o).is("loading"))
        }, {
          default: f(() => [
            (s(), l(k(e.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : m("", !0),
      e.icon || e.$slots.icon ? (s(), l(r(y), { key: 1 }, {
        default: f(() => [
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
