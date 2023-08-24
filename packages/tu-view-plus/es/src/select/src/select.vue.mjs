import { defineComponent as n, useAttrs as b, toRefs as h, ref as C, openBlock as I, createBlock as P, unref as e, withCtx as t, createElementVNode as V, normalizeProps as _, guardReactiveProps as k, createVNode as r, renderSlot as R } from "vue";
import { selectProps as T, selectEmits as v } from "./select.mjs";
import { useTrigger as w } from "@tu-view-plus/hooks";
import { TuTrigger as y } from "../../trigger/index.mjs";
import { TuInput as S } from "../../input/index.mjs";
import F from "./select-dropdown.vue.mjs";
import { TuScrollbar as A } from "../../scrollbar/index.mjs";
import "../../form/index.mjs";
import "../style/select.css";
import { useFormDisabled as B } from "../../form/src/hooks/use-form-props.mjs";
import { useFormItem as D, useFormItemInputId as E } from "../../form/src/hooks/use-form-item.mjs";
const N = n({
  name: "TuSelect",
  inheritAttrs: !1
}), W = /* @__PURE__ */ n({
  ...N,
  props: T,
  emits: v,
  setup(p, { emit: l }) {
    const i = p, s = b(), { popupVisible: m } = h(i), u = C(null), a = B(), { form: $, formItem: c } = D(), { inputId: f } = E(i, {
      formItemContext: c
    }), { computedPopupVisible: d, handlePopupVisibleChange: g } = w({
      popupVisible: m,
      emit: l
    });
    return (o, z) => (I(), P(e(y), {
      ref_key: "triggerRef",
      ref: u,
      trigger: "click",
      position: "bl",
      "hide-empty": "",
      "auto-fit-popup-width": "",
      "auto-fit-transform-origin": "",
      "animation-name": "slide-dynamic-origin",
      disabled: e(a),
      "popup-offset": 4,
      "popup-visible": e(d),
      "unmount-on-close": o.unmountOnClose,
      "click-to-close": !(o.allowSearch || o.allowCreate),
      "popup-container": o.popupContainer,
      onPopupVisibleChange: e(g)
    }, {
      default: t(() => [
        V("div", _(k(e(s))), [
          r(e(S), {
            ref: "inputRef",
            type: "text",
            id: e(f),
            name: o.name,
            autocomplete: o.autocomplete
          }, null, 8, ["id", "name", "autocomplete"])
        ], 16)
      ]),
      content: t(() => [
        r(F, null, {
          default: t(() => [
            r(e(A), {
              ref: "scrollbarRef",
              tag: "ul"
            }, {
              default: t(() => [
                R(o.$slots, "default")
              ]),
              _: 3
            }, 512)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["disabled", "popup-visible", "unmount-on-close", "click-to-close", "popup-container", "onPopupVisibleChange"]));
  }
});
export {
  W as default
};
