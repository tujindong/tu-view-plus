import { defineComponent as v, computed as m, openBlock as t, createElementBlock as r, normalizeClass as o, unref as a, createElementVNode as c, renderSlot as u, createBlock as n, withCtx as b, resolveDynamicComponent as T, createCommentVNode as i, createTextVNode as f, toDisplayString as d } from "vue";
import { resultProps as N } from "./result.mjs";
import { useNamespace as B } from "@tu-view-plus/hooks";
import { TypeComponentsMap as y } from "@tu-view-plus/utils";
import { TuIcon as V } from "../../icon/index.mjs";
import g from "./result-forbidden.vue.mjs";
import h from "./result-not-found.vue.mjs";
import w from "./result-server-error.vue.mjs";
import "../style/result.css";
const z = v({
  name: "TuResult"
}), F = /* @__PURE__ */ v({
  ...z,
  props: N,
  setup($) {
    const l = $, e = B("result"), k = m(() => ({
      [e.e("icon")]: !0,
      [e.e("icon-custom")]: !l.status,
      [e.em("icon", l.status)]: l.status
    })), p = m(() => y[l.status] || ""), C = m(() => {
      const s = l.status;
      return {
        [e.em("icon", s)]: s && y[s]
      };
    });
    return (s, D) => (t(), r("div", {
      class: o(a(e).b())
    }, [
      c("div", {
        class: o(k.value)
      }, [
        c("div", {
          class: o(a(e).e("icon-tip"))
        }, [
          u(s.$slots, "icon", {}, () => [
            p.value && (s.status === "info" || s.status === "success" || s.status === "warning" || s.status === "error") ? (t(), n(a(V), {
              key: 0,
              class: o(C.value),
              size: "40"
            }, {
              default: b(() => [
                (t(), n(T(p.value)))
              ]),
              _: 1
            }, 8, ["class"])) : s.status === "403" ? (t(), n(g, { key: 1 })) : s.status === "404" ? (t(), n(h, { key: 2 })) : s.status === "500" ? (t(), n(w, { key: 3 })) : i("", !0)
          ])
        ], 2)
      ], 2),
      s.title || s.$slots.title ? (t(), r("div", {
        key: 0,
        class: o(a(e).e("title"))
      }, [
        u(s.$slots, "title", {}, () => [
          f(d(s.title), 1)
        ])
      ], 2)) : i("", !0),
      s.subtitle || s.$slots.subtitle ? (t(), r("div", {
        key: 1,
        class: o(a(e).e("subtitle"))
      }, [
        u(s.$slots, "subtitle", {}, () => [
          f(d(s.subtitle), 1)
        ])
      ], 2)) : i("", !0),
      s.$slots.extra ? (t(), r("div", {
        key: 2,
        class: o(a(e).e("extra"))
      }, [
        u(s.$slots, "extra")
      ], 2)) : i("", !0),
      s.$slots.default ? (t(), r("div", {
        key: 3,
        class: o(a(e).e("content"))
      }, [
        u(s.$slots, "default")
      ], 2)) : i("", !0)
    ], 2));
  }
});
export {
  F as default
};
