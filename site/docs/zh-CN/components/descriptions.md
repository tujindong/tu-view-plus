# Descriptions 描述列表

列表形式展示多个字段。

## 基础用法

:::demo src="../examples/descriptions/basic.vue" title=" "

:::

## 不同尺寸

:::demo src="../examples/descriptions/size.vue" title=" "

:::

## 垂直列表

:::demo src="../examples/descriptions/vertical.vue" title=" "

:::
## 自定义样式

:::demo src="../examples/descriptions/customer-style.vue" title=" "

:::

## Descriptions API

### Descriptions Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| border | 是否带有边框 | ^[Boolean] | false |
| column | 一行Descriptions Item的数量 | ^[Number] | 3 |
| direction | 排列的方向 | ^[String]`'vertical' \| 'horizontal'` | horizontal |
| size | 列表的尺寸 | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| title | 标题文本，显示在左上方 | ^[String] | - |
| extra | 操作区文本，显示在右上方 | ^[String] | - |

### Descriptions Slots

| 参数名 | 描述 | 默认值 |
| ------ | ---- | :----: |
| default | 自定义默认内容 | Descriptions Item |
| title | 自定义标题，显示在左上方 | - |
| extra | 自定义操作区，显示在右上方 | - |

## DescriptionsItem API

### DescriptionsItem Attributes
| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| label | 标签文本 | ^[String] | - |
| span | 列的数量 | ^[Number] | 1 |
| width | 列的宽度，不同行相同列的宽度按最大值设定(如无border，宽度包含标签与内容) | ^[String] ^[Number] | - |
| min-width | 列的最小宽度，与width的区别是width是固定的，min-width会把剩余宽度按比例分配给设置了min-width的列(如无border，宽度包含标签与内容) | ^[String] ^[Number] | - |
| align | 列的内容对齐方式(如无border，对标签与内容均生效) | ^[String]`'left' \| 'center' \| 'right'` | left |
| label-align | 列的标签对齐方式，若不设置该项，则使用内容的对齐方式(如无border，请使用align参数) | ^[String]`'left' \| 'center' \| 'right'` | - |
| class-name | 列的内容自定义类名 | ^[String] | - |
| label-class-name | 列标签自定义类名 | ^[String] | - |

### DescriptionsItem Slots

| 参数名 | 描述 | 默认值 |
| ------ | ---- | :----: |
| default | 自定义默认内容 | - |
| label | 自定义标签 | - |