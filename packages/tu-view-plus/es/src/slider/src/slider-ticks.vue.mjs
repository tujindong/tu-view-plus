import { defineComponent as a, computed as d, openBlock as i, createElementBlock as c, normalizeClass as m, unref as n, Fragment as k, renderList as y, normalizeStyle as _ } from "vue";
import { useNamespace as v } from "@tu-view-plus/hooks";
import { sliderTicksProps as S } from "./slider-ticks.mjs";
import { getPositionStyle as g, getOffsetPercent as x } from "./utils.mjs";
import h from "number-precision";
const P = a({
  name: "TuSliderTicks"
}), L = /* @__PURE__ */ a({
  ...P,
  props: S,
  setup(p) {
    const e = p, o = v("slider"), u = d(() => {
      const s = [], l = Math.floor((e.max - e.min) / e.step);
      for (let t = 0; t <= l; t++) {
        const r = h.plus(t * e.step, e.min);
        r <= e.min || r >= e.max || s.push({
          key: r,
          isActive: r >= e.value[0] && r <= e.value[1]
        });
      }
      return s;
    }), f = (s) => g(
      x(s, [e.min, e.max]),
      e.direction
    );
    return (s, l) => (i(), c("div", {
      class: m(n(o).e("ticks"))
    }, [
      (i(!0), c(k, null, y(n(u), (t) => (i(), c("div", {
        key: t.key,
        class: m([n(o).e("tick"), { [n(o).is("active")]: t.isActive }]),
        style: _(f(t.key))
      }, null, 6))), 128))
    ], 2));
  }
});
export {
  L as default
};
