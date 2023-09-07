import { defineComponent as f, ref as b, computed as p, openBlock as h, createBlock as y, unref as e, normalizeClass as n, withCtx as l, createElementVNode as c, renderSlot as r, createTextVNode as u, toDisplayString as m } from "vue";
import { popoverProps as P, popoverEmits as z } from "./popover.mjs";
import { TuTrigger as S } from "../../trigger/index.mjs";
import { useNamespace as T } from "@tu-view-plus/hooks";
import "../style/popover.css";
const N = f({
  name: "TuPopover"
}), q = /* @__PURE__ */ f({
  ...N,
  props: P,
  emits: z,
  setup(d, { emit: a }) {
    const t = d, s = T("popover"), i = b(t.defaultPopupVisible), g = p(
      () => t.popupVisible ?? i.value
    ), v = p(() => ({
      [s.b()]: !0,
      [s.m(t.size)]: t.size
    })), C = p(() => [
      s.e("popup-content"),
      t.contentClass
    ]), w = p(() => [
      s.e("popup-arrow"),
      t.arrowClass
    ]), V = (o) => {
      i.value = o, a("update:popupVisible", o), a("popupVisibleChange", o);
    };
    return (o, $) => (h(), y(e(S), {
      "show-arrow": "",
      "animation-name": "zoom-in-fade-out",
      "auto-fit-transform-origin": "",
      class: n(e(v)),
      trigger: o.trigger,
      position: o.position,
      "popup-visible": e(g),
      "popup-offset": 14,
      "content-class": e(C),
      "content-style": o.contentStyle,
      "arrow-class": e(w),
      "arrow-style": o.arrowStyle,
      "popup-container": o.popupContainer,
      onPopupVisibleChange: V
    }, {
      content: l(() => [
        c("div", {
          class: n(e(s).e("title"))
        }, [
          r(o.$slots, "title", {}, () => [
            u(m(o.title), 1)
          ])
        ], 2),
        c("div", {
          class: n(e(s).e("content"))
        }, [
          r(o.$slots, "content", {}, () => [
            u(m(o.content), 1)
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
  q as default
};
