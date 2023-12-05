import { defineComponent as n, useAttrs as b, toRefs as _, ref as h, resolveComponent as C, openBlock as P, createBlock as k, unref as e, mergeProps as w, withCtx as t, createVNode as r, renderSlot as I } from "vue";
import { selectProps as V, selectEmits as R } from "./select.mjs";
import { useTrigger as T } from "@tu-view-plus/hooks";
import { TuTrigger as S } from "../../trigger/index.mjs";
import v from "./select-dropdown.vue.mjs";
import { TuScrollbar as y } from "../../scrollbar/index.mjs";
import "../../form/index.mjs";
import "../style/select.css";
import { useFormDisabled as F } from "../../form/src/hooks/use-form-props.mjs";
import { useFormItem as A, useFormItemInputId as B } from "../../form/src/hooks/use-form-item.mjs";
const D = n({
  name: "TuSelect",
  inheritAttrs: !1
}), M = /* @__PURE__ */ n({
  ...D,
  props: V,
  emits: R,
  setup(p, { emit: s }) {
    const i = p, m = s;
    b();
    const { popupVisible: l } = _(i), u = h(), a = F(), { form: $, formItem: f } = A();
    B(i, {
      formItemContext: f
    });
    const { computedPopupVisible: c, handlePopupVisibleChange: d } = T({
      popupVisible: l,
      emit: m
    });
    return (o, E) => {
      const g = C("tu-input");
      return P(), k(e(S), w(o.triggerProps, {
        ref: "triggerRef",
        trigger: "click",
        position: "bl",
        "hide-empty": "",
        "auto-fit-popup-width": "",
        "auto-fit-transform-origin": "",
        "animation-name": "slide-dynamic-origin",
        disabled: e(a),
        "popup-offset": 4,
        "popup-visible": e(c),
        "unmount-on-close": o.unmountOnClose,
        "click-to-close": !(o.allowSearch || o.allowCreate),
        "popup-container": o.popupContainer,
        onPopupVisibleChange: e(d)
      }), {
        default: t(() => [
          r(g)
        ]),
        content: t(() => [
          r(v, {
            ref_key: "dropdownRef",
            ref: u
          }, {
            default: t(() => [
              r(e(y), {
                ref: "scrollbarRef",
                tag: "ul"
              }, {
                default: t(() => [
                  I(o.$slots, "default")
                ]),
                _: 3
              }, 512)
            ]),
            _: 3
          }, 512)
        ]),
        _: 3
      }, 16, ["disabled", "popup-visible", "unmount-on-close", "click-to-close", "popup-container", "onPopupVisibleChange"]);
    };
  }
});
export {
  M as default
};
