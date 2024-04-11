import { buildProps } from '@tu-view-plus/utils';
import { useSizeProp } from '@tu-view-plus/hooks';
import { VirtualListProps } from '../../virtual-list';

import type { ExtractPropTypes, PropType } from 'vue';
import type { TreeNodeData, TreeFieldNames, FilterTreeNode } from './interface';

export const treeProps = buildProps({
  /**
   * @zh 尺寸
   * @en Size
   */
  size: useSizeProp,

  /**
   * @zh 节点是否占据一行
   * @en Whether the node occupies a row
   */
  blockNode: {
    type: Boolean
  },

  /**
   * @zh 是否默认展开父节点
   * @en Whether to expand the parent node by default
   */
  defaultExpandAll: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 是否支持多选
   * @en Whether to support multiple selection
   */
  multiple: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 是否在节点前添加复选框
   * @en Whether to add a checkbox before the node.
   */
  checkable: {
    type: [Boolean, String, Function] as PropType<
      | boolean
      | ((
          node: TreeNodeData,
          info: {
            level: number;
            isLeaf: boolean;
          }
        ) => boolean)
    >,
    default: false
  },

  /**
   * @zh 是否支持选择
   * @en Whether to support selection.
   * */
  selectable: {
    type: [Boolean, Function] as PropType<
      | boolean
      | ((
          node: TreeNodeData,
          info: {
            level: number;
            isLeaf: boolean;
          }
        ) => boolean)
    >,
    default: true
  },

  /**
   * @zh 是否取消父子节点关联
   * @en Whether to cancel the parent-child node association
   * */
  checkStrictly: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 定制回填方式 <br/> all: 返回所有选中的节点  <br/> parent: 父子节点都选中时只返回父节点 <br/> child: 只返回子节点
   * @en Customized backfill method <br/> all: return all selected nodes <br/> parent: return only parent node when both parent and child nodes are selected <br/> child: return only child nodes
   * */
  checkedStrategy: {
    type: String as PropType<'all' | 'parent' | 'child'>,
    default: 'all'
  },
  /**
   *
   * @zh 默认选中的树节点
   * @en Tree node selected by default
   * */
  defaultSelectedKeys: {
    type: Array as PropType<Array<string | number>>
  },

  /**
   * @zh 选中的树节点
   * @en Selected tree node
   * @vModel
   */
  selectedKeys: {
    type: Array as PropType<Array<string | number>>
  },

  /**
   * @zh 默认选中复选框的树节点
   * @en Tree node with checkbox selected by default
   * */
  defaultCheckedKeys: {
    type: Array as PropType<Array<string | number>>
  },

  /**
   * @zh 选中复选框的树节点
   * @en Tree node with check box selected
   * @vModel
   */
  checkedKeys: {
    type: Array as PropType<Array<string | number>>
  },

  /**
   * @zh 默认展开的节点
   * @en Nodes expanded by default
   * */
  defaultExpandedKeys: {
    type: Array as PropType<Array<string | number>>
  },

  /**
   * @zh 展开的节点
   * @en Expanded node
   * @vModel
   */
  expandedKeys: {
    type: Array as PropType<Array<string | number>>
  },

  /**
   * @zh 传入`data`,生成对应的树结构
   * @en Pass in `data` to generate the corresponding tree structure
   * */
  data: {
    type: Array as PropType<TreeNodeData[]>,
    default: () => []
  },

  /**
   * @zh 指定节点数据中的字段名
   * @en Specify the field name in the node data
   * */
  fieldNames: {
    type: Object as PropType<TreeFieldNames>
  },

  /**
   * @zh 是否展示连接线
   * @en Whether to display the connection line
   * */
  showLine: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 异步加载数据的回调，返回一个 `Promise`
   * @en A callback for loading data asynchronously, returning a `Promise`
   * */
  loadMore: {
    type: Function as PropType<(node: TreeNodeData) => Promise<void>>
  },

  /**
   * @zh 是否可以拖拽
   * @en Whether it can be dragged
   * */
  draggable: {
    type: Boolean
  },

  /**
   * @zh 拖拽时是否允许在某节点上释放
   * @en Whether to allow release on a node when dragging
   * */
  allowDrop: {
    type: Function as PropType<
      (options: { dropNode: TreeNodeData; dropPosition: -1 | 0 | 1 }) => boolean
    >
  },

  filterTreeNode: {
    type: Function as PropType<FilterTreeNode>
  },

  searchValue: {
    type: String,
    default: ''
  },

  /**
   * @zh 传递虚拟列表属性，传入此参数以开启虚拟滚动，[VirtualListProps](#VirtualListProps)
   * @en Pass virtual list properties, pass in this parameter to turn on virtual scrolling, [VirtualListProps](#VirtualListProps)
   */
  virtualListProps: {
    type: Object as PropType<VirtualListProps>
  },

  /**
   * @zh 是否默认展开已选中节点的父节点
   * @en Whether to expand the parent node of the selected node by default
   */
  defaultExpandSelected: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 是否默认展开已选中复选框节点的父节点
   * @en Whether to expand the parent node of the checked node by default
   */
  defaultExpandChecked: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 是否自动展开已展开节点的父节点
   * @en Whether to automatically expand the parent node of the expanded node
   */
  autoExpandParent: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 半选状态的节点.仅在 checkable 且 checkStrictly 时生效
   * @en The keys of half checked. Only valid when checkable and checkStrictly
   * @vModel
   */
  halfCheckedKeys: {
    type: Array as PropType<Array<string | number>>
  },

  /**
   * @zh 开启后 checkedKeys 只处理叶子节点，父节点状态由子节点决定（仅在 checkable 且 checkStrictly 为 false 时生效）
   * @en When enabled, checkedKeys is only for checked leaf nodes, and the status of the parent node is determined by the child node.(Only valid when checkable and checkStrictly is false)
   */
  onlyCheckLeaf: {
    type: Boolean,
    default: false
  },

  /**
   * @zh 是否开启展开时的过渡动效
   * @en Whether to enable expand transition animation
   */
  animation: {
    type: Boolean,
    default: true
  },

  /**
   * @zh 点击节点的时候触发的动作
   * @en The action triggered when the node is clicked
   */
  actionOnNodeClick: {
    type: String as PropType<'expand'>
  },

  // internal
  disableSelectActionOnly: {
    type: Boolean,
    default: false
  }
} as const);

export const treeEmits = {
  /**
   * @zh 点击树节点时触发
   * @en Triggered when the tree node is clicked
   * @param {Array<string | number>} selectedKeys
   * @param {{ selected?: boolean; selectedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; }} data
   */
  select: (
    selectedKeys: (string | number)[],
    data: {
      selected?: boolean;
      selectedNodes: TreeNodeData[];
      node?: TreeNodeData;
      e?: Event;
    }
  ) => true,
  'update:selectedKeys': (selectedKeys: (string | number)[]) => true,
  /**
   * @zh 点击树节点复选框时触发。
   * @en Triggered when the tree node checkbox is clicked.
   * @param {Array<string | number>} checkedKeys
   * @param {{ checked?: boolean; checkedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; halfCheckedKeys: (string | number)[]; halfCheckedNodes: TreeNodeData[]; }} data
   */
  check: (
    checkedKeys: (string | number)[],
    data: {
      checked?: boolean;
      checkedNodes: TreeNodeData[];
      node?: TreeNodeData;
      halfCheckedKeys: (string | number)[];
      halfCheckedNodes: TreeNodeData[];
      e?: Event;
    }
  ) => true,
  'update:checkedKeys': (checkedKeys: (string | number)[]) => true,
  'update:halfCheckedKeys': (halfCheckedKeys: (string | number)[]) => true,
  /**
   * @zh 展开/关闭
   * @en Expand/close
   * @param {Array<string | number>} expandKeys
   * @param {{ expanded?: boolean; expandNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; }} data
   */
  expand: (
    expandKeys: (string | number)[],
    data: {
      expanded?: boolean;
      expandedNodes: TreeNodeData[];
      node?: TreeNodeData;
      e?: Event;
    }
  ) => true,
  'update:expandedKeys': (expandKeys: (string | number)[]) => true,
  /**
   * @zh 节点开始拖拽
   * @en Node starts dragging
   */
  dragStart: (ev: DragEvent, node: TreeNodeData) => true,
  /**
   * @zh 节点结束拖拽
   * @en Node end drag
   * @param {DragEvent} ev
   * @param {TreeNodeData} node
   */
  dragEnd: (ev: DragEvent, node: TreeNodeData) => true,
  /**
   * @zh 节点被拖拽至可释放目标
   * @en The node is dragged to the releasable target
   * @param {DragEvent} ev
   * @param {TreeNodeData} node
   */
  dragOver: (ev: DragEvent, node: TreeNodeData) => true,
  /**
   * @zh 节点离开可释放目标
   * @en Node leaves to release the target
   * @param {DragEvent} ev
   * @param {TreeNodeData} node
   */
  dragLeave: (ev: DragEvent, node: TreeNodeData) => true,
  /**
   * @zh 节点在可释放目标上释放
   * @en The node is released on a releasable target
   * @param {{ e: DragEvent; dragNode: TreeNodeData; dropNode: TreeNodeData; dropPosition: number; }} data
   */
  drop: (data: {
    e: DragEvent;
    dragNode: TreeNodeData;
    dropNode: TreeNodeData;
    dropPosition: number;
  }) => true
};

export type TreeProps = ExtractPropTypes<typeof treeProps>;
