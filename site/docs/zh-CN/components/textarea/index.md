# Textarea 多行输入框

基本表单组件，并在原生控件基础上进行了功能扩展。

## 基础用法

:::demo src="./basic.vue" title="多行输入框的基本用法。"

:::

## 禁用状态

:::demo src="./disabled.vue" title="通过 disabled 属性指定是否禁用 textarea 组件。"

:::

## 可清空

:::demo src="./clearable.vue" title="使用 clearable 属性即可得到一个可清空的输入框。"

:::

## 格式化

:::demo src="./formatter.vue" title="使用 formatter 属性显示格式化内容，通常需要搭配 parser 属性一起使用。"

:::

## 输入长度限制

:::demo src="./limit-length.vue" title="使用 maxlength 和 minlength 属性，用来限制输入框的字符长度。"

字符长度是用 Javascript 的字符串长度统计的，在使用 maxlength 属性限制最大输入长度的同时，可通过设置 show-word-limit 属性来展示字数统计。

:::

## 可自适应文本高度

:::demo src="./autosize.vue" title="通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 autosize 还可以设定为一个对象，指定最小行数和最大行数。"

:::

## 不同尺寸

:::demo src="./size.vue" title="tu-Textarea 组件提供除了默认值 medium 以外的三种尺寸。"

额外的尺寸：large、small、mini，通过设置 size 属性来配置它们。

:::

## Textarea API

### Textarea Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| size | 多行输入框尺寸 | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| v-model | 绑定值 | ^[String] ^[Number] | - |
| disabled | 是否禁用 | ^[Boolean] | - |
| maxlength | 最大输入长度 | ^[String] ^[Number] | - |
| minlength | 最小输入长度 | ^[Number] | - |
| show-word-limit | 是否显示输入字数统计，只在 type 为 text 时有效 | ^[Boolean] | false |
| placeholder | 输入框占位文本 | ^[String] | - |
| clearable | 是否可清空 | ^[Boolean] | - |
| rows | 多行输入框的行数 | ^[number] | - |
| autosize | 多行输入框高度是否自适应。可以接受一个对象，比如:{minRows: 2, maxRows: 6}. | ^[boolean] ^[object]`{minRows?: number, maxRows?: number}` | false |
| formatter | 指定值显示输入的格式。（仅当类型为 text 时有效）| ^[Function]`(value: string \| number) => string` | - |
| parser | 指定格式化输入值中提取的值。（仅当类型为 text 时有效）|  ^[Function]`(value: string) => string` | - |
| name | 原生属性 | ^[String] | - |
| readonly | 原生属性，是否只读 | ^[Boolean] | false |
| max | 原生属性，设置最大值 | - | - |
| min | 原生属性，设置最小值 | - | - |
| step | 原生属性，设置输入字段的合法数字间隔 | - | - |
| autofocus | 原生属性，自动获取焦点 | ^[Boolean] | false |
| form | 原生属性 | ^[String] | - |
| tabindex | 输入框的 tabindex | ^[String] ^[Number] | - |
| validate-event | 输入时是否触发表单的校验 | ^[Boolean] | true |
| textarea-style | textarea 元素的 style | ^[String] ^[Object]`CSSProperties \| CSSProperties[] \| string[]` | {} |

### Textarea Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| blur | 在 Textarea 失去焦点时触发 | ^[Function]`(event: FocusEvent) => void` |
| focus | 在 Textarea 获得焦点时触发 | ^[Function]`(event: FocusEvent) => void` |
| change | 仅在输入框失去焦点或用户按下回车时触发 | ^[Function]`(value: string \| number) => void` |
| input | 在 Textarea 值改变时触发 | ^[Function]`(value: string \| number) => void` |
| clear | 在点击由 clearable 属性生成的清空按钮时触发 | ^[Function]`() => void` |

### Textarea Exposes

| 参数名 | 描述 | 类型 |
| ------ | ---- | ---- |
| focus | Textarea元素获得焦点 | ^[Function]`() => void` |
| blur | Textarea元素失去焦点 | ^[Function]`() => void` |
| clear | 清空输入框的值 | ^[Function]`() => void` |
| textarea | HTML输入框元素 | ^[object]`Ref<HTMLTextareaElement>` |
| ref | HTML元素 |  ^[object]`Ref<HTMLTextAreaElement>`|
| select | 输入框元素选中的文字 | ^[Function]`() => void`  |
| resizeTextarea | Textarea调整大小 | ^[Function]`() =>void` |
| textareaStyle  | Textarea样式 | ^[object]`Ref<StyleValue>` |
