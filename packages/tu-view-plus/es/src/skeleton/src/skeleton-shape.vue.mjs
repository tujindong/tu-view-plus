import { defineComponent as l, computed as o, openBlock as p, createElementBlock as m, normalizeClass as n, createElementVNode as i, unref as u, normalizeStyle as d } from "vue";
import { skeletonShapeProps as f } from "./skeleton-shape.mjs";
import { useNamespace as _ } from "@tu-view-plus/hooks";
import "../style/skeleton.css";
const k = l({
  name: "TuSkeletonShape"
}), b = /* @__PURE__ */ l({
  ...k,
  props: f,
  setup(r) {
    const e = r, s = _("skeleton"), a = o(() => ({
      [s.b()]: !0,
      [s.m(e.size)]: e.size
    })), c = o(() => {
      const t = {};
      return e.shape == "circle" && (t.borderRadius = "50%"), t;
    });
    return (t, S) => (p(), m("div", {
      class: n(a.value)
    }, [
      i("div", {
        class: n(u(s).e("shape")),
        style: d(c.value)
      }, null, 6)
    ], 2));
  }
});
export {
  b as default
};
