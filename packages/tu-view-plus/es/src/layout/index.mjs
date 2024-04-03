import { withInstall as o } from "@tu-view-plus/utils";
import t from "./src/layout.vue.mjs";
import r from "./src/layout-header.vue.mjs";
import m from "./src/layout-content.vue.mjs";
import a from "./src/layout-footer.vue.mjs";
import f from "./src/layout-sider.vue.mjs";
import { layoutProps as d } from "./src/layout.mjs";
const p = o(t), e = o(r), y = o(m), L = o(a), T = o(f);
export {
  p as TuLayout,
  y as TuLayoutContent,
  L as TuLayoutFooter,
  e as TuLayoutHeader,
  T as TuLayoutSider,
  p as default,
  d as layoutProps
};
