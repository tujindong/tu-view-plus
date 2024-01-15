import { defineComponent as le, useSlots as Qe, toRefs as Xe, ref as x, reactive as d, computed as u, watch as Ye, onUnmounted as Ze, openBlock as _, createBlock as ee, unref as a, mergeProps as B, withCtx as P, createVNode as F, renderSlot as q, createSlots as xe, normalizeProps as _e } from "vue";
import { pickerProps as eo, pickerEmits as oo } from "./picker.mjs";
import { useLocale as to, useMergeState as ao, useState as W } from "@tu-view-plus/hooks";
import { useFormat as lo } from "./hooks/use-format.mjs";
import { usePickerState as ro } from "./hooks/use-picker-state.mjs";
import { useIsDisabledDate as uo } from "./hooks/use-is-disabled-date.mjs";
import { useReturnValue as no } from "./hooks/use-value-format.mjs";
import { useHeaderValue as io } from "./hooks/use-header-value.mjs";
import { useTimePickerValue as so } from "./hooks/use-time-picker-value.mjs";
import { isFunction as oe, getDateValue as M, omit as co, pick as po, dayjs as mo, getNow as te, isBoolean as vo, isValueChange as fo } from "@tu-view-plus/utils";
import { mergeValueWithTime as Vo } from "./utils.mjs";
import "../../form/index.mjs";
import { getFormattedValue as j, isValidInputValue as ho } from "../../time-picker/src/utils.mjs";
import { TuTrigger as ko } from "../../trigger/index.mjs";
import ae from "./picker-dropdown.vue.mjs";
import { TuPicker as bo } from "../../picker/index.mjs";
import { TuIcon as go } from "../../icon/index.mjs";
import { Calendar as Po } from "@tu-view-plus/icons-vue";
import "../style/index.css";
import { useFormSize as Co, useFormDisabled as To } from "../../form/src/hooks/use-form-props.mjs";
const So = le({
  name: "Picker",
  inheritAttrs: !1
}), Go = /* @__PURE__ */ le({
  ...So,
  props: eo,
  emits: oo,
  setup(re, { emit: ue }) {
    let C;
    const T = re, l = ue, p = Qe(), {
      mode: n,
      modelValue: ne,
      defaultValue: ie,
      format: m,
      valueFormat: se,
      placeholder: H,
      popupVisible: ce,
      defaultPopupVisible: de,
      showTime: S,
      timePickerProps: i,
      disabledDate: pe,
      disabledTime: me,
      readonly: $,
      pickerValue: ve,
      defaultPickerValue: fe,
      previewShortcut: A,
      showConfirmBtn: Ve
    } = Xe(T), { t: v } = to();
    Co();
    const z = To(), w = x(), r = x(), [s, he] = ao(
      de.value,
      d({ value: ce })
    ), [ke, k] = W(), U = u(
      () => m && oe(m.value) ? (e) => {
        var o;
        return (o = m.value) == null ? void 0 : o.call(m, M(e));
      } : y.value
    ), be = u(
      () => !$.value && !oe(U.value)
    ), {
      format: y,
      valueFormat: ge,
      parseValueFormat: f
    } = lo(d({ format: m, mode: n, showTime: S, valueFormat: se })), Pe = u(
      () => (H == null ? void 0 : H.value) || {
        date: v("tu.datepicker.placeholder.date"),
        month: v("tu.datepicker.placeholder.month"),
        year: v("tu.datepicker.placeholder.year"),
        week: v("tu.datepicker.placeholder.week"),
        quarter: v("tu.datepicker.placeholder.quarter")
      }[n.value] || v("tu.datepicker.placeholder.date")
    ), G = u(
      () => J.value ?? D.value
    ), Ce = u(
      () => b.value && (!G.value || O(G.value))
    ), Te = u(() => ({
      format: y.value,
      ...co((i == null ? void 0 : i.value) || {}, ["defaultValue"]),
      visible: s.value
    })), b = u(() => S.value || Ve.value), { value: D, setValue: Se } = ro(
      d({
        modelValue: ne,
        defaultValue: ie,
        format: f
      })
    ), E = no(
      d({
        format: ge
      })
    ), [J, L] = W(), [we, g] = W(), c = u(
      () => we.value ?? J.value ?? D.value
    ), O = uo(
      d({
        mode: n,
        disabledDate: pe,
        disabledTime: me,
        showTime: S
      })
    ), { headerValue: K, setHeaderValue: ye, headerOperations: De, resetHeaderValue: Ie } = io(
      d({
        mode: n,
        value: ve,
        defaultValue: fe,
        selectedValue: c,
        format: f,
        onChange: (e) => {
          const o = E(e), t = j(
            e,
            f.value
          ), h = M(e);
          l("picker-value-change", o, h, t), l("update:pickerValue", o);
        }
      })
    ), [Q, , Be] = so(
      d({
        timePickerProps: i,
        selectedValue: c
      })
    ), Fe = u(() => n.value === "date" && S.value), N = (e) => {
      s.value !== e && (he(e), l("popup-visible-change", e), l("update:popupVisible", e));
    }, Me = (e, o) => {
      const t = e ? E(e) : void 0, h = j(e, f.value), I = M(e);
      fo(e, D.value) && (l("update:modelValue", t), l("change", t, I, h)), o && l("ok", t, I, h);
    }, X = (e, o) => {
      if (L(e), g(void 0), k(void 0), r.value = void 0, o) {
        const t = e ? E(e) : void 0, h = j(e, f.value), I = M(e);
        l("select", t, I, h);
      }
    }, V = (e, o, t) => {
      O(e) || (Me(e, t), Se(e), L(void 0), g(void 0), k(void 0), r.value = void 0, vo(o) && N(o));
    }, He = (e) => {
      z.value || N(e);
    }, $e = (e) => {
      e.stopPropagation(), V(void 0), l("clear");
    }, ze = (e) => {
      N(!0);
      const o = e.target.value;
      if (k(o), !ho(o, y.value))
        return;
      const t = mo(o, y.value);
      O(t) || (b.value ? X(t) : V(t, !0));
    }, Ee = () => {
      V(c.value, !1);
    }, Le = () => {
    }, Y = (e, o) => !Fe.value && !(i != null && i.value) ? e : Vo(te(), e, o), R = (e) => {
      b.value ? X(e, !0) : V(e, !1);
    }, Oe = (e) => {
      const o = Y(e, Q.value);
      R(o);
    }, Ne = (e) => {
      const o = Y(c.value || te(), e);
      R(o);
    }, Re = () => {
      V(c.value, !1, !0);
    }, qe = (e, o) => {
      l("select-shortcut", o), V(e, !1);
    }, We = (e) => {
      clearTimeout(C), g(e), k(void 0);
    }, je = () => {
      clearTimeout(C), C = setTimeout(() => {
        g(void 0);
      }, 100);
    }, Ae = (e) => {
      r.value = e;
    }, Ue = (e) => {
      let o = K.value;
      if (o = o.set("year", e.year()), r.value === "month" && (o = o.set("month", e.month())), ye(o), n.value === "quarter" || n.value === "month") {
        r.value = void 0;
        return;
      }
      r.value = r.value === "year" ? "month" : void 0;
    }, Ge = () => {
      r.value = "year";
    }, Je = (e) => {
      w.value && w.value.focus && w.value.focus(e);
    }, Ke = () => {
      T.disabledInput && Je();
    }, Z = u(() => ({
      ...po(T, [
        "mode",
        "shortcuts",
        "shortcutsPosition",
        "dayStartOfWeek",
        "disabledDate",
        "disabledTime",
        "showTime",
        "hideTrigger",
        "abbreviation",
        "size"
      ]),
      showNowBtn: T.showNowBtn && n.value === "date",
      format: f.value,
      value: c.value,
      visible: s.value,
      showConfirmBtn: b.value,
      confirmBtnDisabled: Ce.value,
      timePickerProps: Te.value,
      extra: p.extra,
      dateRender: p.cell,
      headerValue: K.value,
      headerIcons: {
        prev: p["icon-prev"],
        prevDouble: p["icon-prev-double"],
        next: p["icon-next"],
        nextDouble: p["icon-next-double"]
      },
      headerOperations: De.value,
      timePickerValue: Q.value,
      headerMode: r.value,
      onCellClick: Oe,
      onTimePickerSelect: Ne,
      onConfirm: Re,
      onShortcutClick: qe,
      onShortcutMouseEnter: A.value ? We : void 0,
      onShortcutMouseLeave: A.value ? je : void 0,
      onTodayBtnClick: R,
      onHeaderLabelClick: Ae,
      onHeaderSelect: Ue,
      onMonthHeaderClick: Ge
    }));
    return Ye(s, (e) => {
      L(void 0), g(void 0), r.value = void 0, e && (Ie(), Be()), e || k(void 0);
    }), Ze(() => {
      clearTimeout(C);
    }), (e, o) => e.hideTrigger ? (_(), ee(ae, _e(B({ key: 1 }, { ...e.$attrs, ...Z.value })), null, 16)) : (_(), ee(a(ko), B({ key: 0 }, e.triggerProps, {
      trigger: "click",
      "animation-name": "slide-dynamic-origin",
      "auto-fit-transform-origin": "",
      "click-to-close": !1,
      "popup-offset": 10,
      position: e.position,
      disabled: a(z) || a($),
      "prevent-focus": !0,
      "popup-visible": a(s),
      "unmount-on-close": e.unmountOnClose,
      "popup-container": e.popupContainer,
      onPopupVisibleChange: He
    }), {
      content: P(() => [
        F(ae, B(Z.value, { onClick: Ke }), null, 16)
      ]),
      default: P(() => [
        q(e.$slots, "default", {}, () => [
          F(a(bo), B({
            ref_key: "refInput",
            ref: w
          }, e.$attrs, {
            size: e.size,
            focused: a(s),
            visible: a(s),
            error: e.error,
            disabled: a(z),
            readonly: !be.value || e.disabledInput,
            "allow-clear": e.allowClear && !a($),
            placeholder: Pe.value,
            "input-value": a(ke),
            value: b.value ? c.value : a(D),
            format: U.value,
            onClear: $e,
            onChange: ze,
            onPressEnter: Ee,
            onBlur: Le
          }), xe({
            "suffix-icon": P(() => [
              q(e.$slots, "suffix-icon", {}, () => [
                F(a(go), null, {
                  default: P(() => [
                    F(a(Po))
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: P(() => [
                q(e.$slots, "prefix")
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["size", "focused", "visible", "error", "disabled", "readonly", "allow-clear", "placeholder", "input-value", "value", "format"])
        ])
      ]),
      _: 3
    }, 16, ["position", "disabled", "popup-visible", "unmount-on-close", "popup-container"]));
  }
});
export {
  Go as default
};
