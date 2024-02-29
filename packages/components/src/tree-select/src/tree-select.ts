import { buildProps, Data } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';

import type { ExtractPropTypes, PropType, CSSProperties } from 'vue';
import type TreeSelect from './tree-select.vue';
import type { LabelValue } from './interface';
import {
  TreeFieldNames,
  TreeNodeData,
  TreeProps
} from '../../tree/src/interface';
import { TriggerProps } from '../../trigger';
import { ScrollbarProps } from '../../scrollbar';

export const treeSelectProps = buildProps({
  /**
   * @zh 是否禁用
   * @en Whether to disable
   * */
  disabled: {
    type: Boolean
  },
  /**
   * @zh 是否为加载中状态
   * @en Whether it is loading state
   * */
  loading: {
    type: Boolean
  },
  /**
   * @zh 是否为错误状态
   * @en Whether it is an error state
   * */
  error: {
    type: Boolean
  },
  /**
   * @zh 选择框的大小
   * @en The size of the selection box.
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   * */
  size: useSizeProp,
  /**
   * @zh 是否显示边框
   * @en Whether to show the border
   * */
  border: {
    type: Boolean,
    default: true
  },
  /**
   * @zh 是否允许搜索
   * @en Whether to allow searching
   * @defaultValue false (single) \| true (multiple)
   * */
  allowSearch: {
    type: [Boolean, Object] as PropType<
      boolean | { retainInputValue?: boolean }
    >,
    default: (props: Data) => Boolean(props.multiple)
  },
  /**
   * @zh 是否允许清除
   * @en Whether to allow clear
   * */
  allowClear: {
    type: Boolean
  },
  /**
   * @zh 提示文案
   * @en Prompt copy
   * */
  placeholder: {
    type: String
  },
  /**
   * @zh 最多显示的标签数量，仅在多选模式有效
   * @en The maximum number of labels displayed, only valid in multi-select mode
   * */
  maxTagCount: {
    type: Number
  },
  /**
   * @zh 是否支持多选
   * @en Whether to support multiple selection
   * */
  multiple: {
    type: Boolean
  },

  /**
   * @zh 默认值
   * @en Default value
   * */
  defaultValue: {
    type: [String, Number, Array, Object] as PropType<
      string | number | Array<string | number> | LabelValue | LabelValue[]
    >
  },
  /**
   * @zh 绑定值
   * @en Value
   * */
  modelValue: {
    type: [String, Number, Array, Object] as PropType<
      string | number | Array<string | number> | LabelValue | LabelValue[]
    >
  },
  /**
   * @zh 指定节点数据中的字段名
   * @en Specify the field name in the node data
   * */
  fieldNames: {
    type: Object as PropType<TreeFieldNames>
  },
  /**
   * @zh 数据
   * @en Data
   * */
  data: {
    type: Array as PropType<TreeNodeData[]>,
    default: () => []
  },
  /**
   * @zh 设置value格式。默认是string，设置为true时候，value格式为： { label: string, value: string }
   * @en Set the value format. The default is string, when set to true, the value format is: {label: string, value: string}
   * */
  labelInValue: {
    type: Boolean
  },
  /**
   * @zh 是否展示复选框
   * @en Whether to show checkbox
   * */
  treeCheckable: {
    type: Boolean
  },
  /**
   * @zh 父子节点是否关联
   * @en Whether the parent and child nodes are related
   * */
  treeCheckStrictly: {
    type: Boolean
  },
  /**
   * @zh 定制回显方式
   * @en Customized echo method
   * */
  treeCheckedStrategy: {
    type: String as PropType<'all' | 'parent' | 'child'>,
    default: 'all'
  },
  /**
   * @zh 可以接受所有 [Tree](/vue/component/tree) 组件的Props
   * @en Can accept Props of all [Tree](/vue/component/tree) components
   * */
  treeProps: {
    type: Object as PropType<Partial<TreeProps>>
  },
  /**
   * @zh 可以接受所有 [Trigger](/vue/component/trigger) 组件的Props
   * @en Can accept Props of all [Trigger](/vue/component/trigger) components
   * */
  triggerProps: {
    type: Object as PropType<Partial<TriggerProps>>
  },
  /**
   * @zh 弹出框是否可见
   * @en Whether the pop-up box is visible
   * @vModel
   */
  popupVisible: {
    type: Boolean,
    default: undefined
  },
  /**
   * @zh 默认弹出框是否可见
   * @en Whether the default pop-up box is visible
   * */
  defaultPopupVisible: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 下拉框样式
   * @en Drop-down box style
   * */
  dropdownStyle: {
    type: Object as PropType<CSSProperties>
  },
  /**
   * @zh 下拉框样式 class
   * @en Drop-down box style class
   * */
  dropdownClassName: {
    type: [String, Array] as PropType<string | string[]>
  },
  /**
   * @zh 自定义节点过滤函数
   * @en Custom node filter function
   * */
  filterTreeNode: {
    type: Function as PropType<
      (searchKey: string, nodeData: TreeNodeData) => boolean
    >
  },
  /**
   * @zh 动态加载数据
   * @en Load data dynamically
   * */
  loadMore: {
    type: Function as PropType<(nodeData: TreeNodeData) => Promise<void>>
  },
  /**
   * @zh 禁用内部过滤逻辑
   * @en Disable internal filtering logic
   * */
  disableFilter: {
    type: Boolean
  },
  /**
   * @zh 弹出框的挂载容器
   * @en Mount container for pop-up box
   */
  popupContainer: {
    type: [String, Object] as PropType<string | HTMLElement | undefined>
  },
  /**
   * @zh 为 value 中找不到匹配项的 key 定义节点数据
   * @en Customize node data for keys that do not match options
   */
  fallbackOption: {
    type: [Boolean, Function] as PropType<
      boolean | ((key: number | string) => TreeNodeData | boolean)
    >,
    default: true
  },
  /**
   * @zh 设置可选择的节点，默认全部可选
   * @en Set the nodes that can be selected, all can be selected by default
   */
  selectable: {
    type: [Boolean, String, Function] as PropType<
      | boolean
      | 'leaf'
      | ((
          node: TreeNodeData,
          info: { isLeaf: boolean; level: number }
        ) => boolean)
    >,
    default: true
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

export const treeSelectEmits = {
  /**
   * @zh 值改变时触发
   * @en Trigger when the value changes
   * @param {string | number | LabelValue | Array<string | number> | LabelValue[] | undefined} value
   */
  change: (
    value:
      | string
      | number
      | LabelValue
      | Array<string | number>
      | LabelValue[]
      | undefined
  ) => true,
  'update:modelValue': (
    value:
      | string
      | number
      | LabelValue
      | Array<string | number>
      | LabelValue[]
      | undefined
  ) => true,
  /**
   * @zh 下拉框显示状态改变时触发
   * @en Triggered when the status of the drop-down box changes
   * @param {boolean} visible
   */
  'popup-visible-change': (visible: boolean) => true,
  'update:popupVisible': (visible: boolean) => true,
  /**
   * @zh 搜索值变化时触发
   * @en Triggered when the search value changes
   * @param {string} searchKey
   */
  search: (searchKey: string) => true,
  /**
   * @zh 点击清除时触发
   * @en Triggered when clear is clicked
   * */
  clear: () => true
};

export type TreeSelectProps = ExtractPropTypes<typeof treeSelectProps>;
export type TreeSelectInstance = InstanceType<typeof TreeSelect>;
