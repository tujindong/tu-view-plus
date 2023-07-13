import { defineComponent as f, useSlots as b, computed as l, openBlock as u, createElementBlock as i, normalizeClass as n, unref as o, renderSlot as h, normalizeStyle as m, createCommentVNode as c, toDisplayString as d, createVNode as C, Transition as N, withCtx as $, withDirectives as k, createElementVNode as x, vShow as D } from "vue";
import { badgeProps as B } from "./badge.mjs";
import { useNamespace as w, defaultNamespace as z } from "@tu-view-plus/hooks";
import { isNumber as p } from "@tu-view-plus/utils/types";
import "../style/badge.css";
const V = ["textContent"], E = f({
  name: "TuBadge"
}), F = /* @__PURE__ */ f({
  ...E,
  props: B,
  setup(y, { expose: g }) {
    const e = y, a = b(), t = w("badge"), v = l(() => ({
      [t.b()]: !0,
      [t.is("single")]: !a.default && !e.text,
      [t.is("status")]: !a.default && e.text
    })), S = l(() => ({
      [t.e("content")]: !0,
      [t.em("content", e.type)]: e.type,
      [t.is("fixed")]: a.default,
      [t.is("dot")]: e.isDot
    })), r = l(() => e.isDot ? "" : p(e.value) && p(e.max) ? e.max < e.value ? `${e.max}+` : `${e.value}` : `${e.value}`);
    return g({
      /**
       * @zh 徽标内容
       * @en badge content */
      content: r
    }), (s, T) => (u(), i("div", {
      class: n(o(v))
    }, [
      h(s.$slots, "default"),
      s.color && !s.$slots.default ? (u(), i("span", {
        key: 0,
        class: n(o(t).em("status", "dot")),
        style: m({ background: s.color })
      }, null, 6)) : c("", !0),
      s.text ? (u(), i("span", {
        key: 1,
        class: n(o(t).em("status", "text"))
      }, d(s.text), 3)) : c("", !0),
      C(N, {
        name: `${o(z)}-zoom-in-center`
      }, {
        default: $(() => [
          k(x("sup", {
            textContent: d(o(r)),
            class: n(o(S)),
            style: m(s.numberStyle)
          }, null, 14, V), [
            [D, !s.hidden && (o(r) || s.isDot)]
          ])
        ]),
        _: 1
      }, 8, ["name"])
    ], 2));
  }
});
export {
  F as default
};
