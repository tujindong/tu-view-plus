import { ref as r, computed as f, watch as S, nextTick as g } from "vue";
import "../../form/index.mjs";
import { debugWarn as U } from "@tu-view-plus/utils";
import { UPDATE_MODEL_EVENT as m } from "@tu-view-plus/constants";
import { isNil as _ } from "lodash-unified";
import { useFormItem as A } from "../../form/src/hooks/use-form-item.mjs";
function j(n, a, V) {
  const i = r(!1), v = r(!1), u = r(!1), d = r(!1), l = f(() => V.value), o = f(
    () => _(n.modelValue) ? "" : String(n.modelValue)
  ), b = f(() => o.value.length), { formItem: s } = A(), h = async () => {
    var e;
    await g(), (e = l.value) == null || e.focus();
  }, w = () => {
    var e;
    return (e = l.value) == null ? void 0 : e.blur();
  }, E = () => {
    var e;
    return (e = l.value) == null ? void 0 : e.select();
  }, C = () => {
    a(m, ""), a("change", ""), a("clear"), a("input", "");
  }, y = (e) => {
    i.value = !0, a("mouseenter", e);
  }, x = (e) => {
    i.value = !1, a("mouseleave", e);
  }, F = (e) => {
    a("compositionstart", e), u.value = !0;
  }, L = (e) => {
    a("compositionupdate", e);
  }, M = (e) => {
    a("compositionend", e), u.value && (u.value = !1, p(e));
  }, p = async (e) => {
    let { value: t } = e.target;
    if (n.formatter && (t = n.parser ? n.parser(t) : t), !u.value) {
      if (t === o.value) {
        c();
        return;
      }
      a(m, t), a("input", t), await g(), c();
    }
  }, N = (e) => {
    v.value = !0, a("focus", e);
  }, P = (e) => {
    var t;
    v.value = !1, a("blur", e), n.validateEvent && ((t = s == null ? void 0 : s.validate) == null || t.call(s, "blur").catch((I) => U(I)));
  }, T = (e) => {
    a("change", e.target.value);
  }, k = (e) => {
    a("keydown", e);
  }, D = () => {
    d.value = !d.value, h();
  }, c = () => {
    const e = l.value, t = n.formatter ? n.formatter(o.value) : o.value;
    !e || e.value === t || (e.value = t);
  };
  return S(o, () => c()), {
    inputRef: l,
    isHovering: i,
    isFocused: v,
    isPasswordVisible: d,
    nativeInputValue: o,
    textLength: b,
    focus: h,
    blur: w,
    select: E,
    clear: C,
    handleMouseEnter: y,
    handleMouseLeave: x,
    handleCompositionStart: F,
    handleCompositionUpdate: L,
    handleCompositionEnd: M,
    handleInput: p,
    handleFocus: N,
    handleBlur: P,
    handleChange: T,
    handleKeydown: k,
    handlePasswordVisible: D,
    setNativeInputValue: c
  };
}
export {
  j as default
};
