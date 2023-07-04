import { defineComponent as g, computed as f, openBlock as s, createElementBlock as l, mergeProps as h, unref as n, Fragment as D, renderSlot as a, createBlock as i, normalizeClass as E, withCtx as b, resolveDynamicComponent as k, createCommentVNode as r } from "vue";
import { TuIcon as y } from "../../icon/index.mjs";
import { buttonProps as I, buttonEmits as N } from "./button.mjs";
import { useNamespace as P } from "@tu-view-plus/hooks";
import R from "./use-button.mjs";
import "../style/button.css";
const S = { key: 2 }, w = g({
  name: "TuButton"
}), H = /* @__PURE__ */ g({
  ...w,
  props: I,
  emits: N,
  setup(C, { expose: B, emit: $ }) {
    const e = C, { buttonRef: u, buttonSize: d, buttonType: m, handleClick: c } = R(
      e,
      $
    ), t = P("button"), v = f(() => ({
      [t.b()]: !0,
      [t.m(m.value)]: !0,
      [t.m(d.value)]: !0,
      [t.is("disabled")]: e.disabled,
      [t.is("loading")]: e.loading,
      [t.is("round")]: e.round,
      [t.is("circle")]: e.circle
    })), T = f(() => ({
      ariaDisabled: e.disabled || e.loading,
      disabled: e.disabled || e.loading,
      autofocus: e.autofocus,
      type: e.nativeType
    }));
    return B({
      ref: u,
      size: d,
      type: m,
      disabled: e.disabled
    }), (o, p) => (s(), l("button", h({
      ref_key: "buttonRef",
      ref: u
    }, n(T), {
      class: n(v),
      onClick: p[0] || (p[0] = //@ts-ignore
      (...z) => n(c) && n(c)(...z))
    }), [
      o.loading ? (s(), l(D, { key: 0 }, [
        o.$slots.loading ? a(o.$slots, "loading", { key: 0 }) : (s(), i(n(y), {
          key: 1,
          class: E(n(t).is("loading"))
        }, {
          default: b(() => [
            (s(), i(k(o.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : r("", !0),
      o.icon || o.$slots.icon ? (s(), i(n(y), { key: 1 }, {
        default: b(() => [
          o.icon ? (s(), i(k(o.icon), { key: 0 })) : a(o.$slots, "icon", { key: 1 })
        ]),
        _: 3
      })) : r("", !0),
      o.$slots.default ? (s(), l("span", S, [
        a(o.$slots, "default")
      ])) : r("", !0)
    ], 16));
  }
});
export {
  H as default
};
