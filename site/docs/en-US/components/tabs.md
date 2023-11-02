# Tabs

Divide data collections which are related yet belong to different types.

## Basic usage

:::demo src="../examples/tabs/basic.vue" title="Basic usage of tab."

:::

## Icon tab

:::demo src="../examples/tabs/with-icon.vue" title="Tab page with icons."

:::

## Position

:::demo src="../examples/tabs/position.vue" title="The position of the tab bar can be customized through the position property."

:::

## Types

:::demo src="../examples/tabs/types.vue" title="The type of label can be set by type."

:::

## Lazy load

:::demo src="../examples/tabs/lazy-load.vue" title="By setting the lazy-load property, the panel can be rendered when it is first activated."

:::

## Extra

:::demo src="../examples/tabs/extra.vue" title="The extra display content can be customized through the extra slot."

:::

## Editable

:::demo src="../examples/tabs/editable.vue" title="By setting editable is true, you can turn on the dynamic increase and decrease tabs"

:::

## Trigger

:::demo src="../examples/tabs/trigger.vue" title="Specify the trigger method by trigger."

:::

## Tabs API

### Tabs Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| active-key/v-model | the key of the currently selected label | ^[String] ^[Number] | - |
| default-active-key | the key of the tab selected by default (uncontrolled state, select the first tab page when it is empty) | ^[String] ^[Number] | - |
| position | position of the tab | ^[String]`'left' \| 'right' \| 'top' \| 'bottom'`| top |
| type | the type of tab | ^[String]`'line' \| 'card-up' \| 'card-down' \| 'slider-up' \| 'slider-down' \| 'text' \| 'button' \| 'button-round'`| line |
| direction | the direction of tab | ^[String]`'horizontal' \| 'vertical'`| horizontal |
| editable | whether to enable editable mode | ^[Boolean] | false |
| show-add-button | whether to display the add button (only available in editable mode) | ^[Boolean] | false |
| destroy-on-hide | whether to destroy the content when the label is not displayed | ^[Boolean] | false |
| lazy-load | whether to mount the content when the label is first displayed | ^[Boolean] | false |
| justify | the height of the container is fully supported, and it only takes effect in horizontal mode. | ^[Boolean] | false |
| animation | whether to enable option content transition animation | ^[Boolean] | false |
| header-padding | whether there is a horizontal margin on the header of the tab. | ^[Boolean] | true |
| auto-switch | whether to switch to a new tab after creating a tab (the last one) | ^[Boolean] | false |
| hide-content | whether to hide content | ^[Boolean]  | false |
| trigger | trigger method | ^[String]`'hover' \| 'click'` | click |

### Tabs Events

| Name | Description | Type |
| ------ | ---- | ---- |
| change | triggered when the current tag value changes | ^[Function]`(value: string \| number) => void` |
| tab-click | triggered when the user clicks on the tab | ^[Function]`(value: string \| number) => void` |
| add | triggered when the user clicks the add button | - |
| delete | triggered when the user clicks the delete button | ^[Function]`(value: string \| number) => void` |

### Tabs Slots

| Name | Description |
| ------ | ---- |
| extra | additional tab content | - |

<!-- Tab-Pane -->
## Tab-Pane API

### Tab-Pane Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| title | title of the tab | ^[String] | - |
| disabled | whether to disable | ^[Boolean] | false |
| closable | whether to allow this tab to be closed (only effective in editable mode) | ^[Boolean] | true |
| destroy-on-hide | whether to destroy the content when the label is not displayed | ^[Boolean] | false |

### Tab-Pane Slots

| Name | Description |
| ------ | ---- |
| title | tab title | - |
