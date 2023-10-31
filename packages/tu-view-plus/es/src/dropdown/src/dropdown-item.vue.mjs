import { defineComponent as f, ref as $, useSlots as b, computed as m, inject as y, openBlock as i, createElementBlock as l, normalizeClass as t, unref as c, renderSlot as r, createCommentVNode as d, createElementVNode as _ } from "vue";
import { dropdownItemProps as j, dropdownItemEmits as x } from "./dropdown-item.mjs";
import { useNamespace as E } from "@tu-view-plus/hooks";
import { dropdownInjectionKey as N } from "./constants.mjs";
const V = f({
  name: "TuDropdownItem"
}), z = /* @__PURE__ */ f({
  ...V,
  props: j,
  emits: x,
  setup(u, { emit: p }) {
    const s = u, k = p, a = $(), v = b(), o = E("dropdown-item"), C = m(() => ({
      [o.b()]: !0,
      [o.m("suffix")]: v.suffix,
      [o.is("disabled")]: s.disabled,
      [o.is("active")]: s.active
    })), n = s.uninjectContext ? void 0 : y(N, void 0), w = m(
      () => {
        var e;
        return s.value ?? ((e = a.value) == null ? void 0 : e.textContent) ?? void 0;
      }
    ), I = (e) => {
      s.disabled || (k("click", e), n == null || n.onOptionClick(w.value, e));
    };
    return (e, h) => (i(), l("li", {
      ref_key: "liRef",
      ref: a,
      class: t(C.value),
      onClick: I
    }, [
      e.$slots.icon ? (i(), l("span", {
        key: 0,
        class: t(c(o).e("icon"))
      }, [
        r(e.$slots, "icon")
      ], 2)) : d("", !0),
      _("span", {
        class: t(c(o).e("content"))
      }, [
        r(e.$slots, "default")
      ], 2),
      e.$slots.suffix ? (i(), l("span", {
        key: 1,
        class: t(c(o).e("suffix"))
      }, [
        r(e.$slots, "suffix")
      ], 2)) : d("", !0)
    ], 2));
  }
});
export {
  z as default
};
