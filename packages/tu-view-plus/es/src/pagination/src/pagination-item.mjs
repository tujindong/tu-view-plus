import { buildProps as e } from "@tu-view-plus/utils";
const p = e({
  pageNumber: {
    type: Number
  },
  current: {
    type: Number
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  style: {
    type: Object
  },
  activeStyle: {
    type: Object
  }
}), o = ["click"];
export {
  o as paginationItemEmits,
  p as paginationItemProps
};
