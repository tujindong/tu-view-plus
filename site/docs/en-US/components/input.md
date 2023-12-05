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
| v-model | binding value | ^[String] ^[Number] | - |
| type | type of input | ^[String] | text |
| size | size of Input | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| disabled | whether Input is disabled | ^[Boolean] | - |
| maxlength | the max length | ^[String] ^[Number] | - |
| minlength | the min length | ^[Number] | - |
| show-word-limit | whether show word count, only works when type is 'text' | ^[Boolean] | false |
| placeholder | placeholder of Input | ^[String] | - |
| allow-clear | whether to show clear button | ^[Boolean] | - |
| formatter | specifies the format of the value presented input.(only works when type is 'text') | ^[Function]`(value: string \| number) => string` | - |
| parser | specifies the value extracted from formatter input.(only works when type is 'text') |  ^[Function]`(value: string) => string` | - |
| show-password | whether to show toggleable password input | ^[Boolean] | - |
| prefix-icon | prefix icon component | ^[String] ^[Component] | - |
| suffix-icon | suffix icon component | ^[String] ^[Component] | - |
| name | same as name in native input | ^[String] | - |
| readonly | same as readonly in native input | ^[Boolean] | false |
| max | same as max in native input | - | - |
| min | same as min in native input | - | - |
| step | same as step in native input | - | - |
| autofocus | same as autofocus in native input | ^[Boolean] | false |
| form | same as form in native input | ^[String] | - |
| tabindex | input tabindex | ^[String] ^[Number] | - |
| validate-event | whether to trigger form validation | ^[Boolean] | true |
| input-style | the style of the input element | ^[String] ^[Object]`CSSProperties \| CSSProperties[] \| string[]` | {} |

### Input Events

| Name | Description | Type |
| ------ | ---- | ---- |
| blur | triggers when Input blurs | ^[Function]`(event: FocusEvent) => void` |
| focus | triggers when Input focuses | ^[Function]`(event: FocusEvent) => void` |
| change | triggers when the input box loses focus or the user presses Enter, only if the modelValue has changed | ^[Function]`(value: string \| number) => void` |
| input | triggers when the Input value change | ^[Function]`(value: string \| number) => void` |
| clear | triggers when the Input is cleared by clicking the clear button | ^[Function]`() => void` |

### Input Slots

| Name | Description |
| ------ | ---- |
| prefix | content as Input prefix |
| suffix | content as Input suffix |
| prepend | content to prepend before Input |
| append | content to append after Input |

### Input Exposes

| Name | Description | Type |
| ------ | ---- | ---- |
| focus | focus the Input element | ^[Function]`() => void` |
| blur | blur the Input element | ^[Function]`() => void` |
| clear | clear Input value | ^[Function]`() => void` |
| input | HTML Input element | ^[object]`Ref<HTMLInputElement>` |
| ref | HTML element |  ^[object]`Ref<HTMLInputElement>`|
| select | select the text in input element | ^[Function]`() => void`  |
