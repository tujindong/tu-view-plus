import { defineComponent as R, toRefs as U, ref as c, computed as t, watch as j, createVNode as d, mergeProps as x, nextTick as w } from "vue";
import { inputLabelProps as q, inputLabelEmits as G } from "./input-label.mjs";
import { useNamespace as H } from "@tu-view-plus/hooks";
import { omit as J, pick as K } from "@tu-view-plus/utils";
import { INPUT_EVENTS as F } from "@tu-view-plus/constants";
import "../../form/index.mjs";
import "../style/input-label.css";
import { useFormSize as O, useFormDisabled as Q } from "../../form/src/hooks/use-form-props.mjs";
const ue = /* @__PURE__ */ R({
  name: "TuInputLabel",
  props: q,
  emits: G,
  inheritAttrs: !1,
  setup(a, {
    slots: i,
    emit: s,
    attrs: p
  }) {
    let v;
    const {
      inputValue: f
    } = U(a), u = H("input-label"), D = O(), h = Q(), l = c(), r = c(!1), m = c(!1), V = c(""), C = c(""), N = t(() => J(p, F)), P = t(() => K(p, F)), I = t(() => a.enabledInput && r.value || !a.modelValue), n = t(() => (f == null ? void 0 : f.value) ?? C.value), T = t(() => a.enabledInput && a.modelValue ? a.modelValue.label : a.placeholder), A = t(() => a.focused ?? r.value), E = t(() => ({
      [u.b()]: !0,
      [u.m(D.value)]: !0,
      [u.is("search")]: a.enabledInput,
      [u.is("focus")]: A.value,
      [u.is("disabled")]: h.value
    })), S = t(() => ({
      [u.e("input")]: !0,
      [u.is("hidden")]: !I.value
    })), _ = t(() => ({
      [u.e("inner")]: !0,
      [u.is("hidden")]: I.value
    })), L = () => {
      var e;
      return a.modelValue ? ((e = a.formatLabel) == null ? void 0 : e.call(a, a.modelValue)) ?? a.modelValue.label : "";
    }, k = (e) => {
      l.value && e.target !== l.value && (e.preventDefault(), l.value.focus());
    }, y = (e) => {
      const {
        value: o
      } = e.target;
      m.value || g(o, e), w(() => {
        l.value && n.value !== l.value.value && (l.value.value = n.value);
      });
    }, z = (e) => {
      r.value = !0, v = n.value, s("focus", e);
    }, B = (e) => {
      r.value = !1, s("blur", e), M(e);
    }, M = (e) => {
      n.value !== v && (v = n.value, s("change", n.value, e));
    }, b = (e) => {
      const {
        value: o
      } = e.target;
      e.type === "compositionend" ? (m.value = !1, V.value = "", g(o, e), w(() => {
        l.value && n.value !== l.value.value && (l.value.value = n.value);
      })) : (m.value = !0, V.value = n.value + (e.data ?? ""));
    }, g = (e, o) => {
      C.value = e, s("update:modelValue", e), s("input", e, o);
    };
    return j(n, (e) => {
      l.value && e !== l.value.value && (l.value.value = e);
    }), () => {
      const e = () => {
        var o;
        return a.modelValue ? ((o = i.default) == null ? void 0 : o.call(i, {
          data: a.modelValue
        })) ?? L() : null;
      };
      return d("div", x({
        class: E.value,
        title: L(),
        onMousedown: k
      }, N.value), [i.prefix && d("span", {
        class: u.e("prefix")
      }, [i.prefix()]), d("input", x({
        ref: l,
        class: S.value,
        value: n.value,
        readonly: !a.enabledInput,
        placeholder: T.value,
        disabled: h.value,
        onInput: y,
        onFocus: z,
        onBlur: B,
        onCompositionstart: b,
        onCompositionupdate: b,
        onCompositionend: b
      }, P.value), null), d("span", {
        class: _.value
      }, [e()]), i.suffix && d("span", {
        class: u.e("suffix")
      }, [i.suffix()])]);
    };
  }
});
export {
  ue as default
};
