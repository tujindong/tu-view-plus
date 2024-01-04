import { defineComponent as f, toRefs as y, reactive as S, computed as s, openBlock as l, createBlock as u, unref as i, mergeProps as T, withCtx as m, createVNode as _, renderSlot as D } from "vue";
import { pickerProps as B, pickerEmits as N } from "./picker.mjs";
import { useNamespace as O, useMergeState as $ } from "@tu-view-plus/hooks";
import { isFunction as c, getDateValue as w } from "@tu-view-plus/utils";
import "../../form/index.mjs";
import { TuTrigger as z } from "../../trigger/index.mjs";
import d from "./picker-dropdown.vue.mjs";
import { useFormSize as E, useFormDisabled as L } from "../../form/src/hooks/use-form-props.mjs";
const M = f({
  name: "Picker"
}), se = /* @__PURE__ */ f({
  ...M,
  props: B,
  emits: N,
  setup(g, { emit: v }) {
    const b = g, r = v, {
      mode: R,
      modelValue: W,
      defaultValue: j,
      format: o,
      valueFormat: q,
      placeholder: A,
      popupVisible: k,
      defaultPopupVisible: P,
      disabled: G,
      showTime: H,
      timePickerProps: I,
      disabledDate: J,
      disabledTime: K,
      readonly: a,
      locale: Q,
      pickerValue: U,
      defaultPickerValue: X,
      dayStartOfWeek: Y,
      previewShortcut: Z,
      showConfirmBtn: x
    } = y(b);
    O("picker"), E();
    const p = L(), [n, V] = $(
      P.value,
      S({ value: k })
    ), h = s(
      () => o && c(o.value) ? (e) => {
        var t;
        return (t = o.value) == null ? void 0 : t.call(o, w(e));
      } : computedFormat.value
    );
    s(
      () => !a.value && !c(h.value)
    );
    const C = (e) => {
      n.value !== e && (V(e), r("popup-visible-change", e), r("update:popupVisible", e));
    }, F = (e) => {
      p.value || C(e);
    };
    return (e, t) => e.hideTrigger ? (l(), u(d, { key: 1 })) : (l(), u(i(z), T({
      key: 0,
      trigger: "click",
      "animation-name": "slide-dynamic-origin",
      "auto-fit-transform-origin": "",
      "click-to-close": !1,
      "popup-offset": 4
    }, e.triggerProps, {
      position: e.position,
      disabled: i(p) || i(a),
      "prevent-focus": !0,
      "popup-visible": i(n),
      "unmount-on-close": e.unmountOnClose,
      "popup-container": e.popupContainer,
      onPopupVisibleChange: F
    }), {
      content: m(() => [
        _(d)
      ]),
      default: m(() => [
        D(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["position", "disabled", "popup-visible", "unmount-on-close", "popup-container"]));
  }
});
export {
  se as default
};
