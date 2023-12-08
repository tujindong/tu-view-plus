import { defineComponent as q, toRefs as G, ref as c, computed as t, watch as H, createVNode as d, mergeProps as x, nextTick as w } from "vue";
import { inputLabelProps as J, inputLabelEmits as K } from "./input-label.mjs";
import { useNamespace as O } from "@tu-view-plus/hooks";
import { omit as Q, pick as W } from "@tu-view-plus/utils";
import { INPUT_EVENTS as F } from "@tu-view-plus/constants";
import "../../form/index.mjs";
import "../style/input-label.css";
import { useFormSize as X, useFormDisabled as Y } from "../../form/src/hooks/use-form-props.mjs";
const oe = /* @__PURE__ */ q({
  name: "TuInputLabel",
  props: J,
  emits: K,
  inheritAttrs: !1,
  setup(a, {
    slots: s,
    emit: i,
    attrs: p,
    expose: D
  }) {
    let v;
    const {
      inputValue: f
    } = G(a), u = O("input-label"), N = X(), h = Y(), l = c(), r = c(!1), m = c(!1), V = c(""), C = c(""), P = t(() => Q(p, F)), T = t(() => W(p, F)), I = t(() => a.enabledInput && r.value || !a.modelValue), n = t(() => (f == null ? void 0 : f.value) ?? C.value), A = t(() => a.enabledInput && a.modelValue ? a.modelValue.label : a.placeholder), E = t(() => a.focused ?? r.value), S = t(() => ({
      [u.b()]: !0,
      [u.m(N.value)]: !0,
      [u.is("search")]: a.enabledInput,
      [u.is("focus")]: E.value,
      [u.is("disabled")]: h.value
    })), _ = t(() => ({
      [u.e("input")]: !0,
      [u.is("hidden")]: !I.value
    })), k = t(() => ({
      [u.e("inner")]: !0,
      [u.is("hidden")]: I.value
    })), L = () => {
      var e;
      return a.modelValue ? ((e = a.formatLabel) == null ? void 0 : e.call(a, a.modelValue)) ?? a.modelValue.label : "";
    }, y = (e) => {
      l.value && e.target !== l.value && (e.preventDefault(), l.value.focus());
    }, z = (e) => {
      const {
        value: o
      } = e.target;
      m.value || (g(o, e), w(() => {
        l.value && n.value !== l.value.value && (l.value.value = n.value);
      }));
    }, B = (e) => {
      r.value = !0, v = n.value, i("focus", e);
    }, M = (e) => {
      r.value = !1, i("blur", e), R(e);
    }, R = (e) => {
      n.value !== v && (v = n.value, i("change", n.value, e));
    }, b = (e) => {
      const {
        value: o
      } = e.target;
      e.type === "compositionend" ? (m.value = !1, V.value = "", g(o, e), w(() => {
        l.value && n.value !== l.value.value && (l.value.value = n.value);
      })) : (m.value = !0, V.value = n.value + (e.data ?? ""));
    }, g = (e, o) => {
      C.value = e, i("update:modelValue", e), i("inputValueChange", e, o);
    }, U = () => {
      var e;
      (e = l.value) == null || e.focus();
    }, j = () => {
      var e;
      (e = l.value) == null || e.blur();
    };
    return H(n, (e) => {
      l.value && e !== l.value.value && (l.value.value = e);
    }), D({
      inputRef: l,
      focus: U,
      blur: j
    }), () => {
      const e = () => {
        var o;
        return a.modelValue ? ((o = s.default) == null ? void 0 : o.call(s, {
          data: a.modelValue
        })) ?? L() : null;
      };
      return d("div", x({
        class: S.value,
        title: L(),
        onMousedown: y
      }, P.value), [s.prefix && d("span", {
        class: u.e("prefix")
      }, [s.prefix()]), d("input", x(T.value, {
        ref: l,
        class: _.value,
        value: n.value,
        readonly: !a.enabledInput,
        placeholder: A.value,
        disabled: h.value,
        onInput: z,
        onFocus: B,
        onBlur: M,
        onCompositionstart: b,
        onCompositionupdate: b,
        onCompositionend: b
      }), null), d("span", {
        class: k.value
      }, [e()]), s.suffix && d("span", {
        class: u.e("suffix")
      }, [s.suffix()])]);
    };
  }
});
export {
  oe as default
};
