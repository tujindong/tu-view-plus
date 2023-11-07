import { defineComponent as a, computed as o, openBlock as m, createElementBlock as i, normalizeClass as n, createElementVNode as u, normalizeStyle as d } from "vue";
import { skeletonShapeProps as f } from "./skeleton-shape.mjs";
import { useNamespace as h } from "@tu-view-plus/hooks";
import "../style/skeleton.css";
const _ = a({
  name: "TuSkeletonShape"
}), b = /* @__PURE__ */ a({
  ..._,
  props: f,
  setup(l) {
    const s = l, e = h("skeleton"), r = o(() => ({
      [e.b()]: !0,
      [e.m(s.size)]: s.size
    })), c = o(() => ({
      [e.e("shape")]: !0,
      [e.e("shape-bg")]: !0,
      [e.e("shape-animation")]: !0
    })), p = o(() => {
      const t = {};
      return s.shape == "circle" && (t.borderRadius = "50%"), t;
    });
    return (t, k) => (m(), i("div", {
      class: n(r.value)
    }, [
      u("div", {
        class: n(c.value),
        style: d(p.value)
      }, null, 6)
    ], 2));
  }
});
export {
  b as default
};
