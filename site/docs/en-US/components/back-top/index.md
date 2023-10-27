# BackTop 回到顶部

可一键返回顶部的按钮。

## 基础用法

:::demo src="./basic.vue" title="当容器滚动到一定高度的时候，在右下角会出现一个返回顶部的按钮。"

:::

## 自定义按钮

:::demo src="./custom.vue" title="可以自定义返回按钮。"

:::

## BackTop API

### BackTop Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| visible-height | 显示回到顶部按钮的触发滚动高度 | ^[Number] | 200 |
| target | 触发滚动的对象 | ^[string] | - |
| right | 控制其显示位置，距离页面右边距 | ^[Number] | 30 |
| bottom | 控制其显示位置，距离页面底部距离 | ^[Number] | 20 |

### BackTop Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| click | 点击按钮触发的事件 | ^[Function]`(evt: MouseEvent) => void` |

### BackTop Slots

| 参数名 | 描述 |
| ------ | ---- |
| default | 自定义默认内容 |
