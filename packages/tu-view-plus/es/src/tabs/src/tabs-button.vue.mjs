import { defineComponent as u, computed as y, openBlock as o, createElementBlock as p, normalizeClass as k, unref as e, Fragment as l, createBlock as r, withCtx as a, createVNode as i } from "vue";
import { tabsButtonProps as v, tabsButtonEmits as _ } from "./tabs-button.mjs";
import { useNamespace as h } from "@tu-view-plus/hooks";
import { ArrowRight as w, ArrowLeft as B, ArrowDown as C, ArrowUp as x } from "@tu-view-plus/icons-vue";
import { TuIcon as s } from "../../icon/index.mjs";
import "../style/tabs.css";
const z = u({
  name: "TuTabsButton"
}), I = /* @__PURE__ */ u({
  ...z,
  props: v,
  emits: _,
  setup(m, { emit: d }) {
    const t = m, n = h("tabs"), f = y(() => ({
      [n.e("nav-button")]: !0,
      [n.em("nav-button", "left")]: t.direction === "horizontal" && t.type === "previous",
      [n.em("nav-button", "right")]: t.direction === "horizontal" && t.type === "next",
      [n.em("nav-button", "up")]: t.direction === "vertical" && t.type === "previous",
      [n.em("nav-button", "down")]: t.direction === "vertical" && t.type === "next",
      [n.is("disabled")]: t.disabled
    })), b = () => {
      t.disabled || d("click", t.type);
    };
    return (c, A) => (o(), p("div", {
      class: k(e(f)),
      onClick: b
    }, [
      c.direction === "horizontal" ? (o(), p(l, { key: 0 }, [
        c.type === "next" ? (o(), r(e(s), { key: 0 }, {
          default: a(() => [
            i(e(w))
          ]),
          _: 1
        })) : (o(), r(e(s), { key: 1 }, {
          default: a(() => [
            i(e(B))
          ]),
          _: 1
        }))
      ], 64)) : (o(), p(l, { key: 1 }, [
        c.type === "next" ? (o(), r(e(s), { key: 0 }, {
          default: a(() => [
            i(e(C))
          ]),
          _: 1
        })) : (o(), r(e(s), { key: 1 }, {
          default: a(() => [
            i(e(x))
          ]),
          _: 1
        }))
      ], 64))
    ], 2));
  }
});
export {
  I as default
};
