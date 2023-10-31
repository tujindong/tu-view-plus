import { defineComponent as u, computed as k, openBlock as o, createElementBlock as l, normalizeClass as v, Fragment as p, createBlock as r, unref as e, withCtx as i, createVNode as a } from "vue";
import { tabsButtonProps as _, tabsButtonEmits as h } from "./tabs-button.mjs";
import { useNamespace as w } from "@tu-view-plus/hooks";
import { ArrowRight as B, ArrowLeft as C, ArrowDown as x, ArrowUp as z } from "@tu-view-plus/icons-vue";
import { TuIcon as s } from "../../icon/index.mjs";
import "../style/tabs.css";
const A = u({
  name: "TuTabsButton"
}), L = /* @__PURE__ */ u({
  ...A,
  props: _,
  emits: h,
  setup(m, { emit: d }) {
    const t = m, f = d, n = w("tabs"), b = k(() => ({
      [n.e("nav-button")]: !0,
      [n.em("nav-button", "left")]: t.direction === "horizontal" && t.type === "previous",
      [n.em("nav-button", "right")]: t.direction === "horizontal" && t.type === "next",
      [n.em("nav-button", "up")]: t.direction === "vertical" && t.type === "previous",
      [n.em("nav-button", "down")]: t.direction === "vertical" && t.type === "next",
      [n.is("disabled")]: t.disabled
    })), y = () => {
      t.disabled || f("click", t.type);
    };
    return (c, T) => (o(), l("div", {
      class: v(b.value),
      onClick: y
    }, [
      c.direction === "horizontal" ? (o(), l(p, { key: 0 }, [
        c.type === "next" ? (o(), r(e(s), { key: 0 }, {
          default: i(() => [
            a(e(B))
          ]),
          _: 1
        })) : (o(), r(e(s), { key: 1 }, {
          default: i(() => [
            a(e(C))
          ]),
          _: 1
        }))
      ], 64)) : (o(), l(p, { key: 1 }, [
        c.type === "next" ? (o(), r(e(s), { key: 0 }, {
          default: i(() => [
            a(e(x))
          ]),
          _: 1
        })) : (o(), r(e(s), { key: 1 }, {
          default: i(() => [
            a(e(z))
          ]),
          _: 1
        }))
      ], 64))
    ], 2));
  }
});
export {
  L as default
};
