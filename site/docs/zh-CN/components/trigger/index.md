# Trigger 触发器

用于对元素添加 hover, click, focus 等事件，并且弹出下拉框。

## 基本用法

:::demo src="./basic.vue" title="触发器的最基础的使用。默认是没有弹出框的样式。"

设置 tu-trigger 元素属性的 trigger 属性值为 `hover` `click` `focus` 或 `contextMenu` 来配置触发方式。

:::

## 多层嵌套

:::demo src="./nest.vue" title="弹出层可以嵌套在另一个弹出层内。"

:::

## 跟随鼠标显示弹出框

:::demo src="./point.vue" title="设置 align-point 属性，可以使弹出层出现在鼠标位置。"

:::

## 滚动容器

:::demo src="./scroll.vue" title="通过设置 update-at-scroll 监听容器的滚动。"

:::

## 显示箭头元素

:::demo src="./arrow.vue" title="通过 show-arrow 属性，可以展示默认的箭头元素。也可以通过 arrow-class 或 arrow-style 进行定制。"

:::

## 弹窗偏移量

:::demo src="./translate.vue" title="通过 popup-translate 属性，可以设置弹窗在原本位置的基础上进行额外的位置调整。"

:::

## Trigger API

### Trigger Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :-----: |
| v-model | 弹出框是否可见 | ^[Boolean] | - |
| default-popup-visible | 弹出框默认是否可见（非受控模式）| ^[Boolean] | false |
| trigger | 触发方式 | ^[String]`'hover' \| 'click' \| 'focus' \| 'contextMenu'` | hover |
| position | 弹出位置 | ^[String]`'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br' \| 'left' \| 'lt' \| 'lb' \| 'right' \| 'rt' \| 'rb'`| bottom |
| disabled | 是否禁用 | ^[Boolean] | false |
| popup-offset | 弹出框的偏移量（弹出框距离触发器的偏移距离）| ^[Number] | 0 |
| popup-translate | 弹出框的移动距离 | ^[TriggerPopupTranslate] | - |
| show-arrow | 弹出框是否显示箭头 | ^[Boolean] | false |
| align-point | 弹出框是否跟随鼠标 | ^[Boolean] | false |
| popup-hover-stay | 是否在移出触发器，并移入弹出框时保持弹出框显示 | ^[Boolean] | true |
| blur-to-close | 是否在触发器失去焦点时关闭弹出框 | ^[Boolean] | true |
| click-to-close | 是否在点击触发器时关闭弹出框 | ^[Boolean] | true |
| click-outside-to-close | 是否在点击外部区域时关闭弹出框 | ^[Boolean] | true |
| unmount-on-close | 是否在关闭时卸载弹出框节点 | ^[Boolean] | true |
| content-class | 弹出框内容的类名 | ^[String] ^[Array] ^[Object] | - |
| content-style | 弹出框内容的样式 | ^[CSSProperties] | - |
| arrow-class | 弹出框箭头的类名 | ^[String] ^[Array] ^[Object] | - |
| arrow-style | 弹出框箭头的样式 | ^[CSSProperties]` | - |
| popup-style | 弹出框的样式 | ^[CSSProperties]` | - |
| animation-name | 弹出动画的name |  ^[String] | fade-in |
| duration | 弹出动画的持续时间 | ^[Number] ^[Object]`number\| { enter: number; leave: number;}` | -|
| mouse-enter-delay | mouseenter事件延时触发的时间（毫秒）| ^[Number] | 100 |
| mouse-leave-delay | mouseleave事件延时触发的时间（毫秒）| ^[Number] | 100 |
| focus-delay | focus事件延时触发的时间（毫秒）| ^[Number] | 0 |
| auto-fit-popup-width | 是否将弹出框宽度设置为触发器宽度 | ^[Boolean] | false |
| auto-fit-popup-min-width | 是否将弹出框的最小宽度设置为触发器宽度 | ^[Boolean] | false |
| auto-fix-position | 当触发器的尺寸发生变化时，是否重新计算弹出框位置 | ^[Boolean] | true |
| popup-container | 弹出框的挂载容器 | ^[String] ^[HTMLElement] | - |
| update-at-scroll | 是否在容器滚动时更新弹出框的位置 | ^[Boolean] | false |
| auto-fit-position | 是否自动调整弹出框位置，以适应窗口大小 | ^[Boolean] | true |
| render-to-body | 是否挂载在 body 元素下 | ^[Boolean] | true |
| prevent-focus | 是否阻止弹出层中的元素点击时获取焦点 | ^[Boolean] | false |

### Trigger Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| popup-visible-change | 弹出框显示状态改变时触发 | ^[Function]`(value: boolean) => void` |
| show | 弹出框显示后（动画结束）触发 | - |
| hide | 弹出框隐藏后（动画结束）触发 | - |

### Trigger Slots

| 参数名 | 描述 | 类型 |
| ------ | ---- | ---- |
| content | 弹出框内容 | - |

## FAQ

### 关于弹出框的挂载位置

弹出框默认是挂载到 body 元素上的，如果想要修改挂载元素，可以使用 popup-container 属性进行指定，同时需要注意保证挂载元素的位置可以被准确定位到，一般可以为挂载元素增加 position: relative 样式。

在微前端项目中，需要保证子应用的挂载位置准确，可以将子应用的 body 样式添加 position: relative。
