import { defineComponent as J, useAttrs as Ce, useSlots as be, ref as d, computed as n, reactive as U, onMounted as Ie, openBlock as v, createElementBlock as S, mergeProps as x, createVNode as F, unref as o, withCtx as g, createElementVNode as W, normalizeClass as C, toDisplayString as j, renderSlot as Te, createCommentVNode as N, TransitionGroup as ye, Fragment as we, renderList as _e, createBlock as b, createTextVNode as ke, resolveDynamicComponent as De, nextTick as q } from "vue";
import { inputTagProps as Ee, inputTagEmits as Se } from "./input-tag.mjs";
import { useNamespace as xe } from "@tu-view-plus/hooks";
import { INPUT_EVENTS as G } from "@tu-view-plus/constants";
import { omit as Fe, ValidateComponentsMap as Ne } from "@tu-view-plus/utils";
import { Close as Re } from "@tu-view-plus/icons-vue";
import { TuResizeObserver as ze } from "../../resize-observer/index.mjs";
import { getValueData as Be } from "./utils.mjs";
import "../../form/index.mjs";
import { pick as Pe, isObject as Ae } from "lodash";
import { TuTag as Me } from "../../tag/index.mjs";
import { TuIcon as H } from "../../icon/index.mjs";
import "../style/input-tag.css";
import { useFormSize as Le, useFormDisabled as $e } from "../../form/src/hooks/use-form-props.mjs";
import { useFormItem as Ke } from "../../form/src/hooks/use-form-item.mjs";
const Oe = ["placeholder", "disabled", "readonly"], Ue = J({
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
    }, l = Q, r = X, R = Ce(), Z = be(), s = xe("input-tag"), z = Le(), I = $e(), { form: T, formItem: y } = Ke(), w = d(), i = d(), m = d(!1), B = d(""), ee = n(() => ({
      ...Y,
      ...l.fieldNames
    })), P = d(!1), A = d(l.defaultValue), M = d(l.defaultInputValue), ae = n(() => Fe(R, G)), le = n(() => Pe(R, G)), te = n(() => {
    }), f = n(() => l.modelValue ?? A.value), u = n(
      () => l.inputValue ?? M.value
    ), c = n(
      () => Be(f.value, ee.value)
    ), _ = n(() => {
      if (console.log("tags", c.value), l.maxTagCount > 0) {
        const e = c.value.length - l.maxTagCount;
        if (e > 0) {
          const a = c.value.slice(0, l.maxTagCount), t = {
            value: "__tu__more",
            label: `+${e}..`,
            closable: !1
          };
          return a.push({
            raw: t,
            ...t
          }), a;
        }
      }
      return c.value;
    }), oe = n(
      () => !I.value && !l.readonly && l.allowClear && !!f.value.length
    ), ne = n(() => (T == null ? void 0 : T.statusIcon) ?? !1), h = n(() => (y == null ? void 0 : y.validateState) || ""), L = n(() => Ae(l.retainInputValue) ? {
      create: !1,
      blur: !1,
      ...l.retainInputValue
    } : {
      create: l.retainInputValue,
      blur: l.retainInputValue
    }), $ = U({ width: "12px" }), K = n(
      () => h.value && Ne[h.value]
    ), ue = U({ width: "12px" }), se = n(() => ({
      [s.b()]: !0,
      [s.m(z.value)]: z.value,
      [s.is("disabled")]: I.value
    })), re = (e) => {
      i.value && e.target !== i.value && (e.preventDefault(), i.value.focus());
    }, ie = () => {
      console.log("resize");
    }, ce = (e) => {
      const { value: a } = e.target;
      m.value || (V(a, e), q(() => {
        i.value && u.value !== i.value.value && (i.value.value = u.value);
      }));
    }, pe = (e) => {
      console.log("handleKeydown");
      const a = e.key || e.code;
      if (!m.value && u.value && a === "Enter" && fe(e), !m.value && _.value.length > 0 && !u.value && a === "Backspace") {
        const t = ge();
        t >= 0 && O(c.value[t].value, t, e);
      }
    }, de = (e) => {
      console.log("handleFocus"), P.value = !0, r("focus", e);
    }, ve = (e) => {
      console.log("handleBlur"), P.value = !1, !L.value.blur && u.value && V("", e), r("blur", e);
    }, k = (e) => {
      console.log("handleComposition", e);
      const { value: a } = e.target;
      e.type === "compositionend" ? (m.value = !1, B.value = "", V(a, e), q(() => {
        i.value && u.value !== i.value.value && (i.value.value = u.value);
      })) : (m.value = !0, B.value = u.value + (e.data ?? ""));
    }, me = (e) => {
      console.log("clear"), D([], e), r("clear", e);
    }, O = (e, a, t) => {
      var p;
      console.log("handleRemove");
      const E = (p = f.value) == null ? void 0 : p.filter((We, Ve) => Ve !== a);
      D(E, t), r("remove", e, t);
    }, fe = (e) => {
      var a;
      if (u.value) {
        if (e.preventDefault(), l.uniqueValue && ((a = f.value) != null && a.includes(u.value))) {
          r("pressEnter", u.value, e);
          return;
        }
        const t = f.value.concat(u.value);
        D(t, e), r("pressEnter", u.value, e), L.value.create || V("", e);
      }
    }, V = (e, a) => {
      M.value = e, r("update:inputValue", e), r("inputValueChange", e, a);
    }, ge = () => {
      for (let e = c.value.length - 1; e >= 0; e--)
        if (c.value[e].closable)
          return e;
      return -1;
    }, D = (e, a) => {
      A.value = e, r("update:modelValue", e), r("change", e, a);
    }, he = (e) => {
      e > 12 ? $.width = `${e}px` : $.width = "12px";
    };
    return Ie(() => {
      w.value && he(w.value.offsetWidth);
    }), (e, a) => (v(), S("div", x({
      class: se.value,
      onMousedown: re
    }, ae.value), [
      F(o(ze), { onResize: ie }, {
        default: g(() => [
          W("span", {
            ref_key: "mirrorRef",
            ref: w,
            class: C(o(s).e("mirror"))
          }, j(te.value), 3)
        ]),
        _: 1
      }),
      o(Z).prefix ? (v(), S("span", {
        key: 0,
        class: C(o(s).e("prefix"))
      }, [
        Te(e.$slots, "prefix")
      ], 2)) : N("", !0),
      F(ye, {
        tag: "span",
        name: "input-tag-zoom",
        class: C(o(s).e("inner"))
      }, {
        default: g(() => [
          (v(!0), S(we, null, _e(_.value, (t, E) => (v(), b(o(Me), x({ closable: "" }, t.tagProps, {
            key: `tag-${t.value}`,
            class: o(s).e("tag"),
            onClose: (p) => O(t.value, E, p)
          }), {
            default: g(() => {
              var p;
              return [
                ke(j(((p = e.formatTag) == null ? void 0 : p.call(e, t.raw)) ?? t.label), 1)
              ];
            }),
            _: 2
          }, 1040, ["class", "onClose"]))), 128)),
          W("input", x({
            ref_key: "inputRef",
            ref: i,
            key: "input-tag-input"
          }, le.value, {
            class: o(s).e("input"),
            style: ue,
            placeholder: _.value.length === 0 ? l.placeholder : void 0,
            disabled: o(I),
            readonly: l.readonly || l.disabledInput,
            onInput: ce,
            onKeydown: pe,
            onFocus: de,
            onBlur: ve,
            onCompositionstart: k,
            onCompositionupdate: k,
            onCompositionend: k
          }), null, 16, Oe)
        ]),
        _: 1
      }, 8, ["class"]),
      oe.value ? (v(), b(o(H), {
        key: 1,
        onClick: me
      }, {
        default: g(() => [
          F(o(Re))
        ]),
        _: 1
      })) : N("", !0),
      h.value && K.value && ne.value ? (v(), b(o(H), {
        key: 2,
        class: C([
          o(s).e("icon"),
          o(s).e("validateIcon"),
          o(s).is("loading", h.value === "validating")
        ])
      }, {
        default: g(() => [
          (v(), b(De(K.value)))
        ]),
        _: 1
      }, 8, ["class"])) : N("", !0)
    ], 16));
  }
});
export {
  ua as default
};
