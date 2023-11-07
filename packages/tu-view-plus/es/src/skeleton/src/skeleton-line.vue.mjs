import { defineComponent as c, openBlock as o, createElementBlock as r, normalizeClass as i, unref as s, Fragment as d, renderList as f, createElementVNode as h, normalizeStyle as k } from "vue";
import { skeletonLineProps as _ } from "./skeleton-line.mjs";
import { useNamespace as g } from "@tu-view-plus/hooks";
import { addUnit as a } from "@tu-view-plus/utils";
import "../style/skeleton.css";
const w = c({
  name: "TuSkeletonLine"
}), B = /* @__PURE__ */ c({
  ...w,
  props: _,
  setup(p) {
    const n = g("skeleton"), t = p, u = (m) => {
      let l = {};
      if (t.widths.length != 0)
        for (let e = 0; e < t.widths.length; e++)
          e + 1 == m && (l = {
            width: a(t.widths[e]),
            lineHeight: a(t.lineHeight),
            marginTop: a(t.lineSpacing)
          });
      return l;
    };
    return (m, l) => (o(), r("div", {
      class: i(s(n).e("line"))
    }, [
      (o(!0), r(d, null, f(t.rows, (e) => (o(), r("ul", {
        key: e,
        class: i(s(n).e("line-row"))
      }, [
        h("li", {
          class: i(s(n).e("line-row-item")),
          style: k(u(e))
        }, null, 6)
      ], 2))), 128))
    ], 2));
  }
});
export {
  B as default
};
