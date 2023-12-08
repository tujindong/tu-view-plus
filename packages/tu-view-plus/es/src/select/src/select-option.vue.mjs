import { defineComponent as V, useSlots as A, toRefs as D, getCurrentInstance as E, inject as R, ref as v, computed as s, reactive as T, onBeforeUnmount as j, onMounted as U, onUpdated as z, withDirectives as F, openBlock as f, createBlock as L, resolveDynamicComponent as P, normalizeClass as t, withCtx as q, createElementBlock as m, unref as a, renderSlot as y, createCommentVNode as k, createElementVNode as G, createTextVNode as H, toDisplayString as J, vShow as Q } from "vue";
import { selectOptionProps as W } from "./select-option.mjs";
import { useNamespace as X } from "@tu-view-plus/hooks";
import { getKeyFromValue as Y, isValidOption as Z } from "./utils.mjs";
import { selectInjectionKey as C } from "./context.mjs";
const x = V({
  name: "TuSelectOption"
}), le = /* @__PURE__ */ V({
  ...x,
  props: W,
  setup(K) {
    const i = K, O = A(), n = X("select"), { disabled: b, index: I } = D(i), u = E(), e = R(C, void 0), r = v(), c = v("");
    let S = v(!0);
    const p = s(() => i.value ?? i.label ?? c.value), d = s(() => i.label ?? c.value), l = s(
      () => Y(p.value, e == null ? void 0 : e.valueKey)
    ), M = s(() => (e == null ? void 0 : e.component) ?? "li"), _ = s(() => (e == null ? void 0 : e.valueKeys.includes(l.value)) ?? !1), $ = s(
      () => (e == null ? void 0 : e.activeKey) === l.value
    ), g = s(() => ({
      [n.e("option")]: !0,
      [n.is("active")]: $.value,
      [n.is("disabled")]: i.disabled,
      [n.is("multiple")]: e == null ? void 0 : e.multiple,
      [n.is("selected")]: _.value,
      [n.is("has-suffix")]: O.suffix
    })), w = (o) => {
      i.disabled || e == null || e.onSelect(l.value, o);
    }, B = () => {
      i.disabled || e == null || e.setActiveKey(l.value);
    }, N = () => {
      i.disabled || e == null || e.setActiveKey();
    }, h = () => {
      if (!i.label && r.value) {
        const o = r.value.textContent ?? "";
        c.value !== o && (c.value = o);
      }
    };
    if (!i.internal) {
      const o = T({
        raw: {
          value: p,
          label: d,
          disabled: b
        },
        ref: r,
        index: I,
        key: l,
        origin: "slot",
        value: p,
        label: d,
        disabled: b
      });
      S = s(
        () => Z(o, {
          inputValue: e == null ? void 0 : e.inputValue,
          filterOption: e == null ? void 0 : e.filterOption
        })
      ), u && (e == null || e.addSlotOptionInfo(u.uid, o)), j(() => {
        u && (e == null || e.removeSlotOptionInfo(u.uid));
      });
    }
    return U(() => h()), z(() => h()), (o, ee) => F((f(), L(P(M.value), {
      ref_key: "itemRef",
      ref: r,
      class: t(g.value),
      onClick: w,
      onMouseenter: B,
      onMouseleave: N
    }, {
      default: q(() => [
        o.$slots.icon ? (f(), m("span", {
          key: 0,
          class: t(a(n).e("option-icon"))
        }, [
          y(o.$slots, "icon")
        ], 2)) : k("", !0),
        a(e) && a(e).multiple ? (f(), m("span", {
          key: 1,
          class: t(a(n).e("option-check"))
        }, null, 2)) : k("", !0),
        G("span", {
          class: t(a(n).e("option-content"))
        }, [
          y(o.$slots, "default", {}, () => [
            H(J(d.value), 1)
          ])
        ], 2),
        o.$slots.suffix ? (f(), m("span", {
          key: 2,
          class: t(a(n).e("option-suffix"))
        }, [
          y(o.$slots, "suffix")
        ], 2)) : k("", !0)
      ]),
      _: 3
    }, 40, ["class"])), [
      [Q, a(S)]
    ]);
  }
});
export {
  le as default
};
