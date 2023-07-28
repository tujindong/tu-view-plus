import { defineComponent as g, computed as a, openBlock as r, createElementBlock as p, normalizeClass as d, unref as e, withModifiers as s, withDirectives as y, createVNode as c, withCtx as N, createBlock as i, createCommentVNode as w, withKeys as k } from "vue";
import { inputNumberProps as M, inputNumberEmits as R } from "./input-number.mjs";
import { useNamespace as S, useLocale as L } from "@tu-view-plus/hooks";
import { isNumber as I } from "@tu-view-plus/utils";
import "../../form/index.mjs";
import U from "./use-input-number.mjs";
import { TuInput as W } from "../../input/index.mjs";
import { TuIcon as C } from "../../icon/index.mjs";
import { vRepeatClick as D } from "@tu-view-plus/directives";
import { ArrowDown as j, Minus as q, ArrowUp as G, Plus as H } from "@tu-view-plus/icons-vue";
import "../style/input-number.css";
import { useFormSize as J, useFormDisabled as O } from "../../form/src/hooks/use-form-props.mjs";
const Q = ["aria-label"], X = ["aria-label"], Y = g({
  name: "TuInputNumber"
}), ue = /* @__PURE__ */ g({
  ...Y,
  props: M,
  emits: R,
  setup(V, { emit: Z }) {
    const n = V, t = S("input-number"), { t: b } = L(), u = J(), f = O(), B = a(
      () => I(n.modelValue) && n.modelValue <= n.min
    ), z = a(
      () => I(n.modelValue) && n.modelValue >= n.max
    ), {
      displayValue: F,
      handleIncrease: h,
      handleDecrease: v,
      handleFocus: A,
      handleBlur: K,
      handleInput: P,
      handleChange: T
    } = U(), m = a(
      () => n.controls && n.controlsPosition === "right"
    ), E = a(() => ({
      [t.b()]: !0,
      [t.m(u.value)]: u.value,
      [t.is("disabled")]: f.value,
      [t.is("without-controls")]: !n.controls,
      [t.is("controls-at-right")]: m.value
    }));
    return (o, l) => (r(), p("div", {
      class: d(e(E)),
      onDragstart: l[1] || (l[1] = s(() => {
      }, ["prevent"]))
    }, [
      o.controls ? y((r(), p("span", {
        key: 0,
        role: "button",
        "aria-label": e(b)("tu.inputNumber.decrease"),
        class: d([
          e(t).e("decrease"),
          e(t).is("disabled", e(B))
        ])
      }, [
        c(e(C), null, {
          default: N(() => [
            e(m) ? (r(), i(e(j), { key: 0 })) : (r(), i(e(q), { key: 1 }))
          ]),
          _: 1
        })
      ], 10, Q)), [
        [e(D), e(v)]
      ]) : w("", !0),
      o.controls ? y((r(), p("span", {
        key: 1,
        role: "button",
        "aria-label": e(b)("tu.inputNumber.increase"),
        class: d([
          e(t).e("increase"),
          e(t).is("disabled", e(z))
        ])
      }, [
        c(e(C), null, {
          default: N(() => [
            e(m) ? (r(), i(e(G), { key: 0 })) : (r(), i(e(H), { key: 1 }))
          ]),
          _: 1
        })
      ], 10, X)), [
        [e(D), e(h)]
      ]) : w("", !0),
      c(e(W), {
        ref: "input",
        type: "number",
        id: o.id,
        name: o.name,
        label: o.label,
        placeholder: o.placeholder,
        step: o.step,
        "model-value": e(F),
        readonly: o.readonly,
        disabled: e(f),
        size: e(u),
        min: o.min,
        max: o.max,
        "validate-event": !1,
        onWheel: l[0] || (l[0] = s(() => {
        }, ["prevent"])),
        onKeydown: [
          k(s(e(h), ["prevent"]), ["up"]),
          k(s(e(v), ["prevent"]), ["down"])
        ],
        onFocus: e(A),
        onBlur: e(K),
        onInput: e(P),
        onChange: e(T)
      }, null, 8, ["id", "name", "label", "placeholder", "step", "model-value", "readonly", "disabled", "size", "min", "max", "onKeydown", "onFocus", "onBlur", "onInput", "onChange"])
    ], 34));
  }
});
export {
  ue as default
};
