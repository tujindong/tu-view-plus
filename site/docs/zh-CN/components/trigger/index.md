# Trigger 触发器

用于对元素添加 hover, click, focus 等事件，并且弹出下拉框。

## 基本用法

:::demo src="./basic.vue" title="触发器的最基础的使用。默认是没有弹出框的样式。"

设置 tu-trigger 元素属性的 trigger 属性值为 `hover` `click` `focus` 或 `contextMenu` 来配置触发方式。

:::

## 多层嵌套

:::demo src="./nest.vue" title="弹出层可以嵌套在另一个弹出层内。"

:::

## 跟随鼠标显示弹出框

:::demo src="./point.vue" title="设置 align-point 属性，可以使弹出层出现在鼠标位置。"

:::

## 滚动容器

:::demo src="./scroll.vue" title="通过设置 update-at-scroll 监听容器的滚动。"

:::

## 显示箭头元素

:::demo src="./arrow.vue" title="通过 show-arrow 属性，可以展示默认的箭头元素。也可以通过 arrow-class 或 arrow-style 进行定制。"

:::

## 弹窗偏移量

:::demo src="./translate.vue" title="通过 popup-translate 属性，可以设置弹窗在原本位置的基础上进行额外的位置调整。"

:::
