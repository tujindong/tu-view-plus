import { defineComponent as n, openBlock as s, createElementBlock as r, normalizeClass as i, unref as t, createElementVNode as a, normalizeStyle as p, renderSlot as m, createVNode as d, toDisplayString as c, createCommentVNode as u } from "vue";
import { emptyProps as y } from "./empty.mjs";
import { useNamespace as f, useLocale as g } from "@tu-view-plus/hooks";
import { addUnit as k } from "@tu-view-plus/utils";
import E from "./empty-image.vue.mjs";
import "../style/empty.css";
const _ = ["src"], $ = { key: 1 }, h = n({
  name: "TuEmpty"
}), T = /* @__PURE__ */ n({
  ...h,
  props: y,
  setup(v) {
    const o = f("empty"), { t: l } = g();
    return (e, N) => (s(), r("div", {
      class: i(t(o).b())
    }, [
      a("div", {
        class: i(t(o).e("image")),
        style: p({ width: t(k)(e.imageSize) })
      }, [
        e.image ? (s(), r("img", {
          key: 0,
          src: e.image,
          ondragstart: "return false"
        }, null, 8, _)) : m(e.$slots, "image", { key: 1 }, () => [
          d(E)
        ])
      ], 6),
      a("div", {
        class: i(t(o).e("description"))
      }, [
        e.$slots.description ? m(e.$slots, "description", { key: 0 }) : (s(), r("p", $, c(e.description || t(l)("tu.table.emptyText")), 1))
      ], 2),
      e.$slots.default ? (s(), r("div", {
        key: 0,
        class: i(t(o).e("bottom"))
      }, [
        m(e.$slots, "default")
      ], 2)) : u("", !0)
    ], 2));
  }
});
export {
  T as default
};
