# Popconfirm 气泡确认框

## 何时使用

点击元素，弹出气泡式的确认框。

## 基础用法

:::demo src="../examples/popconfirm/basic.vue" title="气泡确认框的基本用法。"

:::

## 自定义按钮

:::demo src="../examples/popconfirm/custom-button.vue" title="自定义按钮的文字或图标。"

:::

## 弹出位置

:::demo src="../examples/popconfirm/position.vue" title="设置 tu-popconfirm 元素属性的 position 值为 tl、top、tr、bl、bottom、br、lt、left、lb、rt、right、rb来配置方位。"

:::

## 确认框类型

:::demo src="../examples/popconfirm/types.vue" title="通过 type 属性可以设置确认框类型。"

:::

## Popconfirm API

### Popconfirm Attributes

|  参数名 |  描述 |  类型 |  默认值 |
|  ------ |  ---- |  ---- |  :-----: |
| default-popup-visible | 气泡确认框默认是否可见（非受控模式）| ^[Boolean] | false |
| popup-visible / v-model | 文字气泡是否可见 | ^[Boolean] | - |
| content | 内容 | ^[String] | - |
| position | 弹出位置 | ^[String]`'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br' \| 'left' \| 'lt' \| 'lb' \| 'right' \| 'rt' \| 'rb'` | top |
| type | 气泡确认框的类型| ^[String]`'info' \|  'success' \|  'warning' \|  'error'`| info |
| ok-text | 确认按钮的内容| ^[String] | - |
| cancel-text | 取消按钮的内容| ^[String] | - |
| ok-loading | 确认按钮是否为加载中状态| ^[Boolean] | false |
| ok-button-props | 确认按钮的Props| ^[ButtonProps] | - |
| cancel-button-props | 取消按钮的Props| ^[ButtonProps] | - |
| content-class | 弹出框内容的类名| ^[ClassName] | - |
| content-style | 弹出框内容的样式| ^[CSSProperties] | - |
| arrow-class | 弹出框箭头的类名| ^[ClassName] | - |
| arrow-style | 弹出框箭头的样式| ^[CSSProperties] | - |
| popup-container | 弹出框的挂载容器 | ^[String] ^[HTMLElement] ^[null] ^[undefined] | - |
| on-before-ok |触发 ok 事件前的回调函数。如果返回 false 则不会触发后续事件，也可使用 done 进行异步关闭。| ^[Function]`(done: (closed: boolean) => void) => void \| boolean \| Promise<void \| boolean>` | - |
| on-before-cancel | 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。| ^[Function]`() => boolean`| - |

### Popconfirm Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| popup-visible-change | 文字气泡显示状态改变时触发 | ^[Function]`(value: boolean) => void` |
| ok | 点击确认按钮时触发 | - |
| cancel| 点击取消按钮时触发 | - |

### Popconfirm Slots

| 参数名 | 描述 |
| ------ | ---- |
| icon | 图标 | - |
| content | 内容 | - |
