# Checkbox

A group of options for multiple choices.

## Basic usage

:::demo src="../examples/checkbox/basic.vue" title="Checkbox can be used alone to switch between two states."

:::

## Controlled

:::demo src="../examples/checkbox/controlled.vue" title="Control whether the check box is selected use v-model (model-value) attribute."

:::

## Disabled

:::demo src="../examples/checkbox/disabled.vue" title="Disabled state for checkbox."

:::

## Checkbox group

:::demo src="../examples/checkbox/grouping.vue" title="It is used for multiple checkboxes which are bound in one group, and indicates whether one option is selected by checking if it is checked."

:::

## Indeterminate

:::demo src="../examples/checkbox/intermediate.vue" title="The indeterminate property can help you to achieve a `check all` effect."

:::

## Minimum / Maximum items checked

:::demo src="../examples/checkbox/limitation.vue" title="The min and max properties can help you to limit the number of checked items."

:::

## Checkbox group styles

:::demo src="../examples/checkbox/type.vue" title="Checkbox with button / border style."

:::

## Sizes

:::demo src="../examples/checkbox/size.vue" title="Besides default size, tu-checkbox-group component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

## Checkbox API

### Checkbox Attributes

| Name | Description | Type | Default |
| --------- | ---- | ---- | :----: |
| v-model | Binding value | ^[String] ^[Number] ^[Boolean] | - |
| label | Value of the Checkbox when used inside a checkbox-group | ^[String] ^[Number] ^[Boolean] ^[Object] | - |
| true-label | Value of the Checkbox if it's checked | ^[String] ^[Number] | - |
| false-label | Value of the Checkbox if it's not checked | ^[String] ^[Number] | - |
| disabled | Whether the Checkbox is disabled | ^[Boolean] | false |
| type | Checkbox type | ^[String]`'border'\|'button'`| - |
| size | Checkbox size | ^[String]`'mini'\|'small'\|'medium'\|'large'` | medium |
| name | Native 'name' attribute | ^[String] | - |
| checked | If the Checkbox is checked | ^[Boolean] | false |
| indeterminate | Set indeterminate state, only responsible for style control | ^[Boolean] | false |
| validate-event | Whether to trigger form validation | ^[Boolean] | true |
| tabindex | Input tabindex | ^[String] ^[Number] | - |
| id | Input id | ^[String] | - |
| controls | Same as aria-controls, takes effect when indeterminate is true | ^[Boolean] | - |

### Checkbox Events

| Name | Description | Type |
| ------ | ---- | ---- |
| change | Triggers when the binding value changes | ^[Function]`(value: string \| number \| boolean) => void` |

### Checkbox Slots

| Name | Description |
| ------ | ---- |
| default | Customize default content |

## CheckboxGroup API

### CheckboxGroup Attributes

| Name | Description | Type | Default |
| --------- | ---- | ---- | :----: |
| v-model | Binding value | ^[Object]`'string[]' \| 'number[]'` | - |
| label | Label for screen reader | ^[String] | - |
| type | CheckboxGroup type | ^[String]`'border' \| 'button'`| - |
| size | CheckboxGroup size | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| disabled | Whether the nesting checkboxes are disabled | ^[Boolean] | false |
| min | Minimum number of checkbox checked | ^[Number] | - |
| max | Maximum number of checkbox checked | ^[Number] | - |
| text-color | Font color when button is active | ^[String] | - |
| tag | Element tag of the checkbox group | ^[String] | div |
| validate-event | Whether to trigger form validation | ^[Boolean] | true |

### CheckboxGroup Events

| Name | Description | Type |
| ------ | ---- | ---- |
| change | Triggers when the binding value changes | ^[Function]`(value: string[] \| number[]) => void` |

### CheckboxGroup Slots

| Name | Description | Type |
| ------ | ---- | ---- |
| default | Customize default content | Checkbox |
