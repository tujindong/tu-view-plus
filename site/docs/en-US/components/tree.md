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
| size | Size | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| block-node | Whether the node occupies a row | ^[Boolean] | false |
| default-expand-all | Whether to expand the parent node by default | ^[Boolean] | true |
| multiple | Whether to support multiple selection | ^[Boolean] | false |
| checkable | Whether to add a checkbox before the node | ^[Boolean] | false |
| selectable | Whether to support selection | ^[Boolean] | true |
| check-strictly | Whether to cancel the parent-child node association | ^[Boolean] | false |
| checked-strategy | Customized backfill method <br/> all: return all selected nodes <br/> parent: return only parent node when both parent and child nodes are selected <br/> child: return only child nodes | ^[String]`'all' \| 'parent' \| 'child'` | all |
| default-selected-keys | Tree node selected by default | ^[Array]`<string \| number>` | - |
| selected-keys / v-model | Selected tree node | ^[Array]`<string \| number>` | - |
| default-checked-keys | Tree node with checkbox selected by default | ^[Array]`<string \| number>` | - |
| checked-keys / v-model | Tree node with check box selected | ^[Array]`<string \| number>` | - |
| default-expanded-keys | Nodes expanded by default | ^[Array]`<string \| number>` | - |
| expanded-keys / v-model | Expanded node | ^[Array]`<string \| number>` | - |
| data | Pass in data to generate the corresponding tree structure | ^[Array]`TreeNodeData[]`| [] |
| field-names | Specify the field name in the node data | ^[Object]`TreeFieldNames` | - |
| show-line | Whether to display the connection line | ^[Boolean] | false |
| load-more | A callback for loading data asynchronously, returning a Promise | ^[Function]`(node: TreeNodeData) => Promise<void>` | - |
| draggable | Whether it can be dragged | ^[Boolean] | false |
| allow-drop | Whether to allow release on a node when dragging | ^[Function]`(options: {  dropNode: TreeNodeData;  dropPosition: -1 \| 0 \| 1;}) => boolean` | - |
| virtual-list-props | Pass virtual list properties, pass in this parameter to turn on virtual scrolling, [VirtualListProps](#VirtualListProps) | ^[Object]`VirtualListProps` | - |
| default-expand-selected | Whether to expand the parent node of the selected node by default | ^[Boolean] | false |
| default-expand-checked | Whether to expand the parent node of the checked node by default | ^[Boolean] | false |
| auto-expand-parent | Whether to automatically expand the parent node of the expanded node | ^[Boolean] | true |
| half-checked-keys / v-model | The keys of half checked. Only valid when checkable and checkStrictly | ^[Array]`<string \| number>`| - |
| only-check-leaf | When enabled, checkedKeys is only for checked leaf nodes, and the status of the parent node is determined by the child node.(Only valid when checkable and checkStrictly is false) | ^[Boolean] | false |
| animation | Whether to enable expand transition animation | ^[Boolean]| true |
| action-on-node-click | The action triggered when the node is clicked | ^[String] | - |

### Tree Events

| Name | Description | Type |
| ------ | ---- | ---- |
| select | Triggered when the tree node is clicked | ^[Function]`(selectedKeys: Array<string \| number>, data: { selected?: boolean; selectedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; } ) => void` |
| check | Triggered when the tree node checkbox is clicked.  | ^[Function]`(checkedKeys: Array<string \| number>, data: { checked?: boolean; checkedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; halfCheckedKeys: (string \| number)[]; halfCheckedNodes: TreeNodeData[]; } ) => void` |
| expand | expand/close | ^[Function]`(expandKeys: Array<string \| number>, data: { expanded?: boolean; expandNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; }) => void` |
| drag-start | Node starts dragging | - |
| drag-end | Node end drag | ^[Function]`(ev: DragEvent, node: TreeNodeData) => void` |
| drag-over | The node is dragged to the releasable target | ^[Function]`(ev: DragEvent, node: TreeNodeData) => void` |
| drag-leave | Node leaves to release the target |  ^[Function]`(ev: DragEvent, node: TreeNodeData) => void` |
| drop | The node is released on a releasable target | ^[Function]`(data: { e: DragEvent; dragNode: TreeNodeData; dropNode: TreeNodeData; dropPosition: number; }) => void` |

### Tree Methods

| Name | Description | Type | Return |
| ------ | ---- | ---- | :----: |
| scrollIntoView | Virtual list scroll to an element | ^[Function]`(options: { index?: number; key?: number \| string; align: 'auto' \| 'top' \| 'bottom'}) => void` | - |
| getSelectedNodes | Get selected nodes | - | TreeNodeData[] |
| getCheckedNodes | Get checked nodes. Supports passing in checkedStrategy, if not passed, the configuration of the component is taken. | ^[Function]`(options: {checkedStrategy?: 'all' \| 'parent' \| 'child'; includeHalfChecked?: boolean;}) => void` |TreeNodeData[] |
| getHalfCheckedNodes | Get half checked nodes | - | TreeNodeData[] |
| getExpandedNodes | Get expanded nodes | - | TreeNodeData[] |
| checkAll | Set the checkbox state of all nodes | ^[Function]`(checked: boolean) => void` | - |
| checkNode | Sets the checkbox state of the specified node | ^[Function]`(key: TreeNodeKey \| TreeNodeKey[], checked: boolean, onlyCheckLeaf: boolean ) => void` | - |
| selectAll | Set the selected state of all nodes | ^[Function]`(selected: boolean) => void` | - |
| selectNode | Sets the selected state of the specified node | ^[Function]`(key: TreeNodeKey \| TreeNodeKey[], selected: boolean ) => void` | - |
| expandAll | Set the expanded state of all nodes | ^[Function]`(expanded: boolean) => void` | - |
| expandNode | Sets the expanded state of the specified node | ^[Function]`(key: TreeNodeKey \| TreeNodeKey[], expanded: boolean) => void` | - |

### Tree Slots

| Name | Description | Params |
| ------ | ---- | ---- |
| title | Title | - |
| extra | Render additional node content | - |
| drag-icon | Custom drag icon | ^[node]`TreeNodeData` |
| loading-icon | Custom loading icon | - |
| switcher-icon | Custom switcher icon | - |
| icon | Custom node icon | ^[node]`TreeNodeData` |

### TreeNodeData

| Name | Description | Type | Return |
| ------ | ---- | ---- | :----: |
| key | Unique key | ^[String]^[Number] | - |
| title | The title of the node | ^[String] | - |
| selectable | Whether to allow selection | ^[Boolean] | false |
| disabled | Whether to disable the node | ^[Boolean] | false |
| disableCheckbox | Whether to disable the checkbox | ^[Boolean] | false |
| checkable | Whether to show checkbox | ^[Boolean] | false |
| draggable | Whether it can be dragged | ^[Boolean] | false |
| isLeaf | Whether it is a leaf node. Effective when loading dynamically | ^[Boolean] | false |
| icon | Node icon | ^[Function]`() => VNode` | - |
| switcherIcon | Custom switcher icon, priority is greater than tree | ^[Function]`() => VNode` | - |
| loadingIcon | Customize loading icon, priority is greater than tree | ^[Function]`() => VNode`| - |
| dragIcon | Custom drag icon, priority is greater than tree | ^[Function]`() => VNode` | - |
| children | Child node | ^[Array]`TreeNodeData[]` | - |

### TreeFieldNames

| Name | Description | Type | Return |
| ------ | ---- | ---- | :----: |
| key | Specify the field name of key in TreeNodeData | ^[String] | key |
| title | Specify the field name of title in TreeNodeData | ^[String] | title |
| disabled | Specify the field name of disabled in TreeNodeData | ^[String] | disabled |
| children | Specify the field name of children in TreeNodeData | ^[String] | children |
| isLeaf | Specify the field name of isLeaf in TreeNodeData |^[String] | isLeaf |
| disableCheckbox | Specify the field name of disableCheckbox in TreeNodeData | ^[String] | disableCheckbox |
| checkable | Specify the field name of checkable in TreeNodeData | ^[String] | checkable |
| icon | Specify the field name of icon in TreeNodeData | ^[String] | checkable |

### VirtualListProps{#VirtualListProps}

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| height | Viewable area height| ^[Number]^[String] | - |
| threshold | The threshold of the number of elements to enable virtual scrolling. When the number of data is less than the threshold, virtual scrolling will not be enabled. | ^[Number] | - |
| isStaticItemHeight | Is the element height fixed | ^[Boolean] | false |
| fixedSize | Is the element height fixed. | ^[Boolean] | false |
| estimatedSize | Is the element height fixed. | ^[Number] | - |
| buffer | The number of elements mounted in advance outside the boundary of the viewport. | ^[Number] | 10 |
