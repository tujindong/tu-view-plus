import { defineComponent as m, computed as u, openBlock as a, createElementBlock as l, normalizeClass as s, unref as r, createElementVNode as n, Fragment as f, createTextVNode as y, toDisplayString as k, createCommentVNode as d, renderSlot as i, normalizeStyle as v } from "vue";
import { cardProps as C } from "./card.mjs";
import { useNamespace as $ } from "@tu-view-plus/hooks";
import "../style/card.css";
const h = m({
  name: "TuCard"
}), g = /* @__PURE__ */ m({
  ...h,
  props: C,
  setup(c) {
    const o = c, t = $("card"), p = u(() => ({
      [t.b()]: !0,
      [t.m(o.effect)]: o.effect,
      [t.m(o.size)]: o.size
    }));
    return (e, z) => (a(), l("div", {
      class: s(r(p))
    }, [
      e.$slots.title || e.title ? (a(), l("div", {
        key: 0,
        class: s(r(t).e("header"))
      }, [
        n("div", {
          class: s(r(t).e("header-title"))
        }, [
          e.title ? (a(), l(f, { key: 0 }, [
            y(k(e.title), 1)
          ], 64)) : d("", !0),
          i(e.$slots, "title")
        ], 2),
        e.$slots.extra ? (a(), l("div", {
          key: 0,
          class: s(r(t).e("header-extra"))
        }, [
          i(e.$slots, "extra")
        ], 2)) : d("", !0)
      ], 2)) : d("", !0),
      n("div", {
        class: s(r(t).e("body")),
        style: v(e.bodyStyle)
      }, [
        i(e.$slots, "default")
      ], 6)
    ], 2));
  }
});
export {
  g as default
};
