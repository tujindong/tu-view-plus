import { defineComponent as Y, useSlots as he, inject as D, ref as g, computed as a, watch as E, reactive as ge, toRefs as ye, provide as be, onMounted as Ie, onBeforeUnmount as Se, openBlock as L, createElementBlock as Fe, normalizeClass as y, unref as p, createVNode as T, withCtx as w, createBlock as Ve, resolveDynamicComponent as _e, normalizeStyle as G, renderSlot as R, createTextVNode as qe, toDisplayString as K, createCommentVNode as U, createElementVNode as O, TransitionGroup as we, nextTick as Re } from "vue";
import Ne from "async-validator";
import { refDebounced as We } from "@vueuse/core";
import { formItemProps as ze } from "./form-item.mjs";
import { clone as H } from "lodash-unified";
import { formContextKey as Me, formItemContextKey as J } from "./constants.mjs";
import { useNamespace as $e, useId as Pe, defaultNamespace as Ae } from "@tu-view-plus/hooks";
import { getProp as N, ensureArray as Q, isString as je, isBoolean as Be, addUnit as X, isFunction as De } from "@tu-view-plus/utils";
import { useFormSize as Ee } from "./hooks/use-form-props.mjs";
import Le from "./form-label-wrap.mjs";
import "../style/form.css";
const Te = ["role", "aria-labelledby"], Ge = Y({
  name: "TuFormItem"
}), xe = /* @__PURE__ */ Y({
  ...Ge,
  props: ze,
  setup(Z, { expose: k }) {
    const s = Z, W = he(), e = D(Me, void 0), C = D(J, void 0), f = Ee(void 0, { formItem: !1 }), u = $e("form"), b = Pe().value, n = g([]), d = g(""), x = We(d, 100), c = g(""), z = g();
    let M, h = !1;
    const ee = !!C, $ = a(() => {
      const r = e == null ? void 0 : e.model;
      if (!(!r || !s.prop))
        return N(r, s.prop).value;
    }), I = a(() => {
      const { required: r } = s, t = [];
      s.rules && t.push(...Q(s.rules));
      const i = e == null ? void 0 : e.rules;
      if (i && s.prop) {
        const l = N(
          i,
          s.prop
        ).value;
        l && t.push(...Q(l));
      }
      if (r !== void 0) {
        const l = t.map((o, m) => [o, m]).filter(([o]) => Object.keys(o).includes("required"));
        if (l.length > 0)
          for (const [o, m] of l)
            o.required !== r && (t[m] = { ...o, required: r });
        else
          t.push({ required: r });
      }
      return t;
    }), re = a(() => I.value.length > 0), P = a(
      () => `${s.label || ""}${(e == null ? void 0 : e.labelSuffix) || ""}`
    ), te = a(
      () => I.value.some((r) => r.required)
    ), se = a(
      () => x.value === "error" && s.showMessage && ((e == null ? void 0 : e.showMessage) ?? !0)
    ), S = a(() => !!(s.label || W.label)), F = a(() => s.for || n.value.length === 1 ? n.value[0] : void 0), V = a(() => !F.value && S.value), ie = a(() => s.prop ? je(s.prop) ? s.prop : s.prop.join(".") : ""), le = a(
      () => Be(s.inlineMessage) ? s.inlineMessage : (e == null ? void 0 : e.inlineMessage) || !1
    ), A = a(() => {
      if ((e == null ? void 0 : e.labelPosition) === "top")
        return {};
      const r = X(s.labelWidth || (e == null ? void 0 : e.labelWidth) || "");
      return r ? { width: r } : {};
    }), ae = a(() => {
      if ((e == null ? void 0 : e.labelPosition) === "top" || e != null && e.inline)
        return {};
      if (!s.label && !s.labelWidth && ee)
        return {};
      const r = X(s.labelWidth || (e == null ? void 0 : e.labelWidth) || "");
      return !s.label && !W.label ? { marginLeft: r } : {};
    }), ue = a(
      () => (e == null ? void 0 : e.requireAsteriskPosition) === "right" ? "asterisk-right" : "asterisk-left"
    ), oe = a(() => ({
      [u.e("item")]: !0,
      [u.em("item", f.value)]: f.value,
      [u.em("item", ue.value)]: !0,
      [u.em("item", "feedback")]: e == null ? void 0 : e.statusIcon,
      [u.is("error")]: d.value === "error",
      [u.is("validating")]: d.value === "validating",
      [u.is("success")]: d.value === "success",
      [u.is("required")]: te.value || s.required,
      [u.is("no-asterisk")]: e == null ? void 0 : e.hideRequiredAsterisk
    })), ne = a(() => ({
      [u.e("item-error")]: !0,
      [u.em("item-error", "inline")]: le.value
    })), de = (r) => I.value.filter((i) => !i.trigger || !r ? !0 : Array.isArray(i.trigger) ? i.trigger.includes(r) : i.trigger === r).map(({ trigger: i, ...l }) => l), v = (r) => {
      d.value = r;
    }, ce = (r) => {
      var l;
      const { errors: t, fields: i } = r;
      (!t || !i) && console.error(r), v("error"), c.value = t ? ((l = t == null ? void 0 : t[0]) == null ? void 0 : l.message) ?? `${s.prop} is required` : "", e == null || e.emit("validate", s.prop, !1, c.value);
    }, pe = () => {
      v("success"), e == null || e.emit("validate", s.prop, !0, "");
    }, ve = async (r) => {
      const t = ie.value;
      return new Ne({
        [t]: r
      }).validate({ [t]: $.value }, { firstFields: !0 }).then(() => (pe(), !0)).catch((l) => (ce(l), Promise.reject(l)));
    }, j = async (r, t) => {
      if (h || !s.prop)
        return !1;
      const i = De(t);
      if (!re.value)
        return t == null || t(!1), !1;
      const l = de(r);
      return l.length === 0 ? (t == null || t(!0), !0) : (v("validating"), ve(l).then(() => (t == null || t(!0), !0)).catch((o) => {
        const { fields: m } = o;
        return t == null || t(!1, m), i ? !1 : Promise.reject(m);
      }));
    }, _ = () => {
      v(""), c.value = "", h = !1;
    }, B = async () => {
      const r = e == null ? void 0 : e.model;
      if (!r || !s.prop)
        return;
      const t = N(r, s.prop);
      h = !0, t.value = H(M), await Re(), _(), h = !1;
    }, me = (r) => {
      n.value.includes(r) || n.value.push(r);
    }, fe = (r) => {
      n.value = n.value.filter((t) => t !== r);
    };
    E(
      () => s.error,
      (r) => {
        c.value = r || "", v(r ? "error" : "");
      },
      { immediate: !0 }
    ), E(
      () => s.validateStatus,
      (r) => v(r || "")
    );
    const q = ge({
      ...ye(s),
      $el: z,
      size: f,
      validateState: d,
      labelId: b,
      inputIds: n,
      isGroup: V,
      hasLabel: S,
      addInputId: me,
      removeInputId: fe,
      resetField: B,
      clearValidate: _,
      validate: j
    });
    return be(J, q), Ie(() => {
      s.prop && (e == null || e.addField(q), M = H($.value));
    }), Se(() => {
      e == null || e.removeField(q);
    }), k({
      size: f,
      validateMessage: c,
      validateState: d,
      validate: j,
      clearValidate: _,
      resetField: B
    }), (r, t) => {
      var i;
      return L(), Fe("div", {
        ref_key: "formItemRef",
        ref: z,
        class: y(oe.value),
        role: V.value ? "group" : void 0,
        "aria-labelledby": V.value ? p(b) : void 0
      }, [
        T(p(Le), {
          "is-auto-width": A.value.width === "auto",
          "update-all": ((i = p(e)) == null ? void 0 : i.labelWidth) === "auto"
        }, {
          default: w(() => [
            S.value ? (L(), Ve(_e(F.value ? "label" : "div"), {
              key: 0,
              id: p(b),
              for: F.value,
              class: y(p(u).e("item-label")),
              style: G(A.value)
            }, {
              default: w(() => [
                R(r.$slots, "label", { label: P.value }, () => [
                  qe(K(P.value), 1)
                ])
              ]),
              _: 3
            }, 8, ["id", "for", "class", "style"])) : U("", !0)
          ]),
          _: 3
        }, 8, ["is-auto-width", "update-all"]),
        O("div", {
          class: y(p(u).e("item-content")),
          style: G(ae.value)
        }, [
          R(r.$slots, "default"),
          T(we, {
            name: `${p(Ae)}-zoom-in-top`
          }, {
            default: w(() => [
              se.value ? R(r.$slots, "error", {
                key: 0,
                error: c.value
              }, () => [
                O("div", {
                  class: y(ne.value)
                }, K(c.value), 3)
              ]) : U("", !0)
            ]),
            _: 3
          }, 8, ["name"])
        ], 6)
      ], 10, Te);
    };
  }
});
export {
  xe as default
};
