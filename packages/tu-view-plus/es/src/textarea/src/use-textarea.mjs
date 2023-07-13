import { ref as m, shallowRef as P, computed as g, nextTick as x } from "vue";
import { UPDATE_MODEL_EVENT as T } from "@tu-view-plus/constants";
import "../../form/index.mjs";
import { debugWarn as U, isClient as _, isObject as R } from "@tu-view-plus/utils";
import { calcTextareaHeight as y } from "./utils.mjs";
import { isNil as j } from "lodash-unified";
import { useFormItem as A } from "../../form/src/hooks/use-form-item.mjs";
function X(n, a, o) {
  const f = m(!1), d = m(!1), i = m(!1), r = P(n.textareaStyle), l = g(() => o.value), s = g(
    () => j(n.modelValue) ? "" : String(n.modelValue)
  ), C = g(() => s.value.length), { formItem: u } = A(), H = async () => {
    var e;
    await x(), (e = l.value) == null || e.focus();
  }, b = () => {
    var e;
    return (e = l.value) == null ? void 0 : e.blur();
  }, z = () => {
    var e;
    return (e = l.value) == null ? void 0 : e.select();
  }, S = () => {
    a(T, ""), a("change", ""), a("clear"), a("input", "");
  }, V = (e) => {
    f.value = !0, a("mouseenter", e);
  }, O = (e) => {
    f.value = !1, a("mouseleave", e);
  }, p = (e) => {
    a("compositionstart", e), i.value = !0;
  }, F = (e) => {
    a("compositionupdate", e);
  }, I = (e) => {
    a("compositionend", e), i.value && (i.value = !1, w(e));
  }, w = async (e) => {
    let { value: t } = e.target;
    if (n.formatter && (t = n.parser ? n.parser(t) : t), !i.value) {
      if (t === s.value) {
        h();
        return;
      }
      a(T, t), a("input", t), await x(), h();
    }
  }, L = (e) => {
    d.value = !0, a("focus", e);
  }, M = (e) => {
    var t;
    d.value = !1, a("blur", e), n.validateEvent && ((t = u == null ? void 0 : u.validate) == null || t.call(u, "blur").catch((v) => U(v)));
  }, N = (e) => {
    a("change", e.target.value);
  }, k = (e) => {
    a("keydown", e);
  }, h = () => {
    const e = l.value, t = n.formatter ? n.formatter(s.value) : s.value;
    !e || e.value === t || (e.value = t);
  }, E = () => {
    const { autosize: e } = n;
    if (!(!_ || !o.value))
      if (e) {
        const t = R(e) ? e.minRows : void 0, v = R(e) ? e.maxRows : void 0, c = y(
          o.value,
          t,
          v
        );
        r.value = {
          overflowY: "hidden",
          ...c
        }, x(() => {
          o.value.offsetHeight, r.value = c;
        });
      } else
        r.value = {
          minHeight: y(o.value).minHeight
        };
  }, D = ((e) => {
    let t = !1;
    return () => {
      var c;
      if (t || !n.autosize)
        return;
      ((c = o.value) == null ? void 0 : c.offsetParent) === null || (e(), t = !0);
    };
  })(E);
  return {
    textareaRef: l,
    isHovering: f,
    isFocused: d,
    textareaCalcStyle: r,
    textLength: C,
    nativeTextareaValue: s,
    focus: H,
    blur: b,
    select: z,
    clear: S,
    handleMouseEnter: V,
    handleMouseLeave: O,
    handleCompositionStart: p,
    handleCompositionUpdate: F,
    handleCompositionEnd: I,
    handleInput: w,
    handleFocus: L,
    handleBlur: M,
    handleChange: N,
    handleKeydown: k,
    setNativeTextareaValue: h,
    resizeTextarea: E,
    onceInitSizeTextarea: D
  };
}
export {
  X as default
};
