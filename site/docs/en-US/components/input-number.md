# InputNumber

Input numerical values with a customizable range.

## Basic usage

:::demo src="../examples/input-number/basic.vue" title="Bind a variable to v-model in <tu-input-number> element and you are set."

:::

## Disabled

:::demo src="../examples/input-number/disabled.vue" title="The disabled attribute accepts a boolean, and if the value is true, the component is disabled. If you just need to control the value within a range, you can add min attribute to set the minimum value and max to set the maximum value. By default, the minimum value is 0."

:::

## Steps

:::demo src="../examples/input-number/steps.vue" title="Allows you to define incremental steps."

:::

## Step strictly

:::demo src="../examples/input-number/step-strictly.vue" title="The step-strictly attribute accepts a boolean. if this attribute is true, input value can only be multiple of step."

:::

## Precision

:::demo src="../examples/input-number/precision.vue" title="Add precision attribute to set the precision of input value."

:::

## Controls Position

:::demo src="../examples/input-number/controls-position.vue" title="Set controls-position to decide the position of control buttons."

:::

## Sizes

:::demo src="../examples/input-number/size.vue" title="Besides default size, Input-number component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

## InputNumber API

### InputNumber Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| v-model | 绑定值 | ^[String] ^[Number] | - |
| type | 数字输入框类型 | ^[String] | text |
| size | 数字输入框尺寸 | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| disabled | 是否禁用 | ^[Boolean] | - |
| readonly | 原生  readonly 属性，是否只读 | ^[Boolean] | false |
| min | 设置允许输入的最小值 | ^[Number] | -Infinity |
| max | 设置允许输入的最大值 | ^[Number] | Infinity |
| step | 步长 | ^[Number]  | 1  |
| step-strictly | 是否只能输入 step 的倍数 | ^[Boolean]  | false |
| precision | 数值精度 | ^[Number] | - |
| controls | 是否使用控制按钮 | ^[Boolean] | true |
| controls-position | 控制按钮位置 | ^[String]`'' \| 'right'` | '' |
| name | 原生属性 | ^[String] | - |
| label | 原生属性 | ^[String] | - |
| placeholder | 数字输入框占位文本 | ^[String] | - |
| id | 等价于原生 input id 属性 | ^[String] | - |
| value-on-clear | 当输入框被清空时显示的值 | ^[Number] ^[Null] ^[String]`'min' \| 'max'` | |
| validate-event | 是否触发表单验证 | ^[Boolean]  | true |

### InputNumber Events

| Name | Description | Type |
| ------ | ---- | ---- |
| change | 绑定值被改变时触发 | ^[Function]`(currentValue: number \| undefined, oldValue: number \| undefined) => void` |
| blur | 在组件 Input 失去焦点时触发 | ^[Function]`(event: FocusEvent) => void` |
| focus | 在组件 Input 获得焦点时触发 | ^[Function]`(event: FocusEvent) => void` |

### InputNumber Exposes

| Name | Description | Type |
| ------ | ---- | ---- |
| focus | Input元素获得焦点 | ^[Function]`() => void` |
| blur | Input元素失去焦点 | ^[Function]`() => void` |
