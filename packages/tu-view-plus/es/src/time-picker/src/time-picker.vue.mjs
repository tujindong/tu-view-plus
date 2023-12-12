import { defineComponent as m, toRefs as R, reactive as V, ref as I, shallowReactive as z, computed as y, openBlock as n, createBlock as s, unref as o, withCtx as l, createElementVNode as S, normalizeClass as w, resolveDynamicComponent as c, nextTick as F } from "vue";
import { timePickerProps as B, TimePickerEmits as E } from "./time-picker.mjs";
import { useNamespace as H, useState as M, useMergeState as N } from "@tu-view-plus/hooks";
import "../../form/index.mjs";
import { TuTrigger as $ } from "../../trigger/index.mjs";
import { TuPicker as x } from "../../picker/index.mjs";
import { TuRangePicker as A } from "../../range-picker/index.mjs";
import L from "./time-picker-dropdown.vue.mjs";
import O from "./time-picker-range-dropdown.vue.mjs";
import "../style/time-picker.css";
import { useFormDisabled as j, useFormSize as q } from "../../form/src/hooks/use-form-props.mjs";
const G = m({
  name: "TuTimePicker",
  inheritAttrs: !1
}), ke = /* @__PURE__ */ m({
  ...G,
  props: B,
  emits: E,
  setup(d, { emit: f }) {
    const k = d, r = f, {
      type: v,
      format: J,
      use12Hours: K,
      modelValue: Q,
      defaultValue: U,
      popupVisible: T,
      defaultPopupVisible: P,
      disabled: W,
      placeholder: X,
      disableConfirm: Y,
      disabledHours: Z,
      disabledMinutes: ee,
      disabledSeconds: oe
    } = R(k), b = H("time-picker"), a = j();
    q();
    const [g, ie] = M(0), [u, C] = N(
      P.value,
      V({ value: T })
    ), t = I(), i = z({
      TuPicker: x,
      TuRangePicker: A,
      TuTimePickerDropdown: L,
      TuTimePickerRangeDropdown: O
    }), p = y(() => v.value === "time-range"), h = (e) => {
      e !== u.value && (C(e), r("popup-visible-change", e), r("update:popupVisible", e));
    }, _ = (e) => {
      t.value && t.value.focus && t.value.focus(e);
    }, D = (e) => {
      a.value || (h(e), e && F(() => {
        _(g.value);
      }));
    };
    return (e, te) => (n(), s(o($), {
      trigger: "click",
      "animation-name": "slide-dynamic-origin",
      "auto-fit-transform-origin": "",
      "click-to-close": !1,
      position: e.position,
      disabled: o(a) || e.readonly,
      "popup-offset": 4,
      "popup-visible": o(u),
      "prevent-focus": !0,
      "unmount-on-close": e.unmountOnClose,
      "popup-container": e.popupContainer,
      onPopupVisibleChange: D
    }, {
      content: l(() => [
        S("div", {
          class: w(o(b).e("container"))
        }, [
          (n(), s(c(
            p.value ? o(i).TuTimePickerRangeDropdown : o(i).TuTimePickerDropdown
          )))
        ], 2)
      ]),
      default: l(() => [
        (n(), s(c(
          p.value ? o(i).TuRangePicker : o(i).TuPicker
        ), {
          size: e.size,
          format: () => {
          }
        }, null, 8, ["size"]))
      ]),
      _: 1
    }, 8, ["position", "disabled", "popup-visible", "unmount-on-close", "popup-container"]));
  }
});
export {
  ke as default
};
