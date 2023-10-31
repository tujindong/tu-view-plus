import { defineComponent as K, ref as j, computed as C, openBlock as l, createElementBlock as v, normalizeClass as y, withModifiers as s, withDirectives as I, unref as e, withKeys as p, createVNode as c, withCtx as h, createBlock as d, createCommentVNode as g } from "vue";
import { inputNumberProps as q, inputNumberEmits as G } from "./input-number.mjs";
import { useNamespace as H, useLocale as J } from "@tu-view-plus/hooks";
import O from "./use-input-number.mjs";
import { TuInput as Q } from "../../input/index.mjs";
import { TuIcon as D } from "../../icon/index.mjs";
import { vRepeatClick as B } from "@tu-view-plus/directives";
import { ArrowDown as X, Remove as Y, ArrowUp as Z, CirclePlus as $ } from "@tu-view-plus/icons-vue";
import "../style/input-number.css";
const x = ["aria-label"], _ = ["aria-label"], ee = K({
  name: "TuInputNumber"
}), me = /* @__PURE__ */ K({
  ...ee,
  props: q,
  emits: G,
  setup(z, { expose: A, emit: F }) {
    const w = j(), a = z, M = F, t = H("input-number"), { t: k } = J(), b = C(
      () => a.controls && a.controlsPosition === "right"
    ), {
      inputNumberSize: f,
      inputNumberDisabled: N,
      minDisabled: P,
      maxDisabled: R,
      displayValue: T,
      handleIncrease: u,
      handleDecrease: m,
      handleFocus: V,
      handleBlur: E,
      handleInput: L,
      handleChange: S,
      focus: i,
      blur: U
    } = O(a, M, w), W = C(() => ({
      [t.b()]: !0,
      [t.m(f.value)]: f.value,
      [t.is("disabled")]: N.value,
      [t.is("without-controls")]: !a.controls,
      [t.is("controls-at-right")]: b.value
    }));
    return A({
      focus: i,
      blur: U
    }), (o, n) => (l(), v("div", {
      class: y(W.value),
      onDragstart: n[7] || (n[7] = s(() => {
      }, ["prevent"]))
    }, [
      o.controls ? I((l(), v("span", {
        key: 0,
        role: "button",
        "aria-label": e(k)("tu.inputNumber.decrease"),
        class: y([
          e(t).e("decrease"),
          e(t).is("disabled", e(P))
        ]),
        onKeydown: n[0] || (n[0] = p(
          //@ts-ignore
          (...r) => e(m) && e(m)(...r),
          ["enter"]
        )),
        onClick: n[1] || (n[1] = //@ts-ignore
        (...r) => e(i) && e(i)(...r)),
        onMousedown: n[2] || (n[2] = s(() => {
        }, ["prevent"]))
      }, [
        c(e(D), null, {
          default: h(() => [
            b.value ? (l(), d(e(X), { key: 0 })) : (l(), d(e(Y), { key: 1 }))
          ]),
          _: 1
        })
      ], 42, x)), [
        [e(B), e(m)]
      ]) : g("", !0),
      o.controls ? I((l(), v("span", {
        key: 1,
        role: "button",
        "aria-label": e(k)("tu.inputNumber.increase"),
        class: y([
          e(t).e("increase"),
          e(t).is("disabled", e(R))
        ]),
        onKeydown: n[3] || (n[3] = p(
          //@ts-ignore
          (...r) => e(u) && e(u)(...r),
          ["enter"]
        )),
        onClick: n[4] || (n[4] = //@ts-ignore
        (...r) => e(i) && e(i)(...r)),
        onMousedown: n[5] || (n[5] = s(() => {
        }, ["prevent"]))
      }, [
        c(e(D), null, {
          default: h(() => [
            b.value ? (l(), d(e(Z), { key: 0 })) : (l(), d(e($), { key: 1 }))
          ]),
          _: 1
        })
      ], 42, _)), [
        [e(B), e(u)]
      ]) : g("", !0),
      c(e(Q), {
        ref_key: "input",
        ref: w,
        type: "number",
        id: o.id,
        name: o.name,
        label: o.label,
        placeholder: o.placeholder,
        step: o.step,
        "model-value": e(T),
        readonly: o.readonly,
        disabled: e(N),
        size: e(f),
        min: o.min,
        max: o.max,
        "validate-event": !1,
        onWheel: n[6] || (n[6] = s(() => {
        }, ["prevent"])),
        onKeydown: [
          p(s(e(u), ["prevent"]), ["up"]),
          p(s(e(m), ["prevent"]), ["down"])
        ],
        onFocus: e(V),
        onBlur: e(E),
        onInput: e(L),
        onChange: e(S)
      }, null, 8, ["id", "name", "label", "placeholder", "step", "model-value", "readonly", "disabled", "size", "min", "max", "onKeydown", "onFocus", "onBlur", "onInput", "onChange"])
    ], 34));
  }
});
export {
  me as default
};
