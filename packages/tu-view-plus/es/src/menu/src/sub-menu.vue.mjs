import { defineComponent as M, toRefs as w, computed as f, toRef as h, createVNode as o, mergeProps as x } from "vue";
import { subMenuProps as C } from "./sub-menu.mjs";
import { useLevel as I } from "./hooks/use-level.mjs";
import { useMenuContext as K } from "./hooks/use-menu-context.mjs";
import { useMenuDataCollector as _ } from "./hooks/use-menu-data-collector.mjs";
import "@tu-view-plus/utils";
import { useMenu as b } from "./hooks/use-menu.mjs";
import { ArrowDown as P, ArrowRight as R } from "@tu-view-plus/icons-vue";
import { TuIcon as y } from "../../icon/index.mjs";
import S from "./sub-menu-pop.vue.mjs";
import k from "./sub-menu-inline.vue.mjs";
import "../style/menu.css";
const E = /* @__PURE__ */ M({
  name: "TuSubMenu",
  props: C,
  setup(e, {
    attrs: l
  }) {
    const {
      key: n
    } = b(), {
      level: d
    } = I(), {
      popup: r
    } = w(e), t = K(), u = f(() => {
      const {
        mode: c,
        collapsed: p,
        inTrigger: m
      } = t;
      return !!(typeof r.value == "function" ? r.value(d.value) : r.value) || p || m || c !== "vertical";
    }), {
      subMenuKeys: s,
      menuItemKeys: a
    } = _({
      key: n.value,
      type: "subMenu"
    }), g = f(() => {
      const c = t.selectedKeys || [], p = (m) => {
        for (let i = 0; i < c.length; i++) {
          const v = c[i];
          if (m.includes(v))
            return !0;
        }
        return !1;
      };
      return p(s.value) || p(a.value);
    });
    return {
      subMenuKeys: s,
      menuItemKeys: a,
      isChildrenSelected: g,
      props: e,
      attrs: l,
      computedKey: n,
      computedPopup: u,
      expandIconDown: h(t, "expandIconDown"),
      expandIconRight: h(t, "expandIconRight")
    };
  },
  render() {
    const {
      props: e,
      attrs: l,
      computedKey: n,
      computedPopup: d,
      expandIconDown: r,
      expandIconRight: t,
      isChildrenSelected: u
    } = this, s = {
      ...this.$slots,
      "expand-icon-down": this.$slots["expand-icon-down"] || r || (() => [o(y, null, {
        default: () => [o(P, null, null)]
      })]),
      "expand-icon-right": this.$slots["expand-icon-right"] || t || (() => [o(y, null, {
        default: () => [o(R, null, null)]
      })])
    };
    return d ? o(S, x({
      key: n,
      title: e.title,
      selectable: e.selectable,
      isChildrenSelected: u,
      popupMaxHeight: e.popupMaxHeight
    }, l), s) : o(k, x({
      key: n,
      title: e.title,
      isChildrenSelected: u
    }, l), s);
  }
});
export {
  E as default
};
