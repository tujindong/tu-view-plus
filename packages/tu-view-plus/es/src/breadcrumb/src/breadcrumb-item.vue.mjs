import { defineComponent as T, inject as j, ref as y, computed as u, createVNode as t, Fragment as B, mergeProps as f } from "vue";
import { breadcrumbItemProps as C } from "./breadcrumb-item.mjs";
import { useNamespace as F } from "@tu-view-plus/hooks";
import { MoreFilled as H, ArrowDown as M } from "@tu-view-plus/icons-vue";
import { breadcrumbInjectKey as N } from "./context.mjs";
import { TuDropdown as _, TuDropdownItem as x } from "../../dropdown/index.mjs";
import { TuIcon as s } from "../../icon/index.mjs";
import "../style/breadcrumb.css";
const G = /* @__PURE__ */ T({
  name: "TuBreadcrumbItem",
  props: C,
  setup(n, {
    slots: r,
    attrs: w
  }) {
    const d = F("breadcrumb"), e = j(N, void 0), l = y(!1), v = u(() => !(e && e.needHide && n.index > 1 && n.index <= e.total - e.maxCount)), m = u(() => e && e.needHide ? n.index === 1 : !1), h = u(() => ({
      [d.e("item")]: !0,
      [d.em("item", "with-dropdown")]: n.droplist || r.droplist
    })), I = u(() => ({
      [d.e("item-dropdown-icon")]: !0,
      [d.is("active")]: l.value
    })), b = u(() => e ? n.index < e.total - 1 : !0), D = () => {
      var a, i, c;
      if (!b.value)
        return null;
      const o = ((a = r.separator) == null ? void 0 : a.call(r)) ?? n.separator ?? ((c = e == null ? void 0 : (i = e.slots).separator) == null ? void 0 : c.call(i)) ?? (e == null ? void 0 : e.separator) ?? "/";
      return t("div", {
        "aria-hidden": "true",
        class: d.e("item-separator")
      }, [o]);
    }, V = (o) => {
      l.value = o;
    }, p = () => {
      var o, a, i;
      return t("div", f({
        role: "listitem",
        class: h.value
      }, m.value ? {
        "aria-label": "ellipses of breadcrumb items"
      } : void 0, w), [m.value ? ((a = e == null ? void 0 : (o = e.slots)["more-icon"]) == null ? void 0 : a.call(o)) ?? t(s, null, {
        default: () => [t(H, null, null)]
      }) : (i = r.default) == null ? void 0 : i.call(r), (n.droplist || r.droplist) && t("span", {
        "aria-hidden": !0,
        class: I.value
      }, [t(s, null, {
        default: () => [t(M, null, null)]
      })])]);
    }, g = () => {
      var o, a;
      return ((o = r.droplist) == null ? void 0 : o.call(r)) ?? ((a = n.droplist) == null ? void 0 : a.map((i) => t(x, {
        value: i.path
      }, {
        default: () => [i.label]
      })));
    }, P = () => t(_, f({
      popupVisible: l.value,
      onPopupVisibleChange: V
    }, n.dropdownProps), {
      default: () => [p()],
      content: g
    });
    return () => v.value ? t(B, null, [r.droplist || n.droplist ? P() : p(), D()]) : null;
  }
});
export {
  G as default
};
