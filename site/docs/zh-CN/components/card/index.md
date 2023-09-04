# Card 卡片

将信息聚合在卡片容器中展示。

## 基础用法

:::demo src="./basic.vue" title="包含标题，内容和操作。"

:::

## 简单卡片

:::demo src="./simple.vue" title="卡片可以只有内容区域。"

:::

## 有图片内容的卡片

:::demo src="./photo.vue" title="可配置定义更丰富的内容展示。"

配置 body-style 属性来自定义 body 部分的 style ，此处还使用了布局组件。

:::


## 不同尺寸

:::demo src="./size.vue" title="Card 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的卡片尺寸。"

额外的尺寸： mini 、 small 、 large ，通过设置 size 属性来配置它们。

:::


## 主题

:::demo src="./effect.vue" title="Card 组件提供了三个不同的主题：normal、inside、outside。通过设置 effect 属性来改变主题，默认为 normal。"

:::


## Card API

### Card Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| title | 卡片标题 | ^[String] ^[Slot] | - |
| extra | 卡片右上角的操作区域 | ^[String] ^[Slot] | - |
| body-style | 设置body样式 | ^[Object] | - |
| effect | 卡片主题 | ^[String]`'normal' \| 'inside' \| 'outside'` | normal |