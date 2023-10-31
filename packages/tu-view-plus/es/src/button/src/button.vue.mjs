import { defineComponent as c, openBlock as o, createElementBlock as s, mergeProps as T, unref as t, Fragment as h, renderSlot as r, createBlock as n, normalizeClass as v, withCtx as d, resolveDynamicComponent as p, createCommentVNode as l } from "vue";
import { TuIcon as f } from "../../icon/index.mjs";
import { buttonProps as I, buttonEmits as P } from "./button.mjs";
import { useButtonRender as S, useButtonEvent as w } from "./use-button.mjs";
import "../style/button.css";
const A = { key: 2 }, D = c({
  name: "TuButton"
}), G = /* @__PURE__ */ c({
  ...D,
  props: I,
  emits: P,
  setup(k, { expose: y, emit: b }) {
    const i = k, g = b, { buttonRef: u, nsButton: B, buttonSize: C, buttonType: $, classes: z, buttonAttrs: E } = S(i), { handleClick: a } = w(g);
    return y({
      ref: u,
      size: C,
      type: $,
      disabled: i.disabled
    }), (e, m) => (o(), s("button", T({
      ref_key: "buttonRef",
      ref: u
    }, t(E), {
      class: t(z),
      onClick: m[0] || (m[0] = //@ts-ignore
      (...R) => t(a) && t(a)(...R))
    }), [
      e.loading ? (o(), s(h, { key: 0 }, [
        e.$slots.loading ? r(e.$slots, "loading", { key: 0 }) : (o(), n(t(f), {
          key: 1,
          class: v(t(B).is("loading"))
        }, {
          default: d(() => [
            (o(), n(p(e.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : l("", !0),
      e.icon || e.$slots.icon ? (o(), n(t(f), { key: 1 }, {
        default: d(() => [
          e.icon ? (o(), n(p(e.icon), { key: 0 })) : r(e.$slots, "icon", { key: 1 })
        ]),
        _: 3
      })) : l("", !0),
      e.$slots.default ? (o(), s("span", A, [
        r(e.$slots, "default")
      ])) : l("", !0)
    ], 16));
  }
});
export {
  G as default
};
