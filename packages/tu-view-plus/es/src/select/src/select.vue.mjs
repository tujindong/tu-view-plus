import { defineComponent as s, useAttrs as I, toRefs as k, ref as p, openBlock as R, createBlock as V, unref as e, withCtx as t, createElementVNode as w, mergeProps as P, createVNode as r, renderSlot as T } from "vue";
import { selectProps as _, selectEmits as y } from "./select.mjs";
import { useTrigger as S } from "@tu-view-plus/hooks";
import { TuTrigger as v } from "../../trigger/index.mjs";
import { TuInput as F } from "../../input/index.mjs";
import A from "./select-dropdown.vue.mjs";
import { TuScrollbar as B } from "../../scrollbar/index.mjs";
import "../../form/index.mjs";
import "../style/select.css";
import { useFormDisabled as D } from "../../form/src/hooks/use-form-props.mjs";
import { useFormItem as E, useFormItemInputId as N } from "../../form/src/hooks/use-form-item.mjs";
const $ = s({
  name: "TuSelect",
  inheritAttrs: !1
}), W = /* @__PURE__ */ s({
  ...$,
  props: _,
  emits: y,
  setup(l, { emit: m }) {
    const n = l, u = I(), { popupVisible: a } = k(n), f = p(null), c = p(), d = D(), { form: M, formItem: g } = E(), { inputId: b } = N(n, {
      formItemContext: g
    }), { computedPopupVisible: C, handlePopupVisibleChange: h } = S({
      popupVisible: a,
      emit: m
    });
    return (o, i) => (R(), V(e(v), {
      ref_key: "triggerRef",
      ref: f,
      trigger: "click",
      position: "bl",
      "hide-empty": "",
      "auto-fit-popup-width": "",
      "auto-fit-transform-origin": "",
      "animation-name": "slide-dynamic-origin",
      disabled: e(d),
      "popup-offset": 4,
      "popup-visible": e(C),
      "unmount-on-close": o.unmountOnClose,
      "click-to-close": !(o.allowSearch || o.allowCreate),
      "popup-container": o.popupContainer,
      onPopupVisibleChange: e(h)
    }, {
      default: t(() => [
        w("div", P(e(u), {
          onMouseenter: i[0] || (i[0] = () => {
          })
        }), [
          r(e(F), {
            ref: "inputRef",
            type: "text",
            id: e(b),
            name: o.name,
            autocomplete: o.autocomplete
          }, null, 8, ["id", "name", "autocomplete"])
        ], 16)
      ]),
      content: t(() => [
        r(A, {
          ref_key: "dropdownRef",
          ref: c
        }, {
          default: t(() => [
            r(e(B), {
              ref: "scrollbarRef",
              tag: "ul"
            }, {
              default: t(() => [
                T(o.$slots, "default")
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
  W as default
};
