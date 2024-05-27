# InputTag

Used to enter the label.

## Basic usage

:::demo src="../examples/input-tag/basic.vue" title="Basic usage of tag input."

:::

## Status

:::demo src="../examples/input-tag/status.vue" title="The input box has two states: disabled and readonly."

:::

## Max tags

:::demo src="../examples/input-tag/max-count.vue" title="Set the maximum number of display labels."

:::

## Size

:::demo src="../examples/input-tag/size.vue" title="Besides default size, tu-input-tag component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

## InputTag API

### InputTag Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| model-value | Bind value | ^[Array]`(string \| number \| TagData)[]`| - |
| default-value | Default value (uncontrolled state)）| ^[Array]`(string \| number \| TagData)[]`| [] |
| input-value | The value of the input | ^[String] | - |
| default-input-value | The default value of the input (uncontrolled state) | ^[String] | '' |
| placeholder | Placeholder |^[String] | - |
| disabled | Whether to disable | ^[Boolean] | false |
| error | Whether it is an error state | ^[Boolean] | false |
| readonly | Whether it is read-only mode | ^[Boolean] | false |
| allow-clear | Whether to allow clear | ^[Boolean] | false |
| size | The size of the input| ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| max-tag-count | The maximum number of tags displayed, 0 means unlimited | ^[Number] |`0`|
| retain-input-value | Whether to keep the content of the input box | ^[Boolean] | false |
| format-tag | Format tag content | ^[Function]`(data: TagData) => string` | - |
| unique-value | Whether to create only unique values | ^[Boolean] | false |
| field-names | Customize fields in TagData |^[InputTagFieldNames] | - |

### InputTag Events

| Name | Description | Type |
| ------ | ---- | ---- |
| change | Triggered when the value changes | ^[Function]`(value: (string \| number \| TagData)[]) => void` |
| input-value-change | Trigger when the input value changes | ^[Function]`(value: string) => void` |
| press-enter | Triggered when the enter key is pressed | ^[Function]`(value: inputValue, event: KeyboardEvent) => void` |
| remove | Triggered when the delete button of the label is clicked | ^[Function]`(value: string \| number, event: Event) => void` |
| clear | Triggered when the clear button is clicked | ^[Function]`(event: Event) => void` |
| focus | Triggered when the input box gets focus | ^[Function]`(event: FocusEvent) => void` |
| blur | Triggered when the input box loses focus | ^[Function]`(event: FocusEvent) => void` |

### InputTag Slots

| Name | Description |
| ------ | ---- |
| tag | Display content of tag |
| prefix | Prefix |
| suffix | Suffix |
