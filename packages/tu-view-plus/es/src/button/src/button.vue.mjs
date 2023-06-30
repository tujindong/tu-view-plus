import { defineComponent as C, computed as i, openBlock as s, createElementBlock as a, mergeProps as E, unref as n, Fragment as N, renderSlot as u, createBlock as r, normalizeClass as P, withCtx as y, resolveDynamicComponent as b, createCommentVNode as d } from "vue";
import { TuIcon as g } from "../../icon/index.mjs";
import { buttonProps as R, buttonEmits as S } from "./button.mjs";
import { useNamespace as w } from "@tu-view-plus/hooks";
import A from "./use-button.mjs";
import "../style/button.css";
const D = { key: 2 }, F = C({
  name: "TuButton"
}), M = /* @__PURE__ */ C({
  ...F,
  props: R,
  emits: S,
  setup(B, { expose: $, emit: z }) {
    const o = B, { buttonRef: m, buttonGroupInjection: l, buttonAttrs: v, handleClick: c } = A(
      o,
      z
    ), p = i(() => (l == null ? void 0 : l.size) || o.size), f = i(() => (l == null ? void 0 : l.type) || o.type), t = w("button"), T = i(() => ({
      [t.b()]: !0,
      [t.m(f.value)]: !0,
      [t.m(p.value)]: !0,
      [t.is("disabled")]: o.disabled,
      [t.is("loading")]: o.loading,
      [t.is("round")]: o.round,
      [t.is("circle")]: o.circle
    }));
    return $({
      ref: m,
      size: p,
      type: f,
      disabled: o.disabled
    }), (e, k) => (s(), a("button", E({
      ref_key: "buttonRef",
      ref: m
    }, n(v), {
      class: n(T),
      onClick: k[0] || (k[0] = //@ts-ignore
      (...h) => n(c) && n(c)(...h))
    }), [
      e.loading ? (s(), a(N, { key: 0 }, [
        e.$slots.loading ? u(e.$slots, "loading", { key: 0 }) : (s(), r(n(g), {
          key: 1,
          class: P(n(t).is("loading"))
        }, {
          default: y(() => [
            (s(), r(b(e.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : d("", !0),
      e.icon || e.$slots.icon ? (s(), r(n(g), { key: 1 }, {
        default: y(() => [
          e.icon ? (s(), r(b(e.icon), { key: 0 })) : u(e.$slots, "icon", { key: 1 })
        ]),
        _: 3
      })) : d("", !0),
      e.$slots.default ? (s(), a("span", D, [
        u(e.$slots, "default")
      ])) : d("", !0)
    ], 16));
  }
});
export {
  M as default
};
