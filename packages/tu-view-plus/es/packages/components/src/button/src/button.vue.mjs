import { defineComponent as k, computed as h, openBlock as s, createElementBlock as i, mergeProps as z, unref as n, Fragment as A, renderSlot as l, createBlock as r, normalizeClass as E, withCtx as c, resolveDynamicComponent as p, createCommentVNode as a } from "vue";
import { TuIcon as f } from "../../icon/index.mjs";
import { buttonProps as I, buttonEmits as N } from "./button.mjs";
import { useNamespace as P } from "@tu-view-plus/hooks";
import R from "./use-button.mjs";
import "../style/index.css";
const T = { key: 2 }, v = k({
  name: "TuButton",
  inheritAttrs: !1
}), q = /* @__PURE__ */ k({
  ...v,
  props: I,
  emits: N,
  setup(y, { expose: b, emit: g }) {
    const e = y, t = P("button"), C = h(() => ({
      [t.b()]: !0,
      [t.m(e.type)]: e.type,
      [t.m(e.size)]: e.size,
      [t.is("disabled")]: e.disabled,
      [t.is("loading")]: e.loading,
      [t.is("round")]: e.round,
      [t.is("circle")]: e.circle
    })), { buttonRef: u, buttonAttrs: B, handleClick: m } = R(e, g);
    return b({
      ref: u
    }), (o, d) => (s(), i("button", z({
      ref_key: "buttonRef",
      ref: u
    }, n(B), {
      class: n(C),
      onClick: d[0] || (d[0] = //@ts-ignore
      (...$) => n(m) && n(m)(...$))
    }), [
      o.loading ? (s(), i(A, { key: 0 }, [
        o.$slots.loading ? l(o.$slots, "loading", { key: 0 }) : (s(), r(n(f), {
          key: 1,
          class: E(n(t).is("loading"))
        }, {
          default: c(() => [
            (s(), r(p(o.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : a("", !0),
      o.icon || o.$slots.icon ? (s(), r(n(f), { key: 1 }, {
        default: c(() => [
          o.icon ? (s(), r(p(o.icon), { key: 0 })) : l(o.$slots, "icon", { key: 1 })
        ]),
        _: 3
      })) : a("", !0),
      o.$slots.default ? (s(), i("span", T, [
        l(o.$slots, "default")
      ])) : a("", !0)
    ], 16));
  }
});
export {
  q as default
};
