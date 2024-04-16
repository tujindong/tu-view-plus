import { withInstall as m } from "@tu-view-plus/utils";
import o from "./src/image.vue.mjs";
import r from "./src/image-footer.vue.mjs";
import e from "./src/image-preview.vue.mjs";
import i from "./src/image-preview-toolbar.vue.mjs";
import t from "./src/image-preview-arrow.vue.mjs";
import a from "./src/image-preview-action.vue.mjs";
import s from "./src/image-preview-group.vue.mjs";
import { imageEmits as d, imageProps as h } from "./src/image.mjs";
const T = m(o), w = m(r), P = m(e), v = m(i), $ = m(t), l = m(a), x = m(s);
export {
  T as TuImage,
  w as TuImageFooter,
  P as TuImagePreview,
  l as TuImagePreviewAction,
  $ as TuImagePreviewArrow,
  x as TuImagePreviewGroup,
  v as TuImagePreviewToolbar,
  T as default,
  d as imageEmits,
  h as imageProps
};
