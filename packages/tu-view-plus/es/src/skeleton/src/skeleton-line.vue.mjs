import { defineComponent as m, computed as d, openBlock as o, createElementBlock as r, normalizeClass as s, unref as a, Fragment as f, renderList as h, createElementVNode as w, normalizeStyle as g } from "vue";
import { skeletonLineProps as k } from "./skeleton-line.mjs";
import { useNamespace as _ } from "@tu-view-plus/hooks";
import "../style/skeleton.css";
const x = m({
  name: "TuSkeletonLine"
}), z = /* @__PURE__ */ m({
  ...x,
  props: k,
  setup(c) {
    const n = _("skeleton"), t = c, p = d(() => ({
      [n.e("line-row-item")]: !0,
      [n.e("line-row-item-bg")]: !0,
      [n.e("line-row-item-animation")]: !0
    })), u = (i) => {
      let l = null;
      if (t.widths.length != 0)
        for (let e = 0; e < t.widths.length; e++)
          e + 1 == i && (l = {
            width: t.widths[e] + "px",
            lineHeight: t.lineHeight + "px",
            marginTop: t.lineSpacing + "px"
          });
      return l;
    };
    return (i, l) => (o(), r("div", {
      class: s(a(n).e("line"))
    }, [
      (o(!0), r(f, null, h(t.rows, (e) => (o(), r("ul", {
        key: e,
        class: s(a(n).e("line-row"))
      }, [
        w("li", {
          class: s(p.value),
          style: g(u(e))
        }, null, 6)
      ], 2))), 128))
    ], 2));
  }
});
export {
  z as default
};
