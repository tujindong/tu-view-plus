import { defineComponent as h, computed as F, watch as j, provide as x, reactive as z, toRefs as S, openBlock as $, createElementBlock as q, normalizeClass as B, renderSlot as I } from "vue";
import { formProps as R, formEmits as W } from "./form.mjs";
import { useFormSize as K } from "./hooks/use-form-props.mjs";
import { useNamespace as L } from "@tu-view-plus/hooks";
import { formContextKey as M } from "./constants.mjs";
import { useFormLabelWidth as N, filterFields as d } from "./utils.mjs";
import { debugWarn as a, isFunction as b } from "@tu-view-plus/utils";
import "../style/form.css";
const A = h({
  name: "TuForm"
}), Z = /* @__PURE__ */ h({
  ...A,
  props: R,
  emits: W,
  setup(v, { expose: w, emit: y }) {
    const o = v, E = y, l = L("form"), T = K(), i = [], V = F(() => ({
      [l.b()]: !0,
      [l.m(T.value || "default")]: !0,
      [l.m(`label-${o.labelPosition}`)]: o.labelPosition,
      [l.m("inline")]: o.inline
    })), _ = (e) => {
      i.push(e);
    }, g = (e) => {
      e.prop && i.splice(i.indexOf(e), 1);
    }, m = (e = []) => {
      if (!o.model) {
        a("TuForm", "model is required for resetFields to work.");
        return;
      }
      d(i, e).forEach((t) => t.resetField());
    }, u = (e = []) => {
      d(i, e).forEach((t) => t.clearValidate());
    }, C = F(() => {
      const e = !!o.model;
      return e || a("TuForm", "model is required for validate to work."), e;
    }), O = (e) => {
      if (i.length === 0)
        return [];
      const t = d(i, e);
      return t.length ? t : (a("TuForm", "please pass correct props!"), []);
    }, c = async (e) => f(void 0, e), P = async (e = []) => {
      if (!C.value)
        return !1;
      const t = O(e);
      if (t.length === 0)
        return !0;
      let r = {};
      for (const s of t)
        try {
          await s.validate("");
        } catch (n) {
          r = {
            ...r,
            ...n
          };
        }
      return Object.keys(r).length === 0 ? !0 : Promise.reject(r);
    }, f = async (e = [], t) => {
      const r = !b(t);
      try {
        const s = await P(e);
        return s === !0 && (t == null || t(s)), s;
      } catch (s) {
        if (s instanceof Error)
          throw s;
        const n = s;
        return o.scrollToError && p(Object.keys(n)[0]), t == null || t(!1, n), r && Promise.reject(n);
      }
    }, p = (e) => {
      var r;
      const t = d(i, e)[0];
      t && ((r = t.$el) == null || r.scrollIntoView(o.scrollIntoViewOptions));
    };
    return j(
      () => o.rules,
      () => {
        o.validateOnRuleChange && c().catch((e) => a(e));
      },
      { deep: !0 }
    ), x(
      M,
      z({
        ...S(o),
        emit: E,
        resetFields: m,
        clearValidate: u,
        validateField: f,
        addField: _,
        removeField: g,
        ...N()
      })
    ), w({
      validate: c,
      validateField: f,
      resetFields: m,
      clearValidate: u,
      scrollToField: p
    }), (e, t) => ($(), q("form", {
      class: B(V.value)
    }, [
      I(e.$slots, "default")
    ], 2));
  }
});
export {
  Z as default
};
