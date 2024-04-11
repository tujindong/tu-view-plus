import { useSizeProp } from '@tu-view-plus/hooks';
import { buildProps, isUndefined, Data } from '@tu-view-plus/utils';
import { TriggerProps } from '../../trigger';
import { ScrollbarProps } from '../../scrollbar';
import {
  SelectOptionData,
  SelectOptionGroup,
  SelectFieldNames
} from './interface';

import type { ExtractPropTypes, PropType } from 'vue';
import type { VirtualListProps } from '../../virtual-list';

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
    type: [String, Number, Boolean, Object, Array] as PropType<
      | string
      | number
      | boolean
      | Record<string, any>
      | (string | number | boolean | Record<string, any>)[]
    >,
    default: undefined
  },
  /**
   * @zh 默认值（非受控模式）
   * @en Default value (uncontrolled mode)
   * @defaultValue '' \| []
   */
  defaultValue: {
    type: [String, Number, Boolean, Object, Array] as PropType<
      | string
      | number
      | boolean
      | Record<string, unknown>
      | (string | number | boolean | Record<string, unknown>)[]
    >,
    default: (props: Data) => (isUndefined(props.multiple) ? '' : [])
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
   * @zh 按钮的尺寸
   * @en Input size
   * @values 'mini','small','medium','large'
   * @defaultValue ''
   */
  size: useSizeProp,
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
    default: (props: Data) => Boolean(props.multiple)
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
   * @version 2.43.0
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
      (string | number | boolean | SelectOptionData | SelectOptionGroup)[]
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
   */
  fallbackOption: {
    type: [Boolean, Function] as PropType<
      | boolean
      | ((
          value: string | number | boolean | Record<string, unknown>
        ) => SelectOptionData)
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
   * @version 2.18.0
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
  },
  /**
   * @zh 空状态时是否显示header
   * @en Whether to display the header in the empty state
   */
  showHeaderOnEmpty: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  /**
   * @zh 空状态时是否显示footer
   * @en Whether to display the footer in the empty state
   */
  showFooterOnEmpty: {
    type: Boolean as PropType<boolean>,
    default: false
  }
} as const);

export const selectEmits = {
  'update:modelValue': (
    value:
      | string
      | number
      | boolean
      | Record<string, any>
      | (string | number | boolean | Record<string, any>)[]
  ) => true,
  'update:inputValue': (inputValue: string) => true,
  'update:popupVisible': (visible: boolean) => true,
  /**
   * @zh 值发生改变时触发
   * @en Triggered when the value changes
   * @param { string | number | boolean | Record<string, any> | (string | number | boolean | Record<string, any>)[] } value
   */
  change: (
    value:
      | string
      | number
      | boolean
      | Record<string, any>
      | (string | number | boolean | Record<string, any>)[]
  ) => true,
  /**
   * @zh 输入框的值发生改变时触发
   * @en Triggered when the value of the input changes
   * @param {string} inputValue
   */
  inputValueChange: (inputValue: string) => true,
  /**
   * @zh 下拉框的显示状态改变时触发
   * @en Triggered when the display state of the drop-down box changes
   * @param {boolean} visible
   */
  popupVisibleChange: (visible: boolean) => true,
  /**
   * @zh 点击清除按钮时触发
   * @en Triggered when the clear button is clicked
   */
  clear: (ev: Event) => true,
  /**
   * @zh 点击标签的删除按钮时触发
   * @en Triggered when the delete button of the label is clicked
   * @param {string | number | boolean | Record<string, any> | undefined} removed
   */
  remove: (
    removed: string | number | boolean | Record<string, any> | undefined
  ) => true,
  /**
   * @zh 用户搜索时触发
   * @en Triggered when the user searches
   * @param {string} inputValue
   */
  search: (inputValue: string) => true,
  /**
   * @zh 下拉菜单发生滚动时触发
   * @en Triggered when the drop-down scrolls
   */
  dropdownScroll: (ev: Event) => true,
  /**
   * @zh 下拉菜单滚动到底部时触发
   * @en Triggered when the drop-down menu is scrolled to the bottom
   */
  dropdownReachBottom: (ev: Event) => true,
  /**
   * @zh 多选超出限制时触发
   * @en Triggered when multiple selection exceeds the limit
   * @param {string | number | boolean | Record<string, any> | undefined} value
   * @param {Event} ev
   * @version 2.18.0
   */
  exceedLimit: (
    value: string | number | boolean | Record<string, any> | undefined,
    ev: Event
  ) => true
};

export type SelectProps = ExtractPropTypes<typeof selectProps>;
export type SelectEmits = typeof selectEmits;
