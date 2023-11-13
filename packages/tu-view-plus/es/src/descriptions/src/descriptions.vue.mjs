import { defineComponent as $, useSlots as B, computed as E, provide as T, openBlock as u, createElementBlock as d, normalizeClass as i, unref as p, createElementVNode as m, renderSlot as g, createTextVNode as k, toDisplayString as N, createCommentVNode as V, Fragment as F, renderList as I, createBlock as j } from "vue";
import { descriptionsProps as K } from "./descriptions.mjs";
import { useNamespace as L } from "@tu-view-plus/hooks";
import { flattedChildren as P } from "@tu-view-plus/utils";
import { descriptionsInjectionKey as R } from "./constants.mjs";
import "../../form/index.mjs";
import _ from "./descriptions-row.vue.mjs";
import "../style/descriptions.css";
import { useFormSize as q } from "../../form/src/hooks/use-form-props.mjs";
const A = $({
  name: "TuDescriptions"
}), Y = /* @__PURE__ */ $({
  ...A,
  props: K,
  setup(C) {
    const n = C, r = L("descriptions"), f = B(), h = q(), D = E(() => ({
      [r.b()]: !0,
      [r.m(h.value)]: h.value
    }));
    T(R, n);
    const v = (e, l, t, s = !1) => (e.props || (e.props = {}), l > t && (e.props.span = t), s && (e.props.span = l), e), w = () => {
      var y;
      const e = P((y = f.default) == null ? void 0 : y.call(f)).filter(
        (o) => {
          var a;
          return ((a = o == null ? void 0 : o.type) == null ? void 0 : a.name) === "TuDescriptionsItem";
        }
      ), l = [];
      let t = [], s = n.column, b = 0;
      return e.forEach((o, a) => {
        var S;
        const c = ((S = o.props) == null ? void 0 : S.span) || 1;
        if (a < e.length - 1 && (b += c > s ? s : c), a === e.length - 1) {
          const z = n.column - b % n.column;
          t.push(v(o, z, s, !0)), l.push(t);
          return;
        }
        c < s ? (s -= c, t.push(o)) : (t.push(v(o, c, s)), l.push(t), s = n.column, t = []);
      }), l;
    };
    return (e, l) => (u(), d("div", {
      class: i(D.value)
    }, [
      e.title || e.extra || e.$slots.title || e.$slots.extra ? (u(), d("div", {
        key: 0,
        class: i(p(r).e("header"))
      }, [
        m("div", {
          class: i(p(r).e("title"))
        }, [
          g(e.$slots, "title", {}, () => [
            k(N(e.title), 1)
          ])
        ], 2),
        m("div", {
          class: i(p(r).e("extra"))
        }, [
          g(e.$slots, "extra", {}, () => [
            k(N(e.extra), 1)
          ])
        ], 2)
      ], 2)) : V("", !0),
      m("div", {
        class: i(p(r).e("body"))
      }, [
        m("table", {
          class: i([
            p(r).e("table"),
            { [p(r).is("bordered")]: e.border }
          ])
        }, [
          m("tbody", null, [
            (u(!0), d(F, null, I(w(), (t, s) => (u(), j(_, {
              key: s,
              row: t
            }, null, 8, ["row"]))), 128))
          ])
        ], 2)
      ], 2)
    ], 2));
  }
});
export {
  Y as default
};
