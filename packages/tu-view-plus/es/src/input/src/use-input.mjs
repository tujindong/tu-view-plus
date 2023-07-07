import { ref as u, computed as p, watch as D, nextTick as g } from "vue";
import "../../form/index.mjs";
import { debugWarn as I } from "@tu-view-plus/utils";
import { UPDATE_MODEL_EVENT as m } from "@tu-view-plus/constants";
import { isNil as L } from "lodash-unified";
import { useFormItem as S } from "../../form/src/hooks/use-form-item.mjs";
function O(t, a, V) {
  const r = u(!1), c = u(!1), s = u(!1), i = u(!1), v = p(() => V.value), o = p(
    () => L(t.modelValue) ? "" : String(t.modelValue)
  ), { formItem: l } = S(), f = async () => {
    var e;
    await g(), (e = v.value) == null || e.focus();
  }, w = () => {
    a(m, ""), a("change", ""), a("clear"), a("input", "");
  }, E = (e) => {
    r.value = !0, a("mouseenter", e);
  }, C = (e) => {
    r.value = !1, a("mouseleave", e);
  }, b = (e) => {
    a("compositionstart", e), s.value = !0;
  }, y = (e) => {
    a("compositionupdate", e);
  }, F = (e) => {
    a("compositionend", e), s.value && (s.value = !1, h(e));
  }, h = async (e) => {
    let { value: n } = e.target;
    if (t.formatter && (n = t.parser ? t.parser(n) : n), !s.value) {
      if (n === o.value) {
        d();
        return;
      }
      a(m, n), a("input", n), await g(), d();
    }
  }, M = (e) => {
    c.value = !0, a("focus", e);
  }, N = (e) => {
    var n;
    c.value = !1, a("blur", e), t.validateEvent && ((n = l == null ? void 0 : l.validate) == null || n.call(l, "blur").catch((x) => I(x)));
  }, P = (e) => {
    a("change", e.target.value);
  }, T = (e) => {
    a("keydown", e);
  }, k = () => {
    i.value = !i.value, f();
  }, d = () => {
    const e = v.value, n = t.formatter ? t.formatter(o.value) : o.value;
    !e || e.value === n || (e.value = n);
  };
  return D(o, () => d()), {
    isHovering: r,
    isFocused: c,
    isPasswordVisible: i,
    nativeInputValue: o,
    focus: f,
    handleClear: w,
    handleMouseEnter: E,
    handleMouseLeave: C,
    handleCompositionStart: b,
    handleCompositionUpdate: y,
    handleCompositionEnd: F,
    handleInput: h,
    handleFocus: M,
    handleBlur: N,
    handleChange: P,
    handleKeydown: T,
    handlePasswordVisible: k
  };
}
export {
  O as default
};
