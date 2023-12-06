import { defineComponent as Q, useAttrs as Te, useSlots as Ie, reactive as ye, ref as c, computed as s, watch as we, onMounted as ke, openBlock as v, createElementBlock as N, mergeProps as M, createVNode as F, unref as t, withCtx as C, createElementVNode as P, normalizeClass as m, toDisplayString as q, renderSlot as _e, createCommentVNode as R, TransitionGroup as Ee, Fragment as ze, renderList as De, createBlock as w, createTextVNode as Se, resolveDynamicComponent as xe, nextTick as G } from "vue";
import { inputTagProps as Ne, inputTagEmits as Me } from "./input-tag.mjs";
import { useNamespace as Fe, defaultNamespace as Pe } from "@tu-view-plus/hooks";
import { INPUT_EVENTS as H } from "@tu-view-plus/constants";
import { omit as Re, pick as Be, isObject as Ae, ValidateComponentsMap as Le } from "@tu-view-plus/utils";
import { Close as $e } from "@tu-view-plus/icons-vue";
import { TuResizeObserver as Oe } from "../../resize-observer/index.mjs";
import { getValueData as We } from "./utils.mjs";
import "../../form/index.mjs";
import { TuTag as Ke } from "../../tag/index.mjs";
import { TuIcon as J } from "../../icon/index.mjs";
import "../style/input-tag.css";
import { useFormSize as Ue, useFormDisabled as je } from "../../form/src/hooks/use-form-props.mjs";
import { useFormItem as qe } from "../../form/src/hooks/use-form-item.mjs";
const Ge = ["placeholder", "disabled", "readonly"], He = Q({
  name: "TuInputTag",
  inheritAttrs: !1
}), ca = /* @__PURE__ */ Q({
  ...He,
  props: Ne,
  emits: Me,
  setup(X, { emit: Y }) {
    const Z = {
      value: "value",
      label: "label",
      closable: "closable",
      tagProps: "tagProps"
    }, l = X, i = Y, B = Te(), ee = Ie(), o = Fe("input-tag"), A = Ue(), g = je(), { form: k, formItem: _ } = qe(), E = ye({ width: "12px" }), h = c(), r = c(), d = c(!1), z = c(!1), T = c(""), ae = s(() => ({
      ...Z,
      ...l.fieldNames
    })), L = c(!1), $ = c(l.defaultValue), O = c(l.defaultInputValue), le = s(() => Re(B, H)), te = s(() => Be(B, H)), ne = s(() => b.value.length > 0 ? T.value || u.value : T.value || u.value || l.placeholder), V = s(() => l.modelValue ?? $.value), u = s(
      () => l.inputValue ?? O.value
    ), f = s(
      () => We(V.value, ae.value)
    ), ue = s(() => ["small", "mini"].indexOf(l.size) > -1 ? "mini" : l.size === "large" ? "medium" : "small"), b = s(() => {
      if (l.maxTagCount > 0) {
        const e = f.value.length - l.maxTagCount;
        if (e > 0) {
          const a = f.value.slice(0, l.maxTagCount), n = {
            value: "__tu__more",
            label: `${e}..`,
            closable: !1
          };
          return a.push({ raw: n, ...n }), a;
        }
      }
      return f.value;
    }), oe = s(
      () => !g.value && !l.readonly && l.allowClear && !!V.value.length && z.value
    ), se = s(() => (k == null ? void 0 : k.statusIcon) ?? !1), I = s(() => (_ == null ? void 0 : _.validateState) || ""), W = s(() => Ae(l.retainInputValue) ? {
      create: !1,
      blur: !1,
      ...l.retainInputValue
    } : {
      create: l.retainInputValue,
      blur: l.retainInputValue
    }), K = s(
      () => I.value && Le[I.value]
    ), re = s(() => ({
      [o.b()]: !0,
      [o.m(A.value)]: A.value,
      [o.m("has-tag")]: b.value.length > 0,
      [o.is("disabled")]: g.value
    })), ie = (e) => {
      z.value = !0, i("mouseenter", e);
    }, ce = (e) => {
      z.value = !1, i("mouseleave", e);
    }, pe = (e) => {
      r.value && e.target !== r.value && (e.preventDefault(), r.value.focus());
    }, ve = () => {
      h.value && j(h.value.offsetWidth);
    }, de = (e) => {
      const { value: a } = e.target;
      d.value || (y(a, e), G(() => {
        r.value && u.value !== r.value.value && (r.value.value = u.value);
      }));
    }, fe = (e) => {
      const a = e.key || e.code;
      if (!d.value && u.value && a === "Enter" && Ve(e), !d.value && b.value.length > 0 && !u.value && a === "Backspace") {
        const n = be();
        n >= 0 && U(f.value[n].value, n, e);
      }
    }, me = (e) => {
      L.value = !0, i("focus", e);
    }, ge = (e) => {
      L.value = !1, !W.value.blur && u.value && y("", e), i("blur", e);
    }, D = (e) => {
      const { value: a } = e.target;
      e.type === "compositionend" ? (d.value = !1, T.value = "", y(a, e), G(() => {
        r.value && u.value !== r.value.value && (r.value.value = u.value);
      })) : (d.value = !0, T.value = u.value + (e.data ?? ""));
    }, he = (e) => {
      S([], e), i("clear", e);
    }, U = (e, a, n) => {
      var p;
      const x = (p = V.value) == null ? void 0 : p.filter((Je, Ce) => Ce !== a);
      S(x, n), i("remove", e, n);
    }, Ve = (e) => {
      var a;
      if (u.value) {
        if (e.preventDefault(), l.uniqueValue && ((a = V.value) != null && a.includes(u.value))) {
          i("pressEnter", u.value, e);
          return;
        }
        const n = V.value.concat(u.value);
        S(n, e), i("pressEnter", u.value, e), W.value.create || y("", e);
      }
    }, y = (e, a) => {
      O.value = e, i("update:inputValue", e), i("inputValueChange", e, a);
    }, be = () => {
      for (let e = f.value.length - 1; e >= 0; e--)
        if (f.value[e].closable)
          return e;
      return -1;
    }, S = (e, a) => {
      $.value = e, i("update:modelValue", e), i("change", e, a);
    }, j = (e) => {
      e > 12 ? E.width = `${e}px` : E.width = "12px";
    };
    return we(u, (e) => {
      r.value && !d.value && e !== r.value.value && (r.value.value = e);
    }), ke(() => {
      h.value && j(h.value.offsetWidth);
    }), (e, a) => (v(), N("div", M(le.value, {
      class: re.value,
      onMousedown: pe,
      onMouseenter: ie,
      onMouseleave: ce
    }), [
      F(t(Oe), { onResize: ve }, {
        default: C(() => [
          P("span", {
            ref_key: "mirrorRef",
            ref: h,
            class: m(t(o).e("mirror"))
          }, q(ne.value), 3)
        ]),
        _: 1
      }),
      t(ee).prefix ? (v(), N("span", {
        key: 0,
        class: m(t(o).e("prefix"))
      }, [
        _e(e.$slots, "prefix")
      ], 2)) : R("", !0),
      F(Ee, {
        tag: "span",
        name: `${t(Pe)}-input-tag-zoom`,
        class: m(t(o).e("inner"))
      }, {
        default: C(() => [
          (v(!0), N(ze, null, De(b.value, (n, x) => (v(), w(t(Ke), M(n.tagProps, {
            disableTransitions: "",
            size: ue.value,
            key: `tag-${n.value}`,
            class: t(o).e("tag"),
            closable: !t(g) && !e.readonly && n.closable,
            disabled: t(g),
            onClose: (p) => U(n.value, x, p)
          }), {
            default: C(() => {
              var p;
              return [
                Se(q(((p = e.formatTag) == null ? void 0 : p.call(e, n.raw)) ?? n.label), 1)
              ];
            }),
            _: 2
          }, 1040, ["size", "class", "closable", "disabled", "onClose"]))), 128)),
          P("input", M({
            ref_key: "inputRef",
            ref: r,
            key: "input-tag-input"
          }, te.value, {
            class: t(o).e("input"),
            style: E,
            placeholder: b.value.length === 0 ? l.placeholder : void 0,
            disabled: t(g),
            readonly: l.readonly || l.disabledInput,
            onInput: de,
            onKeydown: fe,
            onFocus: me,
            onBlur: ge,
            onCompositionstart: D,
            onCompositionupdate: D,
            onCompositionend: D
          }), null, 16, Ge)
        ]),
        _: 1
      }, 8, ["name", "class"]),
      P("span", {
        class: m(t(o).e("suffix"))
      }, [
        oe.value ? (v(), w(t(J), {
          key: 0,
          class: m([t(o).e("icon"), t(o).em("icon", "clear")]),
          onClick: he,
          onMousedown: a[0] || (a[0] = (n) => n.stopPropagation())
        }, {
          default: C(() => [
            F(t($e))
          ]),
          _: 1
        }, 8, ["class"])) : R("", !0),
        I.value && K.value && se.value ? (v(), w(t(J), {
          key: 1,
          class: m([
            t(o).e("icon"),
            t(o).e("validateIcon"),
            t(o).is("loading", I.value === "validating")
          ])
        }, {
          default: C(() => [
            (v(), w(xe(K.value)))
          ]),
          _: 1
        }, 8, ["class"])) : R("", !0)
      ], 2)
    ], 16));
  }
});
export {
  ca as default
};
