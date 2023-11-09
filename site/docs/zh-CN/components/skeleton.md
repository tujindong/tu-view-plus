# skeleton 骨架屏

将加载中的数据用灰色占位。

## 基础用法

:::demo src="../examples/skeleton/basic.vue" title="骨架屏组件提供 <tu-skeleton-line> 和 <tu-skeleton-shape> 两种组件，用户可根据需要组合使用。"

:::

## 图形骨架屏

:::demo src="../examples/skeleton/patterning.vue" title="图形骨架屏分为 square - 正方形（默认）、 circle - 圆形两种形状，并提供 mini、small、medium、large 四种尺寸。"

:::

## 动画

:::demo src="../examples/skeleton/animation.vue" title="通过设置 animation 属性，让骨架屏显示动画效果"

:::

## Skeleton API

### skeleton Props

| 参数名    | 描述                       | 类型       | 默认值 |
| --------- | -------------------------- | ---------- | :----: |
| loading   | 是否展示骨架屏(加载中状态) | ^[Boolean] |  true  |
| animation | 是否开启骨架屏动画         | ^[Boolean] | false  |

### skeleton-line Props

| 参数名       | 描述             | 类型      | 默认值 |
| ------------ | ---------------- | --------- | :----: |
| rows         | 展示的行数       | ^[Number] |   1    |
| widths       | 线型骨架的宽度   | ^[Array]  |   []   |
| line-height  | 线型骨架的行高   | ^[Number] |   20   |
| line-spacing | 线型骨架的行间距 | ^[Number] |   15   |

### skeleton-shape Props

| 参数名 | 描述           | 类型                                                | 默认值 |
| ------ | -------------- | --------------------------------------------------- | :----: |
| shape  | 图形骨架的形状 | ^[String]`'square' \| 'circle'`                     | square |
| size   | 图形骨架的大小 | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
