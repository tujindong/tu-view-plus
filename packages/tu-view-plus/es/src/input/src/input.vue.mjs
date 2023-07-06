import { defineComponent as z, useSlots as Z, computed as r, useAttrs as f, withDirectives as _, openBlock as i, createElementBlock as p, mergeProps as D, unref as e, normalizeClass as l, renderSlot as y, createCommentVNode as u, createElementVNode as b, createBlock as M, withCtx as ee, resolveDynamicComponent as oe, vShow as se } from "vue";
import { isNil as te } from "lodash-unified";
import { inputProps as ne, inputEmits as re } from "./input.mjs";
import { TuIcon as ae } from "../../icon/index.mjs";
import { useNamespace as N, useComponentAttrs as ie } from "@tu-view-plus/hooks";
import le from "./use-input.mjs";
import "../../form/index.mjs";
import "../style/input.css";
import { useFormSize as pe, useFormDisabled as ue } from "../../form/src/hooks/use-form-props.mjs";
import { useFormItem as de, useFormItemInputId as me } from "../../form/src/hooks/use-form-item.mjs";
const fe = ["role"], ve = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"], ye = z({
  name: "TuInput"
}), xe = /* @__PURE__ */ z({
  ...ye,
  props: ne,
  emits: re,
  setup(K, { emit: L }) {
    const n = K, T = Z(), a = N("input"), w = N("input-group"), I = pe(), d = ue(), R = r(
      () => n.showPassword ? G ? "text" : "password" : n.type
    ), C = ie({
      excludeKeys: r(() => Object.keys(A.value))
    }), { form: v, formItem: m } = de(), { inputId: W } = me(n, {
      formItemContext: m
    }), {
      isHovering: j,
      isFocused: c,
      isPasswordVisible: G,
      focus: S,
      handleMouseEnter: h,
      handleMouseLeave: k,
      handleCompositionStart: V,
      handleCompositionUpdate: g,
      handleCompositionEnd: x,
      handleInput: F,
      handleFocus: B,
      handleBlur: P,
      handleChange: $,
      handleKeydown: E
    } = le(n, L), H = r(
      () => te(n.modelValue) ? "" : String(n.modelValue)
    ), O = r(() => (m == null ? void 0 : m.validateState) || ""), U = r(() => (v == null ? void 0 : v.statusIcon) ?? !1), q = r(
      () => n.clearable && !d.value && !n.readonly && H.value && (c.value || j.value)
    ), J = r(
      () => n.showWordLimit && C.value.maxlength && n.type === "text" && !d.value && !n.readonly && !n.showPassword
    ), Q = r(
      () => T.suffix || n.suffixIcon || q.value || n.showPassword || J.value || O.value && U.value
    ), X = r(() => ({
      [a.b()]: !0,
      [a.m(I.value)]: I.value,
      [a.is("disabled")]: d.value
    })), Y = r(() => [
      f().style,
      n.inputStyle
    ]), A = r(() => {
      const o = {};
      return n.containerRole === "combobox" && (o["aria-haspopup"] = f()["aria-haspopup"], o["aria-owns"] = f()["aria-owns"], o["aria-expanded"] = f()["aria-expanded"]), o;
    });
    return (o, s) => _((i(), p("div", D(e(A), {
      class: e(X),
      style: e(Y),
      role: o.containerRole,
      onMouseenter: s[9] || (s[9] = //@ts-ignore
      (...t) => e(h) && e(h)(...t)),
      onMouseleave: s[10] || (s[10] = //@ts-ignore
      (...t) => e(k) && e(k)(...t))
    }), [
      o.$slots.prepend ? (i(), p("div", {
        key: 0,
        class: l(e(w).e("prepend"))
      }, [
        y(o.$slots, "prepend")
      ], 2)) : u("", !0),
      b("div", {
        class: l([e(a).e("wrapper"), { [e(a).is("focus")]: e(c) }])
      }, [
        o.$slots.prefix || o.prefixIcon ? (i(), p("span", {
          key: 0,
          class: l(e(a).e("prefix"))
        }, [
          b("span", {
            class: l(e(a).e("prefix-inner")),
            onClick: s[0] || (s[0] = //@ts-ignore
            (...t) => e(S) && e(S)(...t))
          }, [
            y(o.$slots, "prefix"),
            o.prefixIcon ? (i(), M(e(ae), {
              key: 0,
              class: l(e(a).e("icon"))
            }, {
              default: ee(() => [
                (i(), M(oe(o.prefixIcon)))
              ]),
              _: 1
            }, 8, ["class"])) : u("", !0)
          ], 2)
        ], 2)) : u("", !0),
        b("input", D({ ref: "input" }, e(C), {
          id: e(W),
          class: e(a).e("inner"),
          type: e(R),
          disabled: e(d),
          formatter: o.formatter,
          parser: o.parser,
          readonly: o.readonly,
          autocomplete: o.autocomplete,
          tabindex: o.tabindex,
          "aria-label": o.label,
          placeholder: o.placeholder,
          style: o.inputStyle,
          form: n.form,
          onCompositionstart: s[1] || (s[1] = //@ts-ignore
          (...t) => e(V) && e(V)(...t)),
          onCompositionupdate: s[2] || (s[2] = //@ts-ignore
          (...t) => e(g) && e(g)(...t)),
          onCompositionend: s[3] || (s[3] = //@ts-ignore
          (...t) => e(x) && e(x)(...t)),
          onInput: s[4] || (s[4] = //@ts-ignore
          (...t) => e(F) && e(F)(...t)),
          onFocus: s[5] || (s[5] = //@ts-ignore
          (...t) => e(B) && e(B)(...t)),
          onBlur: s[6] || (s[6] = //@ts-ignore
          (...t) => e(P) && e(P)(...t)),
          onChange: s[7] || (s[7] = //@ts-ignore
          (...t) => e($) && e($)(...t)),
          onKeydown: s[8] || (s[8] = //@ts-ignore
          (...t) => e(E) && e(E)(...t))
        }), null, 16, ve),
        e(Q) ? (i(), p("span", {
          key: 1,
          class: l(e(a).e("suffix"))
        }, null, 2)) : u("", !0)
      ], 2),
      o.$slots.append ? (i(), p("div", {
        key: 1,
        class: l(e(w).e("append"))
      }, [
        y(o.$slots, "append")
      ], 2)) : u("", !0)
    ], 16, fe)), [
      [se, o.type !== "hidden"]
    ]);
  }
});
export {
  xe as default
};
