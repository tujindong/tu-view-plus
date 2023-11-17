import { defineComponent as X, useAttrs as Te, useSlots as Ie, reactive as ye, ref as c, computed as s, watch as we, onMounted as ke, openBlock as v, createElementBlock as M, mergeProps as B, createVNode as F, unref as t, withCtx as C, createElementVNode as P, normalizeClass as m, toDisplayString as G, renderSlot as _e, createCommentVNode as R, TransitionGroup as xe, Fragment as Ee, renderList as ze, createBlock as w, createTextVNode as De, resolveDynamicComponent as Se, nextTick as H } from "vue";
import { inputTagProps as Ne, inputTagEmits as Me } from "./input-tag.mjs";
import { useNamespace as Be, defaultNamespace as Fe } from "@tu-view-plus/hooks";
import { INPUT_EVENTS as J } from "@tu-view-plus/constants";
import { omit as Pe, pick as Re, isObject as Ae, ValidateComponentsMap as Le } from "@tu-view-plus/utils";
import { Close as $e } from "@tu-view-plus/icons-vue";
import { TuResizeObserver as Oe } from "../../resize-observer/index.mjs";
import { getValueData as We } from "./utils.mjs";
import "../../form/index.mjs";
import { TuTag as Ke } from "../../tag/index.mjs";
import { TuIcon as Q } from "../../icon/index.mjs";
import "../style/input-tag.css";
import { useFormSize as Ue, useFormDisabled as je } from "../../form/src/hooks/use-form-props.mjs";
import { useFormItem as qe } from "../../form/src/hooks/use-form-item.mjs";
const Ge = ["placeholder", "disabled", "readonly"], He = X({
  name: "TuInputTag"
}), ca = /* @__PURE__ */ X({
  ...He,
  props: Ne,
  emits: Me,
  setup(Y, { emit: Z }) {
    const ee = {
      value: "value",
      label: "label",
      closable: "closable",
      tagProps: "tagProps"
    }, l = Y, i = Z, A = Te(), k = Ie(), n = Be("input-tag"), L = Ue(), g = je(), { form: _, formItem: x } = qe(), E = ye({ width: "12px" }), h = c(), r = c(), d = c(!1), z = c(!1), T = c(""), ae = s(() => ({
      ...ee,
      ...l.fieldNames
    })), $ = c(!1), O = c(l.defaultValue), W = c(l.defaultInputValue), le = s(() => Pe(A, J)), te = s(() => Re(A, J)), ue = s(() => b.value.length > 0 ? T.value || o.value : T.value || o.value || l.placeholder), V = s(() => l.modelValue ?? O.value), o = s(
      () => l.inputValue ?? W.value
    ), f = s(
      () => We(V.value, ae.value)
    ), ne = s(() => ["small", "mini"].indexOf(l.size) > -1 ? "mini" : l.size === "large" ? "medium" : "small"), b = s(() => {
      if (l.maxTagCount > 0) {
        const e = f.value.length - l.maxTagCount;
        if (e > 0) {
          const a = f.value.slice(0, l.maxTagCount), u = {
            value: "__tu__more",
            label: `${e}..`,
            closable: !1
          };
          return a.push({ raw: u, ...u }), a;
        }
      }
      return f.value;
    }), oe = s(
      () => !g.value && !l.readonly && l.clearable && !!V.value.length && z.value
    ), se = s(() => (_ == null ? void 0 : _.statusIcon) ?? !1), I = s(() => (x == null ? void 0 : x.validateState) || ""), K = s(() => Ae(l.retainInputValue) ? {
      create: !1,
      blur: !1,
      ...l.retainInputValue
    } : {
      create: l.retainInputValue,
      blur: l.retainInputValue
    }), U = s(
      () => I.value && Le[I.value]
    ), re = s(() => ({
      [n.b()]: !0,
      [n.m(L.value)]: L.value,
      [n.m("has-tag")]: b.value.length > 0,
      [n.m("has-prefix")]: !!k.prefix,
      [n.m("has-suffix")]: !!k.suffix,
      [n.is("disabled")]: g.value
    })), ie = (e) => {
      z.value = !0, i("mouseenter", e);
    }, ce = (e) => {
      z.value = !1, i("mouseleave", e);
    }, pe = (e) => {
      r.value && e.target !== r.value && (e.preventDefault(), r.value.focus());
    }, ve = () => {
      h.value && q(h.value.offsetWidth);
    }, de = (e) => {
      const { value: a } = e.target;
      d.value || (y(a, e), H(() => {
        r.value && o.value !== r.value.value && (r.value.value = o.value);
      }));
    }, fe = (e) => {
      const a = e.key || e.code;
      if (!d.value && o.value && a === "Enter" && Ve(e), !d.value && b.value.length > 0 && !o.value && a === "Backspace") {
        const u = be();
        u >= 0 && j(f.value[u].value, u, e);
      }
    }, me = (e) => {
      $.value = !0, i("focus", e);
    }, ge = (e) => {
      $.value = !1, !K.value.blur && o.value && y("", e), i("blur", e);
    }, D = (e) => {
      const { value: a } = e.target;
      e.type === "compositionend" ? (d.value = !1, T.value = "", y(a, e), H(() => {
        r.value && o.value !== r.value.value && (r.value.value = o.value);
      })) : (d.value = !0, T.value = o.value + (e.data ?? ""));
    }, he = (e) => {
      S([], e), i("clear", e);
    }, j = (e, a, u) => {
      var p;
      const N = (p = V.value) == null ? void 0 : p.filter((Je, Ce) => Ce !== a);
      S(N, u), i("remove", e, u);
    }, Ve = (e) => {
      var a;
      if (o.value) {
        if (e.preventDefault(), l.uniqueValue && ((a = V.value) != null && a.includes(o.value))) {
          i("pressEnter", o.value, e);
          return;
        }
        const u = V.value.concat(o.value);
        S(u, e), i("pressEnter", o.value, e), K.value.create || y("", e);
      }
    }, y = (e, a) => {
      W.value = e, i("update:inputValue", e), i("inputValueChange", e, a);
    }, be = () => {
      for (let e = f.value.length - 1; e >= 0; e--)
        if (f.value[e].closable)
          return e;
      return -1;
    }, S = (e, a) => {
      O.value = e, i("update:modelValue", e), i("change", e, a);
    }, q = (e) => {
      e > 12 ? E.width = `${e}px` : E.width = "12px";
    };
    return we(o, (e) => {
      r.value && !d.value && e !== r.value.value && (r.value.value = e);
    }), ke(() => {
      h.value && q(h.value.offsetWidth);
    }), (e, a) => (v(), M("div", B({ class: re.value }, le.value, {
      onMousedown: pe,
      onMouseenter: ie,
      onMouseleave: ce
    }), [
      F(t(Oe), { onResize: ve }, {
        default: C(() => [
          P("span", {
            ref_key: "mirrorRef",
            ref: h,
            class: m(t(n).e("mirror"))
          }, G(ue.value), 3)
        ]),
        _: 1
      }),
      t(k).prefix ? (v(), M("span", {
        key: 0,
        class: m(t(n).e("prefix"))
      }, [
        _e(e.$slots, "prefix")
      ], 2)) : R("", !0),
      F(xe, {
        tag: "span",
        name: `${t(Fe)}-input-tag-zoom`,
        class: m(t(n).e("inner"))
      }, {
        default: C(() => [
          (v(!0), M(Ee, null, ze(b.value, (u, N) => (v(), w(t(Ke), B(u.tagProps, {
            disableTransitions: "",
            size: ne.value,
            key: `tag-${u.value}`,
            class: t(n).e("tag"),
            closable: !t(g) && !e.readonly && u.closable,
            disabled: t(g),
            onClose: (p) => j(u.value, N, p)
          }), {
            default: C(() => {
              var p;
              return [
                De(G(((p = e.formatTag) == null ? void 0 : p.call(e, u.raw)) ?? u.label), 1)
              ];
            }),
            _: 2
          }, 1040, ["size", "class", "closable", "disabled", "onClose"]))), 128)),
          P("input", B({
            ref_key: "inputRef",
            ref: r,
            key: "input-tag-input"
          }, te.value, {
            class: t(n).e("input"),
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
        class: m(t(n).e("suffix"))
      }, [
        oe.value ? (v(), w(t(Q), {
          key: 0,
          class: m([t(n).e("icon"), t(n).em("icon", "clear")]),
          onClick: he,
          onMousedown: a[0] || (a[0] = (u) => u.stopPropagation())
        }, {
          default: C(() => [
            F(t($e))
          ]),
          _: 1
        }, 8, ["class"])) : R("", !0),
        I.value && U.value && se.value ? (v(), w(t(Q), {
          key: 1,
          class: m([
            t(n).e("icon"),
            t(n).e("validateIcon"),
            t(n).is("loading", I.value === "validating")
          ])
        }, {
          default: C(() => [
            (v(), w(Se(U.value)))
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
