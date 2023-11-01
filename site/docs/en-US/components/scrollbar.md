# Scrollbar

Used to replace the browser's native scrollbar.

## Basic usage

:::demo src="../examples/scrollbar/basic.vue" title="Use height property to set the height of the scrollbar, or if not set, it adapts according to the parent container height."

:::

## Horizontal scroll

:::demo src="../examples/scrollbar/horizontal-scroll.vue" title="When the element width is greater than the scrollbar width, the horizontal scrollbar is displayed."

:::

## Max height

:::demo src="../examples/scrollbar/max-height.vue" title="The scrollbar is displayed only when the element height exceeds the max height."

:::

## Manual scroll

:::demo src="../examples/scrollbar/manual-scroll.vue" title="The scrollbar is displayed only when the element height exceeds the max height."

:::

## Scrollbar API

### Scrollbar Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| height | height of scrollbar | ^[String] ^[Number] | - |
| max-height | max height of scrollbar | ^[String] ^[Number] | - |
| native | whether to use the native scrollbar style | ^[Boolean] | false |
| wrap-style | style of wrap container | ^[String] ^[Object]`CSSProperties \| CSSProperties[] \| string[]` | - |
| wrap-class | class of wrap container | ^[String] | - |
| view-style | style of view | ^[String] ^[Object]`CSSProperties \| CSSProperties[] \| string[]` | - |
| view-class | class of view | ^[String] | - |
| noresize | do not respond to container size changes, if the container size does not change, it is better to set it to optimize performance | ^[Boolean] | false |
| tag | element tag of the view | ^[String] | div |
| always | always show scrollbar | ^[Boolean] | false |
| min-size | minimum size of scrollbar | ^[Number] | 20 |

### Scrollbar Events

| Name | Description | Type |
| ------ | ---- | ---- |
| scroll | triggers when scrolling, return distance of scrolling | ^[Function]`({ scrollLeft: number, scrollTop: number }) => void` |

### Scrollbar Slots

| Name | Description |
| ------ | ---- |
| default | customize default content |

### Scrollbar Exposes

| Name | Description | Type |
| ------ | ---- | ---- |
| handleScroll | handle scroll event | ^[Function]`() => void` |
| scrollTo | scrolls to a particular set of coordinates | ^[Function]`(options: ScrollToOptions \| number, yCoord?: number) => void` |
| setScrollTop | Set distance to scroll top | ^[Function]`(scrollTop: number) => void` |
| setScrollLeft | Set distance to scroll left | ^[Function]`(scrollLeft: number) => void` |
| update | update scrollbar state manually | ^[Function]`() => void` |
| wrapRef | scrollbar wrap ref | ^[Object]`Ref<HTMLDivElement>` |
