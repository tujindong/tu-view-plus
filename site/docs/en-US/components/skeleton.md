# skeleton

Place the loaded data in gray。

## Basic usage

:::demo src="../examples/skeleton/basic.vue" title="The skeleton screen component provides two components, `<a-skeleton-line>` and `<a-skeleton-shape>`, which can be combined by users according to their needs。"

:::

## Graphic skeleton screen

:::demo src="../examples/skeleton/patterning.vue" title="The graphic skeleton screen is divided into two shapes: square - square (default), circle - circle, and four sizes: mini, small, medium, and large are available。"

:::

## Animation

:::demo src="../examples/skeleton/animation.vue" title="Set the animation property to animate the skeleton screen"

:::

## Skeleton API

### skeleton Props

| Name      | Description                                            | Type       | Default |
| --------- | ------------------------------------------------------ | ---------- | :-----: |
| loading   | Whether to display the skeleton screen (loading state) | ^[Boolean] |  true   |
| animation | Whether to enable skeleton screen animation            | ^[Boolean] |  false  |

### skeleton-line Props

| Name         | Description                         | Type      | Default |
| ------------ | ----------------------------------- | --------- | :-----: |
| rows         | The number of rows to display       | ^[number] |    1    |
| widths       | The width of the linear skeleton    | ^[Array]  |   []    |
| line-height  | The row height of a linear skeleton | ^[number] |   20    |
| line-spacing | Line spacing for a linear skeleton  | ^[number] |   15    |

### skeleton-shape Props

| Name  | Description                      | Type                             | Default |
| ----- | -------------------------------- | -------------------------------- | :-----: |
| shape | The shape of the graph skeleton  | ^[square]^[circle]               | square  |
| size  | The size of the graph's skeleton | ^[mini]^[small]^[medium]^[large] | medium  |
