import { defineComponent as f, ref as I, useSlots as $, computed as d, inject as b, openBlock as l, createElementBlock as c, normalizeClass as t, unref as n, renderSlot as r, createCommentVNode as m, createElementVNode as y } from "vue";
import { dropdownItemProps as _, dropdownItemEmits as j } from "./dropdown-item.mjs";
import { useNamespace as x } from "@tu-view-plus/hooks";
import { dropdownInjectionKey as E } from "./constants.mjs";
const N = f({
  name: "TuDropdownItem"
}), S = /* @__PURE__ */ f({
  ...N,
  props: _,
  emits: j,
  setup(p, { emit: u }) {
    const s = p, a = I(), k = $(), o = x("dropdown-item"), C = d(() => ({
      [o.b()]: !0,
      [o.m("suffix")]: k.suffix,
      [o.is("disabled")]: s.disabled,
      [o.is("active")]: s.active
    })), i = s.uninjectContext ? void 0 : b(E, void 0), v = d(
      () => {
        var e;
        return s.value ?? ((e = a.value) == null ? void 0 : e.textContent) ?? void 0;
      }
    ), w = (e) => {
      s.disabled || (u("click", e), i == null || i.onOptionClick(v.value, e));
    };
    return (e, V) => (l(), c("li", {
      ref_key: "liRef",
      ref: a,
      class: t(n(C)),
      onClick: w
    }, [
      e.$slots.icon ? (l(), c("span", {
        key: 0,
        class: t(n(o).e("icon"))
      }, [
        r(e.$slots, "icon")
      ], 2)) : m("", !0),
      y("span", {
        class: t(n(o).e("content"))
      }, [
        r(e.$slots, "default")
      ], 2),
      e.$slots.suffix ? (l(), c("span", {
        key: 1,
        class: t(n(o).e("suffix"))
      }, [
        r(e.$slots, "suffix")
      ], 2)) : m("", !0)
    ], 2));
  }
});
export {
  S as default
};
