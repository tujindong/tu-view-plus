# Input

The basic form components have been expanded on the basis of native controls and can be used in combination.

## Basic usage

:::demo src="../examples/input/basic.vue" title="Input data using mouse or keyboard."

:::

## Disabled

:::demo src="../examples/input/disabled.vue" title="Disable the Input with the disabled attribute."

:::

## Allow clear

:::demo src="../examples/input/allow-clear.vue" title="Make the Input allow clear with the allowClear attribute."

:::

## Formatter

:::demo src="../examples/input/formatter.vue" title="Display value within its situation with formatter, and we usually use parser at the same time."

:::

## Password box

:::demo src="../examples/input/password.vue" title="Make a toggle-able password Input with the show-password attribute."

:::

## Input with icon

:::demo src="../examples/input/with-icon.vue" title="Add an icon to indicate input type."

:::

## Mixed input

:::demo src="../examples/input/mix-input.vue" title="Prepend or append an element, generally a label or a button."

:::

## Limit length

:::demo src="../examples/input/limit-length.vue" title="maxlength and minlength attributes of input, they declare a limit on the number of characters a user can input."

:::

## Sizes

:::demo src="../examples/input/size.vue" title="Besides default size, tu-input component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

## Input API

### Input Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| v-model | Binding value | ^[String] ^[Number] | - |
| type | Type of input | ^[String] | text |
| size | Size of Input | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| disabled | Whether Input is disabled | ^[Boolean] | - |
| maxlength | The max length | ^[String] ^[Number] | - |
| minlength | The min length | ^[Number] | - |
| show-word-limit | Whether show word count, only works when type is 'text' | ^[Boolean] | false |
| placeholder | Placeholder of Input | ^[String] | - |
| allow-clear | Whether to show clear button | ^[Boolean] | - |
| formatter | Specifies the format of the value presented input.(only works when type is 'text') | ^[Function]`(value: string \| number) => string` | - |
| parser | Specifies the value extracted from formatter input.(only works when type is 'text') |  ^[Function]`(value: string) => string` | - |
| show-password | Whether to show toggleable password input | ^[Boolean] | - |
| prefix-icon | Prefix icon component | ^[String] ^[Component] | - |
| suffix-icon | Suffix icon component | ^[String] ^[Component] | - |
| name | Same as name in native input | ^[String] | - |
| readonly | Same as readonly in native input | ^[Boolean] | false |
| max | Same as max in native input | - | - |
| min | Same as min in native input | - | - |
| step | Same as step in native input | - | - |
| autofocus | Same as autofocus in native input | ^[Boolean] | false |
| form | Same as form in native input | ^[String] | - |
| tabindex | Input tabindex | ^[String] ^[Number] | - |
| validate-event | Whether to trigger form validation | ^[Boolean] | true |
| input-style | The style of the input element | ^[String] ^[Object]`CSSProperties \| CSSProperties[] \| string[]` | {} |

### Input Events

| Name | Description | Type |
| ------ | ---- | ---- |
| blur | Triggers when Input blurs | ^[Function]`(event: FocusEvent) => void` |
| focus | Triggers when Input focuses | ^[Function]`(event: FocusEvent) => void` |
| change | Triggers when the input box loses focus or the user presses Enter, only if the modelValue has changed | ^[Function]`(value: string \| number) => void` |
| input | Triggers when the Input value change | ^[Function]`(value: string \| number) => void` |
| clear | Triggers when the Input is cleared by clicking the clear button | ^[Function]`() => void` |

### Input Slots

| Name | Description |
| ------ | ---- |
| prefix | Content as Input prefix |
| suffix | Content as Input suffix |
| prepend | Content to prepend before Input |
| append | Content to append after Input |

### Input Exposes

| Name | Description | Type |
| ------ | ---- | ---- |
| focus | Focus the Input element | ^[Function]`() => void` |
| blur | Blur the Input element | ^[Function]`() => void` |
| clear | Clear Input value | ^[Function]`() => void` |
| input | HTML Input element | ^[object]`Ref<HTMLInputElement>` |
| ref | HTML element |  ^[object]`Ref<HTMLInputElement>`|
| select | Select the text in input element | ^[Function]`() => void`  |
