import { defineComponent as J, useAttrs as Ve, useSlots as be, reactive as Ce, ref as d, computed as u, watch as Ie, onMounted as Te, openBlock as v, createElementBlock as x, mergeProps as F, createVNode as N, unref as o, withCtx as h, createElementVNode as U, normalizeClass as V, toDisplayString as j, renderSlot as ye, createCommentVNode as R, TransitionGroup as we, Fragment as _e, renderList as ke, createBlock as w, createTextVNode as ze, resolveDynamicComponent as De, nextTick as q } from "vue";
import { inputTagProps as Ee, inputTagEmits as Se } from "./input-tag.mjs";
import { useNamespace as xe } from "@tu-view-plus/hooks";
import { INPUT_EVENTS as G } from "@tu-view-plus/constants";
import { omit as Fe, pick as Ne, isObject as Re, ValidateComponentsMap as Be } from "@tu-view-plus/utils";
import { Close as Pe } from "@tu-view-plus/icons-vue";
import { TuResizeObserver as Ae } from "../../resize-observer/index.mjs";
import { getValueData as Me } from "./utils.mjs";
import "../../form/index.mjs";
import { TuTag as Le } from "../../tag/index.mjs";
import { TuIcon as H } from "../../icon/index.mjs";
import "../style/input-tag.css";
import { useFormSize as $e, useFormDisabled as Ke } from "../../form/src/hooks/use-form-props.mjs";
import { useFormItem as Oe } from "../../form/src/hooks/use-form-item.mjs";
const We = ["placeholder", "disabled", "readonly"], Ue = J({
  name: "TuInputTag"
}), ua = /* @__PURE__ */ J({
  ...Ue,
  props: Ee,
  emits: Se,
  setup(Q, { emit: X }) {
    const Y = {
      value: "value",
      label: "label",
      closable: "closable",
      tagProps: "tagProps"
    }, a = Q, i = X, B = Ve(), Z = be(), r = xe("input-tag"), P = $e(), b = Ke(), { form: _, formItem: k } = Oe(), z = Ce({ width: "12px" }), f = d(), s = d(), m = d(!1), C = d(""), ee = u(() => ({
      ...Y,
      ...a.fieldNames
    })), A = d(!1), M = d(a.defaultValue), L = d(a.defaultInputValue), ae = u(() => Fe(B, G)), le = u(() => Ne(B, G)), te = u(() => I.value.length > 0 ? C.value || n.value : C.value || n.value || a.placeholder), g = u(() => a.modelValue ?? M.value), n = u(
      () => a.inputValue ?? L.value
    ), c = u(
      () => Me(g.value, ee.value)
    ), oe = u(() => ["small", "mini"].indexOf(a.size) > -1 ? "mini" : a.size === "large" ? "medium" : "small"), I = u(() => {
      if (console.log("tags", c.value), a.maxTagCount > 0) {
        const e = c.value.length - a.maxTagCount;
        if (e > 0) {
          const l = c.value.slice(0, a.maxTagCount), t = {
            value: "__tu__more",
            label: `+${e}..`,
            closable: !1
          };
          return l.push({
            raw: t,
            ...t
          }), l;
        }
      }
      return c.value;
    }), ne = u(
      () => !b.value && !a.readonly && a.allowClear && !!g.value.length
    ), ue = u(() => (_ == null ? void 0 : _.statusIcon) ?? !1), T = u(() => (k == null ? void 0 : k.validateState) || ""), $ = u(() => Re(a.retainInputValue) ? {
      create: !1,
      blur: !1,
      ...a.retainInputValue
    } : {
      create: a.retainInputValue,
      blur: a.retainInputValue
    }), K = u(
      () => T.value && Be[T.value]
    ), se = u(() => ({
      [r.b()]: !0,
      [r.m(P.value)]: P.value,
      [r.is("disabled")]: b.value
    })), re = (e) => {
      s.value && e.target !== s.value && (e.preventDefault(), s.value.focus());
    }, ie = () => {
      f.value && W(f.value.offsetWidth);
    }, ce = (e) => {
      const { value: l } = e.target;
      m.value || (y(l, e), q(() => {
        s.value && n.value !== s.value.value && (s.value.value = n.value);
      }));
    }, pe = (e) => {
      console.log("handleKeydown");
      const l = e.key || e.code;
      if (!m.value && n.value && l === "Enter" && fe(e), !m.value && I.value.length > 0 && !n.value && l === "Backspace") {
        const t = ge();
        t >= 0 && O(c.value[t].value, t, e);
      }
    }, de = (e) => {
      console.log("handleFocus"), A.value = !0, i("focus", e);
    }, ve = (e) => {
      console.log("handleBlur"), A.value = !1, !$.value.blur && n.value && y("", e), i("blur", e);
    }, D = (e) => {
      console.log("handleComposition", e);
      const { value: l } = e.target;
      e.type === "compositionend" ? (m.value = !1, C.value = "", y(l, e), q(() => {
        s.value && n.value !== s.value.value && (s.value.value = n.value);
      })) : (m.value = !0, C.value = n.value + (e.data ?? ""));
    }, me = (e) => {
      console.log("clear"), E([], e), i("clear", e);
    }, O = (e, l, t) => {
      var p;
      console.log("handleRemove");
      const S = (p = g.value) == null ? void 0 : p.filter((je, he) => he !== l);
      E(S, t), i("remove", e, t);
    }, fe = (e) => {
      var l;
      if (n.value) {
        if (e.preventDefault(), a.uniqueValue && ((l = g.value) != null && l.includes(n.value))) {
          i("pressEnter", n.value, e);
          return;
        }
        const t = g.value.concat(n.value);
        E(t, e), i("pressEnter", n.value, e), $.value.create || y("", e);
      }
    }, y = (e, l) => {
      L.value = e, i("update:inputValue", e), i("inputValueChange", e, l);
    }, ge = () => {
      for (let e = c.value.length - 1; e >= 0; e--)
        if (c.value[e].closable)
          return e;
      return -1;
    }, E = (e, l) => {
      M.value = e, i("update:modelValue", e), i("change", e, l);
    }, W = (e) => {
      e > 12 ? z.width = `${e}px` : z.width = "12px";
    };
    return Ie(n, (e) => {
      s.value && !m.value && e !== s.value.value && (s.value.value = e);
    }), Te(() => {
      f.value && W(f.value.offsetWidth);
    }), (e, l) => (v(), x("div", F({
      class: se.value,
      onMousedown: re
    }, ae.value), [
      N(o(Ae), { onResize: ie }, {
        default: h(() => [
          U("span", {
            ref_key: "mirrorRef",
            ref: f,
            class: V(o(r).e("mirror"))
          }, j(te.value), 3)
        ]),
        _: 1
      }),
      o(Z).prefix ? (v(), x("span", {
        key: 0,
        class: V(o(r).e("prefix"))
      }, [
        ye(e.$slots, "prefix")
      ], 2)) : R("", !0),
      N(we, {
        tag: "span",
        name: "input-tag-zoom",
        class: V(o(r).e("inner"))
      }, {
        default: h(() => [
          (v(!0), x(_e, null, ke(I.value, (t, S) => (v(), w(o(Le), F({ closable: "" }, t.tagProps, {
            size: oe.value,
            key: `tag-${t.value}`,
            class: o(r).e("tag"),
            disabled: o(b),
            onClose: (p) => O(t.value, S, p)
          }), {
            default: h(() => {
              var p;
              return [
                ze(j(((p = e.formatTag) == null ? void 0 : p.call(e, t.raw)) ?? t.label), 1)
              ];
            }),
            _: 2
          }, 1040, ["size", "class", "disabled", "onClose"]))), 128)),
          U("input", F({
            ref_key: "inputRef",
            ref: s,
            key: "input-tag-input"
          }, le.value, {
            class: o(r).e("input"),
            style: z,
            placeholder: I.value.length === 0 ? a.placeholder : void 0,
            disabled: o(b),
            readonly: a.readonly || a.disabledInput,
            onInput: ce,
            onKeydown: pe,
            onFocus: de,
            onBlur: ve,
            onCompositionstart: D,
            onCompositionupdate: D,
            onCompositionend: D
          }), null, 16, We)
        ]),
        _: 1
      }, 8, ["class"]),
      ne.value ? (v(), w(o(H), {
        key: 1,
        class: V(o(r).em("icon", "clear")),
        onClick: me
      }, {
        default: h(() => [
          N(o(Pe))
        ]),
        _: 1
      }, 8, ["class"])) : R("", !0),
      T.value && K.value && ue.value ? (v(), w(o(H), {
        key: 2,
        class: V([
          o(r).e("icon"),
          o(r).e("validateIcon"),
          o(r).is("loading", T.value === "validating")
        ])
      }, {
        default: h(() => [
          (v(), w(De(K.value)))
        ]),
        _: 1
      }, 8, ["class"])) : R("", !0)
    ], 16));
  }
});
export {
  ua as default
};
