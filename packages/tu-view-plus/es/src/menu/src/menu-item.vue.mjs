import { defineComponent as E, ref as g, computed as w, onMounted as M, onUnmounted as C, watch as $, createVNode as i, mergeProps as T } from "vue";
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
const Y = /* @__PURE__ */ E({
  name: "TuMenuItem",
  inheritAttrs: !1,
  props: y,
  emits: B,
  setup(e, {
    emit: c
  }) {
    const {
      key: l
    } = z(), {
      level: a
    } = N(), t = S(), m = g(), n = w(() => (t.selectedKeys || []).indexOf(l.value) > -1), o = V();
    M(() => {
      o == null || o.collectMenuItem(l.value);
    }), C(() => {
      o == null || o.removeMenuItem(l.value);
    });
    function r() {
      t.autoScrollIntoView && m.value && n.value && K(m.value, {
        behavior: "smooth",
        block: "nearest",
        scrollMode: "if-needed",
        boundary: document.documentElement,
        ...t.scrollConfig || {}
      });
    }
    let s;
    return M(() => {
      s = setTimeout(() => {
        r();
      }, 500);
    }), C(() => {
      clearTimeout(s);
    }), $([n], () => {
      r();
    }), {
      menuContext: t,
      level: a,
      isSelected: n,
      refItemElement: m,
      onClick(d) {
        e.disabled || (t.onMenuItemClick && t.onMenuItemClick(l.value), c("click", d));
      }
    };
  },
  render() {
    var h, I;
    const e = A("menu"), {
      level: c,
      menuContext: l,
      disabled: a,
      isSelected: t,
      onClick: m
    } = this, {
      collapsed: n,
      inTrigger: o,
      mode: r,
      tooltipProps: s
    } = l, d = n && !o && c === 1, k = r === "vertical" && c > 1, f = ((I = (h = this.$slots).default) == null ? void 0 : I.call(h)) || [], p = k && !o && !n, u = this.$slots.icon && this.$slots.icon(), b = [p && i(L, {
      level: c
    }, null), u && i("span", {
      class: e.e("icon")
    }, [u]), !n && (p || u ? i("span", {
      class: [e.e("item-inner"), e.is("title", !!u)]
    }, [f]) : f)].filter(Boolean), v = i("div", T({
      ref: "refItemElement",
      class: [e.e("item"), e.is("disabled", a), e.is("selected", t), e.is("has-icon", !!u)]
    }, this.$attrs, {
      onClick: m
    }), [b, t && r === "horizontal" && i("div", {
      class: e.e("selected-label")
    }, null)]);
    if (d) {
      const x = [e.e("item-tooltip"), s == null ? void 0 : s.class];
      return i(O, T({
        position: "right",
        class: x
      }, _(s || {}, ["class"])), {
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
