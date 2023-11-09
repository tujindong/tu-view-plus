import { defineComponent as A, useSlots as Q, useAttrs as Y, toRefs as Z, inject as ee, ref as n, computed as i, watch as te, onMounted as ae, resolveComponent as L, openBlock as _, createElementBlock as z, normalizeClass as v, normalizeStyle as b, createVNode as d, withCtx as w, createElementVNode as N, Fragment as oe, renderSlot as k, unref as r, createCommentVNode as I, nextTick as re } from "vue";
import { avatarProps as se, avatarEmits as le } from "./avatar.mjs";
import { avatarGroupInjectionKey as ne } from "./constants.mjs";
import { useNamespace as ie, useIndex as ue, defaultNamespace as ce } from "@tu-view-plus/hooks";
import { PictureRounded as ve, Loading as de } from "@tu-view-plus/icons-vue";
import { isNumber as me, addUnit as m } from "@tu-view-plus/utils";
import "../style/avatar.css";
const fe = ["src"], ge = A({
  name: "TuAvatar"
}), Ce = /* @__PURE__ */ A({
  ...ge,
  props: se,
  emits: le,
  setup(W, { emit: P }) {
    const s = W, S = P, V = Q(), j = Y(), a = ie("avatar"), { shape: C, size: f, autoFixFontSize: B, triggerType: U, triggerIconStyle: E } = Z(s), t = ee(ne, void 0), g = n(), u = n(), p = n(!1), h = n(!1), F = n(!0), x = n(!1), G = i(() => ({
      [a.b()]: !0,
      [a.m(s.effect)]: s.effect,
      [a.is("shape")]: C.value == "circle",
      [a.is("trigger-icon")]: V["trigger-icon"]
    })), M = i(() => ({
      [a.e("image")]: p.value || s.imageUrl,
      [a.e("text")]: !(p.value || s.imageUrl)
    })), H = i(() => ({
      [a.e(`trigger-icon-${U.value}`)]: !0,
      [a.is("shape")]: C.value == "circle"
    })), R = t ? ue({
      itemRef: g,
      selector: `.${ce}-avatar`
    }).computedIndex : n(-1), K = i(() => {
      const e = me(c.value) ? {
        width: m(c.value),
        height: m(c.value),
        fontSize: m(c.value / 2)
      } : {};
      return t && (e.zIndex = t.zIndexAscend ? R.value + 1 : t.total - R.value, e.marginLeft = R.value !== 0 ? `-${(c.value ?? 40) / 4}px` : "0"), e;
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
      triggerIconStyle: E == null ? void 0 : E.value,
      inlineStyle: j.style,
      triggerType: U.value
    });
    i(() => (t == null ? void 0 : t.shape) ?? C.value);
    const c = i(() => (t == null ? void 0 : t.size) ?? f.value), T = i(
      () => (t == null ? void 0 : t.autoFixFontSize) ?? B.value
    ), $ = () => {
      !p.value && !s.imageUrl && re(() => {
        if (!u.value || !g.value)
          return;
        const e = u.value.clientWidth, l = c.value ?? g.value.offsetWidth, o = l / (e + 8);
        l && o < 1 && (u.value.style.transform = `scale(${o}) translateX(-50%)`), F.value = !0;
      });
    }, q = (e) => {
      S("click", e);
    }, D = () => {
      T.value && $();
    }, J = () => {
      x.value = !0, S("load");
    }, O = () => {
      h.value = !0, S("error");
    };
    return te(f, () => {
      T.value && $();
    }), ae(() => {
      var e;
      (e = u.value) != null && e.firstElementChild && ["IMG", "PICTURE"].includes(u.value.firstElementChild.tagName) && (p.value = !0), T.value && $();
    }), (e, l) => {
      const o = L("tu-icon"), y = L("tu-resize-observer");
      return _(), z("div", {
        ref_key: "itemRef",
        ref: g,
        class: v(G.value),
        style: b(K.value),
        onClick: q
      }, [
        d(y, { onResize: D }, {
          default: w(() => [
            N("span", {
              ref_key: "wrapperRef",
              ref: u,
              class: v(M.value)
            }, [
              s.imageUrl ? (_(), z(oe, { key: 0 }, [
                h.value ? k(e.$slots, "error", { key: 0 }, () => [
                  N("div", {
                    class: v(r(a).e("image-icon"))
                  }, [
                    d(o, null, {
                      default: w(() => [
                        d(r(ve))
                      ]),
                      _: 1
                    })
                  ], 2)
                ]) : I("", !0),
                !(h.value || !F.value) && !x.value ? k(e.$slots, "default", { key: 1 }, () => [
                  N("div", {
                    class: v(r(a).e("image-icon"))
                  }, [
                    d(o, null, {
                      default: w(() => [
                        d(r(de))
                      ]),
                      _: 1
                    })
                  ], 2)
                ]) : I("", !0),
                h.value || !F.value ? I("", !0) : (_(), z("img", {
                  key: 2,
                  alt: "avatar",
                  src: s.imageUrl,
                  style: b({
                    width: r(m)(r(f)),
                    height: r(m)(r(f))
                  }),
                  onLoad: J,
                  onError: O
                }, null, 44, fe))
              ], 64)) : k(e.$slots, "default", { key: 1 })
            ], 2)
          ]),
          _: 3
        }),
        e.$slots["trigger-icon"] ? (_(), z("div", {
          key: 0,
          class: v(H.value),
          style: b(r(X))
        }, [
          k(e.$slots, "trigger-icon")
        ], 6)) : I("", !0)
      ], 6);
    };
  }
});
export {
  Ce as default
};
