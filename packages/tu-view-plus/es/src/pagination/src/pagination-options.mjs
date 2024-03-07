import { buildProps as e } from "@tu-view-plus/utils";
import { useSizeProp as o } from "@tu-view-plus/hooks";
const p = e({
  sizeOptions: {
    type: Array,
    required: !0
  },
  pageSize: Number,
  disabled: Boolean,
  size: o,
  onChange: {
    type: Function
  },
  selectProps: {
    type: Object
  }
}), n = ["change"];
export {
  n as paginationOptionsEmits,
  p as paginationOptionsProps
};
