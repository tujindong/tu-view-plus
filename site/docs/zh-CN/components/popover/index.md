# 气泡卡片 Popover

## 何时使用

鼠标悬停、聚焦或点击在某个组件时，弹出的气泡式的卡片浮层。可以对卡片上的元素进行操作。

## 基础用法

:::demo src="./basic.vue" title="鼠标移入或点击，弹出气泡，可对浮层上元素进行操作，承载复杂内容和操作。"

:::

## 触发方式

:::demo src="./trigger.vue" title="通过设置 trigger，可以指定不同的触发方式。"

:::

## 弹出位置

:::demo src="./position.vue" title="设置 tu-popover 元素属性的 position 值为 tl、top、tr、bl、bottom、br、lt、left、lb、rt、right、rb来配置方位。"

:::

## Popover API

### Popover Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :-----: |
| popup-visible / v-model | 文字气泡是否可见 | ^[Boolean]  | - |
| default-popup-visible | 文字气泡默认是否可见（非受控模式）| ^[Boolean]  | false |
| title | 标题 | ^[String] | - |
| content | 内容 | ^[String] | - |
| trigger | 触发方式 | ^[String]`'hover' \| 'click' \| 'focus' \| 'contextMenu'`|`'hover'` |
| position | 弹出位置 | ^[String]`'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br' \| 'left' \| 'lt' \| 'lb' \| 'right' \| 'rt' \| 'rb'` | top |
| content-class | 弹出框内容的类名 | ^[ClassName] | - |
| content-style | 弹出框内容的样式 | ^[CSSProperties] | - |
| arrow-class | 弹出框箭头的类名 | ^[ClassName] | - |
| arrow-style | 弹出框箭头的样式 | ^[CSSProperties] | - |
| popup-container | 弹出框的挂载容器 | ^[String] ^[HTMLElement] ^[null] ^[undefined] | - |

### Popover Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| popup-visible-change | 文字气泡显示状态改变时触发 | ^[Function]`(value: boolean) => void` |

### Popover Slots

| 参数名 | 描述 | 类型 |
| ------ | ---- | ---- |
| title | 标题 | - |
| content | 内容 | - |
