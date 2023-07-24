# Message 消息提示

当需要向用户全局展示提示信息时使用，显示数秒后消失。

## 引入方法

- 全局引入：组件为 app.config.globalProperties 添加了全局方法 $message。 因此在 vue 实例中可以使用当前页面中的调用方式调用 Message。
- 单独引入：此时调用方法为 TuMessage(options)。 每个类型定义了各自的方法，如 TuMessage.success(options)。 并且可以调用 TuMessage.closeAll() 手动关闭所有实例。

## 基础用法

:::demo src="./basic.vue" title="从顶部出现，3 秒后自动消失。 Message 可以接收一个字符串或一个 VNode 作为参数，并会被显示为正文内容。"

:::

## 消息类型

:::demo src="./types.vue" title="用来显示「成功、警告、消息、错误、信息」类的操作反馈。"

:::

## 可关闭的消息提示

:::demo src="./closable.vue" title="消息默认关闭时间为 3 秒，当设置 duration 属性值为 0 表示该消息不会自动关闭，此时设置 showClose 值为 true 可以手动关闭。"

:::

## 文字居中

:::demo src="./centered-content.vue" title="设置 center 属性可使消息框内容文字水平居中。"

:::

## 自定义图标

:::demo src="./custom-icon.vue" title="设置 icon 属性可定义头部图标。"

:::

## 使用 HTML 片段

:::demo src="./raw-html.vue" title="将 dangerouslyUseHTMLString 属性设置为 true, message 将会被当作 HTML 片段处理。"

:::

## 分组消息合并

:::demo src="./grouping.vue" title="设置 grouping 为 true，内容相同的消息将被合并。"

:::

## Message API

### Message Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| message | 消息文字 | ^[String] ^[VNode] ^[Function]`() => VNode` | - |
| type | 消息类型 | ^[String]`'' \| 'success' \| 'warning' \| 'info' \| 'error'` | '' |
| icon | 自定义图标 | ^[String] ^[Component] | - |
| dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理 | ^[Boolean] | false |
| customClass | 自定义类名 | ^[String] | '' |
| duration | 显示时间，单位为毫秒。 设为 0 则不会自动关闭 | ^[Number] | - |
| showClose | 是否显示关闭按钮 | ^[Boolean] | false |
| center | 文字是否居中 | ^[Boolean] | false |
| onClose | 关闭时的回调函数, 参数为被关闭的 message 实例 | ^[Function]`() => void` | - |
| offset | Message 距离窗口顶部的偏移量 | ^[Number] | 16 |
| appendTo | 设置 message 的根元素，默认为 document.body | ^[String] ^[HTMLElement] | - |
| grouping | 合并内容相同的消息，不支持 VNode 类型的消息 | ^[Boolean] | false |
| repeatNum | 重复次数，类似于 Badge 。当和 grouping 属性一起使用时作为初始数量使用 | ^[Number] | 1 |

### Message Events

调用 Message 或 this.$message 会返回当前 Message 的实例。 如果需要手动关闭实例，可以调用它的 close 方法。

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| close | 关闭当前的 Message | ^[Function]`() => void` |
