# Empty 空状态

## 何时使用

空状态时的占位提示。

## 基础用法

:::demo src="../examples/empty/basic.vue" title="空状态的基础用法。"

:::

## 自定义图片

:::demo src="../examples/empty/custom-image.vue" title="空状态的基础用法。"

:::

## 图片尺寸

:::demo src="../examples/empty/image-size.vue" title="通过使用 image-size 属性来控制图片大小。"

:::

## 底部内容

:::demo src="../examples/empty/bottom-content.vue" title="使用默认插槽可在底部插入内容。"

:::

## 自定义样式

可以为empty组件设置自定义样式。 使用 css/scss 语言来更改全局或局部颜色。 设置了一些全局颜色变量：--empty-fill-color、--empty-stroke-color。 可以使用类似 :root { --empty-fill-color: red; --empty-stroke-color: blue; } 等变量改变图标的填充颜色和边框颜色。

## 默认变量

| 变量 | 颜色 |
| --empty-fill-color | #eef0f5 |
| --empty-stroke-color | #cfd0d3 |

## Empty API

### Empty Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| image | 组件的图像地址 | ^[string] | '' |
| image-size | 组件的图像尺寸（宽度）| ^[number] | - |
| description | 组件的描述信息 | ^[string] | '' |

### Empty Slots

| 参数名 | 描述 |
| ------ | ---- |
| default | 底部的内容 |
| image | 图像的内容 |
| description | 描述的内容 |
