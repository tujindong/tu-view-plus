import { buildProps as t } from "@tu-view-plus/utils";
const e = t({
  shortcuts: {
    type: Array,
    default: () => []
  },
  showNowBtn: {
    type: Boolean
  }
}), s = [
  "item-click",
  "item-mouse-enter",
  "item-mouse-leave",
  "now-click"
];
export {
  s as shortcutsEmits,
  e as shortcutsProps
};
