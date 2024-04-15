import { buildProps as o } from "@tu-view-plus/utils";
const t = o({
  actions: {
    type: Array,
    default: () => []
  },
  /** 控制条的布局 */
  actionsLayout: {
    type: Array,
    default: () => []
  }
});
export {
  t as imagePreviewToolbarProps
};
