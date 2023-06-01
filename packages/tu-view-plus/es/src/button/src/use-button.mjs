import { ref as a, inject as c, computed as d } from "vue";
import { buttonGroupInjectionKey as l } from "./constants.mjs";
function s(t, n) {
  const o = a(), e = c(l, void 0), i = d(() => ({
    ariaDisabled: t.disabled || t.loading,
    disabled: t.disabled || t.loading,
    autofocus: t.autofocus,
    type: t.nativeType
  }));
  return {
    buttonRef: o,
    buttonGroupInjection: e,
    buttonAttrs: i,
    handleClick: (u) => {
      n("click", u);
    }
  };
}
export {
  s as default
};
