import { defineComponent as p, useAttrs as x, ref as M, computed as a, openBlock as T, createBlock as B, unref as s, withCtx as _, createElementVNode as C, mergeProps as P, withModifiers as k } from "vue";
import { sliderButtonProps as D, sliderButtonEmits as A } from "./slider-button.mjs";
import { useNamespace as E } from "@tu-view-plus/hooks";
import { on as l, off as d } from "@tu-view-plus/utils";
import { TuTooltip as N } from "../../tooltip/index.mjs";
const S = ["aria-disabled", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"], V = p({
  name: "TuSliderButton",
  inheritAttrs: !1
}), q = /* @__PURE__ */ p({
  ...V,
  props: D,
  emits: A,
  setup(v, { emit: c }) {
    const o = v, t = c, f = E("slider"), w = x(), i = M(!1), b = a(
      () => o.showTooltip ? i.value ? !0 : void 0 : !1
    ), h = a(
      () => o.tooltipPosition ?? o.direction === "vertical" ? "right" : "top"
    ), r = a(
      () => {
        var e;
        return ((e = o.formatTooltip) == null ? void 0 : e.call(o, o.value)) ?? `${o.value}`;
      }
    ), g = (e) => {
      o.disabled || (e.preventDefault(), i.value = !0, l(window, "mousemove", u), l(window, "mouseup", n), l(window, "contextmenu", n), t("movestart"));
    }, u = (e) => {
      t("moving", e.clientX, e.clientY);
    }, n = () => {
      i.value = !1, d(window, "mousemove", u), d(window, "mouseup", n), t("moveend");
    };
    return (e, m) => (T(), B(s(N), {
      "popup-visible": b.value,
      position: h.value,
      content: r.value
    }, {
      default: _(() => [
        C("div", P(s(w), {
          tabindex: "0",
          role: "slider",
          class: s(f).e("button"),
          "aria-disabled": e.disabled,
          "aria-valuemax": e.max,
          "aria-valuemin": e.min,
          "aria-valuenow": e.value,
          "aria-valuetext": r.value,
          onMousedown: g,
          onClick: m[0] || (m[0] = k(() => {
          }, ["stop"]))
        }), null, 16, S)
      ]),
      _: 1
    }, 8, ["popup-visible", "position", "content"]));
  }
});
export {
  q as default
};
