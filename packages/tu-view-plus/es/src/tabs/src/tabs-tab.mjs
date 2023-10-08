import { buildProps as o } from "@tu-view-plus/utils";
const a = o({
  tab: {
    type: Object,
    required: !0
  },
  active: Boolean,
  editable: Boolean
}), b = {
  click: (e, t) => !0,
  delete: (e, t) => !0
};
export {
  b as tabsTabEmits,
  a as tabsTabProps
};
