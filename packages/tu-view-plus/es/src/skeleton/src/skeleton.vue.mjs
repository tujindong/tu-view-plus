import { defineComponent as t, computed as a, openBlock as l, createElementBlock as m, normalizeClass as c, renderSlot as p, createCommentVNode as i } from "vue";
import { skeletonProps as u } from "./skeleton.mjs";
import { useNamespace as d } from "@tu-view-plus/hooks";
import "../style/skeleton.css";
const f = t({
  name: "TuSkeleton"
}), B = /* @__PURE__ */ t({
  ...f,
  props: u,
  setup(n) {
    const e = n, o = d("skeleton"), s = a(() => ({
      [o.b()]: !0,
      [o.is("animation")]: e.animation
    }));
    return (r, k) => e.loading ? (l(), m("div", {
      key: 0,
      class: c(s.value)
    }, [
      p(r.$slots, "default")
    ], 2)) : i("", !0);
  }
});
export {
  B as default
};
