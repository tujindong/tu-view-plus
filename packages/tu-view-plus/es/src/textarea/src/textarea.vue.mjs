import { defineComponent as H, shallowRef as ne, computed as n, ref as le, useAttrs as i, watch as K, nextTick as W, onMounted as ie, toRef as ue, withDirectives as de, openBlock as f, createElementBlock as c, mergeProps as O, unref as e, createElementVNode as me, normalizeClass as v, normalizeStyle as pe, createBlock as fe, withModifiers as xe, withCtx as ce, createVNode as ve, createCommentVNode as y, toDisplayString as P, vShow as ye } from "vue";
import { useResizeObserver as be } from "@vueuse/core";
import { textareaProps as he, textareaEmits as Ce } from "./textarea.mjs";
import { useNamespace as we, useComponentAttrs as Se } from "@tu-view-plus/hooks";
import { TuIcon as ge } from "../../icon/index.mjs";
import ze from "./use-textarea.mjs";
import { debugWarn as j } from "@tu-view-plus/utils";
import { Close as Te } from "@tu-view-plus/icons-vue";
import "../../form/index.mjs";
import "../style/textarea.css";
import { useFormSize as ke, useFormDisabled as Ve } from "../../form/src/hooks/use-form-props.mjs";
import { useFormItem as Ie, useFormItemInputId as Ee } from "../../form/src/hooks/use-form-item.mjs";
const Fe = ["role"], Me = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"], Re = H({
  name: "TuTextarea",
  inheritAttrs: !1
}), $e = /* @__PURE__ */ H({
  ...Re,
  props: he,
  emits: Ce,
  setup(U, { expose: $, emit: q }) {
    const r = U, u = ne(), s = we("textarea"), b = ke(), d = Ve(), m = Se({
      excludeKeys: n(() => Object.keys(D.value))
    }), h = le(), { form: G, formItem: l } = Ie(), { inputId: J } = Ee(r, {
      formItemContext: l
    }), {
      textareaRef: Q,
      isHovering: X,
      isFocused: C,
      textareaCalcStyle: Y,
      textLength: w,
      nativeTextareaValue: S,
      focus: Z,
      blur: _,
      select: ee,
      clear: g,
      handleMouseEnter: z,
      handleMouseLeave: T,
      handleCompositionStart: k,
      handleCompositionUpdate: V,
      handleCompositionEnd: I,
      handleInput: E,
      handleFocus: F,
      handleBlur: M,
      handleChange: R,
      handleKeydown: B,
      setNativeTextareaValue: N,
      resizeTextarea: x,
      onceInitSizeTextarea: te
    } = ze(r, q, u), oe = n(
      () => A.value || p.value
    ), A = n(
      () => r.clearable && !d.value && !r.readonly && !!S.value && (C.value || X.value)
    ), p = n(
      () => r.showWordLimit && !!m.value.maxlength && !d.value && !r.readonly
    ), ae = n(
      () => !!p.value && w.value > Number(m.value.maxlength)
    ), re = n(() => ({
      [s.b()]: !0,
      [s.m(b.value)]: b.value,
      [s.is("disabled")]: d.value,
      [s.is("exceed")]: ae.value,
      [i().class]: i().class
    })), se = n(() => [
      i().style,
      r.textareaStyle
    ]), D = n(() => {
      const a = {};
      return r.containerRole === "combobox" && (a["aria-haspopup"] = i()["aria-haspopup"], a["aria-owns"] = i()["aria-owns"], a["aria-expanded"] = i()["aria-expanded"]), a;
    }), L = n(() => [
      r.textareaStyle,
      Y.value,
      { resize: r.resize }
    ]);
    return be(u, (a) => {
      if (te(), !p.value || r.resize !== "both")
        return;
      const t = a[0], { width: o } = t.contentRect;
      h.value = {
        right: `calc(100% - ${o + 16}px)`
      };
    }), K(S, () => N()), K(
      () => r.modelValue,
      () => {
        var a;
        W(() => x()), r.validateEvent && ((a = l == null ? void 0 : l.validate) == null || a.call(l, "change").catch((t) => j(t)));
      }
    ), ie(() => {
      !r.formatter && r.parser && j(
        "TuTextarea",
        "If you set the parser, you also need to set the formatter."
      ), N(), W(x);
    }), $({
      textarea: u,
      ref: Q,
      textareaStyle: L,
      autosize: ue(r, "autosize"),
      focus: Z,
      blur: _,
      select: ee,
      clear: g,
      resizeTextarea: x
    }), (a, t) => de((f(), c("div", O(e(D), {
      class: e(re),
      style: e(se),
      role: a.containerRole,
      onMouseenter: t[9] || (t[9] = //@ts-ignore
      (...o) => e(z) && e(z)(...o)),
      onMouseleave: t[10] || (t[10] = //@ts-ignore
      (...o) => e(T) && e(T)(...o))
    }), [
      me("textarea", O({
        ref_key: "textarea",
        ref: u
      }, e(m), {
        id: e(J),
        class: [e(s).e("inner"), { [e(s).is("focus")]: e(C) }],
        tabindex: a.tabindex,
        disabled: e(d),
        readonly: a.readonly,
        autocomplete: a.autocomplete,
        style: e(L),
        "aria-label": a.label,
        placeholder: a.placeholder,
        form: e(G),
        onCompositionstart: t[0] || (t[0] = //@ts-ignore
        (...o) => e(k) && e(k)(...o)),
        onCompositionupdate: t[1] || (t[1] = //@ts-ignore
        (...o) => e(V) && e(V)(...o)),
        onCompositionend: t[2] || (t[2] = //@ts-ignore
        (...o) => e(I) && e(I)(...o)),
        onInput: t[3] || (t[3] = //@ts-ignore
        (...o) => e(E) && e(E)(...o)),
        onFocus: t[4] || (t[4] = //@ts-ignore
        (...o) => e(F) && e(F)(...o)),
        onBlur: t[5] || (t[5] = //@ts-ignore
        (...o) => e(M) && e(M)(...o)),
        onChange: t[6] || (t[6] = //@ts-ignore
        (...o) => e(R) && e(R)(...o)),
        onKeydown: t[7] || (t[7] = //@ts-ignore
        (...o) => e(B) && e(B)(...o))
      }), null, 16, Me),
      e(oe) ? (f(), c("span", {
        key: 0,
        class: v(e(s).e("suffix")),
        style: pe(h.value)
      }, [
        e(A) ? (f(), fe(e(ge), {
          key: 0,
          class: v([e(s).e("icon"), e(s).em("icon", "clear")]),
          onMousedown: t[8] || (t[8] = xe(() => {
          }, ["prevent"])),
          onClick: e(g)
        }, {
          default: ce(() => [
            ve(e(Te))
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : y("", !0),
        e(p) ? (f(), c("span", {
          key: 1,
          class: v(e(s).e("count"))
        }, P(e(w)) + " / " + P(e(m).maxlength), 3)) : y("", !0)
      ], 6)) : y("", !0)
    ], 16, Fe)), [
      [ye, a.type !== "hidden"]
    ]);
  }
});
export {
  $e as default
};
