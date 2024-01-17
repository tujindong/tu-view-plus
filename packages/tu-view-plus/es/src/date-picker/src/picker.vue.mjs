import { defineComponent as re, useSlots as Qe, toRefs as Xe, ref as _, reactive as d, computed as u, watch as Ye, onUnmounted as Ze, openBlock as ee, createBlock as oe, unref as t, mergeProps as B, withCtx as P, createVNode as F, renderSlot as q, createSlots as _e, normalizeProps as eo } from "vue";
import { pickerProps as oo, pickerEmits as to } from "./picker.mjs";
import { useLocale as ao, useMergeState as lo, useState as W } from "@tu-view-plus/hooks";
import { useFormat as ro } from "./hooks/use-format.mjs";
import { usePickerState as uo } from "./hooks/use-picker-state.mjs";
import { useIsDisabledDate as no } from "./hooks/use-is-disabled-date.mjs";
import { useReturnValue as io } from "./hooks/use-value-format.mjs";
import { useHeaderValue as so } from "./hooks/use-header-value.mjs";
import { useTimePickerValue as co } from "./hooks/use-time-picker-value.mjs";
import { isFunction as te, getDateValue as M, omit as po, pick as mo, dayjs as vo, getNow as ae, isBoolean as fo, isValueChange as Vo } from "@tu-view-plus/utils";
import { mergeValueWithTime as ho } from "./utils.mjs";
import "../../form/index.mjs";
import { getFormattedValue as j, isValidInputValue as ko } from "../../time-picker/src/utils.mjs";
import { TuTrigger as bo } from "../../trigger/index.mjs";
import le from "./picker-dropdown.vue.mjs";
import { TuPicker as go } from "../../picker/index.mjs";
import { TuIcon as Po } from "../../icon/index.mjs";
import { Calendar as Co } from "@tu-view-plus/icons-vue";
import "../style/index.css";
import { useFormSize as So, useFormDisabled as To } from "../../form/src/hooks/use-form-props.mjs";
const wo = re({
  name: "Picker",
  inheritAttrs: !1
}), Go = /* @__PURE__ */ re({
  ...wo,
  props: oo,
  emits: to,
  setup(ue, { emit: ne }) {
    let C;
    const S = ue, l = ne, p = Qe(), {
      mode: n,
      modelValue: ie,
      defaultValue: se,
      format: m,
      valueFormat: ce,
      placeholder: H,
      popupVisible: de,
      defaultPopupVisible: pe,
      showTime: T,
      timePickerProps: i,
      disabledDate: me,
      disabledTime: ve,
      readonly: $,
      pickerValue: fe,
      defaultPickerValue: Ve,
      previewShortcut: A,
      showConfirmBtn: he
    } = Xe(S), { t: v } = ao(), U = So(), z = To(), w = _(), r = _(), [s, ke] = lo(
      pe.value,
      d({ value: de })
    ), [be, k] = W(), x = u(
      () => m && te(m.value) ? (e) => {
        var o;
        return (o = m.value) == null ? void 0 : o.call(m, M(e));
      } : y.value
    ), ge = u(
      () => !$.value && !te(x.value)
    ), {
      format: y,
      valueFormat: Pe,
      parseValueFormat: f
    } = ro(d({ format: m, mode: n, showTime: T, valueFormat: ce })), Ce = u(
      () => (H == null ? void 0 : H.value) || {
        date: v("tu.datepicker.placeholder.date"),
        month: v("tu.datepicker.placeholder.month"),
        year: v("tu.datepicker.placeholder.year"),
        week: v("tu.datepicker.placeholder.week"),
        quarter: v("tu.datepicker.placeholder.quarter")
      }[n.value] || v("tu.datepicker.placeholder.date")
    ), G = u(
      () => J.value ?? D.value
    ), Se = u(
      () => b.value && (!G.value || O(G.value))
    ), Te = u(() => ({
      format: y.value,
      ...po((i == null ? void 0 : i.value) || {}, ["defaultValue"]),
      visible: s.value
    })), b = u(() => T.value || he.value), { value: D, setValue: we } = uo(
      d({
        modelValue: ie,
        defaultValue: se,
        format: f
      })
    ), E = io(
      d({
        format: Pe
      })
    ), [J, L] = W(), [ye, g] = W(), c = u(
      () => ye.value ?? J.value ?? D.value
    ), O = no(
      d({
        mode: n,
        disabledDate: me,
        disabledTime: ve,
        showTime: T
      })
    ), { headerValue: K, setHeaderValue: De, headerOperations: Ie, resetHeaderValue: Be } = so(
      d({
        mode: n,
        value: fe,
        defaultValue: Ve,
        selectedValue: c,
        format: f,
        onChange: (e) => {
          const o = E(e), a = j(
            e,
            f.value
          ), h = M(e);
          l("picker-value-change", o, h, a), l("update:pickerValue", o);
        }
      })
    ), [Q, , Fe] = co(
      d({
        timePickerProps: i,
        selectedValue: c
      })
    ), Me = u(() => n.value === "date" && T.value), N = (e) => {
      s.value !== e && (ke(e), l("popup-visible-change", e), l("update:popupVisible", e));
    }, He = (e, o) => {
      const a = e ? E(e) : void 0, h = j(e, f.value), I = M(e);
      Vo(e, D.value) && (l("update:modelValue", a), l("change", a, I, h)), o && l("ok", a, I, h);
    }, X = (e, o) => {
      if (L(e), g(void 0), k(void 0), r.value = void 0, o) {
        const a = e ? E(e) : void 0, h = j(e, f.value), I = M(e);
        l("select", a, I, h);
      }
    }, V = (e, o, a) => {
      O(e) || (He(e, a), we(e), L(void 0), g(void 0), k(void 0), r.value = void 0, fo(o) && N(o));
    }, $e = (e) => {
      z.value || N(e);
    }, ze = (e) => {
      e.stopPropagation(), V(void 0), l("clear");
    }, Ee = (e) => {
      N(!0);
      const o = e.target.value;
      if (k(o), !ko(o, y.value))
        return;
      const a = vo(o, y.value);
      O(a) || (b.value ? X(a) : V(a, !0));
    }, Le = () => {
      V(c.value, !1);
    }, Oe = () => {
    }, Y = (e, o) => !Me.value && !(i != null && i.value) ? e : ho(ae(), e, o), R = (e) => {
      b.value ? X(e, !0) : V(e, !1);
    }, Ne = (e) => {
      const o = Y(e, Q.value);
      R(o);
    }, Re = (e) => {
      const o = Y(c.value || ae(), e);
      R(o);
    }, qe = () => {
      V(c.value, !1, !0);
    }, We = (e, o) => {
      l("select-shortcut", o), V(e, !1);
    }, je = (e) => {
      clearTimeout(C), g(e), k(void 0);
    }, Ae = () => {
      clearTimeout(C), C = setTimeout(() => {
        g(void 0);
      }, 100);
    }, Ue = (e) => {
      r.value = e;
    }, xe = (e) => {
      let o = K.value;
      if (o = o.set("year", e.year()), r.value === "month" && (o = o.set("month", e.month())), De(o), n.value === "quarter" || n.value === "month") {
        r.value = void 0;
        return;
      }
      r.value = r.value === "year" ? "month" : void 0;
    }, Ge = () => {
      r.value = "year";
    }, Je = (e) => {
      w.value && w.value.focus && w.value.focus(e);
    }, Ke = () => {
      S.disabledInput && Je();
    }, Z = u(() => ({
      ...mo(S, [
        "mode",
        "shortcuts",
        "shortcutsPosition",
        "dayStartOfWeek",
        "disabledDate",
        "disabledTime",
        "showTime",
        "hideTrigger",
        "abbreviation"
      ]),
      size: U.value,
      showNowBtn: S.showNowBtn && n.value === "date",
      format: f.value,
      value: c.value,
      visible: s.value,
      showConfirmBtn: b.value,
      confirmBtnDisabled: Se.value,
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
      headerOperations: Ie.value,
      timePickerValue: Q.value,
      headerMode: r.value,
      onCellClick: Ne,
      onTimePickerSelect: Re,
      onConfirm: qe,
      onShortcutClick: We,
      onShortcutMouseEnter: A.value ? je : void 0,
      onShortcutMouseLeave: A.value ? Ae : void 0,
      onTodayBtnClick: R,
      onHeaderLabelClick: Ue,
      onHeaderSelect: xe,
      onMonthHeaderClick: Ge
    }));
    return Ye(s, (e) => {
      L(void 0), g(void 0), r.value = void 0, e && (Be(), Fe()), e || k(void 0);
    }), Ze(() => {
      clearTimeout(C);
    }), (e, o) => e.hideTrigger ? (ee(), oe(le, eo(B({ key: 1 }, { ...e.$attrs, ...Z.value })), null, 16)) : (ee(), oe(t(bo), B({ key: 0 }, e.triggerProps, {
      trigger: "click",
      "animation-name": "slide-dynamic-origin",
      "auto-fit-transform-origin": "",
      "click-to-close": !1,
      "popup-offset": 10,
      position: e.position,
      disabled: t(z) || t($),
      "prevent-focus": !0,
      "popup-visible": t(s),
      "unmount-on-close": e.unmountOnClose,
      "popup-container": e.popupContainer,
      onPopupVisibleChange: $e
    }), {
      content: P(() => [
        F(le, B(Z.value, { onClick: Ke }), null, 16)
      ]),
      default: P(() => [
        q(e.$slots, "default", {}, () => [
          F(t(go), B({
            ref_key: "refInput",
            ref: w
          }, e.$attrs, {
            size: t(U),
            focused: t(s),
            visible: t(s),
            error: e.error,
            disabled: t(z),
            readonly: !ge.value || e.disabledInput,
            "allow-clear": e.allowClear && !t($),
            placeholder: Ce.value,
            "input-value": t(be),
            value: b.value ? c.value : t(D),
            format: x.value,
            onClear: ze,
            onChange: Ee,
            onPressEnter: Le,
            onBlur: Oe
          }), _e({
            "suffix-icon": P(() => [
              q(e.$slots, "suffix-icon", {}, () => [
                F(t(Po), null, {
                  default: P(() => [
                    F(t(Co))
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
