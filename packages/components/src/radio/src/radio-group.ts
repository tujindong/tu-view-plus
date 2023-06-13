import { buildProps } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';
import { radioEmits } from './radio';
import { radioTypes } from './constants';

import type { ExtractPropTypes } from '@vue/runtime-core';
import type RadioGroup from './radio-group.vue';

export const radioGroupProps = buildProps({
  /**
   * @zh 单选框类型
   * @en type of the Radio
   * @values 'border','button'
   * @defaultValue ''
   */
  type: {
    type: String,
    values: radioTypes,
    default: ''
  },

  /**
   * @zh 原生id属性
   * @en native `id` attribute
   * @defaultValue undefined
   */
  id: {
    type: String,
    default: undefined
  },

  /**
   * @zh 按钮类型或边框类型单选框的尺寸
   * @en the size of radio buttons or bordered radios
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...useSizeProp, default: 'medium' },

  /**
   * @zh 是否禁用单选框
   * @en whether the nesting radios are disabled
   */
  disabled: Boolean,

  /**
   * @zh 按钮组绑定值
   * @en binding value
   * @defaultValue ''
   */
  modelValue: {
    type: [String, Number, Boolean],
    default: ''
  },

  /**
   * @zh 按钮组的aria-label
   * @en same as `aria-label` in RadioGroup
   * @defaultValue undefined
   */
  label: {
    type: String,
    default: undefined
  },

  /**
   * @zh 标签文字颜色
   * @en font color when button is active
   * @defaultValue ''
   */
  textColor: {
    type: String,
    default: ''
  },

  /**
   * @zh 原生的name属性
   * @en native `name` attribute
   */
  name: {
    type: String,
    default: undefined
  },

  /**
   * @zh 是否触发表单验证
   * @en whether to trigger form validation
   * @defaultValue true
   */
  validateEvent: {
    type: Boolean,
    default: true
  }
} as const);

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;

export const radioGroupEmits = radioEmits;
export type RadioGroupEmits = typeof radioGroupEmits;
export type RadioGroupInstance = InstanceType<typeof RadioGroup>;
