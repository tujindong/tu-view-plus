import { defineComponent as H, shallowRef as ne, computed as n, ref as le, useAttrs as i, watch as N, nextTick as A, onMounted as ie, toRef as ue, withDirectives as de, openBlock as c, createElementBlock as D, mergeProps as L, unref as e, createElementVNode as me, normalizeStyle as K, normalizeClass as W, toDisplayString as O, createCommentVNode as P, createBlock as pe, withModifiers as xe, withCtx as fe, createVNode as ce, vShow as ve } from "vue";
import { useResizeObserver as ye } from "@vueuse/core";
import { textareaProps as be, textareaEmits as Ce } from "./textarea.mjs";
import { useNamespace as he, useComponentAttrs as we } from "@tu-view-plus/hooks";
import { TuIcon as Se } from "../../icon/index.mjs";
import ge from "./use-textarea.mjs";
import { debugWarn as j } from "@tu-view-plus/utils";
import { Close as ze } from "@tu-view-plus/icons-vue";
import "../../form/index.mjs";
import "../style/textarea.css";
import { useFormSize as Te, useFormDisabled as ke } from "../../form/src/hooks/use-form-props.mjs";
import { useFormItem as Ie, useFormItemInputId as Ve } from "../../form/src/hooks/use-form-item.mjs";
const Ee = ["role"], Fe = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"], Me = H({
  name: "TuTextarea",
  inheritAttrs: !1
}), Ue = /* @__PURE__ */ H({
  ...Me,
  props: be,
  emits: Ce,
  setup(U, { expose: $, emit: q }) {
    const r = U, u = ne(), s = he("textarea"), v = Te(), d = ke(), m = we({
      excludeKeys: n(() => Object.keys(R.value))
    }), p = le(), { form: G, formItem: l } = Ie(), { inputId: J } = Ve(r, {
      formItemContext: l
    }), {
      textareaRef: Q,
      isHovering: X,
      isFocused: y,
      textareaCalcStyle: Y,
      textLength: b,
      nativeTextareaValue: C,
      focus: Z,
      blur: _,
      select: ee,
      clear: h,
      handleMouseEnter: w,
      handleMouseLeave: S,
      handleCompositionStart: g,
      handleCompositionUpdate: z,
      handleCompositionEnd: T,
      handleInput: k,
      handleFocus: I,
      handleBlur: V,
      handleChange: E,
      handleKeydown: F,
      setNativeTextareaValue: M,
      resizeTextarea: x,
      onceInitSizeTextarea: te
    } = ge(r, q, u), oe = n(
      () => r.clearable && !d.value && !r.readonly && !!C.value && (y.value || X.value)
    ), f = n(
      () => r.showWordLimit && !!m.value.maxlength && !d.value && !r.readonly
    ), ae = n(
      () => !!f.value && b.value > Number(m.value.maxlength)
    ), re = n(() => ({
      [s.b()]: !0,
      [s.m(v.value)]: v.value,
      [s.is("disabled")]: d.value,
      [s.is("exceed")]: ae.value,
      [s.is("focus")]: y.value,
      [i().class]: i().class
    })), se = n(() => [
      i().style,
      r.textareaStyle
    ]), R = n(() => {
      const a = {};
      return r.containerRole === "combobox" && (a["aria-haspopup"] = i()["aria-haspopup"], a["aria-owns"] = i()["aria-owns"], a["aria-expanded"] = i()["aria-expanded"]), a;
    }), B = n(() => [
      r.textareaStyle,
      Y.value,
      { resize: r.resize }
    ]);
    return ye(u, (a) => {
      if (te(), !f.value || r.resize !== "both")
        return;
      const t = a[0], { width: o } = t.contentRect;
      p.value = {
        right: `calc(100% - ${o + 16}px)`
      };
    }), N(C, () => M()), N(
      () => r.modelValue,
      () => {
        var a;
        A(() => x()), r.validateEvent && ((a = l == null ? void 0 : l.validate) == null || a.call(l, "change").catch((t) => j(t)));
      }
    ), ie(() => {
      !r.formatter && r.parser && j(
        "TuTextarea",
        "If you set the parser, you also need to set the formatter."
      ), M(), A(x);
    }), $({
      textarea: u,
      ref: Q,
      textareaStyle: B,
      autosize: ue(r, "autosize"),
      focus: Z,
      blur: _,
      select: ee,
      clear: h,
      resizeTextarea: x
    }), (a, t) => de((c(), D("div", L(e(R), {
      class: e(re),
      style: e(se),
      role: a.containerRole,
      onMouseenter: t[9] || (t[9] = //@ts-ignore
      (...o) => e(w) && e(w)(...o)),
      onMouseleave: t[10] || (t[10] = //@ts-ignore
      (...o) => e(S) && e(S)(...o))
    }), [
      me("textarea", L({
        ref_key: "textarea",
        ref: u
      }, e(m), {
        id: e(J),
        class: e(s).e("inner"),
        tabindex: a.tabindex,
        disabled: e(d),
        readonly: a.readonly,
        autocomplete: a.autocomplete,
        style: e(B),
        "aria-label": a.label,
        placeholder: a.placeholder,
        form: e(G),
        onCompositionstart: t[0] || (t[0] = //@ts-ignore
        (...o) => e(g) && e(g)(...o)),
        onCompositionupdate: t[1] || (t[1] = //@ts-ignore
        (...o) => e(z) && e(z)(...o)),
        onCompositionend: t[2] || (t[2] = //@ts-ignore
        (...o) => e(T) && e(T)(...o)),
        onInput: t[3] || (t[3] = //@ts-ignore
        (...o) => e(k) && e(k)(...o)),
        onFocus: t[4] || (t[4] = //@ts-ignore
        (...o) => e(I) && e(I)(...o)),
        onBlur: t[5] || (t[5] = //@ts-ignore
        (...o) => e(V) && e(V)(...o)),
        onChange: t[6] || (t[6] = //@ts-ignore
        (...o) => e(E) && e(E)(...o)),
        onKeydown: t[7] || (t[7] = //@ts-ignore
        (...o) => e(F) && e(F)(...o))
      }), null, 16, Fe),
      e(f) ? (c(), D("span", {
        key: 0,
        style: K(p.value),
        class: W(e(s).e("count"))
      }, O(e(b)) + " / " + O(e(m).maxlength), 7)) : P("", !0),
      e(oe) ? (c(), pe(e(Se), {
        key: 1,
        style: K(p.value),
        class: W([e(s).e("icon"), e(s).em("icon", "clear")]),
        onMousedown: t[8] || (t[8] = xe(() => {
        }, ["prevent"])),
        onClick: e(h)
      }, {
        default: fe(() => [
          ce(e(ze))
        ]),
        _: 1
      }, 8, ["style", "class", "onClick"])) : P("", !0)
    ], 16, Ee)), [
      [ve, a.type !== "hidden"]
    ]);
  }
});
export {
  Ue as default
};
