import { defineComponent as p, toRefs as c, inject as l, computed as s, provide as i, createVNode as t, mergeProps as _ } from "vue";
import { menuProps as v } from "./menu.mjs";
import { SiderInjectionKey as j } from "../../layout/src/context.mjs";
import { MenuInjectionKey as T, LevelInjectionKey as g } from "./context.mjs";
import f from "./base-menu.vue.mjs";
import a from "./overflow-wrap.vue.mjs";
import "../style/menu.css";
const R = /* @__PURE__ */ p({
  name: "TuMenu",
  inheritAttrs: !1,
  components: {
    TuBaseMenu: f,
    TuOverflowWrap: a
  },
  props: v,
  setup(o, {
    attrs: m,
    slots: e
  }) {
    const {
      mode: u
    } = c(o), n = l(j, void 0), d = s(() => (n == null ? void 0 : n.collapsed) || !1);
    return i(T, void 0), i(g, void 0), () => t(f, _({
      inTrigger: !1,
      siderCollapsed: d.value,
      isRoot: !0
    }, o, m), {
      ...e,
      default: u.value === "horizontal" && e.default ? () => t(a, null, {
        default: () => {
          var r;
          return [(r = e.default) == null ? void 0 : r.call(e)];
        }
      }) : e.default
    });
  }
});
export {
  R as default
};
