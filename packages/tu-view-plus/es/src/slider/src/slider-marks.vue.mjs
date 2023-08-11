import { defineComponent as l, openBlock as n, createElementBlock as s, normalizeClass as i, unref as a, Fragment as p, renderList as d, normalizeStyle as u, toDisplayString as f } from "vue";
import { useNamespace as k } from "@tu-view-plus/hooks";
import { sliderMarksProps as y } from "./slider-marks.mjs";
import { getPositionStyle as _, getOffsetPercent as S } from "./utils.mjs";
const g = l({
  name: "TuSliderMarks"
}), z = /* @__PURE__ */ l({
  ...g,
  props: y,
  setup(m) {
    const e = m, o = k("slider"), c = (r) => _(
      S(r, [e.min, e.max]),
      e.direction
    );
    return (r, M) => (n(), s("div", {
      class: i(a(o).e("marks"))
    }, [
      (n(!0), s(p, null, d(r.marks, (t) => (n(), s("div", {
        "aria-hidden": "true",
        key: t.key,
        class: i(a(o).e("mark")),
        style: u(c(t.key))
      }, f(t.content), 7))), 128))
    ], 2));
  }
});
export {
  z as default
};
