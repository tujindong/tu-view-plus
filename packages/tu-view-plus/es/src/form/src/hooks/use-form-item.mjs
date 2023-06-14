import { inject as o, ref as s, computed as y, onMounted as F, watch as f, toRef as K, onUnmounted as U } from "vue";
import { useId as j } from "@tu-view-plus/hooks";
import { formContextKey as B, formItemContextKey as L } from "../constants.mjs";
const z = () => {
  const c = o(B, void 0), u = o(L, void 0);
  return {
    form: c,
    formItem: u
  };
}, A = (c, {
  formItemContext: u,
  disableIdGeneration: d,
  disableIdManagement: p
}) => {
  d || (d = s(!1)), p || (p = s(!1));
  const v = s();
  let l;
  const w = y(() => {
    var i;
    return !!(!c.label && u && u.inputIds && ((i = u.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return F(() => {
    l = f(
      [K(c, "id"), d],
      ([i, h]) => {
        const r = i ?? (h ? void 0 : j().value);
        r !== v.value && (u != null && u.removeInputId && (v.value && u.removeInputId(v.value), !(p != null && p.value) && !h && r && u.addInputId(r)), v.value = r);
      },
      { immediate: !0 }
    );
  }), U(() => {
    l && l(), u != null && u.removeInputId && v.value && u.removeInputId(v.value);
  }), {
    isLabeledByFormItem: w,
    inputId: v
  };
};
export {
  z as useFormItem,
  A as useFormItemInputId
};
