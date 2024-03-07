import { buildProps as e } from "@tu-view-plus/utils";
import { useSizeProp as r } from "@tu-view-plus/hooks";
const p = e({
  current: {
    type: Number,
    required: !0
  },
  simple: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  pages: {
    type: Number,
    required: !0
  },
  size: r,
  onChange: {
    type: Function
  }
}), i = ["change"];
export {
  i as paginationJumperEmits,
  p as paginationJumperProps
};
