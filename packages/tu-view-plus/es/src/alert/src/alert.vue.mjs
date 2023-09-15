import { defineComponent as c, ref as u, computed as a, openBlock as r, createBlock as n, Transition as d, unref as t, withCtx as m, withDirectives as _, createElementVNode as C, normalizeClass as v, resolveDynamicComponent as h, createCommentVNode as w, vShow as y } from "vue";
import { alertProps as N, alertEmits as T } from "./alert.mjs";
import { useNamespace as k, defaultNamespace as z } from "@tu-view-plus/hooks";
import { TypeComponentsMap as b } from "@tu-view-plus/utils";
import { TuIcon as x } from "../../icon/index.mjs";
import "../style/alert.css";
const A = c({
  name: "TuAlert"
}), $ = /* @__PURE__ */ c({
  ...A,
  props: N,
  emits: T,
  setup(i, { emit: B }) {
    const e = i, o = k("alert"), l = u(!1), p = a(() => ({
      [o.b()]: !0,
      [o.m(e.effect)]: e.effect,
      [o.m(e.size)]: e.size,
      [o.is("center")]: e.center
    })), s = a(() => b[e.type]);
    return (f, D) => (r(), n(d, {
      name: `${t(z)}-fade`
    }, {
      default: m(() => [
        _(C("div", {
          role: "alert",
          class: v(t(p))
        }, [
          f.showIcon && t(s) ? (r(), n(t(x), { key: 0 }, {
            default: m(() => [
              (r(), n(h(t(s))))
            ]),
            _: 1
          })) : w("", !0)
        ], 2), [
          [y, l.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
export {
  $ as default
};
