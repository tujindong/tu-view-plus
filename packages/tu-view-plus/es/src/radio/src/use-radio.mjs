import { ref as d, inject as b, computed as t, nextTick as h } from "vue";
import { radioGroupKey as E } from "./constants.mjs";
import { UPDATE_MODEL_EVENT as V } from "@tu-view-plus/constants";
import "../../form/index.mjs";
import { useFormSize as g, useFormDisabled as y } from "../../form/src/hooks/use-form-props.mjs";
const F = (l, o) => {
  const c = d(), e = b(E, void 0), n = t(() => !!e), a = t({
    get() {
      return n.value ? e.modelValue : l.modelValue;
    },
    set(u) {
      n.value ? e.changeEvent(u) : o && o(V, u), c.value.checked = l.modelValue === l.label;
    }
  }), i = g(t(() => e == null ? void 0 : e.size)), m = t(() => (e == null ? void 0 : e.type) || l.type), s = y(t(() => e == null ? void 0 : e.disabled)), f = d(!1), r = t(
    () => s || n.value && a.value !== l.label ? -1 : 0
  );
  function v() {
    h(() => o && o("change", a.value));
  }
  return {
    radioRef: c,
    radioGroup: e,
    isGroup: n,
    modelValue: a,
    radioSize: i,
    radioType: m,
    disabled: s,
    focus: f,
    tabIndex: r,
    handleChange: v
  };
};
export {
  F as useRadio
};
