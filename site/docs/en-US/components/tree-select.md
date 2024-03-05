# TreeSelect

The tree selector of the dropdown menu.

## Basic usage

:::demo src="../examples/tree-select/basic.vue" title="Basic usage example."

:::

## V-model

:::demo src="../examples/tree-select/control.vue" title="The selected value supports v-model."

:::

## Value format

:::demo src="../examples/tree-select/label-in-value.vue" title="When labelInValue is true, the format of value is: `{ label: string, value: string }`."

:::

## Dynamic loading

:::demo src="../examples/tree-select/load-more.vue" title="Load nodes dynamically via loadMore. At this time, isLeaf can be set to indicate leaf nodes."

:::

## Search

:::demo src="../examples/tree-select/search.vue" title="Setting allow-search is true to enable the search function. You can only search in the loaded data during dynamic loading. The default keyword search is to match from the value field. You can also pass in filterTreeNode to customize the filtering method."

:::

## Remote search

:::demo src="../examples/tree-select/search-remote.vue" title="Listen to the search event, get the data in the event processing function and update the treeData. When customizing the search logic, it is recommended to turn off the internal filtering logic disable-filter is true to prevent the customized results be affected."

:::

## Multiple

:::demo src="../examples/tree-select/multiple.vue" title="Multiple Selection."

:::

## Checkable

:::demo src="../examples/tree-select/checkable.vue" title="The tree checkable property can display checkbox."

:::

## Checked strategy

:::demo src="../examples/tree-select/checked-strategy.vue" title="Customize the return value through the treeCheckStrategy property."

:::

## Dropdown header & footer

:::demo src="../examples/tree-select/dropdown-slots.vue" title="Custom Tree Select the header and footer of the drop-down box."

:::

## Customize trigger element

:::demo src="../examples/tree-select/trigger-element.vue" title="Customize trigger element."

:::

## Control collapse

:::demo src="../examples/tree-select/popup-visible.vue" title="The dropdown expanded by default. Use popupVisible and onVisibleChange to control the expansion and collapse of the dropdown.For example, in this demo, onVisibleChange is triggered when the mouse moves out of the dropdown and the popup, the parameter is false, and the dropdown box is collapsed."

:::

## Customize treeData

:::demo src="../examples/tree-select/field-names.vue" title="You can customize treeData by fieldNames."

:::

## Virtual list

:::demo src="../examples/tree-select/virtual.vue" title="How to use the virtual list."

:::

## Fallback option

:::demo src="../examples/tree-select/fallback.vue" title="Using fallback-option to customize the display effect of the value of the option that is not found. By default, the value itself is displayed when the option is not found. Users can set this to false to hide values that do not match node data."

:::

## Size

:::demo src="../examples/tree-select/size.vue" title="Four sizes (small, default, large, huge) can be selected through size."

:::

## TreeSelect API

### TreeSelect Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| disabled | whether to disable |  ^[Boolean] | false |
| loading | whether it is loading state |  ^[Boolean] | false |
| size | the size of the selection box. | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| border | whether to show the border |  ^[Boolean] | true |
| allow-search | whether to allow searching | ^[Boolean]^[Object]`{ retainInputValue?: boolean }` | false |
| allow-clear | whether to allow clear | ^[Boolean] | false |
| placeholder | prompt copy | ^[String] | - |
| max-tag-count | the maximum number of labels displayed, only valid in multi-select mode | ^[Number] | - |
| multiple | whether to support multiple selection |  ^[Boolean] | false |
| default-value | default value | ^[String]^[Number]^[Array]`<string \| number \| LabelValue>` | - |
| model-value / v-model | bind value | ^[String]^[Number]^[Array]`<string \| number \| LabelValue>` | - |
| field-names | specify the field name in the node data | ^[Object]`TreeFieldNames` | - |
| data | data | ^[Array]`TreeNodeData[]` | [] |
| label-in-value | Setting the value format. The default is string, when set to true, the value format is: '{label: string, value: string}' | ^[Boolean] | false |
| tree-checkable | whether to show checkbox | ^[Boolean] | false |
| tree-check-strictly | whether the parent and child nodes are related |  ^[Boolean] | false |
| tree-checked-strategy | customized echo method | ^[String]`'all' \| 'parent' \| 'child'` | all |
| tree-props | can accept Props of all [Tree](./tree.md#TreeAttributes) components | ^[Object]`Partial<TreeProps>` | - |
| trigger-props | can accept Props of all [Trigger](./trigger.md#TriggerAttributes) components | ^[Object]`Partial<TriggerProps>` | - |
| popup-visible / v-model | whether the pop-up box is visible |  ^[Boolean] | - |
| default-popup-visible | whether the default pop-up box is visible |  ^[Boolean] | false |
| dropdown-style | dropdown box style | ^[Object]`CSSProperties` | - |
| dropdown-class-name | dropdown box style class | ^[String]^[Array]`string[]` | - |
| filter-tree-node | custom node filter function | ^[Function]`(searchKey: string, nodeData: TreeNodeData) => boolean` | - |
| load-more | load data dynamically | ^[Function]`(nodeData: TreeNodeData) => Promise<void>` | - |
| disable-filter | disable internal filtering logic |  ^[Boolean] | false |
| popup-container | mount container for pop-up box | ^[String]^[HTMLElement] | - |
| fallback-option | customize node data for keys that do not match options |  ^[Boolean]^[Function]`((key: number \| string) => TreeNodeData \| boolean)` | true |
| selectable | setting the nodes that can be selected, all can be selected by default | ^[Boolean] | true |
| scrollbar | whether to enable virtual scroll bar | ^[Boolean]^[Object]`ScrollbarProps` | true |
| show-header-on-empty | whether to display the header in the empty state |  ^[Boolean] | false |
| show-footer-on-empty | whether to display the footer in the empty state |  ^[Boolean] | false |

### TreeSelect Events

| Name | Description | Type |
| ------ | ---- | ---- |
| change | trigger when the value changes | ^[Function]`(value: string \| number \| LabelValue \| Array<string \| number> \| LabelValue[] \| undefined) => void` |
| popup-visible-change | triggered when the status of the drop-down box changes | ^[Function]`(visible: boolean) => void` |
| search | triggered when the search value changes | ^[Function]`(searchKey: string) => void` |
| clear | triggered when clear is clicked | - |

### TreeSelect Slots

| Name | Description | Params |
| ------ | ---- | ---- |
| trigger | custom trigger element | - |
| prefix | prefix | - |
| label | custom Label | data: mixed |
| header| the header of the drop-down box | - |
| loader | customizing the content displayed during loading | - |
| empty | custom empty data display | - |
| footer | the footer of the drop-down box | - |
| tree-slot-extra | render additional node content of the tree component | - |
| tree-slot-title | custom the node title of the tree component | - |
| tree-slot-icon | custom node icon for the tree component | node: TreeNodeData |
| tree-slot-switcher-icon | custom switcher icon for the tree component | - |
