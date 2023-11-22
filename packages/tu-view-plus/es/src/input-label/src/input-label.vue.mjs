import { defineComponent as x, useAttrs as G, useSlots as H, toRefs as J, ref as n, computed as t, watch as K, openBlock as C, createElementBlock as _, Fragment as O, createTextVNode as I, toDisplayString as F, createElementVNode as f, mergeProps as L, unref as v, normalizeClass as Q, renderSlot as W, createCommentVNode as X, nextTick as k } from "vue";
import { inputLabelProps as Y, inputLabelEmits as Z } from "./input-label.mjs";
import { useNamespace as ee } from "@tu-view-plus/hooks";
import { omit as le, pick as ae } from "@tu-view-plus/utils";
import { INPUT_EVENTS as w } from "@tu-view-plus/constants";
import "../../form/index.mjs";
import "../style/input-label.css";
import { useFormSize as oe, useFormDisabled as te } from "../../form/src/hooks/use-form-props.mjs";
import { useFormItem as ue } from "../../form/src/hooks/use-form-item.mjs";
const ne = /* @__PURE__ */ f("br", null, null, -1), se = ["value", "readonly", "placeholder", "disabled"], re = x({
  name: "TuInputLabel"
}), Ce = /* @__PURE__ */ x({
  ...re,
  props: Y,
  emits: Z,
  setup(y, { emit: D }) {
    let i;
    const o = y, s = D, b = G(), N = H(), { disabled: ie, inputValue: c, uninjectFormItemContext: ce } = J(o), r = ee("input-label");
    oe();
    const E = te();
    ue();
    const l = n(), S = n(!1), p = n(!1), h = n(""), d = n(""), V = n(!1), T = t(() => le(b, w)), B = t(() => ae(b, w)), P = t(
      () => o.enabledInput && S.value || !o.modelValue
    ), a = t(
      () => (c == null ? void 0 : c.value) ?? d.value
    ), A = t(
      () => o.enabledInput && o.modelValue ? o.modelValue.label : o.placeholder
    ), R = t(() => ({
      [r.b()]: !0
    })), z = t(() => ({
      [r.b()]: !0,
      [r.is("hidden")]: !P.value
    })), M = (e) => {
      l.value && e.target !== l.value && (e.preventDefault(), l.value.focus());
    }, j = (e) => {
      const { value: u } = e.target;
      p.value || g(u, e), k(() => {
        l.value && a.value !== l.value.value && (l.value.value = a.value);
      });
    }, U = (e) => {
      V.value = !0, i = a.value, s("focus", e);
    }, $ = (e) => {
      V.value = !1, s("blur", e), q(e);
    }, q = (e) => {
      a.value !== i && (i = a.value, s("change", a.value, e));
    }, m = (e) => {
      const { value: u } = e.target;
      e.type === "compositionend" ? (p.value = !1, h.value = "", g(u, e), k(() => {
        l.value && a.value !== l.value.value && (l.value.value = a.value);
      })) : (p.value = !0, h.value = a.value + (e.data ?? ""));
    }, g = (e, u) => {
      debugger;
      console.log("updateValue", e), d.value = e, s("update:modelValue", e), s("input", e, u);
    };
    return K(a, (e) => {
      l.value && e !== l.value.value && (l.value.value = e);
    }), (e, u) => (C(), _(O, null, [
      I(" computedValue: " + F(a.value) + " ", 1),
      ne,
      I(" inputLabelValue: " + F(d.value) + " ", 1),
      f("div", L(T.value, {
        class: R.value,
        onMousedown: M
      }), [
        v(N).prefix ? (C(), _("span", {
          key: 0,
          class: Q(v(r).e("prefix"))
        }, [
          W(e.$slots, "prefix")
        ], 2)) : X("", !0),
        f("input", L({
          ref_key: "inputRef",
          ref: l
        }, B.value, {
          class: z.value,
          value: a.value,
          readonly: !e.enabledInput,
          placeholder: A.value,
          disabled: v(E),
          onInput: j,
          onFocus: U,
          onBlur: $,
          onCompositionstart: m,
          onCompositionupdate: m,
          onCompositionend: m
        }), null, 16, se)
      ], 16)
    ], 64));
  }
});
export {
  Ce as default
};
