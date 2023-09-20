import { buildProps as e, definePropType as t } from "@tu-view-plus/utils";
import "@tu-view-plus/constants";
import { tabPositions as o } from "./constants.mjs";
const l = e({
  type: {
    type: String,
    values: ["card", "border-card", ""],
    default: ""
  },
  activeName: {
    type: [String, Number]
  },
  closable: Boolean,
  addable: Boolean,
  modelValue: {
    type: [String, Number]
  },
  editable: Boolean,
  tabPosition: {
    type: String,
    values: o,
    default: "top"
  },
  beforeLeave: {
    type: t(Function),
    default: () => !0
  },
  stretch: Boolean
});
export {
  l as tabsProps
};
