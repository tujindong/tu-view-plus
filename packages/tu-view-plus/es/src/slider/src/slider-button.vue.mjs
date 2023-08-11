import { defineComponent as m, useAttrs as g, ref as x, computed as s, openBlock as M, createBlock as T, unref as t, withCtx as B, createElementVNode as _, mergeProps as C, withModifiers as P } from "vue";
import { sliderButtonProps as k, sliderButtonEmits as D } from "./slider-button.mjs";
import { useNamespace as A } from "@tu-view-plus/hooks";
import { on as r, off as p } from "@tu-view-plus/utils";
import { TuTooltip as E } from "../../tooltip/index.mjs";
const N = ["aria-disabled", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"], S = m({
  name: "TuSliderButton",
  inheritAttrs: !1
}), j = /* @__PURE__ */ m({
  ...S,
  props: k,
  emits: D,
  setup(v, { emit: i }) {
    const e = v, c = A("slider"), f = g(), n = x(!1), w = s(
      () => e.showTooltip ? n.value ? !0 : void 0 : !1
    ), b = s(
      () => e.tooltipPosition ?? e.direction === "vertical" ? "right" : "top"
    ), l = s(
      () => {
        var o;
        return ((o = e.formatTooltip) == null ? void 0 : o.call(e, e.value)) ?? `${e.value}`;
      }
    ), h = (o) => {
      e.disabled || (o.preventDefault(), n.value = !0, r(window, "mousemove", u), r(window, "mouseup", a), r(window, "contextmenu", a), i("movestart"));
    }, u = (o) => {
      i("moving", o.clientX, o.clientY);
    }, a = () => {
      n.value = !1, p(window, "mousemove", u), p(window, "mouseup", a), i("moveend");
    };
    return (o, d) => (M(), T(t(E), {
      "popup-visible": t(w),
      position: t(b),
      content: t(l)
    }, {
      default: B(() => [
        _("div", C(t(f), {
          tabindex: "0",
          role: "slider",
          class: t(c).e("button"),
          "aria-disabled": o.disabled,
          "aria-valuemax": o.max,
          "aria-valuemin": o.min,
          "aria-valuenow": o.value,
          "aria-valuetext": t(l),
          onMousedown: h,
          onClick: d[0] || (d[0] = P(() => {
          }, ["stop"]))
        }), null, 16, N)
      ]),
      _: 1
    }, 8, ["popup-visible", "position", "content"]));
  }
});
export {
  j as default
};
