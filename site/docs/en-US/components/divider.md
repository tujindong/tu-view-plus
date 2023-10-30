# Divider 分割线

划分内容区域，对模块做分隔。

## 基础用法

:::demo src="../examples/divider/basic.vue" title="对不同章节的文本段落进行分割，默认为水平分割线，可在中间加入文字。"

:::

## 带有文字的分割线

:::demo src="../examples/divider/with-text.vue" title="通过 orientation 为分割线添加描述文字。"

:::

## 竖直分割线

:::demo src="../examples/divider/vertical.vue" title="指定 direction 为 vertical 即可使用竖直分割线。竖直分割线无法添加描述文字。"

:::

## Divider API

### Divider Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| direction | 分割线的方向，是水平还是竖直 | ^[String]`'horizontal' \| 'vertical'` | |
| orientation | 分割线文字的位置 | ^[String]`'left' \| 'center' \| 'right'` | |
| margin | 分割线上下 margin (垂直方向时为左右 margin) | ^[String] ^[Number] | - |
