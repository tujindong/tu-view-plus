import { buildProps as e } from "@tu-view-plus/utils";
import { useSizeProp as l } from "@tu-view-plus/hooks";
const t = e({
  modelValue: {
    type: Array,
    required: !0
  },
  inputValue: String,
  placeholder: String,
  disabled: {
    type: Boolean,
    default: !1
  },
  error: {
    type: Boolean,
    default: !1
  },
  loading: {
    type: Boolean,
    default: !1
  },
  opened: {
    type: Boolean,
    default: !1
  },
  /**
   * @zh 输入框的尺寸
   * @en Input size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...l, default: "medium" },
  bordered: {
    type: Boolean,
    default: !0
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  allowClear: {
    type: Boolean,
    default: !1
  },
  allowCreate: {
    type: Boolean,
    default: !1
  },
  allowSearch: {
    type: Boolean
  },
  maxTagCount: {
    type: Number,
    default: 0
  },
  retainInputValue: {
    type: Boolean,
    default: !1
  }
}), r = ["remove", "clear", "focus", "blur"];
export {
  r as selectViewEmits,
  t as selectViewProps
};
