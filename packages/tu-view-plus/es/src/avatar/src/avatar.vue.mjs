import { defineComponent as A, useSlots as Q, useAttrs as Y, toRefs as Z, inject as ee, ref as n, computed as v, watch as te, onMounted as ae, resolveComponent as L, openBlock as _, createElementBlock as k, normalizeClass as d, normalizeStyle as $, createVNode as m, withCtx as x, createElementVNode as b, Fragment as oe, renderSlot as z, unref as r, createCommentVNode as C, nextTick as re } from "vue";
import { avatarProps as se, avatarEmits as le } from "./avatar.mjs";
import { avatarGroupInjectionKey as ne } from "./constants.mjs";
import { useNamespace as ie, useIndex as ue, defaultNamespace as ce } from "@tu-view-plus/hooks";
import { PictureRounded as ve, Loading as de } from "@tu-view-plus/icons-vue";
import { isNumber as me, addUnit as f } from "@tu-view-plus/utils";
import "../style/avatar.css";
const fe = ["src"], ge = A({
  name: "TuAvatar"
}), Se = /* @__PURE__ */ A({
  ...ge,
  props: se,
  emits: le,
  setup(W, { emit: P }) {
    const s = W, I = P, V = Q(), j = Y(), t = ie("avatar"), { shape: w, size: i, autoFixFontSize: B, triggerType: N, triggerIconStyle: S } = Z(s), a = ee(ne, void 0), g = n(), u = n(), p = n(!1), h = n(!1), E = n(!0), U = n(!1), G = v(() => ({
      [t.b()]: !0,
      [t.m(s.effect)]: s.effect,
      [t.is("shape")]: w.value == "circle",
      [t.is("trigger-icon")]: V["trigger-icon"]
    })), M = v(() => ({
      [t.e("image")]: p.value || s.imageUrl,
      [t.e("text")]: !(p.value || s.imageUrl)
    })), H = v(() => ({
      [t.e(`trigger-icon-${N.value}`)]: !0,
      [t.is("shape")]: w.value == "circle"
    })), F = a ? ue({
      itemRef: g,
      selector: `.${ce}-avatar`
    }).computedIndex : n(-1), K = v(() => {
      const e = me(c.value) ? {
        width: f(c.value),
        height: f(c.value),
        fontSize: f(c.value / 2)
      } : {};
      return a && (e.zIndex = a.zIndexAscend ? F.value + 1 : a.total - F.value, e.marginLeft = F.value !== 0 ? `-${(c.value ?? 40) / 4}px` : "0"), e;
    }), X = (({
      triggerType: e,
      inlineStyle: l = {},
      triggerIconStyle: o = {}
    }) => {
      let y = {};
      return e === "button" && (!o || o && !o.color) && l && l.backgroundColor && (y = { color: l.backgroundColor }), {
        ...o,
        ...y
      };
    })({
      triggerIconStyle: S == null ? void 0 : S.value,
      inlineStyle: j.style,
      triggerType: N.value
    }), c = v(() => (a == null ? void 0 : a.size) ?? (i == null ? void 0 : i.value)), R = v(
      () => (a == null ? void 0 : a.autoFixFontSize) ?? B.value
    ), T = () => {
      !p.value && !s.imageUrl && re(() => {
        if (!u.value || !g.value)
          return;
        const e = u.value.clientWidth, l = c.value ?? g.value.offsetWidth, o = l / (e + 8);
        l && o < 1 && (u.value.style.transform = `scale(${o}) translateX(-50%)`), E.value = !0;
      });
    }, q = (e) => {
      I("click", e);
    }, D = () => {
      R.value && T();
    }, J = () => {
      U.value = !0, I("load");
    }, O = () => {
      h.value = !0, I("error");
    };
    return te(i, () => {
      R.value && T();
    }), ae(() => {
      var e;
      (e = u.value) != null && e.firstElementChild && ["IMG", "PICTURE"].includes(u.value.firstElementChild.tagName) && (p.value = !0), R.value && T();
    }), (e, l) => {
      const o = L("tu-icon"), y = L("tu-resize-observer");
      return _(), k("div", {
        ref_key: "itemRef",
        ref: g,
        class: d(G.value),
        style: $(K.value),
        onClick: q
      }, [
        m(y, { onResize: D }, {
          default: x(() => [
            b("span", {
              ref_key: "wrapperRef",
              ref: u,
              class: d(M.value)
            }, [
              s.imageUrl ? (_(), k(oe, { key: 0 }, [
                h.value ? z(e.$slots, "error", { key: 0 }, () => [
                  b("div", {
                    class: d(r(t).e("image-icon"))
                  }, [
                    m(o, null, {
                      default: x(() => [
                        m(r(ve))
                      ]),
                      _: 1
                    })
                  ], 2)
                ]) : C("", !0),
                !(h.value || !E.value) && !U.value ? z(e.$slots, "default", { key: 1 }, () => [
                  b("div", {
                    class: d(r(t).e("image-icon"))
                  }, [
                    m(o, null, {
                      default: x(() => [
                        m(r(de))
                      ]),
                      _: 1
                    })
                  ], 2)
                ]) : C("", !0),
                h.value || !E.value ? C("", !0) : (_(), k("img", {
                  key: 2,
                  alt: "avatar",
                  src: s.imageUrl,
                  style: $({
                    width: r(f)(r(i)),
                    height: r(f)(r(i))
                  }),
                  onLoad: J,
                  onError: O
                }, null, 44, fe))
              ], 64)) : z(e.$slots, "default", { key: 1 })
            ], 2)
          ]),
          _: 3
        }),
        e.$slots["trigger-icon"] ? (_(), k("div", {
          key: 0,
          class: d(H.value),
          style: $(r(X))
        }, [
          z(e.$slots, "trigger-icon")
        ], 6)) : C("", !0)
      ], 6);
    };
  }
});
export {
  Se as default
};
