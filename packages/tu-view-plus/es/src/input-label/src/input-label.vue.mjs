import { defineComponent as F, useAttrs as O, useSlots as Q, toRefs as W, ref as r, computed as o, watch as X, openBlock as b, createElementBlock as h, mergeProps as y, unref as c, normalizeClass as V, renderSlot as D, createCommentVNode as w, createElementVNode as x, toDisplayString as Y, nextTick as S } from "vue";
import { inputLabelProps as Z, inputLabelEmits as ee } from "./input-label.mjs";
import { useNamespace as ae } from "@tu-view-plus/hooks";
import { omit as le, pick as te } from "@tu-view-plus/utils";
import { INPUT_EVENTS as E } from "@tu-view-plus/constants";
import "../../form/index.mjs";
import "../style/input-label.css";
import { useFormSize as ue, useFormDisabled as oe } from "../../form/src/hooks/use-form-props.mjs";
const se = ["value", "readonly", "placeholder", "disabled"], ne = F({
  name: "TuInputLabel"
}), be = /* @__PURE__ */ F({
  ...ne,
  props: Z,
  emits: ee,
  setup(N, { emit: B }) {
    let d;
    const a = N, n = B, C = O(), i = Q(), { inputValue: m } = W(a), t = ae("input-label"), P = ue(), I = oe(), l = r(), p = r(!1), v = r(!1), g = r(""), _ = r(""), T = o(() => le(C, E)), z = o(() => te(C, E)), L = o(
      () => a.enabledInput && p.value || !a.modelValue
    ), u = o(
      () => (m == null ? void 0 : m.value) ?? _.value
    ), A = o(
      () => a.enabledInput && a.modelValue ? a.modelValue.label : a.placeholder
    ), R = o(() => a.focused ?? p.value), M = o(() => {
      var e, s;
      return a.modelValue ? ((e = i.default) == null ? void 0 : e.call(i, { data: a.modelValue })) ?? ((s = a.formatLabel) == null ? void 0 : s.call(a, a.modelValue)) ?? a.modelValue.label : "";
    }), $ = o(() => ({
      [t.b()]: !0,
      [t.m(P.value)]: !0,
      [t.is("search")]: a.enabledInput,
      [t.is("focus")]: R.value,
      [t.is("disabled")]: I.value
    })), U = o(() => ({
      [t.e("input")]: !0,
      [t.is("hidden")]: !L.value
    })), j = o(() => ({
      [t.e("inner")]: !0,
      [t.is("hidden")]: L.value
    })), q = (e) => {
      l.value && e.target !== l.value && (e.preventDefault(), l.value.focus());
    }, G = (e) => {
      const { value: s } = e.target;
      v.value || k(s, e), S(() => {
        l.value && u.value !== l.value.value && (l.value.value = u.value);
      });
    }, H = (e) => {
      p.value = !0, d = u.value, n("focus", e);
    }, J = (e) => {
      p.value = !1, n("blur", e), K(e);
    }, K = (e) => {
      u.value !== d && (d = u.value, n("change", u.value, e));
    }, f = (e) => {
      const { value: s } = e.target;
      e.type === "compositionend" ? (v.value = !1, g.value = "", k(s, e), S(() => {
        l.value && u.value !== l.value.value && (l.value.value = u.value);
      })) : (v.value = !0, g.value = u.value + (e.data ?? ""));
    }, k = (e, s) => {
      _.value = e, n("update:modelValue", e), n("input", e, s);
    };
    return X(u, (e) => {
      l.value && e !== l.value.value && (l.value.value = e);
    }), (e, s) => (b(), h("div", y(T.value, {
      class: $.value,
      onMousedown: q
    }), [
      c(i).prefix ? (b(), h("span", {
        key: 0,
        class: V(c(t).e("prefix"))
      }, [
        D(e.$slots, "prefix")
      ], 2)) : w("", !0),
      x("input", y({
        ref_key: "inputRef",
        ref: l
      }, z.value, {
        class: U.value,
        value: u.value,
        readonly: !e.enabledInput,
        placeholder: A.value,
        disabled: c(I),
        onInput: G,
        onFocus: H,
        onBlur: J,
        onCompositionstart: f,
        onCompositionupdate: f,
        onCompositionend: f
      }), null, 16, se),
      x("span", {
        class: V(j.value)
      }, Y(M.value), 3),
      c(i).suffix ? (b(), h("span", {
        key: 1,
        class: V(c(t).e("suffix"))
      }, [
        D(e.$slots, "suffix")
      ], 2)) : w("", !0)
    ], 16));
  }
});
export {
  be as default
};
