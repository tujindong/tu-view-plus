import { buildProps as e } from "@tu-view-plus/utils";
const r = e({
  pages: {
    type: Number,
    required: !0
  },
  current: {
    type: Number,
    required: !0
  },
  type: {
    type: String,
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  simple: {
    type: Boolean,
    default: !1
  }
}), p = ["click"];
export {
  p as paginationItemStepEmits,
  r as paginationItemStepProps
};
