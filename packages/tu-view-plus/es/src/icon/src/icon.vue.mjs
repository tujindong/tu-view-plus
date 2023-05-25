import { defineComponent as s, computed as t, openBlock as l, createElementBlock as m, mergeProps as f, unref as r, renderSlot as u } from "vue";
import { useNamespace as d } from "@tu-view-plus/hooks";
import { isUndefined as _, addUnit as h } from "@tu-view-plus/utils";
import { iconProps as k } from "./icon.mjs";
const y = s({
  name: "TuIcon",
  inheritAttrs: !1
}), U = /* @__PURE__ */ s({
  ...y,
  props: k,
  setup(n) {
    const c = n, i = d("icon"), p = t(() => [i.b()]), a = t(() => {
      const { size: e, color: o } = c;
      return !e && !o ? {} : {
        fontSize: _(e) ? void 0 : h(e),
        "--color": o
      };
    });
    return (e, o) => (l(), m("i", f({
      class: r(p),
      style: r(a)
    }, e.$attrs), [
      u(e.$slots, "default")
    ], 16));
  }
});
export {
  U as default
};
