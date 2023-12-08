import { defineComponent as H, useAttrs as Ve, useSlots as be, reactive as Ce, ref as c, computed as o, watch as Te, onMounted as we, openBlock as V, createElementBlock as x, mergeProps as D, createVNode as N, unref as u, withCtx as w, createElementVNode as S, normalizeClass as b, toDisplayString as W, renderSlot as K, createCommentVNode as U, TransitionGroup as ye, Fragment as Ie, renderList as _e, createBlock as j, createTextVNode as ke, nextTick as q } from "vue";
import { inputTagProps as Ee, inputTagEmits as ze } from "./input-tag.mjs";
import { useNamespace as xe, defaultNamespace as De } from "@tu-view-plus/hooks";
import { INPUT_EVENTS as G } from "@tu-view-plus/constants";
import { omit as Ne, pick as Se, isObject as Me, ValidateComponentsMap as Fe } from "@tu-view-plus/utils";
import { Close as Pe } from "@tu-view-plus/icons-vue";
import { TuResizeObserver as Re } from "../../resize-observer/index.mjs";
import { getValueData as Be } from "./utils.mjs";
import "../../form/index.mjs";
import { TuTag as Ae } from "../../tag/index.mjs";
import { TuIcon as $e } from "../../icon/index.mjs";
import "../style/input-tag.css";
import { useFormSize as Le, useFormDisabled as Oe } from "../../form/src/hooks/use-form-props.mjs";
import { useFormItem as We } from "../../form/src/hooks/use-form-item.mjs";
const Ke = ["placeholder", "disabled", "readonly"], Ue = H({
  name: "TuInputTag",
  inheritAttrs: !1
}), sa = /* @__PURE__ */ H({
  ...Ue,
  props: Ee,
  emits: ze,
  setup(J, { emit: Q }) {
    const X = {
      value: "value",
      label: "label",
      closable: "closable",
      tagProps: "tagProps"
    }, l = J, r = Q, M = Ve(), Y = be(), i = xe("input-tag"), F = Le(), f = Oe(), { form: je, formItem: y } = We(), I = Ce({ width: "12px" }), m = c(), s = c(), v = c(!1), _ = c(!1), C = c(""), Z = o(() => ({
      ...X,
      ...l.fieldNames
    })), P = c(!1), R = c(l.defaultValue), B = c(l.defaultInputValue), ee = o(() => Ne(M, G)), ae = o(() => Se(M, G)), le = o(() => h.value.length > 0 ? C.value || n.value : C.value || n.value || l.placeholder), g = o(() => l.modelValue ?? R.value), n = o(
      () => l.inputValue ?? B.value
    ), d = o(
      () => Be(g.value, Z.value)
    ), te = o(() => ["small", "mini"].indexOf(l.size) > -1 ? "mini" : l.size === "large" ? "medium" : "small"), h = o(() => {
      if (l.maxTagCount > 0) {
        const e = d.value.length - l.maxTagCount;
        if (e > 0) {
          const a = d.value.slice(0, l.maxTagCount), t = {
            value: "__tu__tag__more",
            label: `${e}..`,
            closable: !1
          };
          return a.push({ raw: t, ...t }), a;
        }
      }
      return d.value;
    }), ue = o(
      () => !f.value && !l.readonly && l.allowClear && !!g.value.length && _.value
    ), A = o(() => (y == null ? void 0 : y.validateState) || ""), $ = o(() => Me(l.retainInputValue) ? {
      create: !1,
      blur: !1,
      ...l.retainInputValue
    } : {
      create: l.retainInputValue,
      blur: l.retainInputValue
    });
    o(
      () => A.value && Fe[A.value]
    );
    const ne = o(() => ({
      [i.b()]: !0,
      [i.m(F.value)]: F.value,
      [i.m("has-tag")]: h.value.length > 0,
      [i.is("disabled")]: f.value
    })), oe = (e) => {
      _.value = !0, r("mouseenter", e);
    }, se = (e) => {
      _.value = !1, r("mouseleave", e);
    }, re = (e) => {
      s.value && e.target !== s.value && (e.preventDefault(), s.value.focus());
    }, ie = () => {
      m.value && O(m.value.offsetWidth);
    }, ce = (e) => {
      const { value: a } = e.target;
      v.value || (T(a, e), q(() => {
        s.value && n.value !== s.value.value && (s.value.value = n.value);
      }));
    }, pe = (e) => {
      const a = e.key || e.code;
      if (!v.value && n.value && a === "Enter" && me(e), !v.value && h.value.length > 0 && !n.value && a === "Backspace") {
        const t = ge();
        t >= 0 && L(d.value[t].value, t, e);
      }
    }, ve = (e) => {
      P.value = !0, r("focus", e);
    }, de = (e) => {
      P.value = !1, !$.value.blur && n.value && T("", e), r("blur", e);
    }, k = (e) => {
      const { value: a } = e.target;
      e.type === "compositionend" ? (v.value = !1, C.value = "", T(a, e), q(() => {
        s.value && n.value !== s.value.value && (s.value.value = n.value);
      })) : (v.value = !0, C.value = n.value + (e.data ?? ""));
    }, fe = (e) => {
      E([], e), r("clear", e);
    }, L = (e, a, t) => {
      var p;
      const z = (p = g.value) == null ? void 0 : p.filter((qe, he) => he !== a);
      E(z, t), r("remove", e, t);
    }, me = (e) => {
      var a;
      if (n.value) {
        if (e.preventDefault(), l.uniqueValue && ((a = g.value) != null && a.includes(n.value))) {
          r("pressEnter", n.value, e);
          return;
        }
        const t = g.value.concat(n.value);
        E(t, e), r("pressEnter", n.value, e), $.value.create || T("", e);
      }
    }, T = (e, a) => {
      B.value = e, r("update:inputValue", e), r("inputValueChange", e, a);
    }, ge = () => {
      for (let e = d.value.length - 1; e >= 0; e--)
        if (d.value[e].closable)
          return e;
      return -1;
    }, E = (e, a) => {
      R.value = e, r("update:modelValue", e), r("change", e, a);
    }, O = (e) => {
      e > 12 ? I.width = `${e}px` : I.width = "12px";
    };
    return Te(n, (e) => {
      s.value && !v.value && e !== s.value.value && (s.value.value = e);
    }), we(() => {
      m.value && O(m.value.offsetWidth);
    }), (e, a) => (V(), x("div", D(ee.value, {
      class: ne.value,
      onMousedown: re,
      onMouseenter: oe,
      onMouseleave: se
    }), [
      N(u(Re), { onResize: ie }, {
        default: w(() => [
          S("span", {
            ref_key: "mirrorRef",
            ref: m,
            class: b(u(i).e("mirror"))
          }, W(le.value), 3)
        ]),
        _: 1
      }),
      u(Y).prefix ? (V(), x("span", {
        key: 0,
        class: b(u(i).e("prefix"))
      }, [
        K(e.$slots, "prefix")
      ], 2)) : U("", !0),
      N(ye, {
        tag: "span",
        name: `${u(De)}-input-tag-zoom`,
        class: b(u(i).e("inner"))
      }, {
        default: w(() => [
          (V(!0), x(Ie, null, _e(h.value, (t, z) => (V(), j(u(Ae), D(t.tagProps, {
            disableTransitions: "",
            size: te.value,
            key: `tag-${t.value}`,
            class: u(i).e("tag"),
            closable: !u(f) && !e.readonly && t.closable,
            disabled: u(f),
            onClose: (p) => L(t.value, z, p)
          }), {
            default: w(() => {
              var p;
              return [
                ke(W(((p = e.formatTag) == null ? void 0 : p.call(e, t.raw)) ?? t.label), 1)
              ];
            }),
            _: 2
          }, 1040, ["size", "class", "closable", "disabled", "onClose"]))), 128)),
          S("input", D({
            ref_key: "inputRef",
            ref: s,
            key: "input-tag-input"
          }, ae.value, {
            class: u(i).e("input"),
            style: I,
            placeholder: h.value.length === 0 ? l.placeholder : void 0,
            disabled: u(f),
            readonly: l.readonly || l.disabledInput,
            onInput: ce,
            onKeydown: pe,
            onFocus: ve,
            onBlur: de,
            onCompositionstart: k,
            onCompositionupdate: k,
            onCompositionend: k
          }), null, 16, Ke)
        ]),
        _: 1
      }, 8, ["name", "class"]),
      S("span", {
        class: b(u(i).e("suffix"))
      }, [
        ue.value ? (V(), j(u($e), {
          key: 0,
          class: b([u(i).e("icon"), u(i).em("icon", "clear")]),
          onClick: fe,
          onMousedown: a[0] || (a[0] = (t) => t.stopPropagation())
        }, {
          default: w(() => [
            N(u(Pe))
          ]),
          _: 1
        }, 8, ["class"])) : U("", !0),
        K(e.$slots, "suffix")
      ], 2)
    ], 16));
  }
});
export {
  sa as default
};
