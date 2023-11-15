import { defineComponent as J, useAttrs as he, useSlots as be, reactive as Ce, ref as p, computed as o, watch as Ie, onMounted as Te, openBlock as v, createElementBlock as x, mergeProps as N, createVNode as F, unref as t, withCtx as V, createElementVNode as U, normalizeClass as h, toDisplayString as j, renderSlot as ye, createCommentVNode as R, TransitionGroup as _e, Fragment as we, renderList as ke, createBlock as _, createTextVNode as ze, resolveDynamicComponent as De, nextTick as q } from "vue";
import { inputTagProps as Ee, inputTagEmits as Se } from "./input-tag.mjs";
import { useNamespace as xe, defaultNamespace as Ne } from "@tu-view-plus/hooks";
import { INPUT_EVENTS as G } from "@tu-view-plus/constants";
import { omit as Fe, pick as Re, isObject as Be, ValidateComponentsMap as Pe } from "@tu-view-plus/utils";
import { Close as Ae } from "@tu-view-plus/icons-vue";
import { TuResizeObserver as Me } from "../../resize-observer/index.mjs";
import { getValueData as $e } from "./utils.mjs";
import "../../form/index.mjs";
import { TuTag as Le } from "../../tag/index.mjs";
import { TuIcon as H } from "../../icon/index.mjs";
import "../style/input-tag.css";
import { useFormSize as Oe, useFormDisabled as We } from "../../form/src/hooks/use-form-props.mjs";
import { useFormItem as Ke } from "../../form/src/hooks/use-form-item.mjs";
const Ue = ["placeholder", "disabled", "readonly"], je = J({
  name: "TuInputTag"
}), sa = /* @__PURE__ */ J({
  ...je,
  props: Ee,
  emits: Se,
  setup(Q, { emit: X }) {
    const Y = {
      value: "value",
      label: "label",
      closable: "closable",
      tagProps: "tagProps"
    }, a = Q, i = X, B = he(), Z = be(), r = xe("input-tag"), P = Oe(), b = We(), { form: w, formItem: k } = Ke(), z = Ce({ width: "12px" }), m = p(), s = p(), d = p(!1), C = p(""), ee = o(() => ({
      ...Y,
      ...a.fieldNames
    })), A = p(!1), M = p(a.defaultValue), $ = p(a.defaultInputValue), ae = o(() => Fe(B, G)), le = o(() => Re(B, G)), te = o(() => I.value.length > 0 ? C.value || n.value : C.value || n.value || a.placeholder), g = o(() => a.modelValue ?? M.value), n = o(
      () => a.inputValue ?? $.value
    ), f = o(
      () => $e(g.value, ee.value)
    ), ue = o(() => ["small", "mini"].indexOf(a.size) > -1 ? "mini" : a.size === "large" ? "medium" : "small"), I = o(() => {
      if (a.maxTagCount > 0) {
        const e = f.value.length - a.maxTagCount;
        if (e > 0) {
          const l = f.value.slice(0, a.maxTagCount), u = {
            value: "__tu__more",
            label: `${e}..`,
            closable: !1
          };
          return l.push({ raw: u, ...u }), l;
        }
      }
      return f.value;
    }), ne = o(
      () => !b.value && !a.readonly && a.allowClear && !!g.value.length
    ), oe = o(() => (w == null ? void 0 : w.statusIcon) ?? !1), T = o(() => (k == null ? void 0 : k.validateState) || ""), L = o(() => Be(a.retainInputValue) ? {
      create: !1,
      blur: !1,
      ...a.retainInputValue
    } : {
      create: a.retainInputValue,
      blur: a.retainInputValue
    }), O = o(
      () => T.value && Pe[T.value]
    ), se = o(() => ({
      [r.b()]: !0,
      [r.m(P.value)]: P.value,
      [r.is("disabled")]: b.value
    })), re = (e) => {
      s.value && e.target !== s.value && (e.preventDefault(), s.value.focus());
    }, ie = () => {
      m.value && K(m.value.offsetWidth);
    }, ce = (e) => {
      const { value: l } = e.target;
      d.value || (y(l, e), q(() => {
        s.value && n.value !== s.value.value && (s.value.value = n.value);
      }));
    }, pe = (e) => {
      const l = e.key || e.code;
      if (!d.value && n.value && l === "Enter" && me(e), !d.value && I.value.length > 0 && !n.value && l === "Backspace") {
        const u = ge();
        u >= 0 && W(f.value[u].value, u, e);
      }
    }, ve = (e) => {
      A.value = !0, i("focus", e);
    }, de = (e) => {
      A.value = !1, !L.value.blur && n.value && y("", e), i("blur", e);
    }, D = (e) => {
      const { value: l } = e.target;
      e.type === "compositionend" ? (d.value = !1, C.value = "", y(l, e), q(() => {
        s.value && n.value !== s.value.value && (s.value.value = n.value);
      })) : (d.value = !0, C.value = n.value + (e.data ?? ""));
    }, fe = (e) => {
      E([], e), i("clear", e);
    }, W = (e, l, u) => {
      var c;
      const S = (c = g.value) == null ? void 0 : c.filter((qe, Ve) => Ve !== l);
      E(S, u), i("remove", e, u);
    }, me = (e) => {
      var l;
      if (n.value) {
        if (e.preventDefault(), a.uniqueValue && ((l = g.value) != null && l.includes(n.value))) {
          i("pressEnter", n.value, e);
          return;
        }
        const u = g.value.concat(n.value);
        E(u, e), i("pressEnter", n.value, e), L.value.create || y("", e);
      }
    }, y = (e, l) => {
      $.value = e, i("update:inputValue", e), i("inputValueChange", e, l);
    }, ge = () => {
      for (let e = f.value.length - 1; e >= 0; e--)
        if (f.value[e].closable)
          return e;
      return -1;
    }, E = (e, l) => {
      M.value = e, i("update:modelValue", e), i("change", e, l);
    }, K = (e) => {
      e > 12 ? z.width = `${e}px` : z.width = "12px";
    };
    return Ie(n, (e) => {
      s.value && !d.value && e !== s.value.value && (s.value.value = e);
    }), Te(() => {
      m.value && K(m.value.offsetWidth);
    }), (e, l) => (v(), x("div", N({
      class: se.value,
      onMousedown: re
    }, ae.value), [
      F(t(Me), { onResize: ie }, {
        default: V(() => [
          U("span", {
            ref_key: "mirrorRef",
            ref: m,
            class: h(t(r).e("mirror"))
          }, j(te.value), 3)
        ]),
        _: 1
      }),
      t(Z).prefix ? (v(), x("span", {
        key: 0,
        class: h(t(r).e("prefix"))
      }, [
        ye(e.$slots, "prefix")
      ], 2)) : R("", !0),
      F(_e, {
        tag: "span",
        name: `${t(Ne)}-input-tag-zoom`,
        class: h(t(r).e("inner"))
      }, {
        default: V(() => [
          (v(!0), x(we, null, ke(I.value, (u, S) => (v(), _(t(Le), N({ closable: "" }, u.tagProps, {
            size: ue.value,
            key: `tag-${u.value}`,
            class: t(r).e("tag"),
            disabled: t(b),
            onClose: (c) => W(u.value, S, c)
          }), {
            default: V(() => {
              var c;
              return [
                ze(j(((c = e.formatTag) == null ? void 0 : c.call(e, u.raw)) ?? u.label), 1)
              ];
            }),
            _: 2
          }, 1040, ["size", "class", "disabled", "onClose"]))), 128)),
          U("input", N({
            ref_key: "inputRef",
            ref: s,
            key: "input-tag-input"
          }, le.value, {
            class: t(r).e("input"),
            style: z,
            placeholder: I.value.length === 0 ? a.placeholder : void 0,
            disabled: t(b),
            readonly: a.readonly || a.disabledInput,
            onInput: ce,
            onKeydown: pe,
            onFocus: ve,
            onBlur: de,
            onCompositionstart: D,
            onCompositionupdate: D,
            onCompositionend: D
          }), null, 16, Ue)
        ]),
        _: 1
      }, 8, ["name", "class"]),
      ne.value ? (v(), _(t(H), {
        key: 1,
        class: h(t(r).em("icon", "clear")),
        onClick: fe
      }, {
        default: V(() => [
          F(t(Ae))
        ]),
        _: 1
      }, 8, ["class"])) : R("", !0),
      T.value && O.value && oe.value ? (v(), _(t(H), {
        key: 2,
        class: h([
          t(r).e("icon"),
          t(r).e("validateIcon"),
          t(r).is("loading", T.value === "validating")
        ])
      }, {
        default: V(() => [
          (v(), _(De(O.value)))
        ]),
        _: 1
      }, 8, ["class"])) : R("", !0)
    ], 16));
  }
});
export {
  sa as default
};
