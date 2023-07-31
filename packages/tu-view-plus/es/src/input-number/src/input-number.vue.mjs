import { defineComponent as K, ref as W, computed as C, openBlock as l, createElementBlock as v, normalizeClass as y, unref as e, withModifiers as s, withDirectives as I, withKeys as m, createVNode as w, withCtx as h, createBlock as d, createCommentVNode as g } from "vue";
import { inputNumberProps as j, inputNumberEmits as q } from "./input-number.mjs";
import { useNamespace as G, useLocale as H } from "@tu-view-plus/hooks";
import J from "./use-input-number.mjs";
import { TuInput as O } from "../../input/index.mjs";
import { TuIcon as D } from "../../icon/index.mjs";
import { vRepeatClick as B } from "@tu-view-plus/directives";
import { ArrowDown as Q, Remove as X, ArrowUp as Y, CirclePlus as Z } from "@tu-view-plus/icons-vue";
import "../style/input-number.css";
const $ = ["aria-label"], x = ["aria-label"], _ = K({
  name: "TuInputNumber"
}), ue = /* @__PURE__ */ K({
  ..._,
  props: j,
  emits: q,
  setup(z, { expose: A, emit: F }) {
    const a = z, c = W(), r = G("input-number"), { t: k } = H(), b = C(
      () => a.controls && a.controlsPosition === "right"
    ), {
      inputNumberSize: f,
      inputNumberDisabled: N,
      minDisabled: M,
      maxDisabled: P,
      displayValue: R,
      handleIncrease: u,
      handleDecrease: p,
      handleFocus: T,
      handleBlur: V,
      handleInput: E,
      handleChange: L,
      focus: i,
      blur: S
    } = J(a, F, c), U = C(() => ({
      [r.b()]: !0,
      [r.m(f.value)]: f.value,
      [r.is("disabled")]: N.value,
      [r.is("without-controls")]: !a.controls,
      [r.is("controls-at-right")]: b.value
    }));
    return A({
      focus: i,
      blur: S
    }), (o, n) => (l(), v("div", {
      class: y(e(U)),
      onDragstart: n[7] || (n[7] = s(() => {
      }, ["prevent"]))
    }, [
      o.controls ? I((l(), v("span", {
        key: 0,
        role: "button",
        "aria-label": e(k)("tu.inputNumber.decrease"),
        class: y([
          e(r).e("decrease"),
          e(r).is("disabled", e(M))
        ]),
        onKeydown: n[0] || (n[0] = m(
          //@ts-ignore
          (...t) => e(p) && e(p)(...t),
          ["enter"]
        )),
        onClick: n[1] || (n[1] = //@ts-ignore
        (...t) => e(i) && e(i)(...t)),
        onMousedown: n[2] || (n[2] = s(() => {
        }, ["prevent"]))
      }, [
        w(e(D), null, {
          default: h(() => [
            e(b) ? (l(), d(e(Q), { key: 0 })) : (l(), d(e(X), { key: 1 }))
          ]),
          _: 1
        })
      ], 42, $)), [
        [e(B), e(p)]
      ]) : g("", !0),
      o.controls ? I((l(), v("span", {
        key: 1,
        role: "button",
        "aria-label": e(k)("tu.inputNumber.increase"),
        class: y([
          e(r).e("increase"),
          e(r).is("disabled", e(P))
        ]),
        onKeydown: n[3] || (n[3] = m(
          //@ts-ignore
          (...t) => e(u) && e(u)(...t),
          ["enter"]
        )),
        onClick: n[4] || (n[4] = //@ts-ignore
        (...t) => e(i) && e(i)(...t)),
        onMousedown: n[5] || (n[5] = s(() => {
        }, ["prevent"]))
      }, [
        w(e(D), null, {
          default: h(() => [
            e(b) ? (l(), d(e(Y), { key: 0 })) : (l(), d(e(Z), { key: 1 }))
          ]),
          _: 1
        })
      ], 42, x)), [
        [e(B), e(u)]
      ]) : g("", !0),
      w(e(O), {
        ref_key: "input",
        ref: c,
        type: "number",
        id: o.id,
        name: o.name,
        label: o.label,
        placeholder: o.placeholder,
        step: o.step,
        "model-value": e(R),
        readonly: o.readonly,
        disabled: e(N),
        size: e(f),
        min: o.min,
        max: o.max,
        "validate-event": !1,
        onWheel: n[6] || (n[6] = s(() => {
        }, ["prevent"])),
        onKeydown: [
          m(s(e(u), ["prevent"]), ["up"]),
          m(s(e(p), ["prevent"]), ["down"])
        ],
        onFocus: e(T),
        onBlur: e(V),
        onInput: e(E),
        onChange: e(L)
      }, null, 8, ["id", "name", "label", "placeholder", "step", "model-value", "readonly", "disabled", "size", "min", "max", "onKeydown", "onFocus", "onBlur", "onInput", "onChange"])
    ], 34));
  }
});
export {
  ue as default
};
