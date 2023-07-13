# Badge

出现在按钮、图标旁的数字或状态标记。

## 基础用法

:::demo src="./basic.vue" title="展示新消息数量。"

:::

## 独立使用

:::demo src="./single.vue" title="不包裹任何元素既是独立使用，可以定义样式展现。"

:::

## 最大值

:::demo src="./max.vue" title="可自定义最大值。"
由 max 属性定义, 它接受一个 Number，需要注意的是，只有当 value 为 Number 时，它才会生效。

:::

## 自定义内容

:::demo src="./custom.vue" title="可以显示数字以外的文本内容。"
定义 value 为 String 类型是时可以用于显示自定义文本。

:::

## 多彩标记

:::demo src="./colorful.vue" title="可以用来标识状态的小圆点。"
定义 text 为 String 类型以及 color 为 String 颜色值标识状态。

:::

## Badge API

### Badge Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| value | 显示值 | ^[String] ^[Number] | - |
| max | 最大值，超过最大值会显示 '{max}+' | ^[Number] | - |
| is-dot | 小圆点 | ^[Boolean] | false |
| hidden | 隐藏badge | ^[Boolean] | false |
| type | 类型 | ^[String]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | danger |
| color | 自定义小圆点的颜色 | ^[String] | - |
| text | 在设置了 color 的前提下有效，设置状态点的文本 | ^[String] | - |
