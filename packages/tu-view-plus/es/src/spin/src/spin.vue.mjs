import { defineComponent as m, useSlots as k, computed as z, openBlock as s, createElementBlock as t, normalizeClass as i, renderSlot as r, Fragment as p, unref as l, createCommentVNode as n, createElementVNode as y, createBlock as a, withCtx as $, toDisplayString as v } from "vue";
import { spinProps as S } from "./spin.mjs";
import { useNamespace as g } from "@tu-view-plus/hooks";
import { TuIcon as h } from "../../icon/index.mjs";
import C from "./spin-dot.vue.mjs";
import w from "./spin-loading.vue.mjs";
import "../style/spin.css";
const B = m({
  name: "TuSpin"
}), P = /* @__PURE__ */ m({
  ...B,
  props: S,
  setup(u) {
    const c = u, d = k(), o = g("spin"), f = z(() => ({
      [o.b()]: !0,
      [o.m("with-mask")]: d.default,
      [o.m("with-tip")]: c.tip
    }));
    return (e, N) => (s(), t("div", {
      class: i(f.value)
    }, [
      r(e.$slots, "default"),
      e.loading ? (s(), t(p, { key: 0 }, [
        e.$slots.default ? (s(), t("div", {
          key: 0,
          class: i(l(o).e("mask"))
        }, null, 2)) : n("", !0),
        y("div", {
          class: i(l(o).e("content"))
        }, [
          e.$slots.icon ? (s(), a(l(h), {
            key: 0,
            class: i([l(o).e("icon"), "is-loading"]),
            size: e.size
          }, {
            default: $(() => [
              r(e.$slots, "icon")
            ]),
            _: 3
          }, 8, ["class", "size"])) : (s(), t(p, { key: 1 }, [
            e.dot ? (s(), a(C, {
              key: 0,
              size: e.size
            }, null, 8, ["size"])) : (s(), a(w, {
              key: 1,
              size: e.size
            }, null, 8, ["size"]))
          ], 64)),
          e.$slots.tip ? (s(), t("div", {
            key: 2,
            class: i(l(o).e("tip"))
          }, [
            r(e.$slots, "tip")
          ], 2)) : n("", !0),
          e.tip ? (s(), t("div", {
            key: 3,
            class: i(l(o).e("tip"))
          }, v(e.tip), 3)) : n("", !0)
        ], 2)
      ], 64)) : n("", !0)
    ], 2));
  }
});
export {
  P as default
};
