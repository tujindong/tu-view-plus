import { defineComponent as x, ref as E, computed as w, onMounted as M, onUnmounted as C, watch as $, createVNode as l, mergeProps as T } from "vue";
import { menuItemProps as y, menuItemEmits as B } from "./menu-item.mjs";
import { useLevel as N } from "./hooks/use-level.mjs";
import { useMenuContext as S } from "./hooks/use-menu-context.mjs";
import { useMenuDataCollectorContext as V } from "./hooks/use-menu-data-collector.mjs";
import { omit as _ } from "@tu-view-plus/utils";
import { useMenu as z } from "./hooks/use-menu.mjs";
import { useNamespace as A } from "@tu-view-plus/hooks";
import K from "scroll-into-view-if-needed";
import L from "./menu-indent.vue.mjs";
import { TuTooltip as O } from "../../tooltip/index.mjs";
import "../style/menu.css";
const Y = /* @__PURE__ */ x({
  name: "TuMenuItem",
  inheritAttrs: !1,
  props: y,
  emits: B,
  setup(e, {
    emit: r
  }) {
    const {
      key: s
    } = z(), {
      level: a
    } = N(), t = S(), c = E(), i = w(() => (t.selectedKeys || []).indexOf(s.value) > -1), o = V();
    M(() => {
      o == null || o.collectMenuItem(s.value);
    }), C(() => {
      o == null || o.removeMenuItem(s.value);
    });
    function m() {
      t.autoScrollIntoView && c.value && i.value && K(c.value, {
        behavior: "smooth",
        block: "nearest",
        scrollMode: "if-needed",
        boundary: document.documentElement,
        ...t.scrollConfig || {}
      });
    }
    let n;
    return M(() => {
      n = setTimeout(() => {
        m();
      }, 500);
    }), C(() => {
      clearTimeout(n);
    }), $([i], () => {
      m();
    }), {
      menuContext: t,
      level: a,
      isSelected: i,
      refItemElement: c,
      onClick(d) {
        e.disabled || (t.onMenuItemClick && t.onMenuItemClick(s.value), r("click", d));
      }
    };
  },
  render() {
    var h, I;
    const e = A("menu"), {
      level: r,
      menuContext: s,
      disabled: a,
      isSelected: t,
      onClick: c
    } = this, {
      collapsed: i,
      inTrigger: o,
      mode: m,
      tooltipProps: n
    } = s, d = i && !o && r === 1, k = m === "vertical" && r > 1, f = ((I = (h = this.$slots).default) == null ? void 0 : I.call(h)) || [], p = k && !o && !i, u = this.$slots.icon && this.$slots.icon(), b = [p && l(L, {
      level: r
    }, null), u && l("span", {
      class: e.e("icon")
    }, [u]), p || u ? l("span", {
      class: [e.e("item-inner"), e.is("title", !!u)]
    }, [f]) : f].filter(Boolean), v = l("div", T({
      ref: "refItemElement",
      class: [e.e("item"), e.is("disabled", a), e.is("selected", t), e.is("has-icon", !!u)]
    }, this.$attrs, {
      onClick: c
    }), [b, t && m === "horizontal" && l("div", {
      class: e.e("selected-label")
    }, null)]);
    if (d) {
      const g = [e.e("item-tooltip"), n == null ? void 0 : n.class];
      return l(O, T({
        trigger: "hover",
        position: "right",
        class: g
      }, _(n || {}, ["class"])), {
        default: () => v,
        content: () => f
      });
    }
    return v;
  }
});
export {
  Y as default
};
