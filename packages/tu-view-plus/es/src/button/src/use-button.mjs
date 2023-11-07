import { ref as o, inject as s, computed as i } from "vue";
import { buttonGroupInjectionKey as b } from "./constants.mjs";
import { useNamespace as m } from "@tu-view-plus/hooks";
function y(t) {
  const e = m("button"), u = o(), n = s(b, void 0), a = i(() => (n == null ? void 0 : n.size) || t.size), c = i(() => (n == null ? void 0 : n.type) || t.type), d = i(() => ({
    [e.b()]: !0,
    [e.m(a.value)]: !0,
    [e.m(c.value)]: !0,
    [e.is("disabled")]: t.disabled,
    [e.is("loading")]: t.loading,
    [e.is("round")]: t.round,
    [e.is("circle")]: t.circle,
    [e.is("long")]: t.long
  })), l = i(() => ({
    ariaDisabled: t.disabled || t.loading,
    disabled: t.disabled || t.loading,
    autofocus: t.autofocus,
    type: t.nativeType
  }));
  return { buttonRef: u, nsButton: e, buttonSize: a, buttonType: c, classes: d, buttonAttrs: l };
}
function v(t) {
  return {
    handleClick: (u) => {
      t("click", u);
    }
  };
}
export {
  v as useButtonEvent,
  y as useButtonRender
};
