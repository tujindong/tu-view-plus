# Textarea

The basic form components have been expanded on the basis of native controls and can be used in combination.

## Basic usage

:::demo src="../examples/textarea/basic.vue" title="input data using mouse or keyboard."

:::

## Disabled

:::demo src="../examples/textarea/disabled.vue" title="Disable the Textarea with the disabled attribute."

:::

## Allow clear

:::demo src="../examples/textarea/allow-clear.vue" title="Make the Textarea allow clear with the allowClear attribute."

:::

## Formatter

:::demo src="../examples/textarea/formatter.vue" title="Display value within its situation with formatter, and we usually use parser at the same time."

:::

## Limit length

:::demo src="../examples/textarea/limit-length.vue" title="maxlength and minlength attributes of input, they declare a limit on the number of characters a user can input."

:::

## Autosize textarea

:::demo src="../examples/textarea/autosize.vue" title="Setting the autosize prop for a textarea type of Input makes the height to automatically adjust based on the content. An options object can be provided to autosize to specify the minimum and maximum number of lines the textarea can automatically adjust."

:::

## Sizes

:::demo src="../examples/textarea/size.vue" title="Besides default size, tu-textarea component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

## Textarea API

### Textarea Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| v-model | Binding value | ^[String] ^[Number] | - |
| size | Size of Textarea | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| disabled | Whether textarea is disabled | ^[Boolean] | - |
| maxlength | The max length | ^[String] ^[Number] | - |
| minlength | The min length | ^[Number] | - |
| show-word-limit | Whether show word count, only works when type is 'text'| ^[Boolean] | false |
| placeholder | Placeholder of Textarea | ^[String] | - |
| allow-clear | Whether to show clear button | ^[Boolean] | - |
| rows | Number of rows of textarea | ^[number] | - |
| autosize | Whether textarea has an adaptive height. Can accept an object, e.g:{minRows: 2, maxRows: 6}. | ^[boolean] ^[object]`{minRows?: number, maxRows?: number}` | false |
| formatter | Specifies the format of the value presented input.(only works when type is 'text') | ^[Function]`(value: string \| number) => string` | - |
| parser | Specifies the value extracted from formatter input.(only works when type is 'text') |  ^[Function]`(value: string) => string` | - |
| name | Same as name in native input | ^[String] | - |
| readonly | Same as readonly in native input | ^[Boolean] | false |
| max | Same as max in native input | - | - |
| min | Same as min in native input | - | - |
| step | Same as step in native input | - | - |
| autofocus | Same as autofocus in native input | ^[Boolean] | false |
| form | Same as form in native input | ^[String] | - |
| tabindex | Input tabindex | ^[String] ^[Number] | - |
| validate-event | Whether to trigger form validation | ^[Boolean] | true |
| textarea-style | The style of the textarea element or textarea element | ^[String] ^[Object]`CSSProperties \| CSSProperties[] \| string[]` | {} |

### Textarea Events

| Name | Description | Type |
| ------ | ---- | ---- |
| blur | Triggers when Textarea blurs | ^[Function]`(event: FocusEvent) => void` |
| focus | Triggers when Textarea focuses | ^[Function]`(event: FocusEvent) => void` |
| change | Triggers when the input box loses focus or the user presses Enter, only if the modelValue has changed | ^[Function]`(value: string \| number) => void` |
| input | Triggers when the Textarea value change | ^[Function]`(value: string \| number) => void` |
| clear | Triggers when the Textarea is cleared by clicking the clear button | ^[Function]`() => void` |

### Textarea Exposes

| Name | Description | Type |
| ------ | ---- | ---- |
| focus | Focus the Textarea element | ^[Function]`() => void` |
| blur | Blur the Textarea element | ^[Function]`() => void` |
| clear | Clear Textarea value | ^[Function]`() => void` |
| textarea | HTML Textarea element | ^[object]`Ref<HTMLTextareaElement>` |
| ref | HTML element |  ^[object]`Ref<HTMLTextAreaElement>`|
| select | Select the text in Textarea element | ^[Function]`() => void`  |
| resizeTextarea | Resize textarea | ^[Function]`() =>void` |
| textareaStyle  | Style of textarea | ^[object]`Ref<StyleValue>` |
