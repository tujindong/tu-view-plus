import { useSizeProp as o } from "@tu-view-plus/hooks";
import { buildProps as l, iconPropType as t } from "@tu-view-plus/utils";
import { UPDATE_MODEL_EVENT as a, CHANGE_EVENT as r } from "@tu-view-plus/constants";
import { Close as u, ArrowDown as p } from "@tu-view-plus/icons-vue";
import "../../tag/index.mjs";
import { tagProps as i } from "../../tag/src/tag.mjs";
const g = l({
  name: String,
  id: String,
  modelValue: {
    type: [Array, String, Number, Boolean, Object],
    default: void 0
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  automaticDropdown: Boolean,
  /**
   * @zh 按钮的尺寸
   * @en Input size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...o, default: "medium" },
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  allowCreate: Boolean,
  loading: Boolean,
  popperClass: {
    type: String,
    default: ""
  },
  popperOptions: {
    type: Object,
    default: () => {
    }
  },
  remote: Boolean,
  loadingText: String,
  noMatchText: String,
  noDataText: String,
  remoteMethod: Function,
  filterMethod: Function,
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0
  },
  placeholder: {
    type: String
  },
  defaultFirstOption: Boolean,
  reserveKeyword: {
    type: Boolean,
    default: !0
  },
  valueKey: {
    type: String,
    default: "value"
  },
  collapseTags: Boolean,
  collapseTagsTooltip: {
    type: Boolean,
    default: !1
  },
  maxCollapseTags: {
    type: Number,
    default: 1
  },
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: t,
    default: u
  },
  fitInputWidth: {
    type: Boolean,
    default: !1
  },
  suffixIcon: {
    type: t,
    default: p
  },
  // eslint-disable-next-line vue/require-prop-types
  tagType: { ...i.effect, default: "up" },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  remoteShowSuffix: {
    type: Boolean,
    default: !1
  },
  suffixTransition: {
    type: Boolean,
    default: !0
  }
}), B = {
  [a]: (e) => !0,
  [r]: (e) => !0,
  inputValueChange: (e) => !0,
  popupVisibleChange: (e) => !0,
  clear: (e) => !0,
  remove: (e) => !0,
  search: (e) => !0,
  dropdownScroll: (e) => !0,
  dropdownReachBottom: (e) => !0,
  exceedLimit: (e, n) => !0,
  "update:inputValue": (e) => !0,
  "update:popupVisible": (e) => !0
};
export {
  B as selectEmits,
  g as selectProps
};
