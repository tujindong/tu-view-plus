import { defineComponent as Z, shallowRef as fe, useSlots as ve, computed as i, useAttrs as m, onMounted as ce, withDirectives as ye, openBlock as l, createElementBlock as d, mergeProps as Q, unref as e, normalizeClass as r, renderSlot as S, createCommentVNode as p, createElementVNode as b, createBlock as u, withCtx as I, resolveDynamicComponent as $, Fragment as we, withModifiers as be, createVNode as Ie, toDisplayString as X, vShow as Ce } from "vue";
import { inputProps as ke, inputEmits as he } from "./input.mjs";
import { TuIcon as C } from "../../icon/index.mjs";
import { useNamespace as Y, useComponentAttrs as ge } from "@tu-view-plus/hooks";
import { ValidateComponentsMap as Se, debugWarn as Ve } from "@tu-view-plus/utils";
import { Close as xe, View as Pe, Hide as Fe } from "@tu-view-plus/icons-vue";
import "../../form/index.mjs";
import Me from "./use-input.mjs";
import "../style/input.css";
import { useFormSize as $e, useFormDisabled as Be } from "../../form/src/hooks/use-form-props.mjs";
import { useFormItem as Ee, useFormItemInputId as Ne } from "../../form/src/hooks/use-form-item.mjs";
const Ae = ["role"], De = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"], Le = Z({
  name: "TuInput",
  inheritAttrs: !1
}), Je = /* @__PURE__ */ Z({
  ...Le,
  props: ke,
  emits: he,
  setup(_, { expose: ee, emit: se }) {
    const a = _, V = fe(), f = ve(), t = Y("input"), v = Y("input-group"), B = $e(), c = Be(), k = ge({
      excludeKeys: i(() => Object.keys(J.value))
    }), { form: x, formItem: h } = Ee(), { inputId: oe } = Ne(a, {
      formItemContext: h
    }), {
      inputRef: ne,
      isHovering: te,
      isFocused: P,
      isPasswordVisible: E,
      textLength: N,
      nativeInputValue: F,
      focus: y,
      blur: ae,
      select: le,
      clear: A,
      handleMouseEnter: D,
      handleMouseLeave: L,
      handleCompositionStart: R,
      handleCompositionUpdate: z,
      handleCompositionEnd: K,
      handleInput: T,
      handleFocus: W,
      handleBlur: H,
      handleChange: j,
      handleKeydown: G,
      handlePasswordVisible: re,
      setNativeInputValue: ie
    } = Me(a, se, V), w = i(() => (h == null ? void 0 : h.validateState) || ""), O = i(() => (x == null ? void 0 : x.statusIcon) ?? !1), U = i(
      () => w.value && Se[w.value]
    ), pe = i(
      () => !!g.value && N.value > Number(k.value.maxlength)
    ), M = i(
      () => a.clearable && !c.value && !a.readonly && !!F.value && (P.value || te.value)
    ), q = i(
      () => a.showPassword && !c.value && !a.readonly && !!F.value && (!!F.value || P.value)
    ), g = i(
      () => a.showWordLimit && !!k.value.maxlength && a.type === "text" && !c.value && !a.readonly && !a.showPassword
    ), ue = i(
      () => !!f.suffix || !!a.suffixIcon || M.value || a.showPassword || g.value || !!w.value && O.value
    ), de = i(() => ({
      [t.b()]: !0,
      [t.m(B.value)]: B.value,
      [t.is("disabled")]: c.value,
      [t.is("exceed")]: pe.value,
      [v.b()]: f.prepend || f.append,
      [v.m("prepend")]: f.prepend,
      [v.m("append")]: f.append,
      [m().class]: m().class
    })), me = i(() => [
      m().style,
      a.inputStyle
    ]), J = i(() => {
      const s = {};
      return a.containerRole === "combobox" && (s["aria-haspopup"] = m()["aria-haspopup"], s["aria-owns"] = m()["aria-owns"], s["aria-expanded"] = m()["aria-expanded"]), s;
    });
    return ce(() => {
      !a.formatter && a.parser && Ve(
        "TuInput",
        "If you set the parser, you also need to set the formatter."
      ), ie();
    }), ee({
      input: V,
      ref: ne,
      focus: y,
      blur: ae,
      select: le,
      clear: A
    }), (s, o) => ye((l(), d("div", Q(e(J), {
      class: e(de),
      style: e(me),
      role: s.containerRole,
      onMouseenter: o[11] || (o[11] = //@ts-ignore
      (...n) => e(D) && e(D)(...n)),
      onMouseleave: o[12] || (o[12] = //@ts-ignore
      (...n) => e(L) && e(L)(...n))
    }), [
      s.$slots.prepend ? (l(), d("div", {
        key: 0,
        class: r(e(v).e("prepend"))
      }, [
        S(s.$slots, "prepend")
      ], 2)) : p("", !0),
      b("div", {
        class: r([e(t).e("wrapper"), { [e(t).is("focus")]: e(P) }])
      }, [
        s.$slots.prefix || s.prefixIcon ? (l(), d("span", {
          key: 0,
          class: r(e(t).e("prefix"))
        }, [
          b("span", {
            class: r(e(t).e("prefix-inner")),
            onClick: o[0] || (o[0] = //@ts-ignore
            (...n) => e(y) && e(y)(...n))
          }, [
            S(s.$slots, "prefix"),
            s.prefixIcon ? (l(), u(e(C), {
              key: 0,
              class: r(e(t).e("icon"))
            }, {
              default: I(() => [
                (l(), u($(s.prefixIcon)))
              ]),
              _: 1
            }, 8, ["class"])) : p("", !0)
          ], 2)
        ], 2)) : p("", !0),
        b("input", Q({
          ref_key: "input",
          ref: V
        }, e(k), {
          id: e(oe),
          class: e(t).e("inner"),
          type: s.showPassword ? e(E) ? "text" : "password" : s.type,
          disabled: e(c),
          formatter: s.formatter,
          parser: s.parser,
          readonly: s.readonly,
          autocomplete: s.autocomplete,
          tabindex: s.tabindex,
          "aria-label": s.label,
          placeholder: s.placeholder,
          style: s.inputStyle,
          form: a.form,
          onCompositionstart: o[1] || (o[1] = //@ts-ignore
          (...n) => e(R) && e(R)(...n)),
          onCompositionupdate: o[2] || (o[2] = //@ts-ignore
          (...n) => e(z) && e(z)(...n)),
          onCompositionend: o[3] || (o[3] = //@ts-ignore
          (...n) => e(K) && e(K)(...n)),
          onInput: o[4] || (o[4] = //@ts-ignore
          (...n) => e(T) && e(T)(...n)),
          onFocus: o[5] || (o[5] = //@ts-ignore
          (...n) => e(W) && e(W)(...n)),
          onBlur: o[6] || (o[6] = //@ts-ignore
          (...n) => e(H) && e(H)(...n)),
          onChange: o[7] || (o[7] = //@ts-ignore
          (...n) => e(j) && e(j)(...n)),
          onKeydown: o[8] || (o[8] = //@ts-ignore
          (...n) => e(G) && e(G)(...n))
        }), null, 16, De),
        e(ue) ? (l(), d("span", {
          key: 1,
          class: r(e(t).e("suffix"))
        }, [
          b("span", {
            class: r(e(t).e("suffix-inner")),
            onClick: o[10] || (o[10] = //@ts-ignore
            (...n) => e(y) && e(y)(...n))
          }, [
            !e(M) || !e(q) || !e(g) ? (l(), d(we, { key: 0 }, [
              S(s.$slots, "suffix"),
              s.suffixIcon ? (l(), u(e(C), {
                key: 0,
                class: r(e(t).e("icon"))
              }, {
                default: I(() => [
                  (l(), u($(s.suffixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : p("", !0)
            ], 64)) : p("", !0),
            e(M) ? (l(), u(e(C), {
              key: 1,
              class: r([e(t).e("icon"), e(t).em("icon", "clear")]),
              onMousedown: o[9] || (o[9] = be(() => {
              }, ["prevent"])),
              onClick: e(A)
            }, {
              default: I(() => [
                Ie(e(xe))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : p("", !0),
            e(q) ? (l(), u(e(C), {
              key: 2,
              class: r([e(t).e("icon"), e(t).em("icon", "password")]),
              onClick: e(re)
            }, {
              default: I(() => [
                e(E) ? (l(), u(e(Pe), { key: 0 })) : (l(), u(e(Fe), { key: 1 }))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : p("", !0),
            e(g) ? (l(), d("span", {
              key: 3,
              class: r(e(t).e("count"))
            }, [
              b("span", {
                class: r(e(t).e("count-inner"))
              }, X(e(N)) + " / " + X(e(k).maxlength), 3)
            ], 2)) : p("", !0),
            e(w) && e(U) && e(O) ? (l(), u(e(C), {
              key: 4,
              class: r([
                e(t).e("icon"),
                e(t).e("validateIcon"),
                e(t).is("loading", e(w) === "validating")
              ])
            }, {
              default: I(() => [
                (l(), u($(e(U))))
              ]),
              _: 1
            }, 8, ["class"])) : p("", !0)
          ], 2)
        ], 2)) : p("", !0)
      ], 2),
      s.$slots.append ? (l(), d("div", {
        key: 1,
        class: r(e(v).e("append"))
      }, [
        S(s.$slots, "append")
      ], 2)) : p("", !0)
    ], 16, Ae)), [
      [Ce, s.type !== "hidden"]
    ]);
  }
});
export {
  Je as default
};
