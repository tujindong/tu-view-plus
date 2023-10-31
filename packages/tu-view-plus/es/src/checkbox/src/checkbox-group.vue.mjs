import { defineComponent as n, computed as l, nextTick as h, provide as x, toRefs as k, watch as g, openBlock as v, createBlock as C, resolveDynamicComponent as y, unref as r, normalizeClass as E, withCtx as I, renderSlot as _ } from "vue";
import { checkboxGroupProps as G, checkboxGroupEmits as T } from "./checkbox-group.mjs";
import "../../form/index.mjs";
import { useNamespace as V } from "@tu-view-plus/hooks";
import { UPDATE_MODEL_EVENT as w } from "@tu-view-plus/constants";
import { debugWarn as z } from "@tu-view-plus/utils";
import { checkboxGroupContextKey as B } from "./constants.mjs";
import { pick as D } from "lodash-unified";
import "../style/checkbox-group.css";
import { useFormItem as F, useFormItemInputId as L } from "../../form/src/hooks/use-form-item.mjs";
const N = n({
  name: "TuCheckboxGroup"
}), q = /* @__PURE__ */ n({
  ...N,
  props: G,
  emits: T,
  setup(p, { emit: u }) {
    const o = p, m = u, a = V("checkbox-group"), d = l(() => ({
      [a.b()]: !0,
      [a.m(o.type)]: !0,
      [a.m(o.size)]: !0
    })), { formItem: t } = F(), { inputId: b, isLabeledByFormItem: s } = L(o, {
      formItemContext: t
    }), f = l({
      get() {
        return o.modelValue;
      },
      set(e) {
        c(e);
      }
    }), c = async (e) => {
      m(w, e), await h(), m("change", e);
    };
    return x(B, {
      ...D(k(o), [
        "size",
        "type",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "textColor"
      ]),
      changeEvent: c,
      modelValue: f
    }), g(
      () => o.modelValue,
      () => {
        o.validateEvent && (t == null || t.validate("change").catch((e) => z(e)));
      }
    ), (e, P) => {
      var i;
      return v(), C(y(e.tag), {
        role: "group",
        id: r(b),
        class: E(d.value),
        "aria-label": r(s) ? void 0 : e.label || "checkbox-group",
        "aria-labelledby": r(s) ? (i = r(t)) == null ? void 0 : i.labelId : void 0
      }, {
        default: I(() => [
          _(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
export {
  q as default
};
