# Tree

Display a set of data with hierarchies.

## Basic usage

:::demo src="../examples/tree/basic.vue" title="Give each node a globally unique key (required), and the title is the content to be displayed on the node."

:::

## Block node

:::demo src="../examples/tree/block-node.vue" title="The treeNode occupy the remaining horizontal space."

:::

## Multiple Select

:::demo src="../examples/tree/multiple.vue" title="By setting multiple, the tree can support multiple selection."

:::

## Checkable

:::demo src="../examples/tree/checkable.vue" title="Setting the checkable attribute to display the checkbox, and you can use defaultCheckedKeys to specify which nodes are checked by default."

:::

## V-model

:::demo src="../examples/tree/control.vue" title="The selectedKeys, checkedKeys, and expandedKeys attributes can all be controlled, not only supporting v-model, but also controlling how to update attribute values in the corresponding select / check / expand events."

:::

## Dynamic loading

:::demo src="../examples/tree/load-more.vue" title="Load nodes dynamically."

:::

## Draggable

:::demo src="../examples/tree/draggable.vue" title="Draggable nodes."

:::

## Checked strategy

:::demo src="../examples/tree/checked-strategy.vue" title="Setting checkedStrategy attribute to set the return value when selected."

:::

## Show line

:::demo src="../examples/tree/show-line.vue" title="Setting the showLine attribute to display the connecting line."

:::

## Node icon

:::demo src="../examples/tree/node-icon.vue" title="The icon of a node can be specified globally via the icon slot of the tree, or individually via the icon property of the node."

:::

## Component icons

:::demo src="../examples/tree/icons.vue" title="The node icons loadingIcon, switcherIcon, support customization at the two latitudes of tree and node at the same time, and node has a higher priority."

:::

## Extra node

:::demo src="../examples/tree/render-extra.vue" title="Tree provides Slot named extra, which can customize extra content on the node."

:::

## Virtual list

:::demo src="../examples/tree/virtual.vue" title="Setting the virtualListProps attribute to display virtual list"

:::

## Searchable

:::demo src="../examples/tree/search.vue" title="Show how to achieve the search tree effect."

:::

## Customize data

:::demo src="../examples/tree/field-names.vue" title="You can customize data by fieldNames."

:::

## Size

:::demo src="../examples/tree/size.vue" title="Trees of different sizes."

:::

## Tree API

### Tree Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| size | size | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| block-node | whether the node occupies a row | ^[Boolean] | false |
| default-expand-all | whether to expand the parent node by default | ^[Boolean] | true |
| multiple | whether to support multiple selection | ^[Boolean] | false |
| checkable | whether to add a checkbox before the node | ^[Boolean] | false |
| selectable | whether to support selection | ^[Boolean] | true |
| check-strictly | whether to cancel the parent-child node association | ^[Boolean] | false |
| checked-strategy | customized backfill method <br/> all: return all selected nodes <br/> parent: return only parent node when both parent and child nodes are selected <br/> child: return only child nodes | ^[String]`'all' \| 'parent' \| 'child'` | all |
| default-selected-keys | tree node selected by default | ^[Array]`<string \| number>` | - |
| selected-keys / v-model | selected tree node | ^[Array]`<string \| number>` | - |
| default-checked-keys | tree node with checkbox selected by default | ^[Array]`<string \| number>` | - |
| checked-keys / v-model | tree node with check box selected | ^[Array]`<string \| number>` | - |
| default-expanded-keys | nodes expanded by default | ^[Array]`<string \| number>` | - |
| expanded-keys / v-model | expanded node | ^[Array]`<string \| number>` | - |
| data | pass in data to generate the corresponding tree structure | ^[Array]`TreeNodeData[]`| [] |
| field-names | specify the field name in the node data | ^[Object]`TreeFieldNames` | - |
| show-line | whether to display the connection line | ^[Boolean] | false |
| load-more | a callback for loading data asynchronously, returning a Promise | ^[Function]`(node: TreeNodeData) => Promise<void>` | - |
| draggable | whether it can be dragged | ^[Boolean] | false |
| allow-drop | whether to allow release on a node when dragging | ^[Function]`(options: {  dropNode: TreeNodeData;  dropPosition: -1 \| 0 \| 1;}) => boolean` | - |
| virtual-list-props | pass virtual list properties, pass in this parameter to turn on virtual scrolling, [VirtualListProps](#VirtualListProps) | ^[Object]`VirtualListProps` | - |
| default-expand-selected | whether to expand the parent node of the selected node by default | ^[Boolean] | false |
| default-expand-checked | whether to expand the parent node of the checked node by default | ^[Boolean] | false |
| auto-expand-parent | whether to automatically expand the parent node of the expanded node | ^[Boolean] | true |
| half-checked-keys / v-model | the keys of half checked. Only valid when checkable and checkStrictly | ^[Array]`<string \| number>`| - |
| only-check-leaf | when enabled, checkedKeys is only for checked leaf nodes, and the status of the parent node is determined by the child node.(Only valid when checkable and checkStrictly is false) | ^[Boolean] | false |
| animation | whether to enable expand transition animation | ^[Boolean]| true |
| action-on-node-click | the action triggered when the node is clicked | ^[String] | - |

### Tree Events

| Name | Description | Type |
| ------ | ---- | ---- |
| select | triggered when the tree node is clicked | ^[Function]`(selectedKeys: Array<string \| number>, data: { selected?: boolean; selectedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; } ) => void` |
| check | triggered when the tree node checkbox is clicked.  | ^[Function]`(checkedKeys: Array<string \| number>, data: { checked?: boolean; checkedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; halfCheckedKeys: (string \| number)[]; halfCheckedNodes: TreeNodeData[]; } ) => void` |
| expand | expand/close | ^[Function]`(expandKeys: Array<string \| number>, data: { expanded?: boolean; expandNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; }) => void` |
| drag-start | node starts dragging | - |
| drag-end | node end drag | ^[Function]`(ev: DragEvent, node: TreeNodeData) => void` |
| drag-over | the node is dragged to the releasable target | ^[Function]`(ev: DragEvent, node: TreeNodeData) => void` |
| drag-leave | node leaves to release the target |  ^[Function]`(ev: DragEvent, node: TreeNodeData) => void` |
| drop | the node is released on a releasable target | ^[Function]`(data: { e: DragEvent; dragNode: TreeNodeData; dropNode: TreeNodeData; dropPosition: number; }) => void` |

### Tree Methods

| Name | Description | Type | Return |
| ------ | ---- | ---- | :----: |
| scrollIntoView | virtual list scroll to an element | ^[Function]`(options: { index?: number; key?: number \| string; align: 'auto' \| 'top' \| 'bottom'}) => void` | - |
| getSelectedNodes | get selected nodes | - | TreeNodeData[] |
| getCheckedNodes | get checked nodes. Supports passing in checkedStrategy, if not passed, the configuration of the component is taken. | ^[Function]`(options: {checkedStrategy?: 'all' \| 'parent' \| 'child'; includeHalfChecked?: boolean;}) => void` |TreeNodeData[] |
| getHalfCheckedNodes | get half checked nodes | - | TreeNodeData[] |
| getExpandedNodes | get expanded nodes | - | TreeNodeData[] |
| checkAll | set the checkbox state of all nodes | ^[Function]`(checked: boolean) => void` | - |
| checkNode | sets the checkbox state of the specified node | ^[Function]`(key: TreeNodeKey \| TreeNodeKey[], checked: boolean, onlyCheckLeaf: boolean ) => void` | - |
| selectAll | set the selected state of all nodes | ^[Function]`(selected: boolean) => void` | - |
| selectNode | sets the selected state of the specified node | ^[Function]`(key: TreeNodeKey \| TreeNodeKey[], selected: boolean ) => void` | - |
| expandAll | set the expanded state of all nodes | ^[Function]`(expanded: boolean) => void` | - |
| expandNode | sets the expanded state of the specified node | ^[Function]`(key: TreeNodeKey \| TreeNodeKey[], expanded: boolean) => void` | - |

### Tree Slots

| Name | Description | Params |
| ------ | ---- | ---- |
| title | title | - |
| extra | render additional node content | - |
| drag-icon | custom drag icon | ^[node]`TreeNodeData` |
| loading-icon | custom loading icon | - |
| switcher-icon | custom switcher icon | - |
| icon | custom node icon | ^[node]`TreeNodeData` |

### TreeNodeData

| Name | Description | Type | Return |
| ------ | ---- | ---- | :----: |
| key | unique key | ^[String]^[Number] | - |
| title | the title of the node | ^[String] | - |
| selectable | whether to allow selection | ^[Boolean] | false |
| disabled | whether to disable the node | ^[Boolean] | false |
| disableCheckbox | whether to disable the checkbox | ^[Boolean] | false |
| checkable | whether to show checkbox | ^[Boolean] | false |
| draggable | whether it can be dragged | ^[Boolean] | false |
| isLeaf | whether it is a leaf node. Effective when loading dynamically | ^[Boolean] | false |
| icon | node icon | ^[Function]`() => VNode` | - |
| switcherIcon | custom switcher icon, priority is greater than tree | ^[Function]`() => VNode` | - |
| loadingIcon | customize loading icon, priority is greater than tree | ^[Function]`() => VNode`| - |
| dragIcon | custom drag icon, priority is greater than tree | ^[Function]`() => VNode` | - |
| children | child node | ^[Array]`TreeNodeData[]` | - |

### TreeFieldNames

| Name | Description | Type | Return |
| ------ | ---- | ---- | :----: |
| key | specify the field name of key in TreeNodeData | ^[String] | key |
| title | specify the field name of title in TreeNodeData | ^[String] | title |
| disabled | specify the field name of disabled in TreeNodeData | ^[String] | disabled |
| children | specify the field name of children in TreeNodeData | ^[String] | children |
| isLeaf | specify the field name of isLeaf in TreeNodeData |^[String] | isLeaf |
| disableCheckbox | specify the field name of disableCheckbox in TreeNodeData | ^[String] | disableCheckbox |
| checkable | specify the field name of checkable in TreeNodeData | ^[String] | checkable |
| icon | specify the field name of icon in TreeNodeData | ^[String] | checkable |

### VirtualListProps{#VirtualListProps}

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| height | viewable area height| ^[Number]^[String] | - |
| threshold | the threshold of the number of elements to enable virtual scrolling. When the number of data is less than the threshold, virtual scrolling will not be enabled. | ^[Number] | - |
| isStaticItemHeight | is the element height fixed | ^[Boolean] | false |
| fixedSize | is the element height fixed. | ^[Boolean] | false |
| estimatedSize | is the element height fixed. | ^[Number] | - |
| buffer | the number of elements mounted in advance outside the boundary of the viewport. | ^[Number] | 10 |
