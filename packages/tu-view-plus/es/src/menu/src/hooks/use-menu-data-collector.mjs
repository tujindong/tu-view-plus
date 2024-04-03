import { inject as y, ref as h, provide as D, onMounted as v, onUnmounted as m, computed as p } from "vue";
import { isUndefined as c } from "@tu-view-plus/utils";
import { DataCollectorInjectionKey as d } from "../context.mjs";
function M(t, n) {
  const o = [], e = (u) => {
    u.forEach((a) => {
      n(a) && o.push(a.key), a.children && e(a.children);
    });
  };
  return e(t), o;
}
function S(t = !1) {
  return t ? void 0 : y(d);
}
function j(t) {
  const { key: n, type: o } = t, e = h([]), u = S(o === "menu");
  return D(d, {
    collectSubMenu(l, r, i = !1) {
      const s = {
        key: l,
        children: r
      };
      if (i) {
        const f = e.value.find((b) => b.key === l);
        f ? f.children = r : e.value.push(s);
      } else
        e.value = [...e.value, s];
      i && (o === "popupMenu" ? u == null || u.reportMenuData(e.value) : o === "subMenu" && !c(l) && (u == null || u.collectSubMenu(l, e.value, !0)));
    },
    removeSubMenu(l) {
      e.value = e.value.filter((r) => r.key !== l);
    },
    collectMenuItem(l) {
      e.value.push({ key: l });
    },
    removeMenuItem(l) {
      e.value = e.value.filter((r) => r.key !== l);
    },
    reportMenuData(l) {
      e.value = l, o === "subMenu" && !c(n) && (u == null || u.collectSubMenu(n, e.value, !0));
    }
  }), o === "subMenu" && !c(n) ? (v(() => {
    u == null || u.collectSubMenu(n, e.value);
  }), m(() => {
    u == null || u.removeSubMenu(n);
  })) : o === "popupMenu" && v(() => {
    u == null || u.reportMenuData(e.value);
  }), {
    menuData: e,
    subMenuKeys: p(() => M(e.value, (l) => !!l.children)),
    menuItemKeys: p(() => M(e.value, (l) => !l.children))
  };
}
export {
  j as useMenuDataCollector,
  S as useMenuDataCollectorContext
};
