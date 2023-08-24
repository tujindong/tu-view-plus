import { defineComponent as c, computed as s, openBlock as i, createElementBlock as m, normalizeClass as l, unref as e, normalizeStyle as p, Fragment as _, renderList as h, createElementVNode as y } from "vue";
import { spinDotProps as z } from "./spin-dot.mjs";
import { useNamespace as S } from "@tu-view-plus/hooks";
import { addUnit as o } from "@tu-view-plus/utils";
import "../style/spin.css";
const g = c({
  name: "TuSpinDot"
}), x = /* @__PURE__ */ c({
  ...g,
  props: z,
  setup(a) {
    const t = a, r = 3, n = S("spin"), d = s(() => ({
      width: o(t.size * (r + 1)),
      height: o(t.size)
    })), u = s(() => ({
      width: o(t.size),
      height: o(t.size)
    }));
    return (k, B) => (i(), m("div", {
      class: l([e(n).b(), e(n).e("dot")]),
      style: p(e(d))
    }, [
      (i(), m(_, null, h(r, (f) => y("div", {
        key: f,
        class: l(e(n).e("dot-item")),
        style: p(e(u))
      }, null, 6)), 64))
    ], 6));
  }
});
export {
  x as default
};
