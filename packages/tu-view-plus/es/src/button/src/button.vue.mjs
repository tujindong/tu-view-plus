import { defineComponent as b, computed as i, openBlock as s, createElementBlock as a, mergeProps as E, unref as n, Fragment as N, renderSlot as u, createBlock as l, normalizeClass as P, withCtx as f, resolveDynamicComponent as k, createCommentVNode as m } from "vue";
import { TuIcon as y } from "../../icon/index.mjs";
import { buttonProps as R, buttonEmits as S } from "./button.mjs";
import { useNamespace as w } from "@tu-view-plus/hooks";
import A from "./use-button.mjs";
import "../style/button.css";
const D = { key: 2 }, F = b({
  name: "TuButton"
}), M = /* @__PURE__ */ b({
  ...F,
  props: R,
  emits: S,
  setup(g, { expose: C, emit: B }) {
    const t = g, { buttonRef: d, buttonGroupInjection: r, buttonAttrs: $, handleClick: c } = A(
      t,
      B
    ), z = i(() => (r == null ? void 0 : r.size) || t.size), v = i(() => (r == null ? void 0 : r.type) || t.type), o = w("button"), T = i(() => ({
      [o.b()]: !0,
      [o.m(v.value)]: !0,
      [o.m(z.value)]: !0,
      [o.is("disabled")]: t.disabled,
      [o.is("loading")]: t.loading,
      [o.is("round")]: t.round,
      [o.is("circle")]: t.circle
    }));
    return C({
      ref: d
    }), (e, p) => (s(), a("button", E({
      ref_key: "buttonRef",
      ref: d
    }, n($), {
      class: n(T),
      onClick: p[0] || (p[0] = //@ts-ignore
      (...h) => n(c) && n(c)(...h))
    }), [
      e.loading ? (s(), a(N, { key: 0 }, [
        e.$slots.loading ? u(e.$slots, "loading", { key: 0 }) : (s(), l(n(y), {
          key: 1,
          class: P(n(o).is("loading"))
        }, {
          default: f(() => [
            (s(), l(k(e.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : m("", !0),
      e.icon || e.$slots.icon ? (s(), l(n(y), { key: 1 }, {
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
