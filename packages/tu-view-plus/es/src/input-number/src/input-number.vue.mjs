import { defineComponent as m, computed as l, openBlock as b, createElementBlock as c, normalizeClass as f, unref as t, withModifiers as v, createVNode as N } from "vue";
import { inputNumberProps as h, inputNumberEmits as y } from "./input-number.mjs";
import { useNamespace as z } from "@tu-view-plus/hooks";
import "../../form/index.mjs";
import g from "./use-input-number.mjs";
import { TuInput as I } from "../../input/index.mjs";
import "../style/input-number.css";
import { useFormSize as D, useFormDisabled as k } from "../../form/src/hooks/use-form-props.mjs";
const w = m({
  name: "TuInputNumber"
}), M = /* @__PURE__ */ m({
  ...w,
  props: h,
  emits: y,
  setup(a, { emit: B }) {
    const r = a, o = z("input-number"), s = D(), n = k(), { displayValue: u } = g(), p = l(
      () => r.controls && r.controlsPosition === "right"
    ), d = l(() => ({
      [o.b()]: !0,
      [o.m(s.value)]: s.value,
      [o.is("disabled")]: n.value,
      [o.is("without-controls")]: !r.controls,
      [o.is("controls-at-right")]: p.value
    }));
    return (e, i) => (b(), c("div", {
      class: f(t(d)),
      onDragstart: i[0] || (i[0] = v(() => {
      }, ["prevent"]))
    }, [
      N(t(I), {
        ref: "input",
        type: "number",
        id: e.id,
        name: e.name,
        label: e.label,
        placeholder: e.placeholder,
        step: e.step,
        "model-value": t(u),
        readonly: e.readonly,
        disabled: t(n),
        size: t(s),
        min: e.min,
        max: e.max,
        "validate-event": !1
      }, null, 8, ["id", "name", "label", "placeholder", "step", "model-value", "readonly", "disabled", "size", "min", "max"])
    ], 34));
  }
});
export {
  M as default
};
