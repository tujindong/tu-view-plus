import { defineComponent as j, toRefs as O, useSlots as Q, ref as S, computed as c, resolveComponent as X, openBlock as y, createElementBlock as $, normalizeClass as r, unref as t, renderSlot as C, createCommentVNode as z, createElementVNode as u, mergeProps as K, withKeys as m, createTextVNode as Y, createBlock as Z, withCtx as R, createVNode as T } from "vue";
import { rangePickerProps as x, rangePickerEmits as ee } from "./range-picker.mjs";
import { useNamespace as se } from "@tu-view-plus/hooks";
import { isBoolean as ae, isArray as te, isDayjs as le, isFunction as oe, isNumber as re, isUndefined as ne } from "@tu-view-plus/utils";
import { Close as ue } from "@tu-view-plus/icons-vue";
import "../../form/index.mjs";
import "../style/range-picker.css";
import { useFormDisabled as ie, useFormSize as ce } from "../../form/src/hooks/use-form-props.mjs";
const pe = ["disabled", "placeholder", "value"], de = ["disabled", "placeholder", "value"], me = j({
  name: "TuRangePicker"
}), we = /* @__PURE__ */ j({
  ...me,
  props: x,
  emits: ee,
  setup(A, { expose: U, emit: W }) {
    const q = A, i = W, { focused: v, disabled: f, value: p, format: g, focusedIndex: l, inputValue: n } = O(q), s = se("range-picker"), G = Q(), d = ie(), P = ce(), b = S(), h = S(), N = c(() => k(0)), w = c(() => k(1)), H = c(() => D(0)), J = c(() => D(1)), L = c(() => ({
      [s.b()]: !0,
      [s.m(P.value)]: P.value,
      [s.is("focused")]: v == null ? void 0 : v.value,
      [s.is("disabled")]: N.value && w.value,
      [s.is("has-prefix")]: G.prefix
    })), k = (e) => ae(d.value) && d.value ? d.value : te(f.value) ? f.value[e] : f.value, D = (e) => {
      var o, F;
      if (n != null && n.value)
        return (o = n == null ? void 0 : n.value) == null ? void 0 : o[e];
      const a = (F = p == null ? void 0 : p.value) == null ? void 0 : F[e];
      if (a && le(a))
        return oe(g.value) ? g.value(a) : a.format(g.value);
    }, E = (e) => {
      i("focused-index-change", e), i("update:focusedIndex", e);
    }, _ = (e) => ({
      [s.e("input-wrap")]: !0,
      [s.is("active")]: e === (l == null ? void 0 : l.value)
    }), I = (e) => {
      e.stopPropagation(), i("change", e);
    }, V = () => {
      i("press-enter");
    }, B = (e) => {
      e.preventDefault();
    }, M = (e) => {
      i("clear", e);
    };
    return U({ focus: (e) => {
      const a = re(e) ? e : l == null ? void 0 : l.value, o = a === 0 ? b.value : h.value;
      !ne(a) && !k(a) && o && o.focus && o.focus();
    }, blur: () => {
      const e = (l == null ? void 0 : l.value) === 0 ? b.value : h.value;
      e && e.blur && e.blur();
    } }), (e, a) => {
      const o = X("tu-icon");
      return y(), $("div", {
        class: r(L.value)
      }, [
        e.$slots.prefix ? (y(), $("div", {
          key: 0,
          class: r(t(s).e("prefix"))
        }, [
          C(e.$slots, "perfix")
        ], 2)) : z("", !0),
        u("div", {
          class: r(_(0))
        }, [
          u("input", K({
            ref_key: "refInput0",
            ref: b,
            class: t(s).e("input"),
            disabled: N.value,
            placeholder: e.placeholder[0],
            value: H.value
          }, e.readonly ? { readonly: !0 } : {}, {
            onInput: I,
            onKeydown: [
              m(V, ["enter"]),
              m(B, ["tab"])
            ],
            onClick: a[0] || (a[0] = () => E(0))
          }), null, 16, pe)
        ], 2),
        u("span", {
          class: r(t(s).e("separator"))
        }, [
          C(e.$slots, "separator", {}, () => [
            Y("~")
          ])
        ], 2),
        u("div", {
          class: r(_(1))
        }, [
          u("input", K({
            ref_key: "refInput1",
            ref: h,
            class: t(s).e("input"),
            disabled: w.value,
            placeholder: e.placeholder[1],
            value: J.value
          }, e.readonly ? { readonly: !0 } : {}, {
            onInput: I,
            onKeydown: [
              m(V, ["enter"]),
              m(B, ["tab"])
            ],
            onClick: a[1] || (a[1] = () => E(1))
          }), null, 16, de)
        ], 2),
        u("div", {
          class: r(t(s).e("suffix"))
        }, [
          e.allowClear && !t(d) && t(p).length === 2 ? (y(), Z(o, {
            key: 0,
            class: r([t(s).e("icon"), t(s).em("icon", "clear")]),
            onClick: M
          }, {
            default: R(() => [
              T(t(ue))
            ]),
            _: 1
          }, 8, ["class"])) : z("", !0),
          T(o, {
            class: r(t(s).e("icon"))
          }, {
            default: R(() => [
              C(e.$slots, "suffix-icon")
            ]),
            _: 3
          }, 8, ["class"])
        ], 2)
      ], 2);
    };
  }
});
export {
  we as default
};
