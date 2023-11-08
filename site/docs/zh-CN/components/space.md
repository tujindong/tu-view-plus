# Space 间距

给组件之间提供统一的间距。

## 基础用法

:::demo src="../examples/space/basic.vue" title="间距组件的基本用法。"

:::

## 垂直间距

:::demo src="../examples/space/vertical.vue" title="可以设置垂直方向排列的间距。"

:::

## 尺寸

:::demo src="../examples/space/size.vue" title="内置 4 个尺寸，mini - 4px small - 8px (默认) medium - 16px large - 24px，也支持传数字来自定义尺寸。"

:::

## 对齐

:::demo src="../examples/space/align.vue" title="内置 4 种对齐方式，分别为 start、center、end、 baseline，在水平模式下默认为 center。"

:::

## 环绕间距

:::demo src="../examples/space/wrap.vue" title="环绕类型的间距，四周都有间距，一般用于换行的场景。"

:::

## 分隔符

:::demo src="../examples/space/divider.vue" title="为相邻子元素设置分隔符。"

:::

## Space API

### Space Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| align | 对齐方式 | ^[String]`'start' \| 'end' \| 'center' \| 'baseline'` | - |
| direction | 间距方向 | ^[String]`'vertical' \| 'horizontal'` | horizontal |
| size | 间距大小，支持分别制定横向和竖向的间距 | ^[String]`number \| 'mini' \| 'small' \| 'medium' \| 'large' \| [SpaceSize, SpaceSize]`|`'small'` | small |
| wrap | 环绕类型的间距，用于折行的场景。 | ^[Boolean] | false |
| fill | 充满整行 | ^[Boolean] | false |

### Radio Slots

| 参数名 | 描述 |
| ------ | ---- |
| divider | 设置分隔符 |
