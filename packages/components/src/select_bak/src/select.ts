import { useSizeProp } from '@tu-view-plus/hooks';
import { buildProps, iconPropType } from '@tu-view-plus/utils';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@tu-view-plus/constants';
import { Close, ArrowDown } from '@tu-view-plus/icons-vue';
import { tagProps } from '../../tag';
import { TriggerProps } from '../../trigger';
import { ScrollbarProps } from '../../scrollbar';
import {
  SelectOptionData,
  SelectOptionGroup,
  SelectFieldNames
} from './interface';

import type { ExtractPropTypes, PropType } from 'vue';
import type Select from './select.vue';
import type { SelectValueType } from './constants';

export const selectProps = buildProps({
  name: String,

  id: String,

  modelValue: {
    type: [Array, String, Number, Boolean, Object],
    default: undefined
  },

  autocomplete: {
    type: String,
    default: 'off'
  },

  automaticDropdown: Boolean,

  /**
   * @zh 按钮的尺寸
   * @en Input size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...useSizeProp, default: 'medium' },

  disabled: Boolean,

  clearable: Boolean,

  filterable: Boolean,

  allowCreate: Boolean,

  loading: Boolean,

  popperClass: {
    type: String,
    default: ''
  },

  popperOptions: {
    type: Object,
    default: () => {}
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
    default: true
  },

  valueKey: {
    type: String,
    default: 'value'
  },

  collapseTags: Boolean,

  collapseTagsTooltip: {
    type: Boolean,
    default: false
  },

  maxCollapseTags: {
    type: Number,
    default: 1
  },

  persistent: {
    type: Boolean,
    default: true
  },

  clearIcon: {
    type: iconPropType,
    default: Close
  },

  fitInputWidth: {
    type: Boolean,
    default: false
  },

  suffixIcon: {
    type: iconPropType,
    default: ArrowDown
  },

  // eslint-disable-next-line vue/require-prop-types
  tagType: { ...tagProps.effect, default: 'up' },

  validateEvent: {
    type: Boolean,
    default: true
  },

  remoteShowSuffix: {
    type: Boolean,
    default: false
  },

  suffixTransition: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 是否在下拉菜单关闭时销毁元素
   * @en Whether to destroy the element when the dropdown is closed
   */
  unmountOnClose: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 弹出框的挂载容器
   * @en Mount container for popup
   */
  popupContainer: {
    type: [String, Object] as PropType<string | HTMLElement>
  },

  /**
   * @zh 是否显示下拉菜单
   * @en Whether to show the dropdown
   * @vModel
   */
  popupVisible: {
    type: Boolean,
    default: undefined
  }
} as const);

export const selectEmits = [
  UPDATE_MODEL_EVENT,
  CHANGE_EVENT,
  'remove-tag',
  'clear',
  'visible-change',
  'focus',
  'blur',
  'update:inputValue',
  'update:popupVisible',
  'popupVisibleChange'
];

export type SelectProps = ExtractPropTypes<typeof selectProps>;
export type SelectInstance = InstanceType<typeof Select>;
