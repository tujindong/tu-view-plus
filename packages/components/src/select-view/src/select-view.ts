import { buildProps } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';
import { SelectViewValue } from './interface';

import type { ExtractPropTypes, PropType } from 'vue';
import type SelectView from './select-view.vue';

export const selectViewProps = buildProps({
  modelValue: {
    type: Array as PropType<SelectViewValue[]>,
    required: true
  },

  inputValue: String,

  placeholder: String,

  disabled: {
    type: Boolean,
    default: false
  },

  error: {
    type: Boolean,
    default: false
  },

  loading: {
    type: Boolean,
    default: false
  },

  opened: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 输入框的尺寸
   * @en Input size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...useSizeProp, default: 'medium' },

  bordered: {
    type: Boolean,
    default: true
  },

  multiple: {
    type: Boolean,
    default: false
  },

  allowClear: {
    type: Boolean,
    default: false
  },

  allowCreate: {
    type: Boolean,
    default: false
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
    default: false
  }
} as const);

export const selectViewEmits = ['remove', 'clear', 'focus', 'blur'];

export type SelectViewProps = ExtractPropTypes<typeof selectViewProps>;
export type SelectViewInstance = InstanceType<typeof SelectView>;
