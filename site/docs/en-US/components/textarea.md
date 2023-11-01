# Textarea

The basic form components have been expanded on the basis of native controls and can be used in combination.

## Basic usage

:::demo src="../examples/textarea/basic.vue" title="input data using mouse or keyboard."

:::

## Disabled

:::demo src="../examples/textarea/disabled.vue" title="Disable the Textarea with the disabled attribute."

:::

## Clearable

:::demo src="../examples/textarea/clearable.vue" title="Make the Textarea clearable with the clearable attribute."

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

## 不同尺寸

:::demo src="../examples/textarea/size.vue" title="Besides default size, tu-textarea component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

## Textarea API

### Textarea Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| v-model | binding value | ^[String] ^[Number] | - |
| size | size of Textarea | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| disabled | whether textarea is disabled | ^[Boolean] | - |
| maxlength | the max length | ^[String] ^[Number] | - |
| minlength | the min length | ^[Number] | - |
| show-word-limit | whether show word count, only works when type is 'text'| ^[Boolean] | false |
| placeholder | placeholder of Textarea | ^[String] | - |
| clearable | whether to show clear button | ^[Boolean] | - |
| rows | number of rows of textarea | ^[number] | - |
| autosize | whether textarea has an adaptive height. Can accept an object, e.g:{minRows: 2, maxRows: 6}. | ^[boolean] ^[object]`{minRows?: number, maxRows?: number}` | false |
| formatter | specifies the format of the value presented input.(only works when type is 'text') | ^[Function]`(value: string \| number) => string` | - |
| parser | specifies the value extracted from formatter input.(only works when type is 'text') |  ^[Function]`(value: string) => string` | - |
| name | same as name in native input | ^[String] | - |
| readonly | same as readonly in native input | ^[Boolean] | false |
| max | same as max in native input | - | - |
| min | same as min in native input | - | - |
| step | same as step in native input | - | - |
| autofocus | same as autofocus in native input | ^[Boolean] | false |
| form | same as form in native input | ^[String] | - |
| tabindex | input tabindex | ^[String] ^[Number] | - |
| validate-event | whether to trigger form validation | ^[Boolean] | true |
| textarea-style | the style of the textarea element or textarea element | ^[String] ^[Object]`CSSProperties \| CSSProperties[] \| string[]` | {} |

### Textarea Events

| Name | Description | Type |
| ------ | ---- | ---- |
| blur | triggers when Textarea blurs | ^[Function]`(event: FocusEvent) => void` |
| focus | triggers when Textarea focuses | ^[Function]`(event: FocusEvent) => void` |
| change | triggers when the input box loses focus or the user presses Enter, only if the modelValue has changed | ^[Function]`(value: string \| number) => void` |
| input | triggers when the Textarea value change | ^[Function]`(value: string \| number) => void` |
| clear | triggers when the Textarea is cleared by clicking the clear button | ^[Function]`() => void` |

### Textarea Exposes

| Name | Description | Type |
| ------ | ---- | ---- |
| focus | focus the Textarea element | ^[Function]`() => void` |
| blur | blur the Textarea element | ^[Function]`() => void` |
| clear | clear Textarea value | ^[Function]`() => void` |
| textarea | HTML Textarea element | ^[object]`Ref<HTMLTextareaElement>` |
| ref | HTML element |  ^[object]`Ref<HTMLTextAreaElement>`|
| select | select the text in Textarea element | ^[Function]`() => void`  |
| resizeTextarea | resize textarea | ^[Function]`() =>void` |
| textareaStyle  | style of textarea | ^[object]`Ref<StyleValue>` |
