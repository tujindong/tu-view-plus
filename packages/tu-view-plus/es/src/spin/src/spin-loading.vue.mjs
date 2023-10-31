import { defineComponent as m, computed as r, openBlock as s, createElementBlock as i, normalizeClass as l, unref as o, normalizeStyle as a, Fragment as _, renderList as f, createElementVNode as h } from "vue";
import { spinDotProps as g } from "./spin-dot.mjs";
import { useNamespace as y } from "@tu-view-plus/hooks";
import { addUnit as t } from "@tu-view-plus/utils";
import "../style/spin.css";
const z = m({
  name: "TuSpinLoading"
}), M = /* @__PURE__ */ m({
  ...z,
  props: g,
  setup(p) {
    const e = p, n = y("spin"), c = r(() => ({
      width: t(e.size * ((4 + 1) / 2)),
      height: t(e.size * ((4 + 1) / 2))
    })), d = r(() => ({
      width: t(e.size),
      height: t(e.size)
    }));
    return (E, N) => (s(), i("div", {
      class: l([o(n).b(), o(n).e("loading")]),
      style: a(c.value)
    }, [
      (s(), i(_, null, f(4, (u) => h("div", {
        key: u,
        class: l(o(n).e("loading-item")),
        style: a(d.value)
      }, null, 6)), 64))
    ], 6));
  }
});
export {
  M as default
};
