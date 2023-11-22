import { defineComponent as p, useAttrs as h, toRefs as _, ref as i, openBlock as C, createBlock as k, unref as o, withCtx as t, createVNode as n, renderSlot as w } from "vue";
import { selectProps as I, selectEmits as R } from "./select.mjs";
import { useTrigger as V } from "@tu-view-plus/hooks";
import { TuTrigger as P } from "../../trigger/index.mjs";
import T from "./select-dropdown.vue.mjs";
import { TuScrollbar as y } from "../../scrollbar/index.mjs";
import "../../form/index.mjs";
import "../style/select.css";
import { useFormDisabled as S } from "../../form/src/hooks/use-form-props.mjs";
import { useFormItem as F, useFormItemInputId as v } from "../../form/src/hooks/use-form-item.mjs";
const A = p({
  name: "TuSelect",
  inheritAttrs: !1
}), K = /* @__PURE__ */ p({
  ...A,
  props: I,
  emits: R,
  setup(s, { emit: l }) {
    const r = s, m = l;
    h();
    const { popupVisible: u } = _(r), a = i(null), f = i(), c = S(), { form: B, formItem: d } = F();
    v(r, {
      formItemContext: d
    });
    const { computedPopupVisible: g, handlePopupVisibleChange: b } = V({
      popupVisible: u,
      emit: m
    });
    return (e, D) => (C(), k(o(P), {
      ref_key: "triggerRef",
      ref: a,
      trigger: "click",
      position: "bl",
      "hide-empty": "",
      "auto-fit-popup-width": "",
      "auto-fit-transform-origin": "",
      "animation-name": "slide-dynamic-origin",
      disabled: o(c),
      "popup-offset": 4,
      "popup-visible": o(g),
      "unmount-on-close": e.unmountOnClose,
      "click-to-close": !(e.allowSearch || e.allowCreate),
      "popup-container": e.popupContainer,
      onPopupVisibleChange: o(b)
    }, {
      default: t(() => []),
      content: t(() => [
        n(T, {
          ref_key: "dropdownRef",
          ref: f
        }, {
          default: t(() => [
            n(o(y), {
              ref: "scrollbarRef",
              tag: "ul"
            }, {
              default: t(() => [
                w(e.$slots, "default")
              ]),
              _: 3
            }, 512)
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["disabled", "popup-visible", "unmount-on-close", "click-to-close", "popup-container", "onPopupVisibleChange"]));
  }
});
export {
  K as default
};
