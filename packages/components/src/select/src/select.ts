import { useSizeProp } from '@tu-view-plus/hooks';
import { buildProps, isUndefined } from '@tu-view-plus/utils';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@tu-view-plus/constants';
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
  /**
   * @zh 是否开启多选模式（多选模式默认开启搜索）
   * @en Whether to open multi-select mode (The search is turned on by default in the multi-select mode)
   */
  multiple: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 绑定值
   * @en Value
   */
  modelValue: {
    type: [String, Number, Object, Array] as PropType<SelectValueType>
  },

  /**
   * @zh 默认值（非受控模式）
   * @en Default value (uncontrolled mode)
   * @defaultValue '' \| []
   */
  defaultValue: {
    type: [String, Number, Object, Array] as PropType<SelectValueType>,
    default: (props: Record<string, any>) =>
      isUndefined(props.multiple) ? '' : []
  },

  /**
   * @zh 输入框的值
   * @en The value of the input
   * @vModel
   */
  inputValue: {
    type: String
  },

  /**
   * @zh 输入框的默认值（非受控模式）
   * @en The default value of the input (uncontrolled mode)
   */
  defaultInputValue: {
    type: String,
    default: ''
  },

  /**
   * @zh 选择框的大小
   * @en The size of the select
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { ...useSizeProp, default: 'medium' },

  /**
   * @zh 占位符
   * @en Placeholder
   */
  placeholder: String,

  /**
   * @zh 是否为加载中状态
   * @en Whether it is loading state
   */
  loading: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 是否为错误状态
   * @en Whether it is an error state
   */
  error: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 是否允许清空
   * @en Whether to allow clear
   */
  allowClear: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 是否允许搜索
   * @en Whether to allow searching
   * @defaultValue false (single) \| true (multiple)
   */
  allowSearch: {
    type: [Boolean, Object] as PropType<
      boolean | { retainInputValue?: boolean }
    >,
    default: (props: Record<string, any>) => Boolean(props.multiple)
  },

  /**
   * @zh 是否允许创建
   * @en Whether to allow creation
   */
  allowCreate: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 多选模式下，最多显示的标签数量。0 表示不限制
   * @en In multi-select mode, the maximum number of labels displayed. 0 means unlimited
   */
  maxTagCount: {
    type: Number,
    default: 0
  },

  /**
   * @zh 弹出框的挂载容器
   * @en Mount container for popup
   */
  popupContainer: {
    type: [String, Object] as PropType<string | HTMLElement>
  },

  /**
   * @zh 是否显示输入框的边框
   * @en Whether to display the border of the input box
   */
  bordered: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 是否在无值时默认选择第一个选项
   * @en Whether to select the first option by default when there is no value
   */
  defaultActiveFirstOption: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 是否显示下拉菜单
   * @en Whether to show the dropdown
   * @vModel
   */
  popupVisible: {
    type: Boolean,
    default: undefined
  },

  /**
   * @zh 弹出框默认是否可见（非受控模式）
   * @en Whether the popup is visible by default (uncontrolled mode)
   */
  defaultPopupVisible: {
    type: Boolean,
    default: false
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
   * @zh 是否过滤选项
   * @en Whether to filter options
   */
  filterOption: {
    type: [Boolean, Function] as PropType<
      boolean | ((inputValue: string, option: SelectOptionData) => boolean)
    >,
    default: true
  },

  /**
   * @zh 选项数据
   * @en Option data
   */
  options: {
    type: Array as PropType<
      (string | number | SelectOptionData | SelectOptionGroup)[]
    >,
    default: () => []
  },

  /**
   * @zh 传递虚拟列表属性，传入此参数以开启虚拟滚动 [VirtualListProps](#VirtualListProps)
   * @en Pass the virtual list attribute, pass in this parameter to turn on virtual scrolling [VirtualListProps](#VirtualListProps)
   * @type VirtualListProps
   */
  virtualListProps: {
    type: Object as PropType<VirtualListProps>
  },

  /**
   * @zh 下拉菜单的触发器属性
   * @en Trigger props of the drop-down menu
   * @type TriggerProps
   */
  triggerProps: {
    type: Object as PropType<TriggerProps>
  },

  /**
   * @zh 格式化显示内容
   * @en Format display content
   */
  formatLabel: {
    type: Function as PropType<(data: SelectOptionData) => string>
  },

  /**
   * @zh 自定义值中不存在的选项
   * @en Options that do not exist in custom values
   * @version 2.10.0
   */
  fallbackOption: {
    type: [Boolean, Function] as PropType<
      | boolean
      | ((value: string | number | Record<string, unknown>) => SelectOptionData)
    >,
    default: true
  },

  /**
   * @zh 是否在下拉菜单中显示额外选项
   * @en Options that do not exist in custom values
   */
  showExtraOptions: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 用于确定选项键值的属性名
   * @en Used to determine the option key value attribute name
   */
  valueKey: {
    type: String,
    default: 'value'
  },

  /**
   * @zh 触发搜索事件的延迟时间
   * @en Delay time to trigger search event
   */
  searchDelay: {
    type: Number,
    default: 500
  },

  /**
   * @zh 多选时最多的选择个数
   * @en Maximum number of choices in multiple choice
   */
  limit: {
    type: Number,
    default: 0
  },

  /**
   * @zh 自定义 `SelectOptionData` 中的字段
   * @en Customize fields in `SelectOptionData`
   */
  fieldNames: {
    type: Object as PropType<SelectFieldNames>
  },

  /**
   * @zh 是否开启虚拟滚动条
   * @en Whether to enable virtual scroll bar
   */
  scrollbar: {
    type: [Boolean, Object] as PropType<boolean | ScrollbarProps>,
    default: true
  }
});

export const selectEmits = {
  [UPDATE_MODEL_EVENT]: (value: SelectValueType) => true,
  [CHANGE_EVENT]: (value: SelectValueType) => true,
  clear: () => true,
  focus: (e: FocusEvent) => e instanceof FocusEvent,
  blur: (e: FocusEvent) => e instanceof FocusEvent,
  removeTag: () => true,
  visibleChange: () => true
};

export type SelectProps = ExtractPropTypes<typeof selectProps>;
export type SelectInstance = InstanceType<typeof Select>;
export type SelectEmits = typeof selectEmits;
