import { buildProps as e } from "@tu-view-plus/utils";
const r = e({
  current: {
    type: Number,
    required: !0
  },
  step: {
    type: Number,
    default: 5
  },
  pages: {
    type: Number,
    required: !0
  },
  key: {
    type: [String, Number]
  }
}), i = ["click"];
export {
  i as paginationItemEllipsisEmits,
  r as paginationItemEllipsisProps
};
