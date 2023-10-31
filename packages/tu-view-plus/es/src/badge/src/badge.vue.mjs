import { defineComponent as f, useSlots as b, computed as l, openBlock as r, createElementBlock as u, normalizeClass as o, renderSlot as h, unref as i, normalizeStyle as m, createCommentVNode as c, toDisplayString as d, createVNode as x, Transition as C, withCtx as N, withDirectives as $, createElementVNode as k, vShow as D } from "vue";
import { badgeProps as B } from "./badge.mjs";
import { useNamespace as w, defaultNamespace as z } from "@tu-view-plus/hooks";
import { isNumber as p } from "@tu-view-plus/utils/types";
import "../style/badge.css";
const V = ["textContent"], E = f({
  name: "TuBadge"
}), F = /* @__PURE__ */ f({
  ...E,
  props: B,
  setup(v, { expose: y }) {
    const a = b(), e = v, t = w("badge"), g = l(() => ({
      [t.b()]: !0,
      [t.is("single")]: !a.default && !e.text,
      [t.is("status")]: !a.default && e.text
    })), S = l(() => ({
      [t.e("content")]: !0,
      [t.em("content", e.type)]: e.type,
      [t.is("fixed")]: a.default,
      [t.is("dot")]: e.isDot
    })), n = l(() => e.isDot ? "" : p(e.value) && p(e.max) ? e.max < e.value ? `${e.max}+` : `${e.value}` : `${e.value}`);
    return y({
      /**
       * @zh 徽标内容
       * @en badge content */
      content: n
    }), (s, T) => (r(), u("div", {
      class: o(g.value)
    }, [
      h(s.$slots, "default"),
      s.color && !s.$slots.default ? (r(), u("span", {
        key: 0,
        class: o(i(t).em("status", "dot")),
        style: m({ background: s.color })
      }, null, 6)) : c("", !0),
      s.text ? (r(), u("span", {
        key: 1,
        class: o(i(t).em("status", "text"))
      }, d(s.text), 3)) : c("", !0),
      x(C, {
        name: `${i(z)}-zoom-in-center`
      }, {
        default: N(() => [
          $(k("sup", {
            textContent: d(n.value),
            class: o(S.value),
            style: m(s.numberStyle)
          }, null, 14, V), [
            [D, !s.hidden && (n.value || s.isDot)]
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
