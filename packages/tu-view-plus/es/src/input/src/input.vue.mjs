import { defineComponent as Z, shallowRef as ve, useSlots as ce, computed as i, useAttrs as m, onMounted as ye, withDirectives as we, openBlock as a, createElementBlock as d, mergeProps as Q, unref as e, normalizeClass as r, renderSlot as V, createCommentVNode as u, createElementVNode as b, createBlock as p, withCtx as I, resolveDynamicComponent as $, Fragment as be, withModifiers as Ie, createVNode as Ce, toDisplayString as X, vShow as ke } from "vue";
import { inputProps as he, inputEmits as ge } from "./input.mjs";
import { TuIcon as C } from "../../icon/index.mjs";
import { useNamespace as Y, useComponentAttrs as Se } from "@tu-view-plus/hooks";
import { ValidateComponentsMap as Ve, debugWarn as xe } from "@tu-view-plus/utils";
import { Close as Pe, View as Fe, Hide as Me } from "@tu-view-plus/icons-vue";
import "../../form/index.mjs";
import $e from "./use-input.mjs";
import "../style/input.css";
import { useFormSize as Be, useFormDisabled as Ee } from "../../form/src/hooks/use-form-props.mjs";
import { useFormItem as Ne, useFormItemInputId as Ae } from "../../form/src/hooks/use-form-item.mjs";
const De = ["role"], Le = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"], Re = Z({
  name: "TuInput",
  inheritAttrs: !1
}), Qe = /* @__PURE__ */ Z({
  ...Re,
  props: he,
  emits: ge,
  setup(_, { expose: ee, emit: se }) {
    const x = ve(), l = _, oe = se, f = ce(), n = Y("input"), v = Y("input-group"), B = Be(), c = Ee(), k = Se({
      excludeKeys: i(() => Object.keys(J.value))
    }), { form: h, formItem: g } = Ne(), { inputId: te } = Ae(l, {
      formItemContext: g
    }), {
      inputRef: ne,
      isHovering: ae,
      isFocused: P,
      isPasswordVisible: E,
      textLength: N,
      nativeInputValue: F,
      focus: y,
      blur: le,
      select: re,
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
      handlePasswordVisible: ie,
      setNativeInputValue: ue
    } = $e(l, oe, x), w = i(() => (g == null ? void 0 : g.validateState) || ""), O = i(() => (h == null ? void 0 : h.statusIcon) ?? !1), U = i(
      () => w.value && Ve[w.value]
    ), pe = i(
      () => !!S.value && N.value > Number(k.value.maxlength)
    ), M = i(
      () => l.allowClear && !c.value && !l.readonly && !!F.value && (P.value || ae.value)
    ), q = i(
      () => l.showPassword && !c.value && !l.readonly && !!F.value && (!!F.value || P.value)
    ), S = i(
      () => l.showWordLimit && !!k.value.maxlength && l.type === "text" && !c.value && !l.readonly && !l.showPassword
    ), de = i(
      () => !!f.suffix || !!l.suffixIcon || M.value || l.showPassword || S.value || !!w.value && O.value
    ), me = i(() => ({
      [n.b()]: !0,
      [n.m(B.value)]: B.value,
      [n.is("disabled")]: c.value,
      [n.is("exceed")]: pe.value,
      [v.b()]: f.prepend || f.append,
      [v.m("prepend")]: f.prepend,
      [v.m("append")]: f.append,
      [m().class]: m().class
    })), fe = i(() => [
      m().style,
      l.inputStyle
    ]), J = i(() => {
      const s = {};
      return l.containerRole === "combobox" && (s["aria-haspopup"] = m()["aria-haspopup"], s["aria-owns"] = m()["aria-owns"], s["aria-expanded"] = m()["aria-expanded"]), s;
    });
    return ye(() => {
      !l.formatter && l.parser && xe(
        "TuInput",
        "If you set the parser, you also need to set the formatter."
      ), ue();
    }), ee({
      input: x,
      ref: ne,
      focus: y,
      blur: le,
      select: re,
      clear: A
    }), (s, o) => we((a(), d("div", Q(J.value, {
      class: me.value,
      style: fe.value,
      role: s.containerRole,
      onMouseenter: o[11] || (o[11] = //@ts-ignore
      (...t) => e(D) && e(D)(...t)),
      onMouseleave: o[12] || (o[12] = //@ts-ignore
      (...t) => e(L) && e(L)(...t))
    }), [
      s.$slots.prepend ? (a(), d("div", {
        key: 0,
        class: r(e(v).e("prepend"))
      }, [
        V(s.$slots, "prepend")
      ], 2)) : u("", !0),
      b("div", {
        class: r([e(n).e("wrapper"), { [e(n).is("focus")]: e(P) }])
      }, [
        s.$slots.prefix || s.prefixIcon ? (a(), d("span", {
          key: 0,
          class: r(e(n).e("prefix"))
        }, [
          b("span", {
            class: r(e(n).e("prefix-inner")),
            onClick: o[0] || (o[0] = //@ts-ignore
            (...t) => e(y) && e(y)(...t))
          }, [
            V(s.$slots, "prefix"),
            s.prefixIcon ? (a(), p(e(C), {
              key: 0,
              class: r(e(n).e("icon"))
            }, {
              default: I(() => [
                (a(), p($(s.prefixIcon)))
              ]),
              _: 1
            }, 8, ["class"])) : u("", !0)
          ], 2)
        ], 2)) : u("", !0),
        b("input", Q({
          ref_key: "input",
          ref: x
        }, e(k), {
          id: e(te),
          class: e(n).e("inner"),
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
          form: e(h),
          onCompositionstart: o[1] || (o[1] = //@ts-ignore
          (...t) => e(R) && e(R)(...t)),
          onCompositionupdate: o[2] || (o[2] = //@ts-ignore
          (...t) => e(z) && e(z)(...t)),
          onCompositionend: o[3] || (o[3] = //@ts-ignore
          (...t) => e(K) && e(K)(...t)),
          onInput: o[4] || (o[4] = //@ts-ignore
          (...t) => e(T) && e(T)(...t)),
          onFocus: o[5] || (o[5] = //@ts-ignore
          (...t) => e(W) && e(W)(...t)),
          onBlur: o[6] || (o[6] = //@ts-ignore
          (...t) => e(H) && e(H)(...t)),
          onChange: o[7] || (o[7] = //@ts-ignore
          (...t) => e(j) && e(j)(...t)),
          onKeydown: o[8] || (o[8] = //@ts-ignore
          (...t) => e(G) && e(G)(...t))
        }), null, 16, Le),
        de.value ? (a(), d("span", {
          key: 1,
          class: r(e(n).e("suffix"))
        }, [
          b("span", {
            class: r(e(n).e("suffix-inner")),
            onClick: o[10] || (o[10] = //@ts-ignore
            (...t) => e(y) && e(y)(...t))
          }, [
            !M.value || !q.value || !S.value ? (a(), d(be, { key: 0 }, [
              V(s.$slots, "suffix"),
              s.suffixIcon ? (a(), p(e(C), {
                key: 0,
                class: r(e(n).e("icon"))
              }, {
                default: I(() => [
                  (a(), p($(s.suffixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : u("", !0)
            ], 64)) : u("", !0),
            M.value ? (a(), p(e(C), {
              key: 1,
              class: r([e(n).e("icon"), e(n).em("icon", "clear")]),
              onMousedown: o[9] || (o[9] = Ie(() => {
              }, ["prevent"])),
              onClick: e(A)
            }, {
              default: I(() => [
                Ce(e(Pe))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : u("", !0),
            q.value ? (a(), p(e(C), {
              key: 2,
              class: r([e(n).e("icon"), e(n).em("icon", "password")]),
              onClick: e(ie)
            }, {
              default: I(() => [
                e(E) ? (a(), p(e(Fe), { key: 0 })) : (a(), p(e(Me), { key: 1 }))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : u("", !0),
            S.value ? (a(), d("span", {
              key: 3,
              class: r(e(n).e("count"))
            }, [
              b("span", {
                class: r(e(n).e("count-inner"))
              }, X(e(N)) + " / " + X(e(k).maxlength), 3)
            ], 2)) : u("", !0),
            w.value && U.value && O.value ? (a(), p(e(C), {
              key: 4,
              class: r([
                e(n).e("icon"),
                e(n).e("validateIcon"),
                e(n).is("loading", w.value === "validating")
              ])
            }, {
              default: I(() => [
                (a(), p($(U.value)))
              ]),
              _: 1
            }, 8, ["class"])) : u("", !0)
          ], 2)
        ], 2)) : u("", !0)
      ], 2),
      s.$slots.append ? (a(), d("div", {
        key: 1,
        class: r(e(v).e("append"))
      }, [
        V(s.$slots, "append")
      ], 2)) : u("", !0)
    ], 16, De)), [
      [ke, s.type !== "hidden"]
    ]);
  }
});
export {
  Qe as default
};
