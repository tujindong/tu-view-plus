import { defineComponent as b, useSlots as z, toRefs as D, ref as F, computed as v, openBlock as p, createElementBlock as h, normalizeClass as t, unref as r, renderSlot as I, createCommentVNode as k, createElementVNode as m, mergeProps as N, withKeys as K, createBlock as R } from "vue";
import { pickerProps as T, pickerEmits as $ } from "./picker.mjs";
import { useNamespace as j } from "@tu-view-plus/hooks";
import { isDayjs as q, isFunction as A } from "@tu-view-plus/utils";
import "../../form/index.mjs";
import { TuIcon as G } from "../../icon/index.mjs";
import "../style/picker.css";
import { useFormDisabled as H, useFormSize as J } from "../../form/src/hooks/use-form-props.mjs";
const L = ["disabled", "placeholder", "value"], M = b({
  name: "TuPicker"
}), oe = /* @__PURE__ */ b({
  ...M,
  props: T,
  emits: $,
  setup(y, { expose: C, emit: B }) {
    const P = y, n = B, _ = z(), { focused: u, value: o, format: c, inputValue: l } = D(P), a = F(), e = j("picker"), i = H(), d = J(), f = v(() => {
      if (l != null && l.value)
        return l == null ? void 0 : l.value;
      if (o != null && o.value && q(o.value))
        return A(c.value) ? c.value(o.value) : o.value.format(c.value);
    }), w = v(() => ({
      [e.b()]: !0,
      [e.m(d.value)]: d.value,
      [e.is("focused")]: u == null ? void 0 : u.value,
      [e.is("disabled")]: i.value,
      [e.is("has-prefix")]: _.prefix
    })), x = () => {
      n("press-enter");
    }, E = (s) => {
      n("change", s);
    }, S = (s) => {
      n("blur", s);
    }, g = (s) => {
      n("clear", s);
    };
    return C({ focus: () => {
      a.value && a.value.focus && a.value.focus();
    }, blur: () => {
      a.value && a.value.blur && a.value.blur();
    } }), (s, U) => (p(), h("div", {
      class: t(w.value)
    }, [
      s.$slots.prefix ? (p(), h("div", {
        key: 0,
        class: t(r(e).e("prefix"))
      }, [
        I(s.$slots, "perfix")
      ], 2)) : k("", !0),
      m("div", {
        class: t(r(e).e("input-wrap"))
      }, [
        m("input", N({ ref: "inputRef" }, s.readonly ? { readonly: !0 } : {}, {
          disabled: r(i),
          placeholder: s.placeholder,
          class: r(e).e("input"),
          value: f.value,
          onKeydown: K(x, ["enter"]),
          onInput: E,
          onBlur: S
        }), null, 16, L)
      ], 2),
      m("div", {
        class: t(r(e).e("suffix"))
      }, [
        s.allowClear && !r(i) && f.value ? (p(), R(r(G), {
          key: 0,
          class: t([r(e).e("icon"), r(e).em("icon", "clear")]),
          onClick: g
        }, null, 8, ["class"])) : k("", !0)
      ], 2)
    ], 2));
  }
});
export {
  oe as default
};
