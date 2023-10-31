import { defineComponent as l, computed as m, ref as y, provide as g, reactive as h, toRefs as E, watch as G, onMounted as k, openBlock as R, createElementBlock as T, unref as t, normalizeClass as x, renderSlot as A, nextTick as B } from "vue";
import { radioGroupProps as C, radioGroupEmits as F } from "./radio-group.mjs";
import { UPDATE_MODEL_EVENT as L } from "@tu-view-plus/constants";
import { useNamespace as z, useId as D } from "@tu-view-plus/hooks";
import { debugWarn as M } from "@tu-view-plus/utils";
import { radioGroupKey as N } from "./constants.mjs";
import "../../form/index.mjs";
import "../style/radio-group.css";
import { useFormItem as P, useFormItemInputId as S } from "../../form/src/hooks/use-form-item.mjs";
const V = ["id", "aria-label", "aria-labelledby"], q = l({
  name: "TuRadioGroup"
}), Q = /* @__PURE__ */ l({
  ...q,
  props: C,
  emits: F,
  setup(p, { emit: u }) {
    const o = p, s = u, a = z("radio-group"), c = m(() => ({
      [a.b()]: !0,
      [a.m(o.type)]: !0,
      [a.m(o.size)]: !0
    })), f = D(), n = y(), { formItem: r } = P(), { inputId: b, isLabeledByFormItem: d } = S(o, {
      formItemContext: r
    }), I = (e) => {
      s(L, e), B(() => s("change", e));
    }, _ = m(() => o.name || f.value);
    return g(
      N,
      h({
        ...E(o),
        changeEvent: I,
        name: _
      })
    ), G(
      () => o.modelValue,
      () => {
        r == null || r.validate("change").catch((e) => M(e));
      }
    ), k(() => {
      const e = n.value.querySelectorAll("[type=radio]"), i = e[0];
      !Array.from(e).some((v) => v.checked) && i && (i.tabIndex = 0);
    }), (e, i) => (R(), T("div", {
      ref_key: "radioGroupRef",
      ref: n,
      role: "radiogroup",
      id: t(b),
      class: x(c.value),
      "aria-label": t(d) ? void 0 : e.label || "radio-group",
      "aria-labelledby": t(d) ? t(r).labelId : void 0
    }, [
      A(e.$slots, "default")
    ], 10, V));
  }
});
export {
  Q as default
};
