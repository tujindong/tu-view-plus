import { defineComponent as J, useAttrs as be, useSlots as Ie, reactive as U, ref as d, computed as o, onMounted as Te, openBlock as v, createElementBlock as z, mergeProps as D, createVNode as E, unref as n, withCtx as g, createElementVNode as W, normalizeClass as C, toDisplayString as j, renderSlot as ye, createCommentVNode as F, TransitionGroup as we, Fragment as _e, renderList as ke, createBlock as b, createTextVNode as Se, resolveDynamicComponent as xe, nextTick as q } from "vue";
import { inputTagProps as ze, inputTagEmits as De } from "./input-tag.mjs";
import { useNamespace as Ee } from "@tu-view-plus/hooks";
import { INPUT_EVENTS as G } from "@tu-view-plus/constants";
import { omit as Fe, ValidateComponentsMap as Ne } from "@tu-view-plus/utils";
import { Close as Re } from "@tu-view-plus/icons-vue";
import { TuResizeObserver as Be } from "../../resize-observer/index.mjs";
import { getValueData as Pe } from "./utils.mjs";
import "../../form/index.mjs";
import { pick as Ae, isObject as Me } from "lodash";
import { TuTag as Le } from "../../tag/index.mjs";
import { TuIcon as H } from "../../icon/index.mjs";
import "../style/input-tag.css";
import { useFormSize as $e, useFormDisabled as Ke } from "../../form/src/hooks/use-form-props.mjs";
import { useFormItem as Oe } from "../../form/src/hooks/use-form-item.mjs";
const Ue = ["placeholder", "disabled", "readonly"], We = J({
  name: "TuInputTag"
}), sa = /* @__PURE__ */ J({
  ...We,
  props: ze,
  emits: De,
  setup(Q, { emit: X }) {
    const Y = {
      value: "value",
      label: "label",
      closable: "closable",
      tagProps: "tagProps"
    }, l = Q, r = X, N = be(), Z = Ie(), s = Ee("input-tag"), R = $e(), I = Ke(), { form: T, formItem: y } = Oe(), B = U({ width: "12px" }), w = d(), i = d(), m = d(!1), P = d(""), ee = o(() => ({
      ...Y,
      ...l.fieldNames
    })), A = d(!1), M = d(l.defaultValue), L = d(l.defaultInputValue), ae = o(() => Fe(N, G)), le = o(() => Ae(N, G)), te = o(() => {
    }), f = o(() => l.modelValue ?? M.value), u = o(
      () => l.inputValue ?? L.value
    ), c = o(
      () => Pe(f.value, ee.value)
    ), oe = o(() => ["small", "mini"].indexOf(l.size) > -1 ? "mini" : "small"), _ = o(() => {
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
    }), ne = o(
      () => !I.value && !l.readonly && l.allowClear && !!f.value.length
    ), ue = o(() => (T == null ? void 0 : T.statusIcon) ?? !1), h = o(() => (y == null ? void 0 : y.validateState) || ""), $ = o(() => Me(l.retainInputValue) ? {
      create: !1,
      blur: !1,
      ...l.retainInputValue
    } : {
      create: l.retainInputValue,
      blur: l.retainInputValue
    }), K = o(
      () => h.value && Ne[h.value]
    ), se = U({ width: "12px" }), re = o(() => ({
      [s.b()]: !0,
      [s.m(R.value)]: R.value,
      [s.is("disabled")]: I.value
    })), ie = (e) => {
      i.value && e.target !== i.value && (e.preventDefault(), i.value.focus());
    }, ce = () => {
      console.log("resize");
    }, pe = (e) => {
      const { value: a } = e.target;
      m.value || (V(a, e), q(() => {
        i.value && u.value !== i.value.value && (i.value.value = u.value);
      }));
    }, de = (e) => {
      console.log("handleKeydown");
      const a = e.key || e.code;
      if (!m.value && u.value && a === "Enter" && ge(e), !m.value && _.value.length > 0 && !u.value && a === "Backspace") {
        const t = he();
        t >= 0 && O(c.value[t].value, t, e);
      }
    }, ve = (e) => {
      console.log("handleFocus"), A.value = !0, r("focus", e);
    }, me = (e) => {
      console.log("handleBlur"), A.value = !1, !$.value.blur && u.value && V("", e), r("blur", e);
    }, k = (e) => {
      console.log("handleComposition", e);
      const { value: a } = e.target;
      e.type === "compositionend" ? (m.value = !1, P.value = "", V(a, e), q(() => {
        i.value && u.value !== i.value.value && (i.value.value = u.value);
      })) : (m.value = !0, P.value = u.value + (e.data ?? ""));
    }, fe = (e) => {
      console.log("clear"), S([], e), r("clear", e);
    }, O = (e, a, t) => {
      var p;
      console.log("handleRemove");
      const x = (p = f.value) == null ? void 0 : p.filter((je, Ce) => Ce !== a);
      S(x, t), r("remove", e, t);
    }, ge = (e) => {
      var a;
      if (u.value) {
        if (e.preventDefault(), l.uniqueValue && ((a = f.value) != null && a.includes(u.value))) {
          r("pressEnter", u.value, e);
          return;
        }
        const t = f.value.concat(u.value);
        S(t, e), r("pressEnter", u.value, e), $.value.create || V("", e);
      }
    }, V = (e, a) => {
      L.value = e, r("update:inputValue", e), r("inputValueChange", e, a);
    }, he = () => {
      for (let e = c.value.length - 1; e >= 0; e--)
        if (c.value[e].closable)
          return e;
      return -1;
    }, S = (e, a) => {
      M.value = e, r("update:modelValue", e), r("change", e, a);
    }, Ve = (e) => {
      e > 12 ? B.width = `${e}px` : B.width = "12px";
    };
    return Te(() => {
      w.value && Ve(w.value.offsetWidth);
    }), (e, a) => (v(), z("div", D({
      class: re.value,
      onMousedown: ie
    }, ae.value), [
      E(n(Be), { onResize: ce }, {
        default: g(() => [
          W("span", {
            ref_key: "mirrorRef",
            ref: w,
            class: C(n(s).e("mirror"))
          }, j(te.value), 3)
        ]),
        _: 1
      }),
      n(Z).prefix ? (v(), z("span", {
        key: 0,
        class: C(n(s).e("prefix"))
      }, [
        ye(e.$slots, "prefix")
      ], 2)) : F("", !0),
      E(we, {
        tag: "span",
        name: "input-tag-zoom",
        class: C(n(s).e("inner"))
      }, {
        default: g(() => [
          (v(!0), z(_e, null, ke(_.value, (t, x) => (v(), b(n(Le), D({ closable: "" }, t.tagProps, {
            size: oe.value,
            key: `tag-${t.value}`,
            class: n(s).e("tag"),
            onClose: (p) => O(t.value, x, p)
          }), {
            default: g(() => {
              var p;
              return [
                Se(j(((p = e.formatTag) == null ? void 0 : p.call(e, t.raw)) ?? t.label), 1)
              ];
            }),
            _: 2
          }, 1040, ["size", "class", "onClose"]))), 128)),
          W("input", D({
            ref_key: "inputRef",
            ref: i,
            key: "input-tag-input"
          }, le.value, {
            class: n(s).e("input"),
            style: se,
            placeholder: _.value.length === 0 ? l.placeholder : void 0,
            disabled: n(I),
            readonly: l.readonly || l.disabledInput,
            onInput: pe,
            onKeydown: de,
            onFocus: ve,
            onBlur: me,
            onCompositionstart: k,
            onCompositionupdate: k,
            onCompositionend: k
          }), null, 16, Ue)
        ]),
        _: 1
      }, 8, ["class"]),
      ne.value ? (v(), b(n(H), {
        key: 1,
        onClick: fe
      }, {
        default: g(() => [
          E(n(Re))
        ]),
        _: 1
      })) : F("", !0),
      h.value && K.value && ue.value ? (v(), b(n(H), {
        key: 2,
        class: C([
          n(s).e("icon"),
          n(s).e("validateIcon"),
          n(s).is("loading", h.value === "validating")
        ])
      }, {
        default: g(() => [
          (v(), b(xe(K.value)))
        ]),
        _: 1
      }, 8, ["class"])) : F("", !0)
    ], 16));
  }
});
export {
  sa as default
};
