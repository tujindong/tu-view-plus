# Input 输入框

基本表单组件，并在原生控件基础上进行了功能扩展，可以组合使用。

## 基础用法

:::demo src="./basic.vue" title="输入框的基本用法。"

:::

## 禁用状态

:::demo src="./disabled.vue" title="通过 disabled 属性指定是否禁用 input 组件。"

:::

## 可清空

:::demo src="./clearable.vue" title="使用 clearable 属性即可得到一个可清空的输入框。"

:::

## 格式化

:::demo src="./formatter.vue" title="使用 formatter 属性显示格式化内容，通常需要搭配 parser 属性一起使用。"

:::

## 密码框

:::demo src="./password.vue" title="使用 show-password 属性即可得到一个可切换显示隐藏的密码框。"

:::

## 带 icon 的输入框

:::demo src="./with-icon.vue" title="带有图标标记输入类型。"

:::

## 复合型输入框

:::demo src="./mix-input.vue" title="可前置或后置元素，一般为标签或按钮。"

:::

## 输入长度限制

:::demo src="./limit-length.vue" title="maxlength 和 minlength 属性，用来限制输入框的字符长度。"

字符长度是用 Javascript 的字符串长度统计的。对于类型为 text 的输入框，在使用 maxlength 属性限制最大输入长度的同时，可通过设置 show-word-limit 属性来展示字数统计。

:::

## 不同尺寸

:::demo src="./size.vue" title="tu-input 组件提供除了默认值 medium 以外的三种尺寸。"

额外的尺寸：large、small、mini，通过设置 size 属性来配置它们。

:::

## Input API

### Input Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| v-model | 绑定值 | ^[String] ^[Number] | - |
| type | 输入框类型 | ^[String] | text |
| size | 输入框尺寸 | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| disabled | 是否禁用 | ^[Boolean] | - |
| maxlength | 最大输入长度 | ^[String] ^[Number] | - |
| minlength | 最小输入长度 | ^[Number] | - |
| show-word-limit | 是否显示输入字数统计，只在 type 为 text 时有效 | ^[Boolean] | false |
| placeholder | 输入框占位文本 | ^[String] | - |
| clearable | 是否可清空 | ^[Boolean] | - |
| formatter | 指定值显示输入的格式。（仅当类型为 text 时有效）| ^[Function]`(value: string \| number) => string` | - |
| parser | 指定格式化输入值中提取的值。（仅当类型为 text 时有效）|  ^[Function]`(value: string) => string` | - |
| show-password | 是否显示切换密码图标 | ^[Boolean] | - |
| prefix-icon | 输入框头部图标 | ^[String] ^[Component] | - |
| suffix-icon | 输入框尾部图标 | ^[String] ^[Component] | - |
| name | 原生属性 | ^[String] | - |
| readonly | 原生属性，是否只读 | ^[Boolean] | false |
| max | 原生属性，设置最大值 | - | - |
| min | 原生属性，设置最小值 | - | - |
| step | 原生属性，设置输入字段的合法数字间隔 | - | - |
| autofocus | 原生属性，自动获取焦点 | ^[Boolean] | false |
| form | 原生属性 | ^[String] | - |
| tabindex | 输入框的 tabindex | ^[String] ^[Number] | - |
| validate-event | 输入时是否触发表单的校验 | ^[Boolean] | true |
| input-style | input 元素的 style | ^[String] ^[Object]`CSSProperties \| CSSProperties[] \| string[]` | {} |

### Input Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| blur | 在 Input 失去焦点时触发 | ^[Function]`(event: FocusEvent) => void` |
| focus | 在 Input 获得焦点时触发 | ^[Function]`(event: FocusEvent) => void` |
| change | 仅在输入框失去焦点或用户按下回车时触发 | ^[Function]`(value: string \| number) => void` |
| input | 在 Input 值改变时触发 | ^[Function]`(value: string \| number) => void` |
| clear | 在点击由 clearable 属性生成的清空按钮时触发 | ^[Function]`() => void` |

### Input Slots

| 参数名 | 描述 |
| ------ | ---- |
| prefix | 输入框头部内容，只对 type 为 text 有效 |
| suffix | 输入框尾部内容，只对 type 为 text 有效 |
| prepend | 输入框前置内容，只对 type 为 text 有效 |
| append | 输入框后置内容，只对 type 为 text 有效 |

### Input Exposes

| 参数名 | 描述 | 类型 |
| ------ | ---- | ---- |
| focus | Input元素获得焦点 | ^[Function]`() => void` |
| blur | Input元素失去焦点 | ^[Function]`() => void` |
| clear | 清空输入框的值 | ^[Function]`() => void` |
| input | HTML输入框元素 | ^[object]`Ref<HTMLInputElement>` |
| ref | HTML元素 |  ^[object]`Ref<HTMLInputElement>`|
| select | 输入框元素选中的文字 | ^[Function]`() => void`  |
