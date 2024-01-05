import { defineComponent as L, computed as d, openBlock as n, createElementBlock as v, normalizeClass as s, unref as o, createElementVNode as k, createBlock as l, withCtx as c, createCommentVNode as i, Fragment as D, toDisplayString as b, createTextVNode as A } from "vue";
import { headerProps as Y } from "./header.mjs";
import { useNamespace as B } from "@tu-view-plus/hooks";
import { isFunction as y } from "@tu-view-plus/utils";
import { RenderFunction as C } from "@tu-view-plus/constants";
import { DArrowLeft as F, ArrowLeft as R, ArrowRight as T, DArrowRight as V } from "@tu-view-plus/icons-vue";
import { TuIcon as N } from "../../../icon/index.mjs";
const E = { key: 1 }, I = L({
  name: "TuHeader"
}), K = /* @__PURE__ */ L({
  ...I,
  props: Y,
  setup(g) {
    const u = g, t = B("picker"), w = d(() => y(u.onPrev)), P = d(() => y(u.onSuperPrev)), S = d(() => y(u.onNext)), h = d(() => y(u.onSuperNext)), p = d(
      () => ["date", "quarter", "month", "week"].includes(u.mode) && u.value ? u.value.format("YYYY") : ""
    ), m = d(
      () => ["date", "week"].includes(u.mode) && u.value ? u.value.format("MM") : ""
    ), f = (e) => [t.e("header-icon"), { [t.is("icon-hidden")]: !e }];
    return (e, r) => (n(), v("div", {
      class: s(o(t).e("header"))
    }, [
      k("div", {
        class: s(f(P.value)),
        onClick: r[0] || (r[0] = //@ts-ignore
        (...a) => e.onSuperPrev && e.onSuperPrev(...a))
      }, [
        P.value ? (n(), l(o(N), { key: 0 }, {
          default: c(() => [
            e.icons && e.icons.prevDouble ? (n(), l(o(C), {
              key: 0,
              "render-func": e.icons && e.icons.prevDouble
            }, null, 8, ["render-func"])) : (n(), l(o(F), { key: 1 }))
          ]),
          _: 1
        })) : i("", !0)
      ], 2),
      k("div", {
        class: s(f(w.value)),
        onClick: r[1] || (r[1] = //@ts-ignore
        (...a) => e.onPrev && e.onPrev(...a))
      }, [
        w.value ? (n(), l(o(N), { key: 0 }, {
          default: c(() => [
            e.icons && e.icons.prev ? (n(), l(o(C), {
              key: 0,
              "render-func": e.icons && e.icons.prev
            }, null, 8, ["render-func"])) : (n(), l(o(R), { key: 1 }))
          ]),
          _: 1
        })) : i("", !0)
      ], 2),
      k("div", {
        class: s(o(t).e("header-title"))
      }, [
        e.onLabelClick && (p.value || m.value) ? (n(), v(D, { key: 0 }, [
          p.value ? (n(), v("span", {
            key: 0,
            class: s(o(t).e("header-label")),
            onClick: r[2] || (r[2] = () => e.onLabelClick && e.onLabelClick("year"))
          }, b(p.value), 3)) : i("", !0),
          p.value && m.value ? (n(), v("span", E, "-")) : i("", !0),
          m.value ? (n(), v("span", {
            key: 2,
            class: s(o(t).e("header-label")),
            onClick: r[3] || (r[3] = () => e.onLabelClick && e.onLabelClick("month"))
          }, b(m.value), 3)) : i("", !0)
        ], 64)) : (n(), v(D, { key: 1 }, [
          A(b(e.title), 1)
        ], 64))
      ], 2),
      k("div", {
        class: s(f(S.value)),
        onClick: r[4] || (r[4] = //@ts-ignore
        (...a) => e.onNext && e.onNext(...a))
      }, [
        S.value ? (n(), l(o(N), { key: 0 }, {
          default: c(() => [
            e.icons && e.icons.next ? (n(), l(o(C), {
              key: 0,
              "render-func": e.icons && e.icons.next
            }, null, 8, ["render-func"])) : (n(), l(o(T), { key: 1 }))
          ]),
          _: 1
        })) : i("", !0)
      ], 2),
      k("div", {
        class: s(f(h.value)),
        onClick: r[5] || (r[5] = //@ts-ignore
        (...a) => e.onSuperNext && e.onSuperNext(...a))
      }, [
        h.value ? (n(), l(o(N), { key: 0 }, {
          default: c(() => [
            e.icons && e.icons.nextDouble ? (n(), l(o(C), {
              key: 0,
              "render-func": e.icons && e.icons.nextDouble
            }, null, 8, ["render-func"])) : (n(), l(o(V), { key: 1 }))
          ]),
          _: 1
        })) : i("", !0)
      ], 2)
    ], 2));
  }
});
export {
  K as default
};
