import { defineComponent as ae, useSlots as Ge, toRefs as Je, ref as Ke, reactive as d, computed as u, watch as Qe, onUnmounted as Xe, openBlock as Z, createBlock as x, unref as a, mergeProps as O, withCtx as P, createVNode as D, normalizeProps as _, guardReactiveProps as Ye, renderSlot as R, createSlots as Ze } from "vue";
import { pickerProps as xe, pickerEmits as _e } from "./picker.mjs";
import { useNamespace as eo, useLocale as oo, useMergeState as to, useState as q } from "@tu-view-plus/hooks";
import { useFormat as ao } from "./hooks/use-format.mjs";
import { usePickerState as lo } from "./hooks/use-picker-state.mjs";
import { useIsDisabledDate as ro } from "./hooks/use-is-disabled-date.mjs";
import { useReturnValue as uo } from "./hooks/use-value-format.mjs";
import { useHeaderValue as no } from "./hooks/use-header-value.mjs";
import { useTimePickerValue as io } from "./hooks/use-time-picker-value.mjs";
import { isFunction as ee, getDateValue as B, omit as so, pick as co, dayjs as po, getNow as oe, isBoolean as mo, isValueChange as vo } from "@tu-view-plus/utils";
import { mergeValueWithTime as fo } from "./utils.mjs";
import "../../form/index.mjs";
import { getFormattedValue as W, isValidInputValue as Vo } from "../../time-picker/src/utils.mjs";
import { TuTrigger as ho } from "../../trigger/index.mjs";
import te from "./picker-dropdown.vue.mjs";
import { TuPicker as ko } from "../../picker/index.mjs";
import { TuIcon as bo } from "../../icon/index.mjs";
import { Calendar as go } from "@tu-view-plus/icons-vue";
import "../style/index.css";
import { useFormSize as Po, useFormDisabled as Co } from "../../form/src/hooks/use-form-props.mjs";
const To = ae({
  name: "Picker"
}), Ao = /* @__PURE__ */ ae({
  ...To,
  props: xe,
  emits: _e,
  setup(le, { emit: re }) {
    let C;
    const F = le, l = re, p = Ge(), {
      mode: n,
      modelValue: ue,
      defaultValue: ne,
      format: m,
      valueFormat: ie,
      placeholder: I,
      popupVisible: se,
      defaultPopupVisible: ce,
      showTime: T,
      timePickerProps: i,
      disabledDate: de,
      disabledTime: pe,
      readonly: M,
      pickerValue: me,
      defaultPickerValue: ve,
      previewShortcut: j,
      showConfirmBtn: fe
    } = Je(F);
    eo("picker");
    const { t: v } = oo();
    Po();
    const H = Co(), r = Ke(), [s, Ve] = to(
      ce.value,
      d({ value: se })
    ), [he, k] = q(), U = u(
      () => m && ee(m.value) ? (e) => {
        var o;
        return (o = m.value) == null ? void 0 : o.call(m, B(e));
      } : S.value
    ), ke = u(
      () => !M.value && !ee(U.value)
    ), {
      format: S,
      valueFormat: be,
      parseValueFormat: f
    } = ao(d({ format: m, mode: n, showTime: T, valueFormat: ie })), ge = u(
      () => (I == null ? void 0 : I.value) || {
        date: v("tu.datepicker.placeholder.date"),
        month: v("tu.datepicker.placeholder.month"),
        year: v("tu.datepicker.placeholder.year"),
        week: v("tu.datepicker.placeholder.week"),
        quarter: v("tu.datepicker.placeholder.quarter")
      }[n.value] || v("tu.datepicker.placeholder.date")
    ), A = u(
      () => G.value ?? w.value
    ), Pe = u(
      () => b.value && (!A.value || L(A.value))
    ), Ce = u(() => ({
      format: S.value,
      ...so((i == null ? void 0 : i.value) || {}, ["defaultValue"]),
      visible: s.value
    })), b = u(() => T.value || fe.value), { value: w, setValue: Te } = lo(
      d({
        modelValue: ue,
        defaultValue: ne,
        format: f
      })
    ), $ = uo(
      d({
        format: be
      })
    ), [G, E] = q(), [Se, g] = q(), c = u(
      () => Se.value ?? G.value ?? w.value
    ), L = ro(
      d({
        mode: n,
        disabledDate: de,
        disabledTime: pe,
        showTime: T
      })
    ), { headerValue: J, setHeaderValue: we, headerOperations: ye, resetHeaderValue: De } = no(
      d({
        mode: n,
        value: me,
        defaultValue: ve,
        selectedValue: c,
        format: f,
        onChange: (e) => {
          const o = $(e), t = W(
            e,
            f.value
          ), h = B(e);
          l("picker-value-change", o, h, t), l("update:pickerValue", o);
        }
      })
    ), [K, , Be] = io(
      d({
        timePickerProps: i,
        selectedValue: c
      })
    ), Fe = u(() => n.value === "date" && T.value), z = (e) => {
      s.value !== e && (Ve(e), l("popup-visible-change", e), l("update:popupVisible", e));
    }, Ie = (e, o) => {
      const t = e ? $(e) : void 0, h = W(e, f.value), y = B(e);
      vo(e, w.value) && (l("update:modelValue", t), l("change", t, y, h)), o && l("ok", t, y, h);
    }, Q = (e, o) => {
      if (E(e), g(void 0), k(void 0), r.value = void 0, o) {
        const t = e ? $(e) : void 0, h = W(e, f.value), y = B(e);
        l("select", t, y, h);
      }
    }, V = (e, o, t) => {
      L(e) || (Ie(e, t), Te(e), E(void 0), g(void 0), k(void 0), r.value = void 0, mo(o) && z(o));
    }, Me = (e) => {
      H.value || z(e);
    }, He = (e) => {
      e.stopPropagation(), V(void 0), l("clear");
    }, $e = (e) => {
      z(!0);
      const o = e.target.value;
      if (k(o), !Vo(o, S.value))
        return;
      const t = po(o, S.value);
      L(t) || (b.value ? Q(t) : V(t, !0));
    }, Ee = () => {
      V(c.value, !1);
    }, Le = () => {
    }, X = (e, o) => !Fe.value && !(i != null && i.value) ? e : fo(oe(), e, o), N = (e) => {
      b.value ? Q(e, !0) : V(e, !1);
    }, ze = (e) => {
      const o = X(e, K.value);
      N(o);
    }, Ne = (e) => {
      const o = X(c.value || oe(), e);
      N(o);
    }, Oe = () => {
      V(c.value, !1, !0);
    }, Re = (e, o) => {
      l("select-shortcut", o), V(e, !1);
    }, qe = (e) => {
      clearTimeout(C), g(e), k(void 0);
    }, We = () => {
      clearTimeout(C), C = setTimeout(() => {
        g(void 0);
      }, 100);
    }, je = (e) => {
      r.value = e;
    }, Ue = (e) => {
      let o = J.value;
      if (o = o.set("year", e.year()), r.value === "month" && (o = o.set("month", e.month())), we(o), n.value === "quarter" || n.value === "month") {
        r.value = void 0;
        return;
      }
      r.value = r.value === "year" ? "month" : void 0;
    }, Ae = () => {
      r.value = "year";
    }, Y = u(() => ({
      ...co(F, [
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
      showNowBtn: F.showNowBtn && n.value === "date",
      format: f.value,
      value: c.value,
      visible: s.value,
      showConfirmBtn: b.value,
      confirmBtnDisabled: Pe.value,
      timePickerProps: Ce.value,
      extra: p.extra,
      dateRender: p.cell,
      headerValue: J.value,
      headerIcons: {
        prev: p["icon-prev"],
        prevDouble: p["icon-prev-double"],
        next: p["icon-next"],
        nextDouble: p["icon-next-double"]
      },
      headerOperations: ye.value,
      timePickerValue: K.value,
      headerMode: r.value,
      onCellClick: ze,
      onTimePickerSelect: Ne,
      onConfirm: Oe,
      onShortcutClick: Re,
      onShortcutMouseEnter: j.value ? qe : void 0,
      onShortcutMouseLeave: j.value ? We : void 0,
      onTodayBtnClick: N,
      onHeaderLabelClick: je,
      onHeaderSelect: Ue,
      onMonthHeaderClick: Ae
    }));
    return Qe(s, (e) => {
      E(void 0), g(void 0), r.value = void 0, e && (De(), Be()), e || k(void 0);
    }), Xe(() => {
      clearTimeout(C);
    }), (e, o) => e.hideTrigger ? (Z(), x(te, _(O({ key: 1 }, { ...e.$attrs, ...Y.value })), null, 16)) : (Z(), x(a(ho), O({
      key: 0,
      trigger: "click",
      "animation-name": "slide-dynamic-origin",
      "auto-fit-transform-origin": "",
      "click-to-close": !1,
      "popup-offset": 10
    }, e.triggerProps, {
      position: e.position,
      disabled: a(H) || a(M),
      "prevent-focus": !0,
      "popup-visible": a(s),
      "unmount-on-close": e.unmountOnClose,
      "popup-container": e.popupContainer,
      onPopupVisibleChange: Me
    }), {
      content: P(() => [
        D(te, _(Ye(Y.value)), null, 16)
      ]),
      default: P(() => [
        R(e.$slots, "default", {}, () => [
          D(a(ko), O({ ref: "refInput" }, e.$attrs, {
            size: e.size,
            focused: a(s),
            visible: a(s),
            error: e.error,
            disabled: a(H),
            readonly: !ke.value || e.disabledInput,
            "allow-clear": e.allowClear && !a(M),
            placeholder: ge.value,
            "input-value": a(he),
            value: b.value ? c.value : a(w),
            format: U.value,
            onClear: He,
            onChange: $e,
            onPressEnter: Ee,
            onBlur: Le
          }), Ze({
            "suffix-icon": P(() => [
              R(e.$slots, "suffix-icon", {}, () => [
                D(a(bo), null, {
                  default: P(() => [
                    D(a(go))
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
                R(e.$slots, "prefix")
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
  Ao as default
};
