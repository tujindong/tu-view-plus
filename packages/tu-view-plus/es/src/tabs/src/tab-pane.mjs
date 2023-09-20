import { buildProps as e } from "@tu-view-plus/utils";
const a = e({
  label: {
    type: String,
    default: ""
  },
  name: {
    type: [String, Number]
  },
  closable: Boolean,
  disabled: Boolean,
  lazy: Boolean
});
export {
  a as tabPaneProps
};
