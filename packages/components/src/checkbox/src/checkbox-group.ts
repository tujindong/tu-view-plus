import { UPDATE_MODEL_EVENT } from '@tu-view-plus/constants';
import { useSizeProp } from '@tu-view-plus/hooks';
import { buildProps, definePropType, isArray } from '@tu-view-plus/utils';
import { checkboxTypes } from './constants';

import type { ExtractPropTypes } from 'vue';
import type checkboxGroup from './checkbox-group.vue';
import type { CheckboxValueType } from './constants';

export type CheckboxGroupValueType = Exclude<CheckboxValueType, boolean>[];

export const checkboxGroupProps = buildProps({
  /**
   * @zh 复选框类型
   * @en type of the Checkbox
   * @values 'border','button'
   * @defaultValue ''
   */
  type: {
    type: String,
    values: checkboxTypes,
    default: ''
  },

  /**
   * @zh 绑定值
   * @en binding value
   */
  modelValue: {
    type: definePropType<CheckboxGroupValueType>(Array),
    default: () => []
  },

  /**
   * @zh 是否禁用
   * @en whether the nesting checkboxes are disabled
   */
  disabled: Boolean,

  /**
   * @zh 可被勾选的 checkbox 的最小数量
   * @en minimum number of checkbox checked
   */
  min: Number,

  /**
   * @zh 可被勾选的 checkbox 的最大数量
   * @en maximum number of checkbox checked
   */
  max: Number,

  /**
   * @zh 按钮类型或边框类型单选框的尺寸
   * @en the size of checkbox buttons or bordered radios
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...useSizeProp, default: 'medium' },

  /**
   * @zh
   * @en label for screen reader
   */
  label: String,

  /**
   * @zh 为屏幕阅读器准备的标签
   * @en border and background color when button is active
   */
  fill: String,

  /**
   * @zh
   * @en font color when button is active
   */
  textColor: String,

  /**
   * @zh 当按钮为活跃状态时的字体颜色
   * @en element tag of the checkbox group
   */
  tag: {
    type: String,
    default: 'div'
  },

  /**
   * @zh 是否触发表单验证
   * @en whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true
  }
} as const);

export const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxGroupValueType) => isArray(val),
  change: (val: CheckboxValueType[]) => isArray(val)
};

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;
export type CheckboxGroupEmits = typeof checkboxGroupEmits;
export type CheckboxGroupInstance = InstanceType<typeof checkboxGroup>;
