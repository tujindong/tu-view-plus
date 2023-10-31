import { defineComponent as m, computed as u, openBlock as o, createElementBlock as a, normalizeClass as s, unref as l, createElementVNode as n, Fragment as f, createTextVNode as y, toDisplayString as v, createCommentVNode as d, renderSlot as i, normalizeStyle as k } from "vue";
import { cardProps as C } from "./card.mjs";
import { useNamespace as $ } from "@tu-view-plus/hooks";
import "../style/card.css";
const h = m({
  name: "TuCard"
}), g = /* @__PURE__ */ m({
  ...h,
  props: C,
  setup(c) {
    const r = c, t = $("card"), p = u(() => ({
      [t.b()]: !0,
      [t.m(r.effect)]: r.effect,
      [t.m(r.size)]: r.size
    }));
    return (e, z) => (o(), a("div", {
      class: s(p.value)
    }, [
      e.$slots.title || e.title ? (o(), a("div", {
        key: 0,
        class: s(l(t).e("header"))
      }, [
        n("div", {
          class: s(l(t).e("header-title"))
        }, [
          e.title ? (o(), a(f, { key: 0 }, [
            y(v(e.title), 1)
          ], 64)) : d("", !0),
          i(e.$slots, "title")
        ], 2),
        e.$slots.extra ? (o(), a("div", {
          key: 0,
          class: s(l(t).e("header-extra"))
        }, [
          i(e.$slots, "extra")
        ], 2)) : d("", !0)
      ], 2)) : d("", !0),
      n("div", {
        class: s(l(t).e("body")),
        style: k(e.bodyStyle)
      }, [
        i(e.$slots, "default")
      ], 6)
    ], 2));
  }
});
export {
  g as default
};
