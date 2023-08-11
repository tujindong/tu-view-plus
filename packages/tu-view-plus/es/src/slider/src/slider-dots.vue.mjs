import { defineComponent as a, openBlock as n, createElementBlock as i, normalizeClass as l, unref as t, Fragment as p, renderList as d, normalizeStyle as u, createElementVNode as f } from "vue";
import { useNamespace as y } from "@tu-view-plus/hooks";
import { sliderDotsProps as _ } from "./slider-dots.mjs";
import { getPositionStyle as k, getOffsetPercent as v } from "./utils.mjs";
const S = a({
  name: "TuSliderDots"
}), B = /* @__PURE__ */ a({
  ...S,
  props: _,
  setup(c) {
    const r = c, e = y("slider"), m = (s) => k(
      v(s, [r.min, r.max]),
      r.direction
    );
    return (s, g) => (n(), i("div", {
      class: l(t(e).e("dots"))
    }, [
      (n(!0), i(p, null, d(s.dots, (o) => (n(), i("div", {
        key: o.key,
        class: l(t(e).e("dot-wrap")),
        style: u(m(o.key))
      }, [
        f("div", {
          class: l([t(e).e("dot"), { [t(e).is("active")]: o.isActive }])
        }, null, 2)
      ], 6))), 128))
    ], 2));
  }
});
export {
  B as default
};
