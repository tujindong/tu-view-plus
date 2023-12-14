import { defineComponent as w, toRefs as I, ref as $, useSlots as K, computed as v, openBlock as p, createElementBlock as h, normalizeClass as t, unref as o, renderSlot as k, createCommentVNode as b, createElementVNode as m, mergeProps as R, withKeys as T, createBlock as j, withCtx as C, createVNode as y } from "vue";
import { pickerProps as V, pickerEmits as q } from "./picker.mjs";
import { useNamespace as A } from "@tu-view-plus/hooks";
import { isDayjs as G, isFunction as H } from "@tu-view-plus/utils";
import { Close as J } from "@tu-view-plus/icons-vue";
import "../../form/index.mjs";
import { TuIcon as _ } from "../../icon/index.mjs";
import "../style/picker.css";
import { useFormDisabled as L, useFormSize as M } from "../../form/src/hooks/use-form-props.mjs";
const O = ["disabled", "placeholder", "value"], Q = w({
  name: "TuPicker"
}), ne = /* @__PURE__ */ w({
  ...Q,
  props: V,
  emits: q,
  setup(x, { expose: B, emit: P }) {
    const E = x, n = P, { focused: c, value: r, format: u, inputValue: l } = I(E), a = $(), e = A("picker"), N = K(), i = L(), f = M(), d = v(() => {
      if (l != null && l.value)
        return l == null ? void 0 : l.value;
      if (r != null && r.value && G(r.value))
        return H(u.value) ? u.value(r.value) : r.value.format(u.value);
    }), S = v(() => ({
      [e.b()]: !0,
      [e.m(f.value)]: f.value,
      [e.is("focused")]: c == null ? void 0 : c.value,
      [e.is("disabled")]: i.value,
      [e.is("has-prefix")]: N.prefix
    })), g = () => {
      n("press-enter");
    }, z = (s) => {
      n("change", s);
    }, D = (s) => {
      n("blur", s);
    }, F = (s) => {
      n("clear", s);
    };
    return B({ focus: () => {
      a.value && a.value.focus && a.value.focus();
    }, blur: () => {
      a.value && a.value.blur && a.value.blur();
    } }), (s, X) => (p(), h("div", {
      class: t(S.value)
    }, [
      s.$slots.prefix ? (p(), h("div", {
        key: 0,
        class: t(o(e).e("prefix"))
      }, [
        k(s.$slots, "perfix")
      ], 2)) : b("", !0),
      m("div", {
        class: t(o(e).e("input-wrap"))
      }, [
        m("input", R({ ref: "inputRef" }, s.readonly ? { readonly: !0 } : {}, {
          disabled: o(i),
          placeholder: s.placeholder,
          class: o(e).e("input"),
          value: d.value,
          onKeydown: T(g, ["enter"]),
          onInput: z,
          onBlur: D
        }), null, 16, O)
      ], 2),
      m("div", {
        class: t(o(e).e("suffix"))
      }, [
        s.allowClear && !o(i) && d.value ? (p(), j(o(_), {
          key: 0,
          class: t([o(e).e("icon"), o(e).em("icon", "clear")]),
          onClick: F
        }, {
          default: C(() => [
            y(o(J))
          ]),
          _: 1
        }, 8, ["class"])) : b("", !0),
        y(o(_), {
          class: t(o(e).e("icon"))
        }, {
          default: C(() => [
            k(s.$slots, "suffix-icon")
          ]),
          _: 3
        }, 8, ["class"])
      ], 2)
    ], 2));
  }
});
export {
  ne as default
};
