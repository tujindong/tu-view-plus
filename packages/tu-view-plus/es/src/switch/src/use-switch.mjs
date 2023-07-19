import { computed as w, watch as T, nextTick as V } from "vue";
import { isPromise as h } from "@vue/shared";
import { debugWarn as m, isBoolean as b, throwError as g } from "@tu-view-plus/utils";
import "../../form/index.mjs";
import { UPDATE_MODEL_EVENT as C, CHANGE_EVENT as P, INPUT_EVENT as S } from "@tu-view-plus/constants";
import { useFormSize as N, useFormDisabled as k } from "../../form/src/hooks/use-form-props.mjs";
import { useFormItem as D, useFormItemInputId as F } from "../../form/src/hooks/use-form-item.mjs";
function U(t, r, n) {
  const d = N(), s = k(), { formItem: c } = D(), { inputId: f } = F(t, {
    formItemContext: c
  }), a = w(() => t.modelValue === t.activeValue), v = () => {
    const { beforeChange: e } = t;
    if (s.value)
      return;
    if (!e) {
      i();
      return;
    }
    const o = e();
    [
      h(o),
      b(o)
    ].includes(!0) || g(
      "TuSwitch",
      "beforeChange must return type `Promise<boolean>` or `boolean`"
    ), h(o) ? o.then((u) => {
      u && i();
    }).catch((u) => {
      m("TuSwitch", `some error occurred: ${u}`);
    }) : o && i();
  }, i = () => {
    const e = a.value ? t.inactiveValue : t.activeValue;
    r(C, e), r(P, e), r(S, e), V(() => n.value.checked = a.value);
  }, E = () => {
    var e, o;
    (o = (e = n.value) == null ? void 0 : e.focus) == null || o.call(e);
  };
  return T(a, (e) => {
    var o;
    n.value.checked = e, t.validateEvent && ((o = c == null ? void 0 : c.validate) == null || o.call(c, "change").catch((l) => m(l)));
  }), {
    inputId: f,
    switchSize: d,
    switchDisabled: s,
    checked: a,
    focus: E,
    handleValueSwitch: v,
    handleChange: i
  };
}
export {
  U as default
};
