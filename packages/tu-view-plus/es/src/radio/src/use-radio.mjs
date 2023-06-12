import { ref as n, inject as f, computed as l } from "vue";
import { radioGroupKey as b } from "./constants.mjs";
import "../../form/index.mjs";
import { useFormSize as v, useFormDisabled as V } from "../../form/src/hooks/use-form-props.mjs";
const F = (o, s) => {
  const a = n(), e = f(b, void 0), t = l(() => !!e), u = l({
    get() {
      return t.value ? e.modelValue : o.modelValue;
    },
    set(d) {
      t.value ? e.changeEvent(d) : s && s("update:modelValue", d), a.value.checked = o.modelValue === o.label;
    }
  }), m = v(l(() => e == null ? void 0 : e.size)), c = V(l(() => e == null ? void 0 : e.disabled)), i = n(!1), r = l(
    () => c || t.value && u.value !== o.label ? -1 : 0
  );
  return {
    radioRef: a,
    radioGroup: e,
    isGroup: t,
    modelValue: u,
    size: m,
    disabled: c,
    focus: i,
    tabIndex: r
  };
};
export {
  F as useRadio
};
