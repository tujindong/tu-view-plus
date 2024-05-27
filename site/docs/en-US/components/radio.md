# Radio

In a set of related and mutually exclusive data, the user can only select one option.

## Basic usage

:::demo src="../examples/radio/basic.vue" title="Bind a variable to Radio s v-model. It equals to the value of label of the chosen radio. The type of label is String, Number or Boolean."

:::

## Disabled

:::demo src="../examples/radio/disabled.vue" title="Disabled attribute is used to disable the radio. You just need to add the disabled attribute."

:::

## Radio group

:::demo src="../examples/radio/group.vue" title="Suitable for choosing from some mutually exclusive options. Combine tu-radio-group with tu-radio to display a radio group. Bind a variable with v-model of tu-radio-group element and set label value in tu-radio. It also provides change event with the current value as its parameter."

:::

## Radio group styles

:::demo src="../examples/radio/type.vue" title="Checkbox with button / border style."

:::

## Sizes

:::demo src="../examples/radio/size.vue" title="Besides default size, tu-radio-group component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

## Radio API

### Radio Attributes

| Name | Description | Type | Default |
| --------- | ---- | ---- | :----: |
| v-model | Binding value | ^[String] ^[Number] ^[Boolean] | - |
| label | The value of Radio | ^[String] ^[Number] ^[Boolean] | - |
| disabled | Whether Radio is disabled | ^[Boolean] | false |
| type | Type of the Radio | ^[String]`'border'\|'button'`| - |
| size | Size of the Radio | ^[String]`'mini'\|'small'\|'medium'\|'large'` | medium |
| name | Native name attribute | ^[String] | - |

### Radio Events

| Name | Description | Type |
| ------ | ---- | ---- |
| change | Triggers when the bound value changes | ^[Function]`(value: string \| number \| boolean) => void` |

### Radio Slots

| Name | Description |
| ------ | ---- |
| default | Customize default content |

## RadioGroup API

### RadioGroup Attributes

| Name | Description | Type | Default |
| --------- | ---- | ---- | :----: |
| v-model | Binding value | ^[String] ^[Number] ^[Boolean] | - |
| type | Type of the RadioGroup | ^[String]`'border' \| 'button'`| - |
| size | Size of the RadioGroup | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| disabled | Whether the nesting radios are disabled | ^[Boolean] | false |
| text-color | Font color when button is active | ^[String]  | - |
| validate-event | Whether to trigger form validation | ^[Boolean] | true |
| label | Same as aria-label in RadioGroup | ^[String] | - |
| name | Native name attribute | ^[String] | - |
| id | Native id attribute | ^[String] | - |

### RadioGroup Events

| Name | Description | Type |
| ------ | ---- | ---- |
| change | Triggers when the bound value changes | ^[Function]`(value: string \| number \| boolean) => void` |

### RadioGroup Slots

| Name | Description | Type |
| ------ | ---- | ---- |
| default | Customize default content | Radio |
