# 通知提醒框 Notification

全局展示通知提醒，将信息及时有效的传达给用户。

## 引入方法

- 全局调用：组件为 app.config.globalProperties 添加了全局方法 $notification。 因此在 vue 实例中可以使用当前页面中的调用方式调用 Notification。
- 单独调用：此时调用方法为 TuNotification(options)。 每个类型定义了各自的方法，如 TuNotification.success(options)。 并且可以调用 TuNotification.close() 手动关闭消息通知框。

## 基础用法

:::demo src="../examples/notification/basic.vue" title="通知框的基础用法，通过设置 title 和 message 属性来设置通知的标题和正文内容。"

:::

## 消息类型

:::demo src="../examples/notification/types.vue" title="通知提醒框的消息类型。"

:::

## 提醒框的位置

:::demo src="../examples/notification/position.vue" title="通知提醒框有 4 种不同的弹出位置，分别为：上右角 (默认)，下右角，上左角，下左角 。"

:::

## 有位置偏移的提醒框

:::demo src="../examples/notification/offsetting.vue" title="通过设置 offset 字段，可以使弹出的消息距屏幕边缘偏移一段距离。每一个的 Notification 实例应当具有一个相同的偏移量。"

:::

## 手动关闭

:::demo src="../examples/notification/manual-close.vue" title=" 默认情况下，通知框在4500毫秒后自动关闭，但可以通过设置 duration 属性来自定义通知的展示时间。 若设置为 0，那么通知将不会自动关闭。 需要注意的是 duration 接收一个 Number，单位为毫秒。"

:::

## 隐藏关闭按钮

:::demo src="../examples/notification/hide-close.vue" title="将 showClose 属性设置为 false 即可隐藏关闭按钮。"

:::

## 使用 HTML 片段作为正文内容

:::demo src="../examples/notification/raw-html.vue" title="将 dangerouslyUseHTMLString 属性设置为 true，message 属性就会被当作 HTML 片段处理。"

:::

## Notification API

### Notification Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| title | 标题 | ^[String] | - |
| message | 通知栏正文内容 | ^[String] ^[VNode] | - |
| dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理 | ^[Boolean] | false |
| type | 通知的类型 | ^[String]`'success' \| 'warning' \| 'info' \| 'error' \| ''` | - |
| icon | 自定义图标。 若设置了 type，则 icon 会被覆盖 | ^[string] ^[Component] | - |
| custom-class | 自定义类名 | ^[String] | '' |
| duration | 显示时间, 单位为毫秒。 值为 0 则不会自动关闭 | ^[Number] | - |
| position | 自定义弹出位置 | ^[String]`'tr' \| 'tl' \| 'br' \| 'bl'` | tr |
| show-close | 是否显示关闭按钮 | ^[Boolean] | true |
| on-close | 关闭时的回调函数 | ^[Function]`() => void` | - |
| on-click | 点击 Notification 时的回调函数 | ^[Function]`() => void` | - |
| offset | 相对屏幕顶部的偏移量 偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量 | ^[Number] | 0 |
| appendTo | 设置 notification 的根元素，默认为 document.body | ^[string] ^[HTMLElement] | - |
| zIndex | 初始 zIndex | ^[Number] | - |

### Notification Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| close | 关闭当前的 Notification | ^[Function]`() => void` |
