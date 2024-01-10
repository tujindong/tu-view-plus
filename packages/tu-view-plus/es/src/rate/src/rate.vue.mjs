import { defineComponent as G, inject as ce, ref as I, computed as u, markRaw as g, watch as ie, openBlock as i, createElementBlock as v, unref as s, normalizeClass as f, normalizeStyle as D, Fragment as S, renderList as de, createVNode as B, withCtx as K, withDirectives as L, createBlock as w, resolveDynamicComponent as b, vShow as P, createCommentVNode as T, toDisplayString as me } from "vue";
import { useNamespace as ve } from "@tu-view-plus/hooks";
import { UPDATE_MODEL_EVENT as _, EVENT_CODE as x } from "@tu-view-plus/constants";
import { isArray as M, isObject as W, isString as q, hasClass as U } from "@tu-view-plus/utils";
import "../../form/index.mjs";
import { TuIcon as X } from "../../icon/index.mjs";
import { rateProps as fe, rateEmits as he } from "./rate.mjs";
import "../style/rate.css";
import { formItemContextKey as pe } from "../../form/src/constants.mjs";
import { useFormSize as Ve, useFormDisabled as we } from "../../form/src/hooks/use-form-props.mjs";
import { useFormItemInputId as be } from "../../form/src/hooks/use-form-item.mjs";
const xe = ["id", "aria-label", "aria-labelledby", "aria-valuenow", "aria-valuetext", "aria-valuemax"], ye = ["onMousemove", "onClick"], Ce = G({
  name: "TuRate"
}), Oe = /* @__PURE__ */ G({
  ...Ce,
  props: fe,
  emits: he,
  setup(J, { expose: Q, emit: Y }) {
    const l = J, h = Y, r = ve("rate"), E = ce(pe, void 0), Z = Ve(), d = we(), { inputId: ee, isLabeledByFormItem: H } = be(l, {
      formItemContext: E
    }), t = I(l.modelValue), y = I(-1), m = I(!0), le = u(() => ({
      [r.b()]: !0,
      [r.m(Z.value)]: !0,
      [r.is("disabled")]: d.value
    })), oe = u(() => {
      const e = {};
      return e["--rate-void-color"] = l.voidColor, e["--rate-disabled-void-color"] = l.disabledVoidColor, e["--rate-fill-color"] = N.value, e;
    }), C = (e, o) => {
      const a = (n) => W(n), c = Object.keys(o).map((n) => +n).filter((n) => {
        const V = o[n];
        return (a(V) ? V.excluded : !1) ? e < n : e <= n;
      }).sort((n, V) => n - V), p = o[c[0]];
      return a(p) && p.value || p;
    }, k = u(() => {
      let e = "";
      return l.showScore ? e = l.scoreTemplate.replace(
        /\{\s*value\s*\}/,
        d.value ? `${l.modelValue}` : `${t.value}`
      ) : l.showText && (e = l.texts[Math.ceil(t.value) - 1]), e;
    }), F = u(
      () => l.modelValue * 100 - Math.floor(l.modelValue) * 100
    ), ae = u(
      () => M(l.colors) ? {
        [l.lowThreshold]: l.colors[0],
        [l.highThreshold]: { value: l.colors[1], excluded: !0 },
        [l.max]: l.colors[2]
      } : l.colors
    ), N = u(() => {
      const e = C(t.value, ae.value);
      return W(e) ? "" : e;
    }), te = u(() => {
      let e = "";
      return d.value ? e = `${F.value}%` : l.allowHalf && (e = "50%"), {
        color: N.value,
        width: e
      };
    }), O = u(() => {
      let e = M(l.icons) ? [...l.icons] : { ...l.icons };
      return e = g(e), M(e) ? {
        [l.lowThreshold]: e[0],
        [l.highThreshold]: {
          value: e[1],
          excluded: !0
        },
        [l.max]: e[2]
      } : e;
    }), re = u(
      () => C(l.modelValue, O.value)
    ), R = u(
      () => d.value ? q(l.disabledVoidIcon) ? l.disabledVoidIcon : g(l.disabledVoidIcon) : q(l.voidIcon) ? l.voidIcon : g(l.voidIcon)
    ), se = u(
      () => C(t.value, O.value)
    ), $ = (e) => {
      const o = d.value && F.value > 0 && e - 1 < l.modelValue && e > l.modelValue, a = l.allowHalf && m.value && e - 0.5 <= t.value && e > t.value;
      return o || a;
    }, j = (e) => {
      l.clearable && e === l.modelValue && (e = 0), h(_, e), l.modelValue !== e && h("change", e);
    }, ne = (e) => {
      d.value || (l.allowHalf && m.value ? j(t.value) : j(e));
    }, ue = (e) => {
      if (d.value)
        return;
      let o = t.value;
      const a = e.code;
      return a === x.up || a === x.right ? (l.allowHalf ? o += 0.5 : o += 1, e.stopPropagation(), e.preventDefault()) : (a === x.left || a === x.down) && (l.allowHalf ? o -= 0.5 : o -= 1, e.stopPropagation(), e.preventDefault()), o = o < 0 ? 0 : o, o = o > l.max ? l.max : o, h(_, o), h("change", o), o;
    }, z = (e, o) => {
      if (!d.value) {
        if (l.allowHalf && o) {
          let a = o.target;
          U(a, r.e("item")) && (a = a.querySelector(`.${r.e("icon")}`)), (a.clientWidth === 0 || U(a, r.e("decimal"))) && (a = a.parentNode), m.value = o.offsetX * 2 <= a.clientWidth, t.value = m.value ? e - 0.5 : e;
        } else
          t.value = e;
        y.value = e;
      }
    }, A = () => {
      d.value || (l.allowHalf && (m.value = l.modelValue !== Math.floor(l.modelValue)), t.value = l.modelValue, y.value = -1);
    };
    return ie(
      () => l.modelValue,
      (e) => {
        t.value = e, m.value = l.modelValue !== Math.floor(l.modelValue);
      }
    ), l.modelValue || h(_, 0), Q({
      /** @description set current value */
      handleSetCurrentValue: z,
      /** @description reset current value */
      handleResetCurrentValue: A
    }), (e, o) => {
      var a;
      return i(), v("div", {
        role: "slider",
        id: s(ee),
        class: f(le.value),
        "aria-label": s(H) ? void 0 : e.label || "rating",
        "aria-labelledby": s(H) ? (a = s(E)) == null ? void 0 : a.labelId : void 0,
        "aria-valuenow": t.value,
        "aria-valuetext": k.value || void 0,
        "aria-valuemin": "0",
        "aria-valuemax": e.max,
        tabindex: "0",
        style: D(oe.value),
        onKeydown: ue
      }, [
        (i(!0), v(S, null, de(e.max, (c, p) => (i(), v("span", {
          key: p,
          class: f(s(r).e("item")),
          onMousemove: (n) => z(c, n),
          onMouseleave: A,
          onClick: (n) => ne(c)
        }, [
          B(s(X), {
            class: f([
              s(r).e("icon"),
              { hover: y.value === c },
              s(r).is("active", c <= t.value)
            ])
          }, {
            default: K(() => [
              $(c) ? T("", !0) : (i(), v(S, { key: 0 }, [
                L((i(), w(b(se.value), null, null, 512)), [
                  [P, c <= t.value]
                ]),
                L((i(), w(b(R.value), null, null, 512)), [
                  [P, !(c <= t.value)]
                ])
              ], 64)),
              $(c) ? (i(), v(S, { key: 1 }, [
                (i(), w(b(R.value), {
                  class: f([s(r).em("decimal", "box")])
                }, null, 8, ["class"])),
                B(s(X), {
                  style: D(te.value),
                  class: f([s(r).e("icon"), s(r).e("decimal")])
                }, {
                  default: K(() => [
                    (i(), w(b(re.value)))
                  ]),
                  _: 1
                }, 8, ["style", "class"])
              ], 64)) : T("", !0)
            ]),
            _: 2
          }, 1032, ["class"])
        ], 42, ye))), 128)),
        e.showText || e.showScore ? (i(), v("span", {
          key: 0,
          class: f(s(r).e("text")),
          style: D({ color: e.textColor })
        }, me(k.value), 7)) : T("", !0)
      ], 46, xe);
    };
  }
});
export {
  Oe as default
};
