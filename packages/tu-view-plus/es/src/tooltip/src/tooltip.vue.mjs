import { defineComponent as p, computed as t, ref as w, openBlock as v, createBlock as y, unref as V, normalizeClass as h, withCtx as a, renderSlot as l, createTextVNode as k, toDisplayString as S } from "vue";
import { tooltipProps as z, tooltipEmits as P } from "./tooltip.mjs";
import { TuTrigger as T } from "../../trigger/index.mjs";
import { useNamespace as _ } from "@tu-view-plus/hooks";
import "../style/tooltip.css";
const B = p({
  name: "TuTooltip"
}), q = /* @__PURE__ */ p({
  ...B,
  props: z,
  emits: P,
  setup(i, { emit: u }) {
    const o = i, s = u, n = _("tooltip"), c = t(() => n.b()), m = t(() => [
      n.e("content"),
      o.contentClass,
      { [n.m(o.size)]: o.size }
    ]), d = t(() => {
      if (o.backgroundColor || o.contentStyle)
        return {
          backgroundColor: o.backgroundColor,
          ...o.contentStyle
        };
    }), f = t(() => [n.e("arrow"), o.arrowClass]), C = t(() => {
      if (o.backgroundColor || o.arrowStyle)
        return {
          backgroundColor: o.backgroundColor,
          ...o.arrowStyle
        };
    }), r = w(o.defaultPopupVisible), b = t(
      () => o.popupVisible ?? r.value
    ), g = (e) => {
      r.value = e, s("update:popupVisible", e), s("popupVisibleChange", e);
    };
    return (e, N) => (v(), y(V(T), {
      trigger: "hover",
      "animation-name": "zoom-in-fade-out",
      role: "tooltip",
      "auto-fit-transform-origin": "",
      "show-arrow": "",
      "popup-visible": b.value,
      class: h(c.value),
      "content-class": m.value,
      "content-style": d.value,
      "arrow-class": f.value,
      "arrow-style": C.value,
      "popup-container": e.popupContainer,
      size: e.size,
      position: e.position,
      "popup-offset": 10,
      onPopupVisibleChange: g
    }, {
      content: a(() => [
        l(e.$slots, "content", {}, () => [
          k(S(e.content), 1)
        ])
      ]),
      default: a(() => [
        l(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["popup-visible", "class", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "size", "position"]));
  }
});
export {
  q as default
};
