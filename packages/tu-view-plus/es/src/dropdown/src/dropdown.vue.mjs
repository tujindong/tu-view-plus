import { defineComponent as a, toRefs as g, provide as h, reactive as C, openBlock as b, createBlock as w, unref as e, withCtx as p, createVNode as V, createSlots as P, renderSlot as n } from "vue";
import { dropdownProps as k, dropdownEmits as v } from "./dropdown.mjs";
import { TuTrigger as _ } from "../../trigger/index.mjs";
import $ from "./dropdown-panel.vue.mjs";
import { useNamespace as O, useTrigger as T } from "@tu-view-plus/hooks";
import { dropdownInjectionKey as S } from "./constants.mjs";
import "../style/dropdown.css";
const y = a({
  name: "TuDropdown"
}), M = /* @__PURE__ */ a({
  ...y,
  props: k,
  emits: v,
  setup(l, { emit: i }) {
    const t = l, { defaultPopupVisible: d, popupVisible: u, popupMaxHeight: c } = g(t), f = O("dropdown"), { computedPopupVisible: m, handlePopupVisibleChange: r } = T({
      defaultPopupVisible: d,
      popupVisible: u,
      emit: i
    });
    return h(
      S,
      C({
        popupMaxHeight: c,
        onOptionClick: (o, s) => {
          i("select", o, s), t.hideOnSelect && r(!1);
        }
      })
    ), (o, s) => (b(), w(e(_), {
      "animation-name": "slide-dynamic-origin",
      "auto-fit-transform-origin": "",
      "popup-visible": e(m),
      "popup-offset": 10,
      trigger: o.trigger,
      position: o.position,
      "opened-class": e(f).e("open"),
      "popup-container": o.popupContainer,
      onPopupVisibleChange: e(r)
    }, {
      content: p(() => [
        V($, null, P({
          default: p(() => [
            n(o.$slots, "content")
          ]),
          _: 2
        }, [
          o.$slots.footer ? {
            name: "footer",
            fn: p(() => [
              n(o.$slots, "footer")
            ])
          } : void 0
        ]), 1024)
      ]),
      default: p(() => [
        n(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["popup-visible", "trigger", "position", "opened-class", "popup-container", "onPopupVisibleChange"]));
  }
});
export {
  M as default
};
