import { defineComponent as a, computed as d, openBlock as o, createElementBlock as i, normalizeClass as m, unref as c, Fragment as k, renderList as v, normalizeStyle as y } from "vue";
import { useNamespace as _ } from "@tu-view-plus/hooks";
import { sliderTicksProps as S } from "./slider-ticks.mjs";
import { getPositionStyle as g, getOffsetPercent as x } from "./utils.mjs";
import h from "number-precision";
const P = a({
  name: "TuSliderTicks"
}), L = /* @__PURE__ */ a({
  ...P,
  props: S,
  setup(p) {
    const e = p, n = _("slider"), u = d(() => {
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
    return (s, l) => (o(), i("div", {
      class: m(c(n).e("ticks"))
    }, [
      (o(!0), i(k, null, v(u.value, (t) => (o(), i("div", {
        key: t.key,
        class: m([c(n).e("tick"), { [c(n).is("active")]: t.isActive }]),
        style: y(f(t.key))
      }, null, 6))), 128))
    ], 2));
  }
});
export {
  L as default
};
