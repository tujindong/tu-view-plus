import { defineComponent as p, computed as r, openBlock as s, createElementBlock as i, normalizeClass as l, unref as n, normalizeStyle as m, Fragment as _, renderList as f, createElementVNode as h } from "vue";
import { spinDotProps as y } from "./spin-dot.mjs";
import { useNamespace as z } from "@tu-view-plus/hooks";
import { addUnit as t } from "@tu-view-plus/utils";
import "../style/spin.css";
const B = p({
  name: "TuSpinDot"
}), k = /* @__PURE__ */ p({
  ...B,
  props: y,
  setup(a) {
    const e = a, o = z("spin"), c = r(() => ({
      width: t(e.size * (3 + 1)),
      height: t(e.size)
    })), d = r(() => ({
      width: t(e.size),
      height: t(e.size)
    }));
    return (E, N) => (s(), i("div", {
      class: l([n(o).b(), n(o).e("dot")]),
      style: m(c.value)
    }, [
      (s(), i(_, null, f(3, (u) => h("div", {
        key: u,
        class: l(n(o).e("dot-item")),
        style: m(d.value)
      }, null, 6)), 64))
    ], 6));
  }
});
export {
  k as default
};
