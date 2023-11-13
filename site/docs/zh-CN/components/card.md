# Card 卡片

将信息聚合在卡片容器中展示。

## 基础用法

:::demo src="../examples/card/basic.vue" title="包含标题，内容和操作。"

:::

## 简单卡片

:::demo src="../examples/card/simple.vue" title="卡片可以只有内容区域。Card 组件由 header 和 body 组成。 header 是可选的，其内容取决于一个具名的 slot。"

:::

## 主题

:::demo src="../examples/card/effect.vue" title="Card 组件提供了三个不同的主题：line、up、down。通过设置 effect 属性来改变主题，默认为 up。"

:::

## 有图片内容的卡片

:::demo src="../examples/card/photo.vue" title="可配置定义更丰富的内容展示。配置 body-style 属性来自定义 body 部分的 style ，此处还使用了布局组件。"

:::

## 不同尺寸

:::demo src="../examples/card/size.vue" title="Card 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的卡片尺寸。额外的尺寸： mini 、 small 、 large ，通过设置 size 属性来配置它们。"

:::

## Card API

### Card Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| title | 标题 | ^[String] | - |
| extra | 右上角的操作区域 | ^[String] | - |
| body-style | 设置body样式 | ^[Object] | - |
| effect | 主题 | ^[String]`'line' \| 'up' \| 'down'` | line |
| size | 尺寸 | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |

### Card Slots

| 参数名 | 描述 |
| ------ | ---- |
| title | 标题 | - |
| extra | 右上角的操作区域 | - |
| default | 内容区域 |
