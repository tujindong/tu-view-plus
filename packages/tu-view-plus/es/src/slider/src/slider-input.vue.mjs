import { defineComponent as i, openBlock as a, createElementBlock as d, normalizeClass as t, unref as l, createBlock as u, createCommentVNode as p, createVNode as f } from "vue";
import { useNamespace as b } from "@tu-view-plus/hooks";
import { sliderInputProps as z, sliderInputEmits as C } from "./slider-input.mjs";
import { TuInputNumber as m } from "../../input-number/index.mjs";
const g = i({
  name: "TuSliderInput"
}), h = /* @__PURE__ */ i({
  ...g,
  props: z,
  emits: C,
  setup(v, { emit: o }) {
    const r = b("slider");
    return (e, s) => (a(), d("div", {
      class: t(l(r).e("input"))
    }, [
      e.range ? (a(), u(l(m), {
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
      }, null, 8, ["size", "min", "max", "step", "disabled", "model-value"])) : p("", !0),
      f(l(m), {
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
  h as default
};
