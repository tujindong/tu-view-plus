import { ref as o, inject as s, computed as i } from "vue";
import { buttonGroupInjectionKey as r } from "./constants.mjs";
import { useNamespace as b } from "@tu-view-plus/hooks";
function v(t) {
  const e = b("button"), u = o(), n = s(r, void 0), a = i(() => (n == null ? void 0 : n.size) || t.size), c = i(() => (n == null ? void 0 : n.type) || t.type), d = i(() => ({
    [e.b()]: !0,
    [e.m(a.value)]: !0,
    [e.m(c.value)]: !0,
    [e.is("disabled")]: t.disabled,
    [e.is("loading")]: t.loading,
    [e.is("round")]: t.round,
    [e.is("circle")]: t.circle
  })), l = i(() => ({
    ariaDisabled: t.disabled || t.loading,
    disabled: t.disabled || t.loading,
    autofocus: t.autofocus,
    type: t.nativeType
  }));
  return { buttonRef: u, nsButton: e, buttonSize: a, buttonType: c, classes: d, buttonAttrs: l };
}
function g(t) {
  return {
    handleClick: (u) => {
      t("click", u);
    }
  };
}
export {
  g as useButtonEvent,
  v as useButtonRender
};
