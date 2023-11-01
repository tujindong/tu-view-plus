# Button

A button is a command component to trigger an operation.

## Basic usage

:::demo src="../examples/button/basic.vue" title="Use type, plain, round and circle to define Buttons style."

:::

## Disabled Button

:::demo src="../examples/button/disabled.vue" title="The disabled attribute determines if the button is disabled. Use disabled attribute to determine whether a button is disabled. It accepts a Boolean value."

:::

## Text Button

:::demo src="../examples/button/text.vue" title="Button without border and background color."

:::

## Icon Button

:::demo src="../examples/button/icon.vue" title="Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text."

:::

## Button Group

:::demo src="../examples/button/group.vue" title="Displayed as a button group, can be used to group a series of similar operations. Use tag <tu-button-group> to group your buttons."

:::

## Loading Button

:::demo src="../examples/button/loading.vue" title="Click the button to load data, then the button displays a loading state. Set loading attribute to true to display loading state."

:::

## Sizes

:::demo src="../examples/button/size.vue" title="Besides default size, Button component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

## Button API

### Button Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| size | button size | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| type | button type | ^[String]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'text'` | - |
| round | determine whether it's a round button | ^[Boolean] | false |
| circle | determine whether it's a circle button | ^[Boolean] | false |
| loading | determine whether it's loading | ^[Boolean] | false |
| loading-icon | customize loading icon component | ^[String] ^[Component] | Loading |
| disabled | disable the button | ^[Boolean] | false |
| icon | icon component | ^[String] ^[Component] | - |
| autofocus | same as native button's autofocus | ^[Boolean] | false |
| native-type | same as native button's type | ^[String]`'button' \| 'submit' \| 'reset'` | button |

### Button Slots

| Name | Description |
| ------ | ---- |
| default | customize default content |
| loading | customize loading component |
| icon | customize icon component |

### Button Exposes

| Name | Description | Type |
| ------ | ---- | ---- |
| ref | button html element | ^[Object]`Ref<HTMLButtonElement>` |
| size | button size | ^[Object]`ComputedRef<'' \| 'small' \| 'default' \| 'large'>` |
| type | button type | ^[Object]`ComputedRef<'' \| 'default' \| 'primary' \| 'success' \| 'warning' \| 'info' \| 'danger' \| 'text'>` |
| disabled | button disabled | ^[Object]`ComputedRef<boolean>` |

## ButtonGroup API

### ButtonGroup Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| size | control the size of buttons in this button-group | ^[String]`'large' \| 'default' \| 'small'` | - |
| type | control the type of buttons in this button-group | ^[String]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | - |

### ButtonGroup Slots

| Name | Description | Default |
| ------ | ---- | ---- |
| default | customize button group content | Button |
