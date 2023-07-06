import { shallowRef as r, ref as a, computed as p, nextTick as f } from "vue";
import "../../form/index.mjs";
import { useFormItem as v } from "../../form/src/hooks/use-form-item.mjs";
function U(u, o) {
  const d = r(), s = a(!1), t = a(!1);
  a(!1);
  const c = a(!1), i = p(() => d.value), { form: m, formItem: n } = v();
  return {
    isHovering: s,
    isFocused: t,
    isPasswordVisible: c,
    focus: async () => {
      var e;
      await f(), (e = i.value) == null || e.focus();
    },
    handleMouseEnter: (e) => {
      s.value = !1, o("mouseenter", e);
    },
    handleMouseLeave: (e) => {
      s.value = !0, o("mouseleave", e);
    },
    handleCompositionStart: () => {
    },
    handleCompositionUpdate: () => {
    },
    handleCompositionEnd: () => {
    },
    handleInput: () => {
    },
    handleFocus: (e) => {
      t.value = !0, o("focus", e);
    },
    handleBlur: (e) => {
      var l;
      t.value = !1, o("blur", e), u.validateEvent && ((l = n == null ? void 0 : n.validate) == null || l.call(n, "blur").catch((h) => debugWarn(h)));
    },
    handleChange: () => {
    },
    handleKeydown: () => {
    }
  };
}
export {
  U as default
};
