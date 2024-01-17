import { defineComponent as A, toRefs as X, useSlots as Y, ref as S, computed as u, resolveComponent as Z, openBlock as P, createElementBlock as $, normalizeClass as l, unref as r, renderSlot as w, createCommentVNode as z, createElementVNode as i, mergeProps as K, withKeys as v, createTextVNode as x, createBlock as ee, withCtx as R, createVNode as T } from "vue";
import { rangePickerProps as se, rangePickerEmits as ae } from "./range-picker.mjs";
import { useNamespace as te } from "@tu-view-plus/hooks";
import { isArray as j, isBoolean as oe, isDayjs as re, isFunction as le, isNumber as ne, isUndefined as ue } from "@tu-view-plus/utils";
import { Close as ie } from "@tu-view-plus/icons-vue";
import "../../form/index.mjs";
import "../style/range-picker.css";
import { useFormDisabled as ce, useFormSize as pe } from "../../form/src/hooks/use-form-props.mjs";
const de = ["disabled", "placeholder", "value"], ve = ["disabled", "placeholder", "value"], me = A({
  name: "TuRangePicker"
}), De = /* @__PURE__ */ A({
  ...me,
  props: se,
  emits: ae,
  setup(U, { expose: W, emit: q }) {
    const G = U, c = q, { focused: m, disabled: p, value: f, format: b, focusedIndex: t, inputValue: n } = X(G), s = te("range-picker"), H = Y(), d = ce(), N = pe(), g = S(), h = S(), k = u(() => C(0)), y = u(() => C(1)), J = u(() => D(0)), L = u(() => D(1)), M = u(() => j(p) ? d : k || y), O = u(() => ({
      [s.b()]: !0,
      [s.m(N.value)]: N.value,
      [s.is("focused")]: m == null ? void 0 : m.value,
      [s.is("disabled")]: k.value && y.value,
      [s.is("has-prefix")]: H.prefix
    })), C = (e) => oe(d.value) && d.value ? d.value : j(p.value) ? p.value[e] : p.value, D = (e) => {
      var o, F;
      if (n != null && n.value)
        return (o = n == null ? void 0 : n.value) == null ? void 0 : o[e];
      const a = (F = f == null ? void 0 : f.value) == null ? void 0 : F[e];
      if (a && re(a))
        return le(b.value) ? b.value(a) : a.format(b.value);
    }, E = (e) => {
      c("focused-index-change", e), c("update:focusedIndex", e);
    }, _ = (e) => ({
      [s.e("input-wrap")]: !0,
      [s.is("active")]: e === (t == null ? void 0 : t.value)
    }), I = (e) => {
      e.stopPropagation(), c("change", e);
    }, V = () => {
      c("press-enter");
    }, B = (e) => {
      e.preventDefault();
    }, Q = (e) => {
      c("clear", e);
    };
    return W({ focus: (e) => {
      const a = ne(e) ? e : t == null ? void 0 : t.value, o = a === 0 ? g.value : h.value;
      !ue(a) && !C(a) && o && o.focus && o.focus();
    }, blur: () => {
      const e = (t == null ? void 0 : t.value) === 0 ? g.value : h.value;
      e && e.blur && e.blur();
    } }), (e, a) => {
      const o = Z("tu-icon");
      return P(), $("div", {
        class: l(O.value)
      }, [
        e.$slots.prefix ? (P(), $("div", {
          key: 0,
          class: l(r(s).e("prefix"))
        }, [
          w(e.$slots, "perfix")
        ], 2)) : z("", !0),
        i("div", {
          class: l(_(0))
        }, [
          i("input", K({
            ref_key: "refInput0",
            ref: g,
            class: r(s).e("input"),
            disabled: k.value,
            placeholder: e.placeholder[0],
            value: J.value
          }, e.readonly ? { readonly: !0 } : {}, {
            onInput: I,
            onKeydown: [
              v(V, ["enter"]),
              v(B, ["tab"])
            ],
            onClick: a[0] || (a[0] = () => E(0))
          }), null, 16, de)
        ], 2),
        i("span", {
          class: l(r(s).e("separator"))
        }, [
          w(e.$slots, "separator", {}, () => [
            x("~")
          ])
        ], 2),
        i("div", {
          class: l(_(1))
        }, [
          i("input", K({
            ref_key: "refInput1",
            ref: h,
            class: r(s).e("input"),
            disabled: y.value,
            placeholder: e.placeholder[1],
            value: L.value
          }, e.readonly ? { readonly: !0 } : {}, {
            onInput: I,
            onKeydown: [
              v(V, ["enter"]),
              v(B, ["tab"])
            ],
            onClick: a[1] || (a[1] = () => E(1))
          }), null, 16, ve)
        ], 2),
        i("div", {
          class: l(r(s).e("suffix"))
        }, [
          e.allowClear && M.value ? (P(), ee(o, {
            key: 0,
            class: l([r(s).e("icon"), r(s).em("icon", "clear")]),
            onClick: Q
          }, {
            default: R(() => [
              T(r(ie))
            ]),
            _: 1
          }, 8, ["class"])) : z("", !0),
          T(o, {
            class: l(r(s).e("icon"))
          }, {
            default: R(() => [
              w(e.$slots, "suffix-icon")
            ]),
            _: 3
          }, 8, ["class"])
        ], 2)
      ], 2);
    };
  }
});
export {
  De as default
};
