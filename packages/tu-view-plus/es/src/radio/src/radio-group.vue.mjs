import { defineComponent as l, computed as m, ref as y, provide as g, reactive as h, toRefs as v, watch as E, onMounted as G, openBlock as k, createElementBlock as R, unref as t, normalizeClass as T, renderSlot as x, nextTick as A } from "vue";
import { radioGroupProps as B, radioGroupEmits as C } from "./radio-group.mjs";
import { UPDATE_MODEL_EVENT as F } from "@tu-view-plus/constants";
import { useNamespace as L, useId as z } from "@tu-view-plus/hooks";
import { debugWarn as D } from "@tu-view-plus/utils";
import { radioGroupKey as M } from "./constants.mjs";
import "../../form/index.mjs";
import "../style/radio-group.css";
import { useFormItem as N, useFormItemInputId as P } from "../../form/src/hooks/use-form-item.mjs";
const S = ["id", "aria-label", "aria-labelledby"], V = l({
  name: "TuRadioGroup"
}), J = /* @__PURE__ */ l({
  ...V,
  props: B,
  emits: C,
  setup(p, { emit: s }) {
    const o = p, a = L("radio-group"), u = m(() => ({
      [a.b()]: !0,
      [a.m(o.type)]: !0,
      [a.m(o.size)]: !0
    })), c = z(), n = y(), { formItem: r } = N(), { inputId: f, isLabeledByFormItem: d } = P(o, {
      formItemContext: r
    }), b = (e) => {
      s(F, e), A(() => s("change", e));
    }, I = m(() => o.name || c.value);
    return g(
      M,
      h({
        ...v(o),
        changeEvent: b,
        name: I
      })
    ), E(
      () => o.modelValue,
      () => {
        r == null || r.validate("change").catch((e) => D(e));
      }
    ), G(() => {
      const e = n.value.querySelectorAll("[type=radio]"), i = e[0];
      !Array.from(e).some((_) => _.checked) && i && (i.tabIndex = 0);
    }), (e, i) => (k(), R("div", {
      ref_key: "radioGroupRef",
      ref: n,
      role: "radiogroup",
      id: t(f),
      class: T(t(u)),
      "aria-label": t(d) ? void 0 : e.label || "radio-group",
      "aria-labelledby": t(d) ? t(r).labelId : void 0
    }, [
      x(e.$slots, "default")
    ], 10, S));
  }
});
export {
  J as default
};
