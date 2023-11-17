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
| model-value | bind value | ^[Array]`(string \| number \| TagData)[]`| - |
| default-value | default value (uncontrolled state)）| ^[Array]`(string \| number \| TagData)[]`| [] |
| input-value | the value of the input | ^[String] | - |
| default-input-value | the default value of the input (uncontrolled state) | ^[String] | '' |
| placeholder | placeholder |^[String] | - |
| disabled | whether to disable | ^[Boolean] | false |
| error | whether it is an error state | ^[Boolean] | false |
| readonly | whether it is read-only mode | ^[Boolean] | false |
| clearable | whether to allow clear | ^[Boolean] | false |
| size | the size of the input| ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| max-tag-count | the maximum number of tags displayed, 0 means unlimited | ^[Number] |`0`|
| retain-input-value | whether to keep the content of the input box | ^[Boolean] | false |
| format-tag | format tag content | ^[Function]`(data: TagData) => string` | - |
| unique-value | whether to create only unique values | ^[Boolean] | false |
| field-names | Customize fields in TagData |^[InputTagFieldNames] | - |

### InputTag Events

| Name | Description | Type |
| ------ | ---- | ---- |
| change | triggered when the value changes | ^[Function]`(value: (string \| number \| TagData)[]) => void` |
| input-value-change | trigger when the input value changes | ^[Function]`(value: string) => void` |
| press-enter | triggered when the enter key is pressed | ^[Function]`(value: inputValue, event: KeyboardEvent) => void` |
| remove | triggered when the delete button of the label is clicked | ^[Function]`(value: string \| number, event: Event) => void` |
| clear | triggered when the clear button is clicked | ^[Function]`(event: Event) => void` |
| focus | triggered when the input box gets focus | ^[Function]`(event: FocusEvent) => void` |
| blur | triggered when the input box loses focus | ^[Function]`(event: FocusEvent) => void` |

### InputTag Slots

| Name | Description |
| ------ | ---- |
| tag | display content of tag |
| prefix | prefix |
| suffix | suffix |
