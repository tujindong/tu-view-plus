import { defineComponent as l, computed as n, ref as w, openBlock as y, createBlock as V, unref as e, normalizeClass as h, withCtx as a, renderSlot as i, createTextVNode as k, toDisplayString as S } from "vue";
import { tooltipProps as z, tooltipEmits as P } from "./tooltip.mjs";
import { TuTrigger as T } from "../../trigger/index.mjs";
import { useNamespace as v } from "@tu-view-plus/hooks";
import "../style/tooltip.css";
const _ = l({
  name: "TuTooltip"
}), j = /* @__PURE__ */ l({
  ..._,
  props: z,
  emits: P,
  setup(c, { emit: r }) {
    const o = c, s = v("tooltip"), u = n(() => s.b()), d = n(() => [
      s.e("content"),
      o.contentClass,
      { [s.m(o.size)]: o.size }
    ]), f = n(() => {
      if (o.backgroundColor || o.contentStyle)
        return {
          backgroundColor: o.backgroundColor,
          ...o.contentStyle
        };
    }), m = n(() => [s.e("arrow"), o.arrowClass]), C = n(() => {
      if (o.backgroundColor || o.arrowStyle)
        return {
          backgroundColor: o.backgroundColor,
          ...o.arrowStyle
        };
    }), p = w(o.defaultPopupVisible), b = n(
      () => o.popupVisible ?? p.value
    ), g = (t) => {
      p.value = t, r("update:popupVisible", t), r("popupVisibleChange", t);
    };
    return (t, B) => (y(), V(e(T), {
      trigger: "hover",
      "animation-name": "zoom-in-fade-out",
      role: "tooltip",
      "auto-fit-transform-origin": "",
      "show-arrow": "",
      "popup-visible": e(b),
      class: h(e(u)),
      "content-class": e(d),
      "content-style": e(f),
      "arrow-class": e(m),
      "arrow-style": e(C),
      "popup-container": t.popupContainer,
      size: t.size,
      position: t.position,
      "popup-offset": 10,
      onPopupVisibleChange: g
    }, {
      content: a(() => [
        i(t.$slots, "content", {}, () => [
          k(S(t.content), 1)
        ])
      ]),
      default: a(() => [
        i(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["popup-visible", "class", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "size", "position"]));
  }
});
export {
  j as default
};
