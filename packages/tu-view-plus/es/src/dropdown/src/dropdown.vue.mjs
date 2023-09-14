import { defineComponent as a, toRefs as h, provide as C, reactive as b, openBlock as w, createBlock as V, unref as e, withCtx as p, createVNode as P, createSlots as k, renderSlot as n } from "vue";
import { dropdownProps as v, dropdownEmits as _ } from "./dropdown.mjs";
import { TuTrigger as $ } from "../../trigger/index.mjs";
import O from "./dropdown-panel.vue.mjs";
import { useNamespace as T, useTrigger as S } from "@tu-view-plus/hooks";
import { dropdownInjectionKey as y } from "./constants.mjs";
import "../style/dropdown.css";
const B = a({
  name: "TuDropdown"
}), M = /* @__PURE__ */ a({
  ...B,
  props: v,
  emits: _,
  setup(l, { emit: i }) {
    const t = l, { defaultPopupVisible: d, popupVisible: u, popupMaxHeight: c, size: f } = h(t), m = T("dropdown"), { computedPopupVisible: g, handlePopupVisibleChange: r } = S({
      defaultPopupVisible: d,
      popupVisible: u,
      emit: i
    });
    return C(
      y,
      b({
        popupMaxHeight: c,
        size: f,
        onOptionClick: (o, s) => {
          i("select", o, s), t.hideOnSelect && r(!1);
        }
      })
    ), (o, s) => (w(), V(e($), {
      "animation-name": "slide-dynamic-origin",
      "auto-fit-transform-origin": "",
      "popup-visible": e(g),
      "popup-offset": 10,
      trigger: o.trigger,
      position: o.position,
      "opened-class": e(m).e("open"),
      "popup-container": o.popupContainer,
      onPopupVisibleChange: e(r)
    }, {
      content: p(() => [
        P(O, null, k({
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
