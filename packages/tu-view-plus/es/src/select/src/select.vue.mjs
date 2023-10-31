import { defineComponent as s, useAttrs as k, toRefs as R, ref as p, openBlock as V, createBlock as w, unref as e, withCtx as t, createElementVNode as P, mergeProps as T, createVNode as r, renderSlot as _ } from "vue";
import { selectProps as y, selectEmits as S } from "./select.mjs";
import { useTrigger as v } from "@tu-view-plus/hooks";
import { TuTrigger as F } from "../../trigger/index.mjs";
import { TuInput as A } from "../../input/index.mjs";
import B from "./select-dropdown.vue.mjs";
import { TuScrollbar as D } from "../../scrollbar/index.mjs";
import "../../form/index.mjs";
import "../style/select.css";
import { useFormDisabled as E } from "../../form/src/hooks/use-form-props.mjs";
import { useFormItem as N, useFormItemInputId as $ } from "../../form/src/hooks/use-form-item.mjs";
const M = s({
  name: "TuSelect",
  inheritAttrs: !1
}), X = /* @__PURE__ */ s({
  ...M,
  props: y,
  emits: S,
  setup(m, { emit: l }) {
    const n = m, u = l, a = k(), { popupVisible: f } = R(n), c = p(null), d = p(), g = E(), { form: O, formItem: b } = N(), { inputId: C } = $(n, {
      formItemContext: b
    }), { computedPopupVisible: h, handlePopupVisibleChange: I } = v({
      popupVisible: f,
      emit: u
    });
    return (o, i) => (V(), w(e(F), {
      ref_key: "triggerRef",
      ref: c,
      trigger: "click",
      position: "bl",
      "hide-empty": "",
      "auto-fit-popup-width": "",
      "auto-fit-transform-origin": "",
      "animation-name": "slide-dynamic-origin",
      disabled: e(g),
      "popup-offset": 4,
      "popup-visible": e(h),
      "unmount-on-close": o.unmountOnClose,
      "click-to-close": !(o.allowSearch || o.allowCreate),
      "popup-container": o.popupContainer,
      onPopupVisibleChange: e(I)
    }, {
      default: t(() => [
        P("div", T(e(a), {
          onMouseenter: i[0] || (i[0] = () => {
          })
        }), [
          r(e(A), {
            ref: "inputRef",
            type: "text",
            id: e(C),
            name: o.name,
            autocomplete: o.autocomplete
          }, null, 8, ["id", "name", "autocomplete"])
        ], 16)
      ]),
      content: t(() => [
        r(B, {
          ref_key: "dropdownRef",
          ref: d
        }, {
          default: t(() => [
            r(e(D), {
              ref: "scrollbarRef",
              tag: "ul"
            }, {
              default: t(() => [
                _(o.$slots, "default")
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
  X as default
};
