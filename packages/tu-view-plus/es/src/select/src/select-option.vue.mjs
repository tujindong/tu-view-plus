import { defineComponent as I, useSlots as j, toRefs as E, getCurrentInstance as U, inject as z, ref as y, computed as n, reactive as F, onBeforeUnmount as L, onMounted as P, onUpdated as q, withDirectives as G, openBlock as t, createBlock as S, resolveDynamicComponent as H, normalizeClass as u, withCtx as K, createElementBlock as b, unref as s, renderSlot as p, createCommentVNode as O, createTextVNode as V, toDisplayString as $, vShow as J } from "vue";
import { selectOptionProps as Q } from "./select-option.mjs";
import { useNamespace as W } from "@tu-view-plus/hooks";
import { getKeyFromValue as X, isValidOption as Y } from "./utils.mjs";
import { selectInjectionKey as Z } from "./context.mjs";
import { TuCheckbox as C } from "../../checkbox/index.mjs";
const x = I({
  name: "TuSelectOption"
}), te = /* @__PURE__ */ I({
  ...x,
  props: Q,
  setup(M) {
    const i = M, _ = j(), a = W("select"), { disabled: v, index: g } = E(i), r = U(), e = z(Z, void 0), c = y(), f = y("");
    let k = y(!0);
    const m = n(() => i.value ?? i.label ?? f.value), d = n(() => i.label ?? f.value), l = n(
      () => X(m.value, e == null ? void 0 : e.valueKey)
    ), w = n(() => (e == null ? void 0 : e.component) ?? "li"), B = n(
      () => (e == null ? void 0 : e.valueKeys.includes(l.value)) ?? !1
    ), T = n(
      () => (e == null ? void 0 : e.activeKey) === l.value
    ), A = n(() => ({
      [a.e("option")]: !0,
      [a.is("active")]: T.value,
      [a.is("disabled")]: i.disabled,
      [a.is("has-suffix")]: _.suffix
    })), D = (o) => {
      i.disabled || e == null || e.onSelect(l.value, o);
    }, N = () => {
      i.disabled || e == null || e.setActiveKey(l.value);
    }, R = () => {
      i.disabled || e == null || e.setActiveKey();
    }, h = () => {
      if (!i.label && c.value) {
        const o = c.value.textContent ?? "";
        f.value !== o && (f.value = o);
      }
    };
    if (!i.internal) {
      const o = F({
        raw: {
          value: m,
          label: d,
          disabled: v
        },
        ref: c,
        index: g,
        key: l,
        origin: "slot",
        value: m,
        label: d,
        disabled: v
      });
      k = n(
        () => Y(o, {
          inputValue: e == null ? void 0 : e.inputValue,
          filterOption: e == null ? void 0 : e.filterOption
        })
      ), r && (e == null || e.addSlotOptionInfo(r.uid, o)), L(() => {
        r && (e == null || e.removeSlotOptionInfo(r.uid));
      });
    }
    return P(() => h()), q(() => h()), (o, ee) => G((t(), S(H(w.value), {
      ref_key: "itemRef",
      ref: c,
      class: u(A.value),
      onClick: D,
      onMouseenter: N,
      onMouseleave: R
    }, {
      default: K(() => [
        o.$slots.icon ? (t(), b("span", {
          key: 0,
          class: u(s(a).e("option-icon"))
        }, [
          p(o.$slots, "icon")
        ], 2)) : O("", !0),
        s(e) && s(e).multiple ? (t(), S(s(C), {
          key: 1,
          class: u(s(a).e("option-checkbox")),
          "model-value": B.value,
          disabled: s(v)
        }, {
          default: K(() => [
            p(o.$slots, "default", {}, () => [
              V($(d.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["class", "model-value", "disabled"])) : (t(), b("span", {
          key: 2,
          class: u(s(a).e("option-content"))
        }, [
          p(o.$slots, "default", {}, () => [
            V($(d.value), 1)
          ])
        ], 2)),
        o.$slots.suffix ? (t(), b("span", {
          key: 3,
          class: u(s(a).e("option-suffix"))
        }, [
          p(o.$slots, "suffix")
        ], 2)) : O("", !0)
      ]),
      _: 3
    }, 40, ["class"])), [
      [J, s(k)]
    ]);
  }
});
export {
  te as default
};
