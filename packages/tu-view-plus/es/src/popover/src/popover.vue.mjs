import { defineComponent as f, ref as h, computed as s, openBlock as y, createBlock as P, unref as p, normalizeClass as n, withCtx as l, createElementVNode as u, renderSlot as r, createTextVNode as c, toDisplayString as m } from "vue";
import { popoverProps as z, popoverEmits as S } from "./popover.mjs";
import { TuTrigger as T } from "../../trigger/index.mjs";
import { useNamespace as N } from "@tu-view-plus/hooks";
import "../style/popover.css";
const $ = f({
  name: "TuPopover"
}), A = /* @__PURE__ */ f({
  ...$,
  props: z,
  emits: S,
  setup(v, { emit: d }) {
    const e = v, a = d, t = N("popover"), i = h(e.defaultPopupVisible), g = s(
      () => e.popupVisible ?? i.value
    ), C = s(() => ({
      [t.b()]: !0,
      [t.m(e.size)]: e.size
    })), w = s(() => [
      t.e("popup-content"),
      e.contentClass
    ]), V = s(() => [
      t.e("popup-arrow"),
      e.arrowClass
    ]), b = (o) => {
      i.value = o, a("update:popupVisible", o), a("popupVisibleChange", o);
    };
    return (o, k) => (y(), P(p(T), {
      "show-arrow": "",
      "animation-name": "zoom-in-fade-out",
      "auto-fit-transform-origin": "",
      class: n(C.value),
      trigger: o.trigger,
      position: o.position,
      "popup-visible": g.value,
      "popup-offset": 14,
      "content-class": w.value,
      "content-style": o.contentStyle,
      "arrow-class": V.value,
      "arrow-style": o.arrowStyle,
      "popup-container": o.popupContainer,
      onPopupVisibleChange: b
    }, {
      content: l(() => [
        u("div", {
          class: n(p(t).e("title"))
        }, [
          r(o.$slots, "title", {}, () => [
            c(m(o.title), 1)
          ])
        ], 2),
        u("div", {
          class: n(p(t).e("content"))
        }, [
          r(o.$slots, "content", {}, () => [
            c(m(o.content), 1)
          ])
        ], 2)
      ]),
      default: l(() => [
        r(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "trigger", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container"]));
  }
});
export {
  A as default
};
