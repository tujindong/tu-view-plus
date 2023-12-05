import { defineComponent as H, shallowRef as le, computed as n, ref as ie, useAttrs as i, watch as K, nextTick as W, onMounted as ue, toRef as de, withDirectives as me, openBlock as x, createElementBlock as v, mergeProps as O, unref as e, createElementVNode as pe, normalizeClass as c, normalizeStyle as xe, createBlock as fe, withModifiers as ve, withCtx as ce, createVNode as ye, createCommentVNode as y, toDisplayString as P, vShow as be } from "vue";
import { useResizeObserver as he } from "@vueuse/core";
import { textareaProps as Ce, textareaEmits as we } from "./textarea.mjs";
import { useNamespace as Se, useComponentAttrs as ge } from "@tu-view-plus/hooks";
import { TuIcon as ze } from "../../icon/index.mjs";
import Te from "./use-textarea.mjs";
import { debugWarn as j } from "@tu-view-plus/utils";
import { Close as ke } from "@tu-view-plus/icons-vue";
import "../../form/index.mjs";
import "../style/textarea.css";
import { useFormSize as Ve, useFormDisabled as Ie } from "../../form/src/hooks/use-form-props.mjs";
import { useFormItem as Ee, useFormItemInputId as Fe } from "../../form/src/hooks/use-form-item.mjs";
const Me = ["role"], Re = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"], Be = H({
  name: "TuTextarea",
  inheritAttrs: !1
}), qe = /* @__PURE__ */ H({
  ...Be,
  props: Ce,
  emits: we,
  setup(U, { expose: $, emit: q }) {
    const u = le(), r = U, G = q, s = Se("textarea"), b = Ve(), d = Ie(), m = ge({
      excludeKeys: n(() => Object.keys(D.value))
    }), h = ie(), { form: J, formItem: l } = Ee(), { inputId: Q } = Fe(r, {
      formItemContext: l
    }), {
      textareaRef: X,
      isHovering: Y,
      isFocused: C,
      textareaCalcStyle: Z,
      textLength: w,
      nativeTextareaValue: S,
      focus: _,
      blur: ee,
      select: te,
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
      resizeTextarea: f,
      onceInitSizeTextarea: oe
    } = Te(r, G, u), ae = n(
      () => A.value || p.value
    ), A = n(
      () => r.allowClear && !d.value && !r.readonly && !!S.value && (C.value || Y.value)
    ), p = n(
      () => r.showWordLimit && !!m.value.maxlength && !d.value && !r.readonly
    ), re = n(
      () => !!p.value && w.value > Number(m.value.maxlength)
    ), se = n(() => ({
      [s.b()]: !0,
      [s.m(b.value)]: b.value,
      [s.is("disabled")]: d.value,
      [s.is("exceed")]: re.value,
      [i().class]: i().class
    })), ne = n(() => [
      i().style,
      r.textareaStyle
    ]), D = n(() => {
      const a = {};
      return r.containerRole === "combobox" && (a["aria-haspopup"] = i()["aria-haspopup"], a["aria-owns"] = i()["aria-owns"], a["aria-expanded"] = i()["aria-expanded"]), a;
    }), L = n(() => [
      r.textareaStyle,
      Z.value,
      { resize: r.resize }
    ]);
    return he(u, (a) => {
      if (oe(), !p.value || r.resize !== "both")
        return;
      const t = a[0], { width: o } = t.contentRect;
      h.value = {
        right: `calc(100% - ${o + 16}px)`
      };
    }), K(S, () => N()), K(
      () => r.modelValue,
      () => {
        var a;
        W(() => f()), r.validateEvent && ((a = l == null ? void 0 : l.validate) == null || a.call(l, "change").catch((t) => j(t)));
      }
    ), ue(() => {
      !r.formatter && r.parser && j(
        "TuTextarea",
        "If you set the parser, you also need to set the formatter."
      ), N(), W(f);
    }), $({
      textarea: u,
      ref: X,
      textareaStyle: L,
      autosize: de(r, "autosize"),
      focus: _,
      blur: ee,
      select: te,
      clear: g,
      resizeTextarea: f
    }), (a, t) => me((x(), v("div", O(D.value, {
      class: se.value,
      style: ne.value,
      role: a.containerRole,
      onMouseenter: t[9] || (t[9] = //@ts-ignore
      (...o) => e(z) && e(z)(...o)),
      onMouseleave: t[10] || (t[10] = //@ts-ignore
      (...o) => e(T) && e(T)(...o))
    }), [
      pe("textarea", O({
        ref_key: "textarea",
        ref: u
      }, e(m), {
        id: e(Q),
        class: [e(s).e("inner"), { [e(s).is("focus")]: e(C) }],
        tabindex: a.tabindex,
        disabled: e(d),
        readonly: a.readonly,
        autocomplete: a.autocomplete,
        style: L.value,
        "aria-label": a.label,
        placeholder: a.placeholder,
        form: e(J),
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
      }), null, 16, Re),
      ae.value ? (x(), v("span", {
        key: 0,
        class: c(e(s).e("suffix")),
        style: xe(h.value)
      }, [
        A.value ? (x(), fe(e(ze), {
          key: 0,
          class: c([e(s).e("icon"), e(s).em("icon", "clear")]),
          onMousedown: t[8] || (t[8] = ve(() => {
          }, ["prevent"])),
          onClick: e(g)
        }, {
          default: ce(() => [
            ye(e(ke))
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : y("", !0),
        p.value ? (x(), v("span", {
          key: 1,
          class: c(e(s).e("count"))
        }, P(e(w)) + " / " + P(e(m).maxlength), 3)) : y("", !0)
      ], 6)) : y("", !0)
    ], 16, Me)), [
      [be, a.type !== "hidden"]
    ]);
  }
});
export {
  qe as default
};
