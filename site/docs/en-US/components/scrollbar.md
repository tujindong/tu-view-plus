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
| height | Height of scrollbar | ^[String] ^[Number] | - |
| max-height | Max height of scrollbar | ^[String] ^[Number] | - |
| native | Whether to use the native scrollbar style | ^[Boolean] | false |
| wrap-style | Style of wrap container | ^[String] ^[Object]`CSSProperties \| CSSProperties[] \| string[]` | - |
| wrap-class | Class of wrap container | ^[String] | - |
| view-style | Style of view | ^[String] ^[Object]`CSSProperties \| CSSProperties[] \| string[]` | - |
| view-class | Class of view | ^[String] | - |
| noresize | Do not respond to container size changes, if the container size does not change, it is better to set it to optimize performance | ^[Boolean] | false |
| tag | Element tag of the view | ^[String] | div |
| always | Always show scrollbar | ^[Boolean] | false |
| min-size | Minimum size of scrollbar | ^[Number] | 20 |

### Scrollbar Events

| Name | Description | Type |
| ------ | ---- | ---- |
| scroll | Triggers when scrolling, return distance of scrolling | ^[Function]`({ scrollLeft: number, scrollTop: number }) => void` |

### Scrollbar Slots

| Name | Description |
| ------ | ---- |
| default | Customize default content |

### Scrollbar Exposes

| Name | Description | Type |
| ------ | ---- | ---- |
| handleScroll | Handle scroll event | ^[Function]`() => void` |
| scrollTo | Scrolls to a particular set of coordinates | ^[Function]`(options: ScrollToOptions \| number, yCoord?: number) => void` |
| setScrollTop | Set distance to scroll top | ^[Function]`(scrollTop: number) => void` |
| setScrollLeft | Set distance to scroll left | ^[Function]`(scrollLeft: number) => void` |
| update | Update scrollbar state manually | ^[Function]`() => void` |
| wrapRef | Scrollbar wrap ref | ^[Object]`Ref<HTMLDivElement>` |
