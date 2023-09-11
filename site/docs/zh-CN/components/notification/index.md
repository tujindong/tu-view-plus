# 通知提醒框 Notification

全局展示通知提醒，将信息及时有效的传达给用户。

## 引入方法

- 全局调用：组件为 app.config.globalProperties 添加了全局方法 $notification。 因此在 vue 实例中可以使用当前页面中的调用方式调用 Notification。
- 单独调用：此时调用方法为 TuNotification(options)。 每个类型定义了各自的方法，如 TuNotification.success(options)。 并且可以调用 TuNotification.close() 手动关闭消息通知框。

## 基础用法

:::demo src="./basic.vue" title="通知框的基础用法，通过设置 title 和 message 属性来设置通知的标题和正文内容。"

:::

## 消息类型

:::demo src="./types.vue" title="通知提醒框的消息类型。"

:::

## 提醒框的位置

:::demo src="./position.vue" title="通知提醒框有 4 种不同的弹出位置，分别为：上右角 (默认)，下右角，上左角，下左角 。"

:::

## 有位置偏移的提醒框

:::demo src="./offsetting.vue" title="通过设置 offset 字段，可以使弹出的消息距屏幕边缘偏移一段距离。每一个的 Notification 实例应当具有一个相同的偏移量。"

:::

## 手动关闭

:::demo src="./manual-close.vue" title=" 默认情况下，通知框在4500毫秒后自动关闭，但可以通过设置 duration 属性来自定义通知的展示时间。 若设置为 0，那么通知将不会自动关闭。 需要注意的是 duration 接收一个 Number，单位为毫秒。"

:::

## 隐藏关闭按钮

:::demo src="./hide-close.vue" title="将 showClose 属性设置为 false 即可隐藏关闭按钮。"

:::

## 使用 HTML 片段作为正文内容

:::demo src="./raw-html.vue" title="将 dangerouslyUseHTMLString 属性设置为 true，message 属性就会被当作 HTML 片段处理。"

:::
