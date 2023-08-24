import { defineComponent as p, computed as s, openBlock as i, createElementBlock as l, normalizeClass as a, unref as e, normalizeStyle as m, Fragment as _, renderList as h, createElementVNode as g } from "vue";
import { spinDotProps as y } from "./spin-dot.mjs";
import { useNamespace as z } from "@tu-view-plus/hooks";
import { addUnit as n } from "@tu-view-plus/utils";
import "../style/spin.css";
const S = p({
  name: "TuSpinLoading"
}), C = /* @__PURE__ */ p({
  ...S,
  props: y,
  setup(c) {
    const t = c, o = 4, r = z("spin"), d = s(() => ({
      width: n(t.size * ((o + 1) / 2)),
      height: n(t.size * ((o + 1) / 2))
    })), u = s(() => ({
      width: n(t.size),
      height: n(t.size)
    }));
    return (k, w) => (i(), l("div", {
      class: a([e(r).b(), e(r).e("loading")]),
      style: m(e(d))
    }, [
      (i(), l(_, null, h(o, (f) => g("div", {
        key: f,
        class: a(e(r).e("loading-item")),
        style: m(e(u))
      }, null, 6)), 64))
    ], 6));
  }
});
export {
  C as default
};
