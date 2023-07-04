import { defineComponent as f, useSlots as b, computed as l, resolveComponent as h, openBlock as u, createElementBlock as i, normalizeClass as n, unref as o, renderSlot as k, normalizeStyle as m, createCommentVNode as c, toDisplayString as d, createVNode as x, withCtx as D, withDirectives as N, createElementVNode as _, vShow as $ } from "vue";
import { badgeProps as B } from "./badge.mjs";
import { useNamespace as w } from "@tu-view-plus/hooks";
import { isNumber as p } from "@tu-view-plus/utils/types";
import "../style/badge.css";
const z = ["textContent"], V = f({
  name: "TuBadge"
}), F = /* @__PURE__ */ f({
  ...V,
  props: B,
  setup(y, { expose: v }) {
    const e = y, a = b(), t = w("badge"), g = l(() => ({
      [t.b()]: !0,
      [t.is("single")]: !a.default && !e.text,
      [t.is("status")]: !a.default && e.text
    })), C = l(() => ({
      [t.e("content")]: !0,
      [t.em("content", e.type)]: e.type,
      [t.is("fixed")]: a.default,
      [t.is("dot")]: e.isDot
    })), r = l(() => e.isDot ? "" : p(e.value) && p(e.max) ? e.max < e.value ? `${e.max}+` : `${e.value}` : `${e.value}`);
    return v({
      /** @description badge content */
      content: r
    }), (s, E) => {
      const S = h("tu-transition");
      return u(), i("div", {
        class: n(o(g))
      }, [
        k(s.$slots, "default"),
        s.color && !s.$slots.default ? (u(), i("span", {
          key: 0,
          class: n(o(t).em("status", "dot")),
          style: m({ background: s.color })
        }, null, 6)) : c("", !0),
        s.text ? (u(), i("span", {
          key: 1,
          class: n(o(t).em("status", "text"))
        }, d(s.text), 3)) : c("", !0),
        x(S, { name: "zoom-in-center" }, {
          default: D(() => [
            N(_("sup", {
              textContent: d(o(r)),
              class: n(o(C)),
              style: m(s.numberStyle)
            }, null, 14, z), [
              [$, !s.hidden && (o(r) || s.isDot)]
            ])
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
export {
  F as default
};
