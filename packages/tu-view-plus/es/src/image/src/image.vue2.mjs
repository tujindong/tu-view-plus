import { defineComponent as R, ref as U, useAttrs as q, toRefs as D, inject as H, computed as r, reactive as J, watchEffect as F } from "vue";
import { imageProps as O, imageEmits as Q } from "./image.mjs";
import { useLocale as W, useNamespace as X, useMergeState as Y } from "@tu-view-plus/hooks";
import Z from "../hooks/use-image-load-status.mjs";
import { isBoolean as C, omit as x, isServerRendering as ee } from "@tu-view-plus/utils";
import { normalizeImageSizeProp as V } from "../utils/normalize-image-size-prop.mjs";
import { PreviewGroupInjectionKey as re } from "./constants.mjs";
import { Loading as oe, Picture as ie } from "@tu-view-plus/icons-vue";
import te from "./image-footer.vue.mjs";
import ae from "./preview.vue.mjs";
import "../style/image.css";
let se = 0;
const he = R({
  components: {
    Loading: oe,
    Picture: ie,
    TuImageFooter: te,
    TuPreview: ae
  },
  inheritAttrs: !1,
  name: "TuImage",
  props: O,
  emits: Q,
  setup(a, { slots: j, emit: I }) {
    const { t: z } = W(), o = X("image"), s = U(), n = q(), {
      height: l,
      width: m,
      hideFooter: u,
      title: v,
      description: c,
      src: i,
      footerPosition: P,
      defaultPreviewVisible: T,
      previewVisible: k,
      preview: f,
      previewProps: d
    } = D(a), e = H(re, void 0), { isLoaded: t, isError: L, isLoading: b, setLoadStatus: g } = Z(), h = r(() => ({
      width: V(m == null ? void 0 : m.value),
      height: V(l == null ? void 0 : l.value)
    })), A = r(() => a.fit ? { objectFit: a.fit } : {}), $ = r(() => ({
      [o.b()]: !0,
      [o.m("loading")]: b.value,
      [o.m("loading-error")]: L.value,
      [o.m("with-footer-inner")]: t && p && P.value === "inner",
      [o.m("with-footer-outer")]: t && p && P.value === "outer",
      ...n.class
    })), B = r(() => [
      h.value,
      n.style
    ]), p = r(() => v != null && v.value || c != null && c.value || j.extra ? C(u.value) ? !u.value && t.value : u.value === "never" : !1), G = r(() => x(n, ["class", "style"])), [K, S] = Y(
      T.value,
      J({
        value: k
      })
    ), M = r(
      () => !(e != null && e.preview) && f.value
    );
    F(() => {
      ee || !s.value || (s.value.src = i == null ? void 0 : i.value, g("loading"));
    });
    const y = se++;
    return F((N) => {
      var _, E;
      const w = (E = e == null ? void 0 : e.registerImageUrl) == null ? void 0 : E.call(
        e,
        y,
        (((_ = d == null ? void 0 : d.value) == null ? void 0 : _.src) ?? (i == null ? void 0 : i.value)) || "",
        f.value
      );
      N(() => {
        w == null || w();
      });
    }), {
      t: z,
      wrapperClasses: $,
      wrapperStyles: B,
      imgProps: G,
      nsImage: o,
      sizeStyle: h,
      fitStyle: A,
      isLoaded: t,
      isError: L,
      isLoading: b,
      mergedPreviewVisible: K,
      mergePreview: M,
      showFooter: p,
      refImg: s,
      onImgLoaded: () => {
        g("loaded");
      },
      onImgLoadError: () => {
        g("error");
      },
      onImgClick: () => {
        f.value && (e != null && e.preview ? e.preview(y) : (I("preview-visible-change", !0), S(!0)));
      },
      onPreviewClose: () => {
        I("preview-visible-change", !1), S(!1);
      }
    };
  }
});
export {
  he as default
};
