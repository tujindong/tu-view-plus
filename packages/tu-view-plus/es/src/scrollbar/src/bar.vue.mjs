import { defineComponent as u, ref as r, openBlock as v, createElementBlock as h, Fragment as p, createVNode as s } from "vue";
import { GAP as i } from "./util.mjs";
import n from "./thumb.vue.mjs";
import { barProps as d } from "./bar.mjs";
const Y = /* @__PURE__ */ u({
  name: "bar",
  props: d,
  setup(m, { expose: f }) {
    const e = m, t = r(0), a = r(0);
    return f({
      handleScroll: (o) => {
        if (o) {
          const l = o.offsetHeight - i, c = o.offsetWidth - i;
          a.value = o.scrollTop * 100 / l * e.ratioY, t.value = o.scrollLeft * 100 / c * e.ratioX;
        }
      }
    }), (o, l) => (v(), h(p, null, [
      s(n, {
        move: t.value,
        ratio: o.ratioX,
        size: o.width,
        always: o.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      s(n, {
        move: a.value,
        ratio: o.ratioY,
        size: o.height,
        vertical: "",
        always: o.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
export {
  Y as default
};
