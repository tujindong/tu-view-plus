import { defineComponent as a, toRefs as C, provide as b, reactive as w, openBlock as V, createBlock as k, unref as e, withCtx as p, createVNode as P, createSlots as v, renderSlot as i } from "vue";
import { dropdownProps as _, dropdownEmits as $ } from "./dropdown.mjs";
import { TuTrigger as O } from "../../trigger/index.mjs";
import T from "./dropdown-panel.vue.mjs";
import { useNamespace as y, useTrigger as S } from "@tu-view-plus/hooks";
import { dropdownInjectionKey as B } from "./constants.mjs";
import "../style/dropdown.css";
const D = a({
  name: "TuDropdown"
}), R = /* @__PURE__ */ a({
  ...D,
  props: _,
  emits: $,
  setup(l, { emit: d }) {
    const n = l, t = d, { defaultPopupVisible: u, popupVisible: m, popupMaxHeight: c, size: f } = C(n), g = y("dropdown"), { computedPopupVisible: h, handlePopupVisibleChange: r } = S({
      defaultPopupVisible: u,
      popupVisible: m,
      emit: t
    });
    return b(
      B,
      w({
        popupMaxHeight: c,
        size: f,
        onOptionClick: (o, s) => {
          t("select", o, s), n.hideOnSelect && r(!1);
        }
      })
    ), (o, s) => (V(), k(e(O), {
      "animation-name": "slide-dynamic-origin",
      "auto-fit-transform-origin": "",
      "popup-visible": e(h),
      "popup-offset": 10,
      trigger: o.trigger,
      position: o.position,
      "opened-class": e(g).e("open"),
      "popup-container": o.popupContainer,
      onPopupVisibleChange: e(r)
    }, {
      content: p(() => [
        P(T, null, v({
          default: p(() => [
            i(o.$slots, "content")
          ]),
          _: 2
        }, [
          o.$slots.footer ? {
            name: "footer",
            fn: p(() => [
              i(o.$slots, "footer")
            ]),
            key: "0"
          } : void 0
        ]), 1024)
      ]),
      default: p(() => [
        i(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["popup-visible", "trigger", "position", "opened-class", "popup-container", "onPopupVisibleChange"]));
  }
});
export {
  R as default
};
