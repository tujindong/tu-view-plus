import { defineComponent as c, openBlock as o, createElementBlock as s, mergeProps as R, unref as t, Fragment as T, renderSlot as r, createBlock as n, normalizeClass as h, withCtx as d, resolveDynamicComponent as p, createCommentVNode as l } from "vue";
import { TuIcon as f } from "../../icon/index.mjs";
import { buttonProps as v, buttonEmits as I } from "./button.mjs";
import { useButtonRender as P, useButtonEvent as S } from "./use-button.mjs";
import "../style/button.css";
const w = { key: 2 }, A = c({
  name: "TuButton"
}), q = /* @__PURE__ */ c({
  ...A,
  props: v,
  emits: I,
  setup(k, { expose: y, emit: b }) {
    const i = k, { buttonRef: u, nsButton: g, buttonSize: B, buttonType: C, classes: $, buttonAttrs: z } = P(i), { handleClick: a } = S(b);
    return y({
      ref: u,
      size: B,
      type: C,
      disabled: i.disabled
    }), (e, m) => (o(), s("button", R({
      ref_key: "buttonRef",
      ref: u
    }, t(z), {
      class: t($),
      onClick: m[0] || (m[0] = //@ts-ignore
      (...E) => t(a) && t(a)(...E))
    }), [
      e.loading ? (o(), s(T, { key: 0 }, [
        e.$slots.loading ? r(e.$slots, "loading", { key: 0 }) : (o(), n(t(f), {
          key: 1,
          class: h(t(g).is("loading"))
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
      e.$slots.default ? (o(), s("span", w, [
        r(e.$slots, "default")
      ])) : l("", !0)
    ], 16));
  }
});
export {
  q as default
};
