import { defineComponent as R, toRefs as O, useSlots as Q, ref as F, computed as c, resolveComponent as X, openBlock as y, createElementBlock as S, normalizeClass as l, unref as t, renderSlot as C, createCommentVNode as $, createElementVNode as u, mergeProps as z, withKeys as m, createTextVNode as Y, createBlock as Z, withCtx as B, createVNode as K } from "vue";
import { rangePickerProps as x, rangePickerEmits as ee } from "./range-picker.mjs";
import { useNamespace as se } from "@tu-view-plus/hooks";
import { isArray as ae, isDayjs as te, isFunction as re, isNumber as oe, isUndefined as le } from "@tu-view-plus/utils";
import { Close as ne } from "@tu-view-plus/icons-vue";
import "../../form/index.mjs";
import "../style/range-picker.css";
import { useFormDisabled as ue, useFormSize as ie } from "../../form/src/hooks/use-form-props.mjs";
const ce = ["disabled", "placeholder", "value"], pe = ["disabled", "placeholder", "value"], de = R({
  name: "TuRangePicker"
}), Ne = /* @__PURE__ */ R({
  ...de,
  props: x,
  emits: ee,
  setup(T, { expose: j, emit: A }) {
    const U = T, i = A, { focused: f, disabled: v, value: p, format: g, focusedIndex: r, inputValue: n } = O(U), s = se("range-picker"), W = Q(), d = ue(), P = ie(), b = F(), h = F(), q = c(() => k(0)), G = c(() => k(1)), H = c(() => N(0)), J = c(() => N(1)), L = c(() => ({
      [s.b()]: !0,
      [s.m(P.value)]: P.value,
      [s.is("focused")]: f == null ? void 0 : f.value,
      [s.is("disabled")]: d.value,
      [s.is("has-prefix")]: W.prefix
    })), k = (e) => d.value ? d.value : ae(v.value) ? v.value[e] : v.value, N = (e) => {
      var o, V;
      if (n != null && n.value)
        return (o = n == null ? void 0 : n.value) == null ? void 0 : o[e];
      const a = (V = p == null ? void 0 : p.value) == null ? void 0 : V[e];
      if (a && te(a))
        return re(g.value) ? g.value(a) : a.format(g.value);
    }, w = (e) => {
      i("focused-index-change", e), i("update:focusedIndex", e);
    }, D = (e) => ({
      [s.e("input-wrap")]: !0,
      [s.is("active")]: e === (r == null ? void 0 : r.value)
    }), E = (e) => {
      e.stopPropagation(), i("change", e);
    }, _ = () => {
      i("press-enter");
    }, I = (e) => {
      e.preventDefault();
    }, M = (e) => {
      i("clear", e);
    };
    return j({ focus: (e) => {
      const a = oe(e) ? e : r == null ? void 0 : r.value, o = a === 0 ? b.value : h.value;
      !le(a) && !k(a) && o && o.focus && o.focus();
    }, blur: () => {
      const e = (r == null ? void 0 : r.value) === 0 ? b.value : h.value;
      e && e.blur && e.blur();
    } }), (e, a) => {
      const o = X("tu-icon");
      return y(), S("div", {
        class: l(L.value)
      }, [
        e.$slots.prefix ? (y(), S("div", {
          key: 0,
          class: l(t(s).e("prefix"))
        }, [
          C(e.$slots, "perfix")
        ], 2)) : $("", !0),
        u("div", {
          class: l(D(0))
        }, [
          u("input", z({
            ref_key: "refInput0",
            ref: b,
            class: t(s).e("input"),
            disabled: q.value,
            placeholder: e.placeholder[0],
            value: H.value
          }, e.readonly ? { readonly: !0 } : {}, {
            onInput: E,
            onKeydown: [
              m(_, ["enter"]),
              m(I, ["tab"])
            ],
            onClick: a[0] || (a[0] = () => w(0))
          }), null, 16, ce)
        ], 2),
        u("span", {
          class: l(t(s).e("separator"))
        }, [
          C(e.$slots, "separator", {}, () => [
            Y("~")
          ])
        ], 2),
        u("div", {
          class: l(D(1))
        }, [
          u("input", z({
            ref_key: "refInput1",
            ref: h,
            class: t(s).e("input"),
            disabled: G.value,
            placeholder: e.placeholder[1],
            value: J.value
          }, e.readonly ? { readonly: !0 } : {}, {
            onInput: E,
            onKeydown: [
              m(_, ["enter"]),
              m(I, ["tab"])
            ],
            onClick: a[1] || (a[1] = () => w(1))
          }), null, 16, pe)
        ], 2),
        u("div", {
          class: l(t(s).e("suffix"))
        }, [
          e.allowClear && !t(d) && t(p).length === 2 ? (y(), Z(o, {
            key: 0,
            class: l([t(s).e("icon"), t(s).em("icon", "clear")]),
            onClick: M
          }, {
            default: B(() => [
              K(t(ne))
            ]),
            _: 1
          }, 8, ["class"])) : $("", !0),
          K(o, {
            class: l(t(s).e("icon"))
          }, {
            default: B(() => [
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
  Ne as default
};
