import { defineComponent as W, shallowRef as ne, useSlots as te, computed as a, useAttrs as y, withDirectives as re, openBlock as l, createElementBlock as m, mergeProps as H, unref as e, normalizeClass as i, renderSlot as k, createCommentVNode as p, createElementVNode as w, createBlock as u, withCtx as I, resolveDynamicComponent as le, withModifiers as ae, createVNode as ie, vShow as pe } from "vue";
import { inputProps as ue, inputEmits as de } from "./input.mjs";
import { TuIcon as S } from "../../icon/index.mjs";
import { useNamespace as T, useComponentAttrs as me } from "@tu-view-plus/hooks";
import { Close as fe, View as ve, Hide as ye } from "@tu-view-plus/icons-vue";
import "../../form/index.mjs";
import we from "./use-input.mjs";
import "../style/input.css";
import { useFormSize as Ce, useFormDisabled as be } from "../../form/src/hooks/use-form-props.mjs";
import { useFormItem as ce, useFormItemInputId as ke } from "../../form/src/hooks/use-form-item.mjs";
const Ie = ["role"], Se = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"], he = W({
  name: "TuInput"
}), De = /* @__PURE__ */ W({
  ...he,
  props: ue,
  emits: de,
  setup(j, { emit: G }) {
    const t = j, h = ne(), O = te(), r = T("input"), V = T("input-group"), P = Ce(), d = be(), F = me({
      excludeKeys: a(() => Object.keys(R.value))
    }), { form: C, formItem: f } = ce(), { inputId: U } = ke(t, {
      formItemContext: f
    }), {
      isHovering: q,
      isFocused: b,
      isPasswordVisible: g,
      nativeInputValue: c,
      focus: v,
      handleClear: J,
      handleMouseEnter: x,
      handleMouseLeave: B,
      handleCompositionStart: M,
      handleCompositionUpdate: $,
      handleCompositionEnd: E,
      handleInput: A,
      handleFocus: D,
      handleBlur: N,
      handleChange: z,
      handleKeydown: K,
      handlePasswordVisible: Q
    } = we(t, G, h), X = a(() => (f == null ? void 0 : f.validateState) || ""), Y = a(() => (C == null ? void 0 : C.statusIcon) ?? !1), L = a(
      () => t.clearable && !d.value && !t.readonly && !!c.value && (b.value || q.value)
    ), Z = a(
      () => t.showPassword && !d.value && !t.readonly && !!c.value && (!!c.value || b.value)
    ), _ = a(
      () => t.showWordLimit && !!F.value.maxlength && t.type === "text" && !d.value && !t.readonly && !t.showPassword
    ), ee = a(
      () => !!O.suffix || !!t.suffixIcon || L.value || t.showPassword || _.value || !!X.value && Y.value
    ), oe = a(() => ({
      [r.b()]: !0,
      [r.m(P.value)]: P.value,
      [r.is("disabled")]: d.value
    })), se = a(() => [
      y().style,
      t.inputStyle
    ]), R = a(() => {
      const o = {};
      return t.containerRole === "combobox" && (o["aria-haspopup"] = y()["aria-haspopup"], o["aria-owns"] = y()["aria-owns"], o["aria-expanded"] = y()["aria-expanded"]), o;
    });
    return (o, s) => re((l(), m("div", H(e(R), {
      class: e(oe),
      style: e(se),
      role: o.containerRole,
      onMouseenter: s[11] || (s[11] = //@ts-ignore
      (...n) => e(x) && e(x)(...n)),
      onMouseleave: s[12] || (s[12] = //@ts-ignore
      (...n) => e(B) && e(B)(...n))
    }), [
      o.$slots.prepend ? (l(), m("div", {
        key: 0,
        class: i(e(V).e("prepend"))
      }, [
        k(o.$slots, "prepend")
      ], 2)) : p("", !0),
      w("div", {
        class: i([e(r).e("wrapper"), { [e(r).is("focus")]: e(b) }])
      }, [
        o.$slots.prefix || o.prefixIcon ? (l(), m("span", {
          key: 0,
          class: i(e(r).e("prefix"))
        }, [
          w("span", {
            class: i(e(r).e("prefix-inner")),
            onClick: s[0] || (s[0] = //@ts-ignore
            (...n) => e(v) && e(v)(...n))
          }, [
            k(o.$slots, "prefix"),
            o.prefixIcon ? (l(), u(e(S), {
              key: 0,
              class: i(e(r).e("icon"))
            }, {
              default: I(() => [
                (l(), u(le(o.prefixIcon)))
              ]),
              _: 1
            }, 8, ["class"])) : p("", !0)
          ], 2)
        ], 2)) : p("", !0),
        w("input", H({
          ref_key: "input",
          ref: h
        }, e(F), {
          id: e(U),
          class: e(r).e("inner"),
          type: o.showPassword ? e(g) ? "text" : "password" : o.type,
          disabled: e(d),
          formatter: o.formatter,
          parser: o.parser,
          readonly: o.readonly,
          autocomplete: o.autocomplete,
          tabindex: o.tabindex,
          "aria-label": o.label,
          placeholder: o.placeholder,
          style: o.inputStyle,
          form: t.form,
          onCompositionstart: s[1] || (s[1] = //@ts-ignore
          (...n) => e(M) && e(M)(...n)),
          onCompositionupdate: s[2] || (s[2] = //@ts-ignore
          (...n) => e($) && e($)(...n)),
          onCompositionend: s[3] || (s[3] = //@ts-ignore
          (...n) => e(E) && e(E)(...n)),
          onInput: s[4] || (s[4] = //@ts-ignore
          (...n) => e(A) && e(A)(...n)),
          onFocus: s[5] || (s[5] = //@ts-ignore
          (...n) => e(D) && e(D)(...n)),
          onBlur: s[6] || (s[6] = //@ts-ignore
          (...n) => e(N) && e(N)(...n)),
          onChange: s[7] || (s[7] = //@ts-ignore
          (...n) => e(z) && e(z)(...n)),
          onKeydown: s[8] || (s[8] = //@ts-ignore
          (...n) => e(K) && e(K)(...n))
        }), null, 16, Se),
        e(ee) ? (l(), m("span", {
          key: 1,
          class: i(e(r).e("suffix"))
        }, [
          w("span", {
            class: i(e(r).e("suffix-inner")),
            onClick: s[10] || (s[10] = //@ts-ignore
            (...n) => e(v) && e(v)(...n))
          }, [
            e(L) ? (l(), u(e(S), {
              key: 0,
              class: i([e(r).e("icon"), e(r).em("icon", "clear")]),
              onMousedown: s[9] || (s[9] = ae(() => {
              }, ["prevent"])),
              onClick: e(J)
            }, {
              default: I(() => [
                ie(e(fe))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : p("", !0),
            e(Z) ? (l(), u(e(S), {
              key: 1,
              class: i([e(r).e("icon"), e(r).em("icon", "password")]),
              onClick: e(Q)
            }, {
              default: I(() => [
                e(g) ? (l(), u(e(ve), { key: 0 })) : (l(), u(e(ye), { key: 1 }))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : p("", !0)
          ], 2)
        ], 2)) : p("", !0)
      ], 2),
      o.$slots.append ? (l(), m("div", {
        key: 1,
        class: i(e(V).e("append"))
      }, [
        k(o.$slots, "append")
      ], 2)) : p("", !0)
    ], 16, Ie)), [
      [pe, o.type !== "hidden"]
    ]);
  }
});
export {
  De as default
};
