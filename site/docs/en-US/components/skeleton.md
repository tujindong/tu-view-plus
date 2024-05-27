# skeleton

Use gray to place the data being loaded.

## Basic usage

:::demo src="../examples/skeleton/basic.vue" title="The skeleton screen component provides two components: <tu-skeleton-line> and <tu-skeleton-shape>, users can combine them according to their needs."

:::

## Shape Skeleton

:::demo src="../examples/skeleton/patterning.vue" title="The graphic skeleton screen is divided into two shapes: square, circle, and provides three sizes of small, medium, and large."

:::

## Animation

:::demo src="../examples/skeleton/animation.vue" title="By setting the animation property, the skeleton screen can display the animation effect."

:::

## Skeleton API

### skeleton Props

| Name | Description | Type | Default |
| ------ | ---- | ---- | :-----: |
| loading | Whether to display the skeleton screen (loading state) | ^[Boolean] | true |
| animation | Whether to enable skeleton screen animation | ^[Boolean] | false |

### skeleton-line Props

| Name | Description | Type | Default |
| ------ | ---- | ---- | :-----: |
| rows | Number of rows displayed | ^[Number] | 1 |
| widths | The width of the line skeleton | ^[Array] | [] |
| line-height | Line height of the line skeleton | ^[Number] | 20 |
| line-spacing | Line spacing of line skeleton | ^[Number] | 15 |

### skeleton-shape Props

| Name | Description | Type | Default |
| ------ | ---- | ---- | :-----: |
| shape | The shape of the shape skeleton | ^[String]`'square' \| 'circle'` | square |
| size  | The size of the shape skeleton | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium  |
