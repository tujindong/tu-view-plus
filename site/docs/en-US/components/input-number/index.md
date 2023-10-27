# InputNumber 数字输入框

仅允许输入标准的数字值，可定义范围

## 基础用法

:::demo src="./basic.vue" title="使用 v-model 绑定变量，变量的初始值即为默认值。"

:::

## 禁用状态

:::demo src="./disabled.vue" title="设置 disabled 为 true 禁用整个组件，若需要控制数值在某一范围内，可以设置 min 属性和 max 属性， 默认最小值为 0。"

:::

## 步进

:::demo src="./steps.vue" title="允许定义递增递减的步进控制，设置 step 属性可以控制步长。"

:::

## 严格步进

:::demo src="./step-strictly.vue" title="设置 step-strictly 属性为 true，则只能输入步进的倍数。"

:::

## 精度

:::demo src="./precision.vue" title="设置 precision 属性可以控制数值精度。"

:::

## 按钮位置

:::demo src="./controls-position.vue" title="设置 controls-position 属性为 right 可以控制按钮位置为右侧。"

:::

## 不同尺寸

:::demo src="./size.vue" title="tu-input-number 组件提供除了默认值 medium 以外的三种尺寸。"

额外的尺寸：large、small、mini，通过设置 size 属性来配置它们。

:::

## InputNumber API

### InputNumber Attributes

| 参数名 | 描述 | 类型 | 默认值 |
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

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| change | 绑定值被改变时触发 | ^[Function]`(currentValue: number \| undefined, oldValue: number \| undefined) => void` |
| blur | 在组件 Input 失去焦点时触发 | ^[Function]`(event: FocusEvent) => void` |
| focus | 在组件 Input 获得焦点时触发 | ^[Function]`(event: FocusEvent) => void` |

### InputNumber Exposes

| 参数名 | 描述 | 类型 |
| ------ | ---- | ---- |
| focus | Input元素获得焦点 | ^[Function]`() => void` |
| blur | Input元素失去焦点 | ^[Function]`() => void` |
