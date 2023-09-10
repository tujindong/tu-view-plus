# 通知提醒框 Notification

全局展示通知提醒，将信息及时有效的传达给用户。

## 引入方法

- 全局调用：组件为 app.config.globalProperties 添加了全局方法 $notify。 因此在 vue 实例中可以使用当前页面中的调用方式调用 Notification。
- 单独调用：此时调用方法为 TuNotification(options)。 每个类型定义了各自的方法，如 TuNotification.success(options)。 并且可以调用 TuNotification.close() 手动关闭通知框

## 基础用法

:::demo src="./basic.vue" title="从顶部出现，3 秒后自动消失。 Message 可以接收一个字符串或一个 VNode 作为参数，并会被显示为正文内容。"

:::
