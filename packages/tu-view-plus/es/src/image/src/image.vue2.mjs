import { defineComponent as R, ref as U, toRefs as q, inject as D, computed as r, reactive as H, watchEffect as F } from "vue";
import { imageProps as J, imageEmits as O } from "./image.mjs";
import { useLocale as Q, useNamespace as W, useMergeState as X } from "@tu-view-plus/hooks";
import Y from "../hooks/use-image-load-status.mjs";
import { isBoolean as Z, omit as C, isServerRendering as x } from "@tu-view-plus/utils";
import { normalizeImageSizeProp as V } from "../utils/normalize-image-size-prop.mjs";
import { PreviewGroupInjectionKey as ee } from "./constants.mjs";
import { TuIcon as re } from "../../icon/index.mjs";
import { Loading as oe, Picture as ie } from "@tu-view-plus/icons-vue";
import ae from "./image-footer.vue.mjs";
import te from "./image-preview.vue.mjs";
import "../style/image.css";
let se = 0;
const Se = R({
  components: {
    Loading: oe,
    Picture: ie,
    ImageFooter: ae,
    ImagePreview: te,
    TuIcon: re
  },
  inheritAttrs: !1,
  name: "TuImage",
  props: J,
  emits: O,
  setup(t, { attrs: s, slots: j, emit: I }) {
    const { t: z } = Q(), o = W("image"), n = U(), {
      height: m,
      width: l,
      hideFooter: u,
      title: v,
      description: c,
      src: i,
      footerPosition: P,
      defaultPreviewVisible: k,
      previewVisible: T,
      preview: f,
      previewProps: d
    } = q(t), e = D(ee, void 0), { isLoaded: a, isError: L, isLoading: b, setLoadStatus: g } = Y(), h = r(() => ({
      width: V(l == null ? void 0 : l.value),
      height: V(m == null ? void 0 : m.value)
    })), $ = r(() => t.fit ? { objectFit: t.fit } : {}), A = r(() => ({
      [o.b()]: !0,
      [o.m("loading")]: b.value,
      [o.m("loading-error")]: L.value,
      [o.m("with-footer-inner")]: a && p && P.value === "inner",
      [o.m("with-footer-outer")]: a && p && P.value === "outer",
      ...s.class
    })), B = r(() => [
      h.value,
      s.style
    ]), p = r(() => v != null && v.value || c != null && c.value || j.extra ? Z(u.value) ? !u.value && a.value : u.value === "never" : !1), G = r(() => C(s, ["class", "style"])), [K, S] = X(
      k.value,
      H({
        value: T
      })
    ), M = r(
      () => !(e != null && e.preview) && f.value
    );
    F(() => {
      x || !n.value || (n.value.src = i == null ? void 0 : i.value, g("loading"));
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
      wrapperClasses: A,
      wrapperStyles: B,
      imgProps: G,
      nsImage: o,
      sizeStyle: h,
      fitStyle: $,
      isLoaded: a,
      isError: L,
      isLoading: b,
      mergedPreviewVisible: K,
      mergePreview: M,
      showFooter: p,
      refImg: n,
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
  Se as default
};
