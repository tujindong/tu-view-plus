import { defineComponent as d, ref as h, computed as s, openBlock as u, createBlock as P, unref as p, normalizeClass as n, withCtx as c, createElementVNode as k, renderSlot as r, createTextVNode as m, toDisplayString as f, createElementBlock as z, createCommentVNode as N } from "vue";
import { popoverProps as S, popoverEmits as T } from "./popover.mjs";
import { TuTrigger as $ } from "../../trigger/index.mjs";
import { useNamespace as B } from "@tu-view-plus/hooks";
import "../style/popover.css";
const E = d({
  name: "TuPopover"
}), H = /* @__PURE__ */ d({
  ...E,
  props: S,
  emits: T,
  setup(v, { emit: C }) {
    const o = v, a = C, t = B("popover"), i = h(o.defaultPopupVisible), g = s(
      () => o.popupVisible ?? i.value
    ), w = s(() => ({
      [t.b()]: !0,
      [t.m(o.size)]: o.size
    })), V = s(() => [
      t.e("popup-content"),
      o.contentClass
    ]), b = s(() => [
      t.e("popup-arrow"),
      o.arrowClass
    ]), y = (e) => {
      i.value = e, a("update:popupVisible", e), a("popupVisibleChange", e);
    };
    return (e, D) => (u(), P(p($), {
      "show-arrow": "",
      "animation-name": "zoom-in-fade-out",
      "auto-fit-transform-origin": "",
      class: n(w.value),
      trigger: e.trigger,
      position: e.position,
      "popup-visible": g.value,
      "popup-offset": 14,
      "content-class": V.value,
      "content-style": e.contentStyle,
      "arrow-class": b.value,
      "arrow-style": e.arrowStyle,
      "popup-container": e.popupContainer,
      onPopupVisibleChange: y
    }, {
      content: c(() => {
        var l;
        return [
          k("div", {
            class: n(p(t).e("title"))
          }, [
            r(e.$slots, "title", {}, () => [
              m(f(e.title), 1)
            ])
          ], 2),
          (l = e.$slots) != null && l.content ? (u(), z("div", {
            key: 0,
            class: n(p(t).e("content"))
          }, [
            r(e.$slots, "content", {}, () => [
              m(f(e.content), 1)
            ])
          ], 2)) : N("", !0)
        ];
      }),
      default: c(() => [
        r(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "trigger", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container"]));
  }
});
export {
  H as default
};
