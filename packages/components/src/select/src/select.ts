import { useSizeProp } from '@tu-view-plus/hooks';
import { buildProps, iconPropType } from '@tu-view-plus/utils';
import { CircleClose, ArrowDown } from '@tu-view-plus/icons-vue';

import type { ExtractPropTypes, PropType } from 'vue';
import type Select from './select.vue';

export const selectProps = buildProps({
  name: String,

  id: String,

  modelValue: {
    type: [String, Number, Object, Array] as PropType<
      | string
      | number
      | Record<string, any>
      | (string | number | Record<string, any>)[]
    >,
    default: undefined
  },

  autocomplete: {
    type: String,
    default: 'off'
  },

  automaticDropdown: Boolean,

  /**
   * @zh 选择框的尺寸
   * @en Select size
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
    default: CircleClose
  },

  fitInputWidth: {
    type: Boolean,
    default: false
  },

  suffixIcon: {
    type: iconPropType,
    default: ArrowDown
  },

  // tagType: { ...tagProps.type, default: 'info' },

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
  }
});

export type SelectProps = ExtractPropTypes<typeof selectProps>;
export type SelectInstance = InstanceType<typeof Select>;
