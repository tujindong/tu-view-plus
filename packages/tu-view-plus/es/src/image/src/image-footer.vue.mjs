import { defineComponent as l, openBlock as o, createElementBlock as i, normalizeClass as r, unref as s, toDisplayString as c, createCommentVNode as n, renderSlot as m } from "vue";
import { imageFooterProps as d } from "./image-footer.mjs";
import { useNamespace as f } from "@tu-view-plus/hooks";
import "../style/image.css";
const u = ["title"], _ = ["title"], k = l({
  name: "TuImageFooter"
}), C = /* @__PURE__ */ l({
  ...k,
  props: d,
  setup(p) {
    const e = p, t = f("image");
    return (a, g) => (o(), i("div", {
      class: r(s(t).e("footer"))
    }, [
      e.title || e.description ? (o(), i("div", {
        key: 0,
        class: r(s(t).e("footer-caption"))
      }, [
        e.title ? (o(), i("div", {
          key: 0,
          class: r(s(t).e("footer-caption-title")),
          title: e.title
        }, c(e.title), 11, u)) : n("", !0),
        e.description ? (o(), i("div", {
          key: 1,
          class: r(s(t).e("footer-caption-description")),
          title: e.description
        }, c(e.description), 11, _)) : n("", !0)
      ], 2)) : n("", !0),
      a.$slots.extra ? (o(), i("div", {
        key: 1,
        class: r(s(t).e("extra"))
      }, [
        m(a.$slots, "extra")
      ], 2)) : n("", !0)
    ], 2));
  }
});
export {
  C as default
};
