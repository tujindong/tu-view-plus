import { defineComponent as Te, useSlots as ga, toRefs as ha, computed as n, reactive as m, ref as O, watch as oe, nextTick as Pa, onUnmounted as ka, openBlock as be, createBlock as Se, unref as i, mergeProps as le, withCtx as y, createVNode as z, normalizeProps as Ce, guardReactiveProps as ba, renderSlot as A, createSlots as Sa, createTextVNode as Ca, toDisplayString as ya } from "vue";
import { rangePickerProps as Ta, rangePickerEmits as Ha } from "./range-picker.mjs";
import "../../form/index.mjs";
import { isArray as N, getDateValue as re, getNow as ue, omit as Ia, pick as Da, dayjs as Ea, isBoolean as wa, isValueChange as Ma, getSortedDayjsArray as Ra } from "@tu-view-plus/utils";
import { useLocale as Fa, useState as ne, useMergeState as Oa } from "@tu-view-plus/hooks";
import { Calendar as xa } from "@tu-view-plus/icons-vue";
import { useFormat as Ba } from "./hooks/use-format.mjs";
import { useIsDisabledDate as La } from "./hooks/use-is-disabled-date.mjs";
import { getReturnRangeValue as se } from "./hooks/use-value-format.mjs";
import { getFormattedValue as j, isValidInputValue as $a } from "../../time-picker/src/utils.mjs";
import { useRangePickerState as za } from "./hooks/use-range-picker-state.mjs";
import { useRangeHeaderValue as Aa } from "./hooks/use-range-header-value.mjs";
import { useRangeTimePickerValue as Na } from "./hooks/use-range-time-picker-value.mjs";
import { isCompleteRangeValue as h, isValidRangeValue as ja, mergeValueWithTime as qa } from "./utils.mjs";
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
    const q = He, d = Ie, P = ga(), { t: s } = Fa(), {
      mode: T,
      showTime: U,
      format: De,
      modelValue: Ee,
      defaultValue: we,
      popupVisible: Me,
      defaultPopupVisible: W,
      placeholder: G,
      timePickerProps: f,
      disabled: k,
      disabledDate: Re,
      disabledTime: Fe,
      pickerValue: Oe,
      defaultPickerValue: xe,
      valueFormat: Be,
      size: Le,
      error: $e,
      exchangeTime: ze,
      previewShortcut: ie,
      showConfirmBtn: Ae
    } = ha(q);
    Ja();
    const J = Ka(), Ne = n(
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
      valueFormat: K,
      parseValueFormat: b
    } = Ba(
      m({
        mode: T,
        format: De,
        showTime: U,
        valueFormat: Be
      })
    ), S = n(() => {
      const e = k.value === !0 || J.value === !0 || N(k.value) && k.value[0] === !0, a = k.value === !0 || J.value === !0 || N(k.value) && k.value[1] === !0;
      return [e, a];
    }), je = n(
      () => !!(S.value[0] && S.value[1])
    ), de = (e = 0) => S.value[e] ? e ^ 1 : e, x = O(), l = O(de()), Q = n(() => {
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
    ), [V, X] = ne(), [We, D] = ne(), Y = n(
      () => V.value ?? I.value
    ), r = n(
      () => We.value ?? V.value ?? I.value
    ), [Z, c] = ne(), v = O(), p = O(), [g, Ge] = Oa(
      W == null ? void 0 : W.value,
      m({ value: Me })
    ), _ = (e) => {
      g.value !== e && (Ge(e), d("popup-visible-change", e), d("update:popupVisible", e));
    }, {
      startHeaderValue: ee,
      endHeaderValue: ae,
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
          const a = se(e, K.value), t = j(
            e,
            b.value
          ), o = re(e);
          d("picker-value-change", a, o, t), d("update:pickerValue", a);
        }
      })
    ), Qe = (e) => {
      v.value = e;
    }, Xe = (e) => {
      p.value = e;
    }, Ye = (e) => {
      let a = ee.value;
      a = a.set("year", e.year()), v.value === "month" && (a = a.set("month", e.month())), ce([a, ae.value]), v.value = void 0;
    }, Ze = (e) => {
      let a = ae.value;
      a = a.set("year", e.year()), p.value === "month" && (a = a.set("month", e.month())), ce([ee.value, a]), p.value = void 0;
    }, E = O([
      r.value[0] || ue(),
      r.value[1] || ue()
    ]);
    oe(r, () => {
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
      () => L.value && (!h(Y.value) || M(Y.value[0], "start") || M(Y.value[1], "end"))
    );
    oe(g, (e) => {
      v.value = void 0, p.value = void 0, X(void 0), D(void 0), e && (B(), ea(), l.value = de(l.value), Pa(() => ge(l.value))), e || c(void 0);
    }), oe(l, () => {
      q.disabledInput && (ge(l.value), c(void 0));
    });
    const ta = (e, a) => {
      const t = e ? se(e, K.value) : void 0, o = j(e, b.value), u = re(e);
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
      h(o) && (o = me(o)), ta(o, t), Ue(o || []), X(void 0), D(void 0), c(void 0), v.value = void 0, p.value = void 0, wa(a) && _(a);
    }, fe = (e) => {
      const a = se(e, K.value), t = j(e, b.value), o = re(e);
      d("select", a, o, t);
    }, te = (e, a) => {
      const { emitSelect: t = !1, updateHeader: o = !1 } = a || {};
      let u = [...e];
      h(u) && (u = me(u)), X(u), D(void 0), c(void 0), v.value = void 0, p.value = void 0, t && fe(u), o && B();
    }, Ve = (e, a) => {
      const { updateHeader: t = !1 } = a || {};
      D(e), c(void 0), t && B();
    }, ge = (e) => {
      x.value && x.value.focus && x.value.focus(e);
    }, F = (e, a) => pe.value ? qa(ue(), e, a) : e, oa = (e) => {
      _(e);
    }, la = (e) => {
      if (V.value && r.value[Q.value] && (!L.value || !h(V.value))) {
        const a = [...r.value], t = F(
          e,
          w.value[l.value]
        );
        a[l.value] = t, Ve(a);
      }
    }, he = (e = !1) => qe.value ? [...I.value] : V.value ? e || !h(V.value) ? [...V.value] : [] : e ? [...I.value] : [], ra = (e) => {
      const a = he(), t = F(
        e,
        w.value[l.value]
      );
      a[l.value] = t, fe(a), !L.value && h(a) ? R(a, !1) : (te(a), h(a) ? l.value = 0 : l.value = Q.value);
    }, ua = (e, a) => {
      const t = a === "start" ? 0 : 1, o = F(
        w.value[t],
        e
      ), u = [...w.value];
      u[t] = o, _e(u);
      const C = he(!0);
      C[t] && (C[t] = o, te(C, { emitSelect: !0 }));
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
      _(!0);
      const a = e.target.value;
      if (!a) {
        c(void 0);
        return;
      }
      const t = j(
        r.value,
        H.value
      ), o = N(Z.value) ? [...Z.value] : t || [];
      if (o[l.value] = a, c(o), !$a(a, H.value))
        return;
      const u = Ea(a, H.value);
      if (M(u, l.value === 0 ? "start" : "end"))
        return;
      const C = N(r.value) ? [...r.value] : [];
      C[l.value] = u, te(C, { updateHeader: !0 });
    }, pa = () => {
      ja(r.value) ? R(r.value, !1) : l.value = Q.value;
    }, ma = n(() => ({
      format: H.value,
      ...Ia((f == null ? void 0 : f.value) || {}, ["defaultValue"]),
      visible: g.value
    })), Pe = n(() => ({
      prev: P["icon-prev"],
      prevDouble: P["icon-prev-double"],
      next: P["icon-next"],
      nextDouble: P["icon-next-double"]
    })), fa = m({
      headerValue: ee,
      headerOperations: Je,
      headerIcons: Pe
    }), Va = m({
      headerValue: ae,
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
      extra: P.extra,
      dateRender: P.cell,
      startHeaderProps: fa,
      endHeaderProps: Va,
      footerValue: E.value,
      disabled: S.value,
      visible: g.value,
      onCellClick: ra,
      onCellMouseEnter: la,
      onShortcutClick: ia,
      onShortcutMouseEnter: ie.value ? na : void 0,
      onShortcutMouseLeave: ie.value ? sa : void 0,
      onConfirm: da,
      onTimePickerSelect: ua,
      startHeaderMode: v.value,
      endHeaderMode: p.value,
      onStartHeaderLabelClick: Qe,
      onEndHeaderLabelClick: Xe,
      onStartHeaderSelect: Ye,
      onEndHeaderSelect: Ze
    }));
    return (e, a) => e.hideTrigger ? (be(), Se(ye, Ce(le({ key: 1 }, { ...e.$attrs, ...ke.value })), null, 16)) : (be(), Se(i(Wa), le({ key: 0 }, e.triggerProps, {
      trigger: "click",
      "animation-name": "slide-dynamic-origin",
      "auto-fit-transform-origin": "",
      "click-to-close": !1,
      "popup-offset": 10,
      "unmount-on-close": e.unmountOnClose,
      position: e.position,
      disabled: je.value || e.readonly,
      "popup-visible": i(g),
      "popup-container": e.popupContainer,
      onPopupVisibleChange: oa
    }), {
      content: y(() => [
        z(ye, Ce(ba(ke.value)), null, 16)
      ]),
      default: y(() => [
        A(e.$slots, "default", {}, () => [
          z(i(Ua), le({
            ref_key: "refInput",
            ref: x
          }, e.$attrs, {
            focusedIndex: l.value,
            "onUpdate:focusedIndex": a[0] || (a[0] = (t) => l.value = t),
            size: i(Le),
            focused: i(g),
            visible: i(g),
            error: i($e),
            disabled: i(J),
            readonly: e.readonly || e.disabledInput,
            "allow-clear": e.allowClear && !e.readonly,
            placeholder: Ne.value,
            "input-value": i(Z),
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
