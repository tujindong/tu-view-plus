# Slider 滑块

## 何时使用

滑动型输入器，展示当前值和可选范围。

## 基础用法

:::demo src="./basic.vue" title="输入框的基本用法。"

:::

## 禁用状态

:::demo src="./disabled.vue" title="禁用滑动输入条。"

:::

## 设置步长

:::demo src="./steps.vue" title="通过 step 设置步长，默认步长为 1。建议设置能够被 max-min 整除的值，否则会出现可选最大值小于 max 的情况。当设置 show-ticks 时，显示步长刻度线。"

:::

## 添加文本标签

:::demo src="./marks.vue" title="通过设置 marks 可以添加文本标签。"

:::

## 范围选择

:::demo src="./range.vue" title="通过设置 range 可开启范围选择，此时 modelValue 为数组。"

:::

## 显示输入框

:::demo src="./show-input.vue" title="当设置 show-input 时，将显示输入框。"

:::

## 竖直滑动条

:::demo src="./direction-vertical.vue" title="设置 direction 为 vertical，将会显示竖直的滑动条。"

:::

## 自定义提示

:::demo src="./format-tooltip.vue" title="通过设置 format-tooltip 可以自定义提示文字。"

:::

## 不同尺寸

:::demo src="./size.vue" title="tu-slider 组件提供除了默认值 medium 以外的三种尺寸。"

额外的尺寸：large、small、mini，通过设置 size 属性来配置它们。

:::

## Slider API

### Slider Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| v-model | 绑定值 | ^[Number] ^[Array] | - |
| default-value | 默认值（非受控状态）| ^[Number] ^[Array] | 0 |
| step | 滑动的步长 | ^[Number] | 1 |
| min | 滑动范围的最小值 | ^[Number] | 0 |
| max | 滑动范围的最大值 | ^[Number] | - |
| marks | 设置显示的标签 | ^[Object]`Record<number, string>` | - |
| direction | 滑动输入条的方向 | ^[String]`'horizontal' \| 'vertical'` | horizontal |
| disabled | 是否禁用 | ^[Boolean] | false |
| show-ticks | 是否显示刻度线 | ^[Boolean] | false |
| show-input | 是否显示输入框 | ^[Boolean] | false |
| range | 是否开启范围选择 | ^[Boolean] | false |
| show-tooltip | 是否显示tooltip | ^[Boolean] | true |

### Slider Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| change | 值改变时触发 | ^[Function]`(value: number \| [number, number]) => void` |
