import { buildProps as t } from "@tu-view-plus/utils";
const n = t({
  type: {
    type: String,
    default: "next"
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: {
    type: Function
  }
}), i = {
  click: (e) => !0
};
export {
  i as tabsButtonEmits,
  n as tabsButtonProps
};
