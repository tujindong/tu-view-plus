# Alert

Displays important alert messages.

## Basic usage

:::demo src="../examples/alert/basic.vue" title="Display information that needs attention, suitable for brief warning prompts."

:::

## Types

:::demo src="../examples/alert/types.vue" title="There are four types of warnings: info, success, warning, and error. which has no icon by default."

:::

## Effects

:::demo src="../examples/alert/effects.vue" title="Card provide five different themes: dark、light、plain、up and down. Using effect to change, default is up."

:::

## Customizable close button

:::demo src="../examples/alert/custom-close.vue" title="Customize the close button as texts or other symbols."

:::

## With icon

:::demo src="../examples/alert/icon.vue" title="Displaying an icon improves readability."

:::

## With description

:::demo src="../examples/alert/description.vue" title="Besides the required title attribute, you can add a description attribute to help you describe the alert with more details. Description can only store text string, and it will word wrap automatically."

:::

## With icon and description

:::demo src="../examples/alert/icon-description.vue" title="This is an example with both icon and description."

:::

## Sizes

:::demo src="../examples/alert/size.vue" title="Besides default size, tu-alert component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

## Alert API

### Alert Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| title | The title of alert | ^[String] | - |
| type | The type of alert | ^[String]`'success' \| 'warning' \| 'info' \| 'error'` | - |
| description | Descriptive text | ^[String] | —         |
| closable | Whether alert can be dismissed | ^[Boolean] | true |
| center | Whether content is placed in the center | ^[Boolean] | false |
| close-text | Customized close button text | ^[String] | - |
| show-icon | Whether a type icon is displayed | ^[Boolean] | false |
| effect | The effect of alert | ^[String]`'light' \| 'dark' \| 'plain' \| 'up'  \| 'down'` | up |
| size | The size of alert | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |

### Alert Events

| Name | Description | Type |
| ------ | ---- | ---- |
| close | Trigger when alert is closed | ^[Function]`(event: MouseEvent) => void` |

### Alert Slots

| Name | Description |
| ------ | ---- |
| default | Content of the alert description |
| title | Content of the alert title |
