import { defineComponent as Te, useSlots as Va, toRefs as ga, computed as n, reactive as p, ref as O, watch as oe, nextTick as ha, onUnmounted as Pa, openBlock as be, createBlock as Se, unref as i, mergeProps as le, withCtx as y, createVNode as z, normalizeProps as Ce, guardReactiveProps as ka, renderSlot as A, createSlots as ba, createTextVNode as Sa, toDisplayString as Ca } from "vue";
import { rangePickerProps as ya, rangePickerEmits as Ta } from "./range-picker.mjs";
import "../../form/index.mjs";
import { isArray as N, getDateValue as re, getNow as ue, omit as Ha, pick as Ia, dayjs as Ea, isBoolean as wa, isValueChange as Da, getSortedDayjsArray as Ma } from "@tu-view-plus/utils";
import { useLocale as Ra, useState as ne, useMergeState as Fa } from "@tu-view-plus/hooks";
import { Calendar as Oa } from "@tu-view-plus/icons-vue";
import { useFormat as xa } from "./hooks/use-format.mjs";
import { useIsDisabledDate as $a } from "./hooks/use-is-disabled-date.mjs";
import { getReturnRangeValue as ie } from "./hooks/use-value-format.mjs";
import { getFormattedValue as j, isValidInputValue as Ba } from "../../time-picker/src/utils.mjs";
import { useRangePickerState as La } from "./hooks/use-range-picker-state.mjs";
import { useRangeHeaderValue as za } from "./hooks/use-range-header-value.mjs";
import { useRangeTimePickerValue as Aa } from "./hooks/use-range-time-picker-value.mjs";
import { isCompleteRangeValue as P, isValidRangeValue as Na, mergeValueWithTime as ja } from "./utils.mjs";
import { TuRangePicker as qa } from "../../range-picker/index.mjs";
import { TuTrigger as Ua } from "../../trigger/index.mjs";
import { TuIcon as Wa } from "../../icon/index.mjs";
import ye from "./range-picker-dropdown.vue.mjs";
import { useFormSize as Ga, useFormDisabled as Ja } from "../../form/src/hooks/use-form-props.mjs";
const Ka = Te({
  name: "TuRangePicker",
  inheritAttrs: !1
}), pt = /* @__PURE__ */ Te({
  ...Ka,
  props: ya,
  emits: Ta,
  setup(He, { emit: Ie }) {
    const q = He, d = Ie, k = Va(), { t: s } = Ra(), {
      mode: T,
      showTime: U,
      format: Ee,
      modelValue: we,
      defaultValue: De,
      popupVisible: Me,
      defaultPopupVisible: W,
      placeholder: G,
      timePickerProps: m,
      disabled: V,
      disabledDate: Re,
      disabledTime: Fe,
      pickerValue: Oe,
      defaultPickerValue: xe,
      valueFormat: $e,
      size: Be,
      error: Le,
      exchangeTime: ze,
      previewShortcut: se,
      showConfirmBtn: Ae
    } = ga(q);
    Ga();
    const J = Ja(), Ne = n(
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
    } = xa(
      p({
        mode: T,
        format: Ee,
        showTime: U,
        valueFormat: $e
      })
    ), S = n(() => {
      const e = V.value === !0 || J.value || N(V.value) && V.value[0] === !0, a = V.value === !0 || J.value || N(V.value) && V.value[1] === !0;
      return [e, a];
    });
    n(
      () => S.value[0] && S.value[1]
    );
    function de(e = 0) {
      return S.value[e] ? e ^ 1 : e;
    }
    const x = O(), l = O(de()), Q = n(() => {
      const e = l.value, a = e ^ 1;
      return S.value[a] ? e : a;
    }), je = n(
      () => S.value[l.value ^ 1]
    ), { value: I, setValue: qe } = La(
      p({
        modelValue: we,
        defaultValue: De,
        format: b
      })
    ), [g, X] = ne(), [Ue, E] = ne(), Y = n(
      () => g.value ?? I.value
    ), r = n(
      () => Ue.value ?? g.value ?? I.value
    ), [Z, c] = ne(), v = O(), f = O(), [h, We] = Fa(
      W == null ? void 0 : W.value,
      p({ value: Me })
    ), _ = (e) => {
      h.value !== e && (We(e), d("popup-visible-change", e), d("update:popupVisible", e));
    }, {
      startHeaderValue: ee,
      endHeaderValue: ae,
      startHeaderOperations: Ge,
      endHeaderOperations: Je,
      resetHeaderValue: $,
      setHeaderValue: ce
    } = za(
      p({
        mode: T,
        startHeaderMode: v,
        endHeaderMode: f,
        value: Oe,
        defaultValue: xe,
        selectedValue: r,
        format: b,
        onChange: (e) => {
          const a = ie(e, K.value), t = j(
            e,
            b.value
          ), o = re(e);
          d("picker-value-change", a, o, t), d("update:pickerValue", a);
        }
      })
    );
    function Ke(e) {
      v.value = e;
    }
    function Qe(e) {
      f.value = e;
    }
    function Xe(e) {
      let a = ee.value;
      a = a.set("year", e.year()), v.value === "month" && (a = a.set("month", e.month())), ce([a, ae.value]), v.value = void 0;
    }
    function Ye(e) {
      let a = ae.value;
      a = a.set("year", e.year()), f.value === "month" && (a = a.set("month", e.month())), ce([ee.value, a]), f.value = void 0;
    }
    const w = O([
      r.value[0] || ue(),
      r.value[1] || ue()
    ]);
    oe(r, () => {
      const [e, a] = r.value;
      w.value[0] = e || w.value[0], w.value[1] = a || w.value[1];
    });
    const [D, Ze, _e] = Aa(
      p({
        timePickerProps: m,
        selectedValue: r
      })
    ), ve = n(() => T.value === "date" && U.value), fe = n(() => ve.value || (m == null ? void 0 : m.value)), M = $a(
      p({
        mode: T,
        isRange: !0,
        showTime: U,
        disabledDate: Re,
        disabledTime: Fe
      })
    ), B = n(() => ve.value || Ae.value), ea = n(
      () => B.value && (!P(Y.value) || M(Y.value[0], "start") || M(Y.value[1], "end"))
    );
    oe(h, (e) => {
      v.value = void 0, f.value = void 0, X(void 0), E(void 0), e && ($(), _e(), l.value = de(l.value), ha(() => ge(l.value))), e || c(void 0);
    }), oe(l, () => {
      q.disabledInput && (ge(l.value), c(void 0));
    });
    function aa(e, a) {
      const t = e ? ie(e, K.value) : void 0, o = j(e, b.value), u = re(e);
      Da(e, I.value) && (d("update:modelValue", t), d("change", t, u, o)), a && d("ok", t, u, o);
    }
    function pe(e) {
      let a = Ma(e);
      return fe.value && !ze.value && (a = [
        F(a[0], e[0]),
        F(a[1], e[1])
      ]), a;
    }
    function R(e, a, t) {
      if (M(e == null ? void 0 : e[0], "start") || M(e == null ? void 0 : e[1], "end"))
        return;
      let o = e ? [...e] : void 0;
      P(o) && (o = pe(o)), aa(o, t), qe(o || []), X(void 0), E(void 0), c(void 0), v.value = void 0, f.value = void 0, wa(a) && _(a);
    }
    function me(e) {
      const a = ie(e, K.value), t = j(e, b.value), o = re(e);
      d("select", a, o, t);
    }
    function te(e, a) {
      const { emitSelect: t = !1, updateHeader: o = !1 } = a || {};
      let u = [...e];
      P(u) && (u = pe(u)), X(u), E(void 0), c(void 0), v.value = void 0, f.value = void 0, t && me(u), o && $();
    }
    function Ve(e, a) {
      const { updateHeader: t = !1 } = a || {};
      E(e), c(void 0), t && $();
    }
    function ge(e) {
      x.value && x.value.focus && x.value.focus(e);
    }
    function F(e, a) {
      return fe.value ? ja(ue(), e, a) : e;
    }
    function ta(e) {
      _(e);
    }
    function oa(e) {
      if (g.value && r.value[Q.value] && (!B.value || !P(g.value))) {
        const a = [...r.value], t = F(
          e,
          D.value[l.value]
        );
        a[l.value] = t, Ve(a);
      }
    }
    function he(e = !1) {
      return je.value ? [...I.value] : g.value ? e || !P(g.value) ? [...g.value] : [] : e ? [...I.value] : [];
    }
    function la(e) {
      const a = he(), t = F(
        e,
        D.value[l.value]
      );
      a[l.value] = t, me(a), !B.value && P(a) ? R(a, !1) : (te(a), P(a) ? l.value = 0 : l.value = Q.value);
    }
    function ra(e, a) {
      const t = a === "start" ? 0 : 1, o = F(
        D.value[t],
        e
      ), u = [...D.value];
      u[t] = o, Ze(u);
      const C = he(!0);
      C[t] && (C[t] = o, te(C, { emitSelect: !0 }));
    }
    let L;
    Pa(() => {
      clearTimeout(L);
    });
    function ua(e) {
      clearTimeout(L), Ve(e, { updateHeader: !0 });
    }
    function na() {
      clearTimeout(L), L = setTimeout(() => {
        E(void 0), c(void 0), $();
      }, 100);
    }
    function ia(e, a) {
      d("select-shortcut", a), R(e, !1);
    }
    function sa() {
      R(r.value, !1, !0);
    }
    function da(e) {
      e.stopPropagation(), R(void 0), d("clear");
    }
    function ca(e) {
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
      if (o[l.value] = a, c(o), !Ba(a, H.value))
        return;
      const u = Ea(a, H.value);
      if (M(u, l.value === 0 ? "start" : "end"))
        return;
      const C = N(r.value) ? [...r.value] : [];
      C[l.value] = u, te(C, { updateHeader: !0 });
    }
    function va() {
      Na(r.value) ? R(r.value, !1) : l.value = Q.value;
    }
    const fa = n(() => ({
      format: H.value,
      ...Ha((m == null ? void 0 : m.value) || {}, ["defaultValue"]),
      visible: h.value
    })), Pe = n(() => ({
      prev: k["icon-prev"],
      prevDouble: k["icon-prev-double"],
      next: k["icon-next"],
      nextDouble: k["icon-next-double"]
    })), pa = p({
      headerValue: ee,
      headerOperations: Ge,
      headerIcons: Pe
    }), ma = p({
      headerValue: ae,
      headerOperations: Je,
      headerIcons: Pe
    }), ke = n(() => ({
      ...Ia(q, [
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
      showConfirmBtn: B.value,
      confirmBtnDisabled: ea.value,
      timePickerValue: D.value,
      timePickerProps: fa.value,
      extra: k.extra,
      dateRender: k.cell,
      startHeaderProps: pa,
      endHeaderProps: ma,
      footerValue: w.value,
      disabled: S.value,
      visible: h.value,
      onCellClick: la,
      onCellMouseEnter: oa,
      onShortcutClick: ia,
      onShortcutMouseEnter: se.value ? ua : void 0,
      onShortcutMouseLeave: se.value ? na : void 0,
      onConfirm: sa,
      onTimePickerSelect: ra,
      startHeaderMode: v.value,
      endHeaderMode: f.value,
      onStartHeaderLabelClick: Ke,
      onEndHeaderLabelClick: Qe,
      onStartHeaderSelect: Xe,
      onEndHeaderSelect: Ye
    }));
    return (e, a) => e.hideTrigger ? (be(), Se(ye, Ce(le({ key: 1 }, { ...e.$attrs, ...ke.value })), null, 16)) : (be(), Se(i(Ua), le({ key: 0 }, e.triggerProps, {
      trigger: "click",
      "animation-name": "slide-dynamic-origin",
      "auto-fit-transform-origin": "",
      "click-to-close": !1,
      "popup-offset": 4,
      "unmount-on-close": e.unmountOnClose,
      position: e.position,
      disabled: i(J) || e.readonly,
      "popup-visible": i(h),
      "popup-container": e.popupContainer,
      onPopupVisibleChange: ta
    }), {
      content: y(() => [
        z(ye, Ce(ka({ ...e.$attrs, ...ke.value })), null, 16)
      ]),
      default: y(() => [
        A(e.$slots, "default", {}, () => [
          z(i(qa), le({
            ref_key: "refInput",
            ref: x
          }, e.$attrs, {
            focusedIndex: l.value,
            "onUpdate:focusedIndex": a[0] || (a[0] = (t) => l.value = t),
            size: i(Be),
            focused: i(h),
            visible: i(h),
            error: i(Le),
            disabled: i(V),
            readonly: e.readonly || e.disabledInput,
            "allow-clear": e.allowClear && !e.readonly,
            placeholder: Ne.value,
            "input-value": i(Z),
            value: r.value,
            format: i(H),
            onClear: da,
            onChange: ca,
            onPressEnter: va
          }), ba({
            "suffix-icon": y(() => [
              A(e.$slots, "suffix-icon", {}, () => [
                z(i(Wa), null, {
                  default: y(() => [
                    z(i(Oa))
                  ]),
                  _: 1
                })
              ])
            ]),
            separator: y(() => [
              A(e.$slots, "separator", {}, () => [
                Sa(Ca(e.separator || "-"), 1)
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
  pt as default
};
