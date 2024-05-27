# Dropdown

Toggleable menu for displaying lists of links and actions.

## Basic usage

:::demo src="../examples/dropdown/basic.vue" title="Basic usage of the drop-down menu."

:::

## Position

:::demo src="../examples/dropdown/position.vue" title="Support to specify 6 pop-up orientations through position, which are: top: up, tl: top left, tr: top right, bottom: bottom (default), bl: bottom left, br: bottom right."

:::

## Trigger

:::demo src="../examples/dropdown/trigger.vue" title="Specify the trigger method by trigger."

:::

## Dropdown button

:::demo src="../examples/dropdown/dropdown-button.vue" title="The <tu-dropdown-button> component can be used to display a button with a menu of additional related functions on the right."

:::

## Group

:::demo src="../examples/dropdown/dropdown-group.vue" title="Use the grouping option through the <tu-dropdown-group> component."

:::

## Submenu

:::demo src="../examples/dropdown/dropdown-submenu.vue" title="Drop-down box with multi-level menu."

:::

## Context Menu

:::demo src="../examples/dropdown/context-menu.vue" title="After moving into the area, you can click the right mouse button to trigger."

:::

## Max heigth

:::demo src="../examples/dropdown/max-height.vue" title="Support to specify the max height of pop-up box through popupMaxHeight, default is true. The pop-up box has a default height and displays scrollbar. Setting popupMaxHeight to false will display all menu options in their entirety"

:::

## Sizes

:::demo src="../examples/dropdown/size.vue" title="Besides default size, tu-dropdown component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

## Dropdown API

<!-- Dropdown -->

### Dropdown Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :-----: |
| popup-visible(v-model) | Whether the popup is visible | ^[Boolean] | - |
| default-popup-visible | Whether the popup is visible by default (uncontrolled mode) | ^[Boolean] | false |
| trigger | Trigger method | ^[String]`'hover' \| 'click' \| 'focus' \| 'contextMenu'` | click |
| position | Popup position | ^[String]`'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br'` | bottom |
| popup-container | Mount container for popup | ^[String] ^[HTMLElement] | - |
| hide-on-select | Whether to hide popup when the user selects | ^[Boolean] | true |
| size | Size of dropdown | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |

### Dropdown Events

| Name | Description | Type |
| ------ | ---- | ---- |
| popup-visible-change | Triggered when the display status of the drop-down box changes | ^[Function]`(value: boolean) => void` |
| select | Triggered when the user selects | ^[Function]`(value: string \| number \| Record<string, any> \| undefined) => void`|

### Dropdown Slots

| Name | Description |
| ------ | ---- |
| content | Content |
| footer | Footer |

<!-- Dropdown-Item -->

### Dropdown-Item Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :-----: |
| value | Value | ^[String] ^[Number] ^[Object] | - |
| disabled | Disabled | ^[Boolean] | false |

### Dropdown-Item Events

| Name | Description | Type |
| ------ | ---- | ---- |
| click | Emitted when the button is clicked | ^[Function]`(evt: MouseEvent) => void` |

### Dropdown-Item Slots

| Name | Description |
| ------ | ---- |
| icon | Icon |

<!-- Dropdown-Group -->

### Dropdown-Group Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :-----: |
| title | Group title | ^[String]  | - |

### Dropdown-Group Slots

| Name | Description |
| ------ | ---- |
| title | Group title |

<!-- Dropdown-Submenu -->
### Dropdown-Submenu Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :-----: |
| value | Value | ^[String] ^[Number] | - |
| disabled | Whether to disable | ^[Boolean] | false |
| trigger | Trigger method | ^[String]`'hover' \| 'click'`|`'click'` |
| position | Popup position | ^[String]`'rt' \| 'lt'`|`'rt'` |
| popup-visible(v-model) | Whether the popup is visible | ^[Boolean] | - |
| default-popup-visible | Whether the popup is visible by default (uncontrolled mode) | ^[Boolean] | false |
| option-props | Custom option properties | ^[Object] | - |

### Dropdown-Submenu Events

| Name | Description | Type |
| ------ | ---- | ---- |
| popup-visible-change | Triggered when the display status of the drop-down box changes | ^[Function]`(value: boolean) => void` |

### Dropdown-Submenu Slots

| Name | Description |
| ------ | ---- |
| icon | Icon |
| content | Submenu content |
| footer | Footer |

<!-- Dropdown-Button -->
### Dropdown-Button Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :-----: |
| popup-visible(v-model) | Whether the popup is visible | ^[Boolean] | - |
| default-popup-visible | Whether the popup is visible by default (uncontrolled mode) | ^[Boolean] | false |
| trigger | Trigger method | ^[String]`'hover' \| 'click' \| 'focus' \| 'contextMenu'` | click |
| position | Popup position | ^[String]`'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br'` | bottom |
| popup-container | Mount container for popup | ^[String] ^[HTMLElement] | - |
| disabled | Whether to disable | ^[Boolean] | false |
| type | Type of Dropdown button | ^[String]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'text'` | - |
| size | Size of Dropdown button | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| button-props | Button props | ^[ButtonProps] | - |
| hide-on-select | Whether to hide popup when the user selects | ^[Boolean]  | true |

### Dropdown-Button Events

| Name | Description | Type |
| ------ | ---- | ---- |
| popup-visible-change | Triggered when the display status of the drop-down box changes | ^[Function]`(value: boolean) => void` |
| select | Triggered when the user selects | ^[Function]`(value: string \| number \| Record<string, any> \| undefined) => void`|
| click | Emitted when the button is clicked | ^[Function]`(evt: MouseEvent) => void` |

### Dropdown-Button Slots

| Name | Description |
| ------ | ---- |
| icon | Button icon |
| content | Content |
