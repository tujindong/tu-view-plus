import { withInstall as o } from "@tu-view-plus/utils";
import r from "./src/image.vue.mjs";
import m from "./src/image-footer.vue.mjs";
import i from "./src/preview.vue.mjs";
import t from "./src/preview-toolbar.vue.mjs";
import e from "./src/preview-arrow.vue.mjs";
import s from "./src/preview-action.vue.mjs";
import f from "./src/preview-group.vue.mjs";
import { imageEmits as d, imageProps as h } from "./src/image.mjs";
const P = o(r), g = o(m), v = o(i), $ = o(t), l = o(e), I = o(s), x = o(f);
export {
  P as TuImage,
  g as TuImageFooter,
  v as TuPreview,
  I as TuPreviewAction,
  l as TuPreviewArrow,
  x as TuPreviewGroup,
  $ as TuPreviewToolbar,
  P as default,
  d as imageEmits,
  h as imageProps
};
