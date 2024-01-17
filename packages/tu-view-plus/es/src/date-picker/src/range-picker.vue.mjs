import { defineComponent as He, useSlots as ga, toRefs as ha, computed as n, reactive as m, ref as O, watch as te, nextTick as Pa, onUnmounted as ka, openBlock as Se, createBlock as Ce, unref as i, mergeProps as oe, withCtx as y, createVNode as z, normalizeProps as ye, guardReactiveProps as ba, renderSlot as A, createSlots as Sa, createTextVNode as Ca, toDisplayString as ya } from "vue";
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
import Te from "./range-picker-dropdown.vue.mjs";
import { useFormSize as Ja, useFormDisabled as Ka } from "../../form/src/hooks/use-form-props.mjs";
const Qa = He({
  name: "TuRangePicker",
  inheritAttrs: !1
}), Vt = /* @__PURE__ */ He({
  ...Qa,
  props: Ta,
  emits: Ha,
  setup(Ie, { emit: De }) {
    const q = Ie, d = De, k = ga(), { t: s } = Fa(), {
      mode: T,
      showTime: U,
      format: Ee,
      modelValue: we,
      defaultValue: Me,
      popupVisible: Re,
      defaultPopupVisible: W,
      placeholder: G,
      timePickerProps: f,
      disabled: b,
      disabledDate: Fe,
      disabledTime: Oe,
      pickerValue: xe,
      defaultPickerValue: Be,
      valueFormat: Le,
      size: Xa,
      error: $e,
      exchangeTime: ze,
      previewShortcut: se,
      showConfirmBtn: Ae
    } = ha(q), ie = Ja(), de = Ka(), Ne = n(
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
      parseValueFormat: S
    } = Ba(
      m({
        mode: T,
        format: Ee,
        showTime: U,
        valueFormat: Le
      })
    ), V = n(() => {
      const e = b.value === !0 || de.value === !0 || N(b.value) && b.value[0] === !0, a = b.value === !0 || de.value === !0 || N(b.value) && b.value[1] === !0;
      return [e, a];
    }), je = n(
      () => !!(V.value[0] && V.value[1])
    ), ce = (e = 0) => V.value[e] ? e ^ 1 : e, x = O(), l = O(ce()), K = n(() => {
      const e = l.value, a = e ^ 1;
      return V.value[a] ? e : a;
    }), qe = n(
      () => V.value[l.value ^ 1]
    ), { value: I, setValue: Ue } = za(
      m({
        modelValue: we,
        defaultValue: Me,
        format: S
      })
    ), [g, Q] = ue(), [We, D] = ue(), X = n(
      () => g.value ?? I.value
    ), r = n(
      () => We.value ?? g.value ?? I.value
    ), [Y, c] = ue(), v = O(), p = O(), [h, Ge] = Oa(
      W == null ? void 0 : W.value,
      m({ value: Re })
    ), Z = (e) => {
      h.value !== e && (Ge(e), d("popup-visible-change", e), d("update:popupVisible", e));
    }, {
      startHeaderValue: _,
      endHeaderValue: ee,
      startHeaderOperations: Je,
      endHeaderOperations: Ke,
      resetHeaderValue: B,
      setHeaderValue: ve
    } = Aa(
      m({
        mode: T,
        startHeaderMode: v,
        endHeaderMode: p,
        value: xe,
        defaultValue: Be,
        selectedValue: r,
        format: S,
        onChange: (e) => {
          const a = ne(e, J.value), t = j(
            e,
            S.value
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
      a = a.set("year", e.year()), v.value === "month" && (a = a.set("month", e.month())), ve([a, ee.value]), v.value = void 0;
    }, Ze = (e) => {
      let a = ee.value;
      a = a.set("year", e.year()), p.value === "month" && (a = a.set("month", e.month())), ve([_.value, a]), p.value = void 0;
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
    ), pe = n(() => T.value === "date" && U.value), me = n(() => pe.value || (f == null ? void 0 : f.value)), M = La(
      m({
        mode: T,
        isRange: !0,
        showTime: U,
        disabledDate: Fe,
        disabledTime: Oe
      })
    ), L = n(() => pe.value || Ae.value), aa = n(
      () => L.value && (!P(X.value) || M(X.value[0], "start") || M(X.value[1], "end"))
    );
    te(h, (e) => {
      v.value = void 0, p.value = void 0, Q(void 0), D(void 0), e && (B(), ea(), l.value = ce(l.value), Pa(() => he(l.value))), e || c(void 0);
    }), te(l, () => {
      q.disabledInput && (he(l.value), c(void 0));
    });
    const ta = (e, a) => {
      const t = e ? ne(e, J.value) : void 0, o = j(e, S.value), u = le(e);
      Ma(e, I.value) && (d("update:modelValue", t), d("change", t, u, o)), a && d("ok", t, u, o);
    }, fe = (e) => {
      let a = Ra(e);
      return me.value && !ze.value && (a = [
        F(a[0], e[0]),
        F(a[1], e[1])
      ]), a;
    }, R = (e, a, t) => {
      if (M(e == null ? void 0 : e[0], "start") || M(e == null ? void 0 : e[1], "end"))
        return;
      let o = e ? [...e] : void 0;
      P(o) && (o = fe(o)), ta(o, t), Ue(o || []), Q(void 0), D(void 0), c(void 0), v.value = void 0, p.value = void 0, wa(a) && Z(a);
    }, Ve = (e) => {
      const a = ne(e, J.value), t = j(e, S.value), o = le(e);
      d("select", a, o, t);
    }, ae = (e, a) => {
      const { emitSelect: t = !1, updateHeader: o = !1 } = a || {};
      let u = [...e];
      P(u) && (u = fe(u)), Q(u), D(void 0), c(void 0), v.value = void 0, p.value = void 0, t && Ve(u), o && B();
    }, ge = (e, a) => {
      const { updateHeader: t = !1 } = a || {};
      D(e), c(void 0), t && B();
    }, he = (e) => {
      x.value && x.value.focus && x.value.focus(e);
    }, F = (e, a) => me.value ? qa(re(), e, a) : e, oa = (e) => {
      Z(e);
    }, la = (e) => {
      if (g.value && r.value[K.value] && (!L.value || !P(g.value))) {
        const a = [...r.value], t = F(
          e,
          w.value[l.value]
        );
        a[l.value] = t, ge(a);
      }
    }, Pe = (e = !1) => qe.value ? [...I.value] : g.value ? e || !P(g.value) ? [...g.value] : [] : e ? [...I.value] : [], ra = (e) => {
      const a = Pe(), t = F(
        e,
        w.value[l.value]
      );
      a[l.value] = t, Ve(a), !L.value && P(a) ? R(a, !1) : (ae(a), P(a) ? l.value = 0 : l.value = K.value);
    }, ua = (e, a) => {
      const t = a === "start" ? 0 : 1, o = F(
        w.value[t],
        e
      ), u = [...w.value];
      u[t] = o, _e(u);
      const C = Pe(!0);
      C[t] && (C[t] = o, ae(C, { emitSelect: !0 }));
    };
    let $;
    ka(() => {
      clearTimeout($);
    });
    const na = (e) => {
      clearTimeout($), ge(e, { updateHeader: !0 });
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
    })), ke = n(() => ({
      prev: k["icon-prev"],
      prevDouble: k["icon-prev-double"],
      next: k["icon-next"],
      nextDouble: k["icon-next-double"]
    })), fa = m({
      headerValue: _,
      headerOperations: Je,
      headerIcons: ke
    }), Va = m({
      headerValue: ee,
      headerOperations: Ke,
      headerIcons: ke
    }), be = n(() => ({
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
      size: ie.value,
      format: S.value,
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
      disabled: V.value,
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
    return (e, a) => e.hideTrigger ? (Se(), Ce(Te, ye(oe({ key: 1 }, { ...e.$attrs, ...be.value })), null, 16)) : (Se(), Ce(i(Wa), oe({ key: 0 }, e.triggerProps, {
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
        z(Te, ye(ba(be.value)), null, 16)
      ]),
      default: y(() => [
        A(e.$slots, "default", {}, () => [
          z(i(Ua), oe({
            ref_key: "refInput",
            ref: x
          }, e.$attrs, {
            focusedIndex: l.value,
            "onUpdate:focusedIndex": a[0] || (a[0] = (t) => l.value = t),
            size: i(ie),
            focused: i(h),
            visible: i(h),
            error: i($e),
            disabled: V.value,
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
  Vt as default
};
