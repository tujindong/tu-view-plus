import { defineComponent as K, toRefs as Ve, reactive as V, ref as Pe, computed as P, shallowReactive as Ce, openBlock as z, createBlock as E, unref as o, withCtx as m, createElementVNode as ke, normalizeClass as Te, resolveDynamicComponent as O, mergeProps as U, createSlots as q, renderSlot as F, withModifiers as Ie, createVNode as ye, nextTick as De } from "vue";
import { timePickerProps as Re, TimePickerEmits as Se } from "./time-picker.mjs";
import { useLocale as we, useNamespace as $e, useState as ze, useMergeState as Ee } from "@tu-view-plus/hooks";
import { isUndefined as x, isArray as v, dayjs as H, getSortedDayjsArray as Fe, getDateValue as G, isValueChange as He } from "@tu-view-plus/utils";
import { Clock as je } from "@tu-view-plus/icons-vue";
import "../../form/index.mjs";
import { useIsDisabledTime as Ae } from "./hooks/use-is-disabled-time.mjs";
import { useTimeFormat as Me } from "./hooks/use-time-format.mjs";
import { getFormattedValue as j, isValidInputValue as J, isValidRangeValue as C } from "./utils.mjs";
import { useTimeState as Ne } from "./hooks/use-time-state.mjs";
import { TuTrigger as Be } from "../../trigger/index.mjs";
import { TuPicker as Le } from "../../picker/index.mjs";
import { TuRangePicker as Oe } from "../../range-picker/index.mjs";
import Ue from "./time-picker-dropdown.vue.mjs";
import qe from "./time-picker-range-dropdown.vue.mjs";
import "../style/time-picker.css";
import { useFormDisabled as xe } from "../../form/src/hooks/use-form-props.mjs";
const Ge = K({
  name: "TuTimePicker",
  inheritAttrs: !1
}), lo = /* @__PURE__ */ K({
  ...Ge,
  props: Re,
  emits: Se,
  setup(Q, { emit: W }) {
    const g = Q, c = W, { t: k } = we(), {
      type: X,
      format: Y,
      use12Hours: Z,
      modelValue: _,
      defaultValue: ee,
      popupVisible: oe,
      defaultPopupVisible: te,
      placeholder: T,
      disabledHours: A,
      disabledMinutes: M,
      disabledSeconds: N
    } = Ve(g), ae = $e("time-picker"), I = xe(), [p, y] = ze(0), [r, ne] = Ee(
      te.value,
      V({ value: oe })
    ), b = Pe(), u = P(() => X.value === "time-range"), { format: s, use12Hours: se } = Me(V({ format: Y, use12Hours: Z })), {
      computedValue: B,
      panelValue: i,
      inputValue: D,
      setValue: ie,
      setPanelValue: L,
      setInputValue: R
    } = Ne(
      V({
        modelValue: _,
        defaultValue: ee,
        isRange: u,
        format: s
      })
    ), h = Ce({
      TuPicker: Le,
      TuRangePicker: Oe,
      TuTimePickerDropdown: Ue,
      TuTimePickerRangeDropdown: qe
    }), re = P(() => {
      const e = T == null ? void 0 : T.value;
      return u.value ? x(e) ? [
        k("tu.datepicker.rangePlaceholder.timeStart"),
        k("tu.datepicker.rangePlaceholder.timeEnd")
      ] : v(e) ? e : [e, e] : x(e) ? k("tu.datepicker.placeholder.time") : e;
    }), S = Ae(
      V({
        disabledHours: A,
        disabledMinutes: M,
        disabledSeconds: N
      })
    ), ue = P(() => u.value ? {
      focusedIndex: p.value,
      onFocusedIndexChange: (e) => {
        y(e);
      },
      onChange: ce,
      onPressEnter: fe
    } : {
      onChange: me,
      onPressEnter: ve
    }), le = P(() => u.value ? {
      displayIndex: p.value,
      onDisplayIndexChange: (e) => {
        y(e), $(e);
      }
    } : {}), pe = (e) => {
      if (He(e, B.value)) {
        const a = j(e, s.value), t = G(e);
        c("update:modelValue", a), c("change", a, t);
      }
    }, l = (e, a) => {
      if (S(e))
        return;
      let t = e;
      if (v(e)) {
        const d = H();
        t = e.map((n) => (n && (n = n.year(d.year()), n = n.month(d.month()), n = n.date(d.date())), n)), C(t) && (t = Fe(t)), (t == null ? void 0 : t.length) === 0 && (t = void 0);
      }
      pe(t), ie(t), a !== r.value && f(a);
    }, w = (e, a) => {
      L(e), a !== r.value && f(a);
    }, f = (e) => {
      e !== r.value && (ne(e), c("popup-visible-change", e), c("update:popupVisible", e));
    }, $ = (e) => {
      b.value && b.value.focus && b.value.focus(e);
    }, de = (e) => {
      I.value || (f(e), e && De(() => {
        $(p.value);
      }));
    }, ce = (e) => {
      f(!0);
      const a = e.target.value, t = v(D.value) ? [...D.value] : v(i.value) && j(i.value, s.value) || [];
      if (t[p.value] = a, R(t), !J(a, s.value))
        return;
      const d = H(a, s.value);
      if (S(d))
        return;
      const n = v(i.value) ? [...i.value] : [];
      n[p.value] = d, g.disableConfirm && C(n) ? l(n, !0) : w(n, !0);
    }, fe = () => {
      if (C(i.value))
        l(i.value, !1);
      else {
        const e = (p.value + 1) % 2;
        y(e), $(e);
      }
    }, me = (e) => {
      f(!0);
      const a = e.target.value;
      if (R(a), !J(a, s.value))
        return;
      const t = H(a, s.value);
      S(t) || (g.disableConfirm ? l(t, !0) : w(t, !0));
    }, ve = () => {
      l(i.value || B.value, !1);
    }, ge = (e) => {
      e.stopPropagation(), L(void 0), l(void 0, !1);
    }, be = (e) => {
      const a = j(e, s.value), t = G(e);
      c("select", a, t), g.disableConfirm && (!u.value || C(e)) ? l(e, !0) : (w(e, !0), R(void 0));
    }, he = (e) => {
      l(e, !1);
    };
    return (e, a) => (z(), E(o(Be), {
      trigger: "click",
      "animation-name": "slide-dynamic-origin",
      "auto-fit-transform-origin": "",
      "click-to-close": !1,
      position: e.position,
      disabled: o(I) || e.readonly,
      "popup-offset": 8,
      "popup-visible": o(r),
      "prevent-focus": !0,
      "unmount-on-close": e.unmountOnClose,
      "popup-container": e.popupContainer,
      onPopupVisibleChange: de
    }, {
      content: m(() => [
        ke("div", {
          class: Te(o(ae).e("container"))
        }, [
          (z(), E(O(
            u.value ? o(h).TuTimePickerRangeDropdown : o(h).TuTimePickerDropdown
          ), U(le.value, {
            size: e.size,
            value: o(i),
            visible: o(r),
            format: o(s),
            "use12-hours": o(se),
            step: e.step,
            "disabled-hours": o(A),
            "disabled-minutes": o(M),
            "disabled-seconds": o(N),
            "hide-disabled-options": e.hideDisabledOptions,
            "hide-footer": e.disableConfirm,
            onSelect: be,
            onConfirm: he
          }), q({ _: 2 }, [
            e.$slots.extra ? {
              name: "extra-footer",
              fn: m(() => [
                F(e.$slots, "extra")
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["size", "value", "visible", "format", "use12-hours", "step", "disabled-hours", "disabled-minutes", "disabled-seconds", "hide-disabled-options", "hide-footer"]))
        ], 2)
      ]),
      default: m(() => [
        (z(), E(O(
          u.value ? o(h).TuRangePicker : o(h).TuPicker
        ), U({
          ref_key: "refInput",
          ref: b
        }, { ...e.$attrs, ...ue.value }, {
          "input-value": o(D),
          value: o(i),
          size: e.size,
          focused: o(r),
          format: o(s),
          visible: o(r),
          disabled: o(I),
          editable: !e.readonly,
          "allow-clear": e.allowClear && !e.readonly,
          placeholder: re.value,
          onClear: Ie(ge, ["stop"])
        }), q({
          "suffix-icon": m(() => [
            F(e.$slots, "suffix-icon", {}, () => [
              ye(o(je))
            ])
          ]),
          _: 2
        }, [
          e.$slots.prefix ? {
            name: "prefix",
            fn: m(() => [
              F(e.$slots, "prefix")
            ]),
            key: "0"
          } : void 0
        ]), 1040, ["input-value", "value", "size", "focused", "format", "visible", "disabled", "editable", "allow-clear", "placeholder"]))
      ]),
      _: 3
    }, 8, ["position", "disabled", "popup-visible", "unmount-on-close", "popup-container"]));
  }
});
export {
  lo as default
};
