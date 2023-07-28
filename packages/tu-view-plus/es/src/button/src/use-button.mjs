import { ref as o, inject as s, computed as i } from "vue";
import { buttonGroupInjectionKey as r } from "./constants.mjs";
import { useNamespace as b } from "@tu-view-plus/hooks";
const n = b("button");
function v(t) {
  const u = o(), e = s(r, void 0), a = i(() => (e == null ? void 0 : e.size) || t.size), c = i(() => (e == null ? void 0 : e.type) || t.type), d = i(() => ({
    [n.b()]: !0,
    [n.m(a.value)]: !0,
    [n.m(c.value)]: !0,
    [n.is("disabled")]: t.disabled,
    [n.is("loading")]: t.loading,
    [n.is("round")]: t.round,
    [n.is("circle")]: t.circle
  })), l = i(() => ({
    ariaDisabled: t.disabled || t.loading,
    disabled: t.disabled || t.loading,
    autofocus: t.autofocus,
    type: t.nativeType
  }));
  return { buttonRef: u, nsButton: n, buttonSize: a, buttonType: c, classes: d, buttonAttrs: l };
}
function g(t) {
  return {
    handleClick: (e) => {
      t("click", e);
    }
  };
}
export {
  g as useButtonEvent,
  v as useButtonRender
};
