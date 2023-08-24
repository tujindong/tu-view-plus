import { defineComponent as m, useSlots as k, computed as z, openBlock as s, createElementBlock as i, normalizeClass as n, unref as t, renderSlot as r, Fragment as p, createCommentVNode as l, createElementVNode as y, createBlock as a, withCtx as $, toDisplayString as v } from "vue";
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
    return (e, N) => (s(), i("div", {
      class: n(t(f))
    }, [
      r(e.$slots, "default"),
      e.loading ? (s(), i(p, { key: 0 }, [
        e.$slots.default ? (s(), i("div", {
          key: 0,
          class: n(t(o).e("mask"))
        }, null, 2)) : l("", !0),
        y("div", {
          class: n(t(o).e("content"))
        }, [
          e.$slots.icon ? (s(), a(t(h), {
            key: 0,
            class: n([t(o).e("icon"), "is-loading"]),
            size: e.size
          }, {
            default: $(() => [
              r(e.$slots, "icon")
            ]),
            _: 3
          }, 8, ["class", "size"])) : (s(), i(p, { key: 1 }, [
            e.dot ? (s(), a(C, {
              key: 0,
              size: e.size
            }, null, 8, ["size"])) : (s(), a(w, {
              key: 1,
              size: e.size
            }, null, 8, ["size"]))
          ], 64)),
          e.$slots.tip ? (s(), i("div", {
            key: 2,
            class: n(t(o).e("tip"))
          }, [
            r(e.$slots, "tip")
          ], 2)) : l("", !0),
          e.tip ? (s(), i("div", {
            key: 3,
            class: n(t(o).e("tip"))
          }, v(e.tip), 3)) : l("", !0)
        ], 2)
      ], 64)) : l("", !0)
    ], 2));
  }
});
export {
  P as default
};
