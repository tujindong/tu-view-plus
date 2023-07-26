import { defineComponent as i, computed as n, nextTick as f, provide as h, toRefs as x, watch as k, openBlock as g, createBlock as v, resolveDynamicComponent as C, unref as r, normalizeClass as y, withCtx as E, renderSlot as I } from "vue";
import { checkboxGroupProps as _, checkboxGroupEmits as G } from "./checkbox-group.mjs";
import "../../form/index.mjs";
import { useNamespace as T } from "@tu-view-plus/hooks";
import { UPDATE_MODEL_EVENT as V } from "@tu-view-plus/constants";
import { debugWarn as w } from "@tu-view-plus/utils";
import { checkboxGroupContextKey as z } from "./constants.mjs";
import { pick as B } from "lodash-unified";
import "../style/checkbox-group.css";
import { useFormItem as D, useFormItemInputId as F } from "../../form/src/hooks/use-form-item.mjs";
const L = i({
  name: "TuCheckboxGroup"
}), j = /* @__PURE__ */ i({
  ...L,
  props: _,
  emits: G,
  setup(p, { emit: s }) {
    const o = p, a = T("checkbox-group"), u = n(() => ({
      [a.b()]: !0,
      [a.m(o.type)]: !0,
      [a.m(o.size)]: !0
    })), { formItem: t } = D(), { inputId: d, isLabeledByFormItem: c } = F(o, {
      formItemContext: t
    }), b = n({
      get() {
        return o.modelValue;
      },
      set(e) {
        l(e);
      }
    }), l = async (e) => {
      s(V, e), await f(), s("change", e);
    };
    return h(z, {
      ...B(x(o), [
        "size",
        "type",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "textColor"
      ]),
      changeEvent: l,
      modelValue: b
    }), k(
      () => o.modelValue,
      () => {
        o.validateEvent && (t == null || t.validate("change").catch((e) => w(e)));
      }
    ), (e, N) => {
      var m;
      return g(), v(C(e.tag), {
        role: "group",
        id: r(d),
        class: y(r(u)),
        "aria-label": r(c) ? void 0 : e.label || "checkbox-group",
        "aria-labelledby": r(c) ? (m = r(t)) == null ? void 0 : m.labelId : void 0
      }, {
        default: E(() => [
          I(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
export {
  j as default
};
