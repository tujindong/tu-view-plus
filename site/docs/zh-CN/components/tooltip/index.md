# Tooltip 文字气泡

鼠标悬停、聚焦或点击在某个组件时，弹出的文字提示。

## 基本用法

:::demo src="./basic.vue" title="鼠标移入，气泡出现，鼠标移出，气泡消失。"

:::

## 气泡尺寸

:::demo src="./size.vue" title="tu-tooltip 组件提供除了默认值 medium 以外的三种尺寸。"

额外的尺寸：`large` `small` `mini`，通过设置 size 属性来配置它们，以适用不同场景。

:::

## 自定义背景颜色

:::demo src="./color.vue" title="通过 background-color 属性自定义背景颜色。"

:::

## 位置

:::demo src="./position.vue" title="文字气泡支持 12 个不同的方位。"

设置 tu-tooltip 元素属性的 position 值为 `tl` `top` `tr` `bl` `bottom` `br` `lt` `left` `lb` `rt` `right` `rb`来配置方位。

:::

## Tooltip API

### Tooltip Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :-----: |
| v-model | 文字气泡是否可见 | ^[Boolean] | - |
| default-popup-visible | 文字气泡默认是否可见（非受控模式）| ^[Boolean] | false |
| content | 文字气泡内容 | ^[String] | - |
| position | 弹出位置 | ^[String]`'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br' \| 'left' \| 'lt' \| 'lb' \| 'right' \| 'rt' \| 'rb'` | top |
| size | 尺寸 | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| background-color | 弹出框的背景颜色 | ^[String] | - |
| content-class | 弹出框内容的类名 | ^[ClassName] | - |
| content-style | 弹出框内容的样式 | ^[CSSProperties] | - |
| arrow-class | 弹出框箭头的类名 | ^[ClassName] | - |
| arrow-style | 弹出框箭头的样式 | ^[CSSProperties] | - |
| popup-container | 弹出框的挂载容器 | ^[String] ^[HTMLElement] ^[null] ^[undefined] | - |

### Tooltip Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| popup-visible-change | 文字气泡显示状态改变时触发 | ^[Function]`(value: boolean) => void` |

### Tooltip Slots

| 参数名 | 描述 | 类型 |
| ------ | ---- | ---- |
| content | 内容 | - |
