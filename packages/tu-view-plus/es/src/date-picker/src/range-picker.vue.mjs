import { defineComponent as Te, useSlots as ga, toRefs as ha, computed as n, reactive as m, ref as O, watch as te, nextTick as Pa, onUnmounted as ka, openBlock as be, createBlock as Se, unref as i, mergeProps as oe, withCtx as y, createVNode as z, normalizeProps as Ce, guardReactiveProps as ba, renderSlot as A, createSlots as Sa, createTextVNode as Ca, toDisplayString as ya } from "vue";
import { rangePickerProps as Ta, rangePickerEmits as Ha } from "./range-picker.mjs";
import "../../form/index.mjs";
import { isArray as N, getDateValue as le, getNow as re, omit as Ia, pick as Da, dayjs as Ea, isBoolean as wa, isValueChange as Ma, getSortedDayjsArray as Ra } from "@tu-view-plus/utils";
import { useLocale as Fa, useState as ue, useMergeState as Oa } from "@tu-view-plus/hooks";
import { Calendar as xa } from "@tu-view-plus/icons-vue";
import { useFormat as Ba } from "./hooks/use-format.mjs";
import { useIsDisabledDate as La } from "./hooks/use-is-disabled-date.mjs";
import { getReturnRangeValue as ne } from "./hooks/use-value-format.mjs";
import { getFormattedValue as j, isValidInputValue as $a } from "../../time-picker/src/utils.mjs";
import { useRangePickerState as za } from "./hooks/use-range-picker-state.mjs";
import { useRangeHeaderValue as Aa } from "./hooks/use-range-header-value.mjs";
import { useRangeTimePickerValue as Na } from "./hooks/use-range-time-picker-value.mjs";
import { isCompleteRangeValue as P, isValidRangeValue as ja, mergeValueWithTime as qa } from "./utils.mjs";
import { TuRangePicker as Ua } from "../../range-picker/index.mjs";
import { TuTrigger as Wa } from "../../trigger/index.mjs";
import { TuIcon as Ga } from "../../icon/index.mjs";
import ye from "./range-picker-dropdown.vue.mjs";
import { useFormSize as Ja, useFormDisabled as Ka } from "../../form/src/hooks/use-form-props.mjs";
const Qa = Te({
  name: "TuRangePicker",
  inheritAttrs: !1
}), ft = /* @__PURE__ */ Te({
  ...Qa,
  props: Ta,
  emits: Ha,
  setup(He, { emit: Ie }) {
    const q = He, d = Ie, k = ga(), { t: s } = Fa(), {
      mode: T,
      showTime: U,
      format: De,
      modelValue: Ee,
      defaultValue: we,
      popupVisible: Me,
      defaultPopupVisible: W,
      placeholder: G,
      timePickerProps: f,
      disabled: V,
      disabledDate: Re,
      disabledTime: Fe,
      pickerValue: Oe,
      defaultPickerValue: xe,
      valueFormat: Be,
      size: Le,
      error: $e,
      exchangeTime: ze,
      previewShortcut: se,
      showConfirmBtn: Ae
    } = ha(q);
    Ja();
    const ie = Ka(), Ne = n(
      () => (G == null ? void 0 : G.value) || {
        date: [
          s("tu.datepicker.rangePlaceholder.dateStart"),
          s("tu.datepicker.rangePlaceholder.dateEnd")
        ],
        month: [
          s("tu.datepicker.rangePlaceholder.monthStart"),
          s("tu.datepicker.rangePlaceholder.monthEnd")
        ],
        year: [
          s("tu.datepicker.rangePlaceholder.yearStart"),
          s("tu.datepicker.rangePlaceholder.yearEnd")
        ],
        week: [
          s("tu.datepicker.rangePlaceholder.weekStart"),
          s("tu.datepicker.rangePlaceholder.weekEnd")
        ],
        quarter: [
          s("tu.datepicker.rangePlaceholder.quarterStart"),
          s("tu.datepicker.rangePlaceholder.quarterEnd")
        ]
      }[T.value] || [
        s("tu.datepicker.rangePlaceholder.dateStart"),
        s("tu.datepicker.rangePlaceholder.dateEnd")
      ]
    ), {
      format: H,
      valueFormat: J,
      parseValueFormat: b
    } = Ba(
      m({
        mode: T,
        format: De,
        showTime: U,
        valueFormat: Be
      })
    ), S = n(() => {
      const e = V.value === !0 || ie.value || N(V.value) && V.value[0] === !0, a = V.value === !0 || ie.value || N(V.value) && V.value[1] === !0;
      return [e, a];
    }), je = n(
      () => S.value[0] && S.value[1]
    ), de = (e = 0) => S.value[e] ? e ^ 1 : e, x = O(), l = O(de()), K = n(() => {
      const e = l.value, a = e ^ 1;
      return S.value[a] ? e : a;
    }), qe = n(
      () => S.value[l.value ^ 1]
    ), { value: I, setValue: Ue } = za(
      m({
        modelValue: Ee,
        defaultValue: we,
        format: b
      })
    ), [g, Q] = ue(), [We, D] = ue(), X = n(
      () => g.value ?? I.value
    ), r = n(
      () => We.value ?? g.value ?? I.value
    ), [Y, c] = ue(), v = O(), p = O(), [h, Ge] = Oa(
      W == null ? void 0 : W.value,
      m({ value: Me })
    ), Z = (e) => {
      h.value !== e && (Ge(e), d("popup-visible-change", e), d("update:popupVisible", e));
    }, {
      startHeaderValue: _,
      endHeaderValue: ee,
      startHeaderOperations: Je,
      endHeaderOperations: Ke,
      resetHeaderValue: B,
      setHeaderValue: ce
    } = Aa(
      m({
        mode: T,
        startHeaderMode: v,
        endHeaderMode: p,
        value: Oe,
        defaultValue: xe,
        selectedValue: r,
        format: b,
        onChange: (e) => {
          const a = ne(e, J.value), t = j(
            e,
            b.value
          ), o = le(e);
          d("picker-value-change", a, o, t), d("update:pickerValue", a);
        }
      })
    ), Qe = (e) => {
      v.value = e;
    }, Xe = (e) => {
      p.value = e;
    }, Ye = (e) => {
      let a = _.value;
      a = a.set("year", e.year()), v.value === "month" && (a = a.set("month", e.month())), ce([a, ee.value]), v.value = void 0;
    }, Ze = (e) => {
      let a = ee.value;
      a = a.set("year", e.year()), p.value === "month" && (a = a.set("month", e.month())), ce([_.value, a]), p.value = void 0;
    }, E = O([
      r.value[0] || re(),
      r.value[1] || re()
    ]);
    te(r, () => {
      const [e, a] = r.value;
      E.value[0] = e || E.value[0], E.value[1] = a || E.value[1];
    });
    const [w, _e, ea] = Na(
      m({
        timePickerProps: f,
        selectedValue: r
      })
    ), ve = n(() => T.value === "date" && U.value), pe = n(() => ve.value || (f == null ? void 0 : f.value)), M = La(
      m({
        mode: T,
        isRange: !0,
        showTime: U,
        disabledDate: Re,
        disabledTime: Fe
      })
    ), L = n(() => ve.value || Ae.value), aa = n(
      () => L.value && (!P(X.value) || M(X.value[0], "start") || M(X.value[1], "end"))
    );
    te(h, (e) => {
      v.value = void 0, p.value = void 0, Q(void 0), D(void 0), e && (B(), ea(), l.value = de(l.value), Pa(() => ge(l.value))), e || c(void 0);
    }), te(l, () => {
      q.disabledInput && (ge(l.value), c(void 0));
    });
    const ta = (e, a) => {
      const t = e ? ne(e, J.value) : void 0, o = j(e, b.value), u = le(e);
      Ma(e, I.value) && (d("update:modelValue", t), d("change", t, u, o)), a && d("ok", t, u, o);
    }, me = (e) => {
      let a = Ra(e);
      return pe.value && !ze.value && (a = [
        F(a[0], e[0]),
        F(a[1], e[1])
      ]), a;
    }, R = (e, a, t) => {
      if (M(e == null ? void 0 : e[0], "start") || M(e == null ? void 0 : e[1], "end"))
        return;
      let o = e ? [...e] : void 0;
      P(o) && (o = me(o)), ta(o, t), Ue(o || []), Q(void 0), D(void 0), c(void 0), v.value = void 0, p.value = void 0, wa(a) && Z(a);
    }, fe = (e) => {
      const a = ne(e, J.value), t = j(e, b.value), o = le(e);
      d("select", a, o, t);
    }, ae = (e, a) => {
      const { emitSelect: t = !1, updateHeader: o = !1 } = a || {};
      let u = [...e];
      P(u) && (u = me(u)), Q(u), D(void 0), c(void 0), v.value = void 0, p.value = void 0, t && fe(u), o && B();
    }, Ve = (e, a) => {
      const { updateHeader: t = !1 } = a || {};
      D(e), c(void 0), t && B();
    }, ge = (e) => {
      x.value && x.value.focus && x.value.focus(e);
    }, F = (e, a) => pe.value ? qa(re(), e, a) : e, oa = (e) => {
      Z(e);
    }, la = (e) => {
      if (g.value && r.value[K.value] && (!L.value || !P(g.value))) {
        const a = [...r.value], t = F(
          e,
          w.value[l.value]
        );
        a[l.value] = t, Ve(a);
      }
    }, he = (e = !1) => qe.value ? [...I.value] : g.value ? e || !P(g.value) ? [...g.value] : [] : e ? [...I.value] : [], ra = (e) => {
      const a = he(), t = F(
        e,
        w.value[l.value]
      );
      a[l.value] = t, fe(a), !L.value && P(a) ? R(a, !1) : (ae(a), P(a) ? l.value = 0 : l.value = K.value);
    }, ua = (e, a) => {
      const t = a === "start" ? 0 : 1, o = F(
        w.value[t],
        e
      ), u = [...w.value];
      u[t] = o, _e(u);
      const C = he(!0);
      C[t] && (C[t] = o, ae(C, { emitSelect: !0 }));
    };
    let $;
    ka(() => {
      clearTimeout($);
    });
    const na = (e) => {
      clearTimeout($), Ve(e, { updateHeader: !0 });
    }, sa = () => {
      clearTimeout($), $ = setTimeout(() => {
        D(void 0), c(void 0), B();
      }, 100);
    }, ia = (e, a) => {
      d("select-shortcut", a), R(e, !1);
    }, da = () => {
      R(r.value, !1, !0);
    }, ca = (e) => {
      e.stopPropagation(), R(void 0), d("clear");
    }, va = (e) => {
      Z(!0);
      const a = e.target.value;
      if (!a) {
        c(void 0);
        return;
      }
      const t = j(
        r.value,
        H.value
      ), o = N(Y.value) ? [...Y.value] : t || [];
      if (o[l.value] = a, c(o), !$a(a, H.value))
        return;
      const u = Ea(a, H.value);
      if (M(u, l.value === 0 ? "start" : "end"))
        return;
      const C = N(r.value) ? [...r.value] : [];
      C[l.value] = u, ae(C, { updateHeader: !0 });
    }, pa = () => {
      ja(r.value) ? R(r.value, !1) : l.value = K.value;
    }, ma = n(() => ({
      format: H.value,
      ...Ia((f == null ? void 0 : f.value) || {}, ["defaultValue"]),
      visible: h.value
    })), Pe = n(() => ({
      prev: k["icon-prev"],
      prevDouble: k["icon-prev-double"],
      next: k["icon-next"],
      nextDouble: k["icon-next-double"]
    })), fa = m({
      headerValue: _,
      headerOperations: Je,
      headerIcons: Pe
    }), Va = m({
      headerValue: ee,
      headerOperations: Ke,
      headerIcons: Pe
    }), ke = n(() => ({
      ...Da(q, [
        "mode",
        "showTime",
        "shortcuts",
        "shortcutsPosition",
        "dayStartOfWeek",
        "disabledDate",
        "disabledTime",
        "hideTrigger",
        "abbreviation"
      ]),
      format: b.value,
      value: r.value,
      showConfirmBtn: L.value,
      confirmBtnDisabled: aa.value,
      timePickerValue: w.value,
      timePickerProps: ma.value,
      extra: k.extra,
      dateRender: k.cell,
      startHeaderProps: fa,
      endHeaderProps: Va,
      footerValue: E.value,
      disabled: S.value,
      visible: h.value,
      onCellClick: ra,
      onCellMouseEnter: la,
      onShortcutClick: ia,
      onShortcutMouseEnter: se.value ? na : void 0,
      onShortcutMouseLeave: se.value ? sa : void 0,
      onConfirm: da,
      onTimePickerSelect: ua,
      startHeaderMode: v.value,
      endHeaderMode: p.value,
      onStartHeaderLabelClick: Qe,
      onEndHeaderLabelClick: Xe,
      onStartHeaderSelect: Ye,
      onEndHeaderSelect: Ze
    }));
    return (e, a) => e.hideTrigger ? (be(), Se(ye, Ce(oe({ key: 1 }, { ...e.$attrs, ...ke.value })), null, 16)) : (be(), Se(i(Wa), oe({ key: 0 }, e.triggerProps, {
      trigger: "click",
      "animation-name": "slide-dynamic-origin",
      "auto-fit-transform-origin": "",
      "click-to-close": !1,
      "popup-offset": 10,
      "unmount-on-close": e.unmountOnClose,
      position: e.position,
      disabled: je.value || e.readonly,
      "popup-visible": i(h),
      "popup-container": e.popupContainer,
      onPopupVisibleChange: oa
    }), {
      content: y(() => [
        z(ye, Ce(ba(ke.value)), null, 16)
      ]),
      default: y(() => [
        A(e.$slots, "default", {}, () => [
          z(i(Ua), oe({
            ref_key: "refInput",
            ref: x
          }, e.$attrs, {
            focusedIndex: l.value,
            "onUpdate:focusedIndex": a[0] || (a[0] = (t) => l.value = t),
            size: i(Le),
            focused: i(h),
            visible: i(h),
            error: i($e),
            disabled: i(V),
            readonly: e.readonly || e.disabledInput,
            "allow-clear": e.allowClear && !e.readonly,
            placeholder: Ne.value,
            "input-value": i(Y),
            value: r.value,
            format: i(H),
            onClear: ca,
            onChange: va,
            onPressEnter: pa
          }), Sa({
            "suffix-icon": y(() => [
              A(e.$slots, "suffix-icon", {}, () => [
                z(i(Ga), null, {
                  default: y(() => [
                    z(i(xa))
                  ]),
                  _: 1
                })
              ])
            ]),
            separator: y(() => [
              A(e.$slots, "separator", {}, () => [
                Ca(ya(e.separator || "-"), 1)
              ])
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: y(() => [
                A(e.$slots, "prefix")
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["focusedIndex", "size", "focused", "visible", "error", "disabled", "readonly", "allow-clear", "placeholder", "input-value", "value", "format"])
        ])
      ]),
      _: 3
    }, 16, ["unmount-on-close", "position", "disabled", "popup-visible", "popup-container"]));
  }
});
export {
  ft as default
};
