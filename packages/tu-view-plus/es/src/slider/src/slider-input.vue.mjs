import { defineComponent as a, openBlock as m, createElementBlock as d, normalizeClass as u, unref as l, createBlock as p, createCommentVNode as f, createVNode as b } from "vue";
import { useNamespace as z } from "@tu-view-plus/hooks";
import { sliderInputProps as C, sliderInputEmits as g } from "./slider-input.mjs";
import { TuInputNumber as i } from "../../input-number/index.mjs";
const v = a({
  name: "TuSliderInput"
}), B = /* @__PURE__ */ a({
  ...v,
  props: C,
  emits: g,
  setup(k, { emit: r }) {
    const o = r, t = z("slider");
    return (e, s) => (m(), d("div", {
      class: u(l(t).e("input"))
    }, [
      e.range ? (m(), p(l(i), {
        key: 0,
        "hide-button": "",
        size: e.size,
        min: e.min,
        max: e.max,
        step: e.step,
        disabled: e.disabled,
        controls: !1,
        "model-value": e.modelValue[0],
        onChange: s[0] || (s[0] = (n) => o("startChange", n))
      }, null, 8, ["size", "min", "max", "step", "disabled", "model-value"])) : f("", !0),
      b(l(i), {
        "hide-button": "",
        size: e.size,
        min: e.min,
        max: e.max,
        step: e.step,
        disabled: e.disabled,
        controls: !1,
        "model-value": e.modelValue[1],
        onChange: s[1] || (s[1] = (n) => o("endChange", n))
      }, null, 8, ["size", "min", "max", "step", "disabled", "model-value"])
    ], 2));
  }
});
export {
  B as default
};
