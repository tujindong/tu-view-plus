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
| disabled | Whether to disable |  ^[Boolean] | false |
| loading | Whether it is loading state |  ^[Boolean] | false |
| size | The size of the selection box. | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| border | Whether to show the border |  ^[Boolean] | true |
| allow-search | Whether to allow searching | ^[Boolean]^[Object]`{ retainInputValue?: boolean }` | false |
| allow-clear | Whether to allow clear | ^[Boolean] | false |
| placeholder | Prompt copy | ^[String] | - |
| max-tag-count | The maximum number of labels displayed, only valid in multi-select mode | ^[Number] | - |
| multiple | Whether to support multiple selection |  ^[Boolean] | false |
| default-value | Default value | ^[String]^[Number]^[Array]`<string \| number \| LabelValue>` | - |
| model-value / v-model | Bind value | ^[String]^[Number]^[Array]`<string \| number \| LabelValue>` | - |
| field-names | Specify the field name in the node data | ^[Object]`TreeFieldNames` | - |
| data | data | ^[Array]`TreeNodeData[]` | [] |
| label-in-value | Setting the value format. The default is string, when set to true, the value format is: '{label: string, value: string}' | ^[Boolean] | false |
| tree-checkable | Whether to show checkbox | ^[Boolean] | false |
| tree-check-strictly | Whether the parent and child nodes are related |  ^[Boolean] | false |
| tree-checked-strategy | Customized echo method | ^[String]`'all' \| 'parent' \| 'child'` | all |
| tree-props | Can accept Props of all [Tree](./tree.md#TreeAttributes) components | ^[Object]`Partial<TreeProps>` | - |
| trigger-props | Can accept Props of all [Trigger](./trigger.md#TriggerAttributes) components | ^[Object]`Partial<TriggerProps>` | - |
| popup-visible / v-model | Whether the pop-up box is visible |  ^[Boolean] | - |
| default-popup-visible | Whether the default pop-up box is visible |  ^[Boolean] | false |
| dropdown-style | Dropdown box style | ^[Object]`CSSProperties` | - |
| dropdown-class-name | Dropdown box style class | ^[String]^[Array]`string[]` | - |
| filter-tree-node | Custom node filter function | ^[Function]`(searchKey: string, nodeData: TreeNodeData) => boolean` | - |
| load-more | Load data dynamically | ^[Function]`(nodeData: TreeNodeData) => Promise<void>` | - |
| disable-filter | Disable internal filtering logic |  ^[Boolean] | false |
| popup-container | Mount container for pop-up box | ^[String]^[HTMLElement] | - |
| fallback-option | Customize node data for keys that do not match options |  ^[Boolean]^[Function]`((key: number \| string) => TreeNodeData \| boolean)` | true |
| selectable | Setting the nodes that can be selected, all can be selected by default | ^[Boolean] | true |
| scrollbar | Whether to enable virtual scroll bar | ^[Boolean]^[Object]`ScrollbarProps` | true |
| show-header-on-empty | Whether to display the header in the empty state |  ^[Boolean] | false |
| show-footer-on-empty | Whether to display the footer in the empty state |  ^[Boolean] | false |

### TreeSelect Events

| Name | Description | Type |
| ------ | ---- | ---- |
| change | Trigger when the value changes | ^[Function]`(value: string \| number \| LabelValue \| Array<string \| number> \| LabelValue[] \| undefined) => void` |
| popup-visible-change | Triggered when the status of the drop-down box changes | ^[Function]`(visible: boolean) => void` |
| search | Triggered when the search value changes | ^[Function]`(searchKey: string) => void` |
| clear | Triggered when clear is clicked | - |

### TreeSelect Slots

| Name | Description | Params |
| ------ | ---- | ---- |
| trigger | Custom trigger element | - |
| prefix | Prefix | - |
| label | Custom Label | data: mixed |
| header| The header of the drop-down box | - |
| loader | Customizing the content displayed during loading | - |
| empty | Custom empty data display | - |
| footer | The footer of the drop-down box | - |
| tree-slot-extra | Render additional node content of the tree component | - |
| tree-slot-title | Custom the node title of the tree component | - |
| tree-slot-icon | Custom node icon for the tree component | node: TreeNodeData |
| tree-slot-switcher-icon | Custom switcher icon for the tree component | - |
