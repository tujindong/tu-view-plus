import { defineComponent as x, toRefs as y, ref as B, computed as _, provide as C, reactive as P, createVNode as d, mergeProps as R } from "vue";
import { breadcrumbProps as j } from "./breadcrumb.mjs";
import { useNamespace as I } from "@tu-view-plus/hooks";
import { getAllElements as N } from "@tu-view-plus/utils";
import { breadcrumbInjectKey as $ } from "./context.mjs";
import k from "./breadcrumb-item.vue.mjs";
import "../style/breadcrumb.css";
const V = /* @__PURE__ */ x({
  name: "TuBreadcrumb",
  props: j,
  setup(m, {
    slots: n
  }) {
    const {
      maxCount: f,
      separator: p,
      routes: c
    } = y(m), h = I("breadcrumb"), t = B(0), v = _(() => f.value > 0 && t.value > f.value + 1);
    C($, P({
      total: t,
      maxCount: f,
      separator: p,
      needHide: v,
      slots: n
    }));
    const b = (r, a, e) => {
      var l;
      if (a.indexOf(r) === a.length - 1)
        return d("span", null, [r.label]);
      const u = ((l = m.customUrl) == null ? void 0 : l.call(m, e)) ?? `#/${e.join("/").replace(/^\//, "")}`;
      return d("a", {
        href: u
      }, [r.label]);
    }, s = () => {
      var a;
      if (!((a = c.value) != null && a.length))
        return null;
      t.value !== c.value.length && (t.value = c.value.length);
      const r = [];
      return c.value.map((e, u, l) => {
        r.push((e.path || "").replace(/^\//, ""));
        const i = [...r];
        return d(k, {
          key: e.path || e.label,
          index: u,
          droplist: e.children
        }, {
          default: () => {
            var o;
            return [((o = n["item-render"]) == null ? void 0 : o.call(n, {
              route: e,
              routes: l,
              paths: i
            })) ?? b(e, l, i)];
          }
        });
      });
    }, g = () => {
      var a;
      const r = N(((a = n.default) == null ? void 0 : a.call(n)) ?? []);
      return t.value !== r.length && (t.value = r.length), r.map((e, u) => (e.props = R(e.props ?? {}, {
        index: u
      }), e));
    };
    return () => d("div", {
      role: "list",
      class: h.b()
    }, [n.default ? g() : s()]);
  }
});
export {
  V as default
};
