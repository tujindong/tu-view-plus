# Tooltip

A tooltip that popup when the mouse hovers, focus, or click on a component.

## Basic usage

:::demo src="../examples/tooltip/basic.vue" title="When the mouse is moved in, the tooltip appears, and when the mouse is moved out, the tooltip disappears."

:::

## Custom Background Color

:::demo src="../examples/tooltip/color.vue" title="Customize the background color through the background-color property."

:::

## Position

:::demo src="../examples/tooltip/position.vue" title="The tooltip supports 12 different orientations. They are: upper left, upper, upper right, lower left, down, lower right, upper left, left, lower left, upper right, right, lower right."

:::

## 气泡尺寸

:::demo src="../examples/tooltip/size.vue" title="Besides default size, tu-tooltip component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

## Tooltip API

### Tooltip Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :-----: |
| v-model | whether the tooltip is visible | ^[Boolean] | - |
| default-popup-visible | Whether the tooltip is visible by default (uncontrolled mode) | ^[Boolean] | false |
| content | tooltip content | ^[String] | - |
| position | popup position | ^[String]`'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br' \| 'left' \| 'lt' \| 'lb' \| 'right' \| 'rt' \| 'rb'` | top |
| size | popup size | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| background-color | background color of Popover | ^[String] | - |
| content-class | the class name of the popup content | ^[ClassName] | - |
| content-style | the style of the popup content | ^[CSSProperties] | - |
| arrow-class | the class name of the popup arrow | ^[ClassName] | - |
| arrow-style | the style of the popup arrow | ^[CSSProperties] | - |
| popup-container | mount container for popup | ^[String] ^[HTMLElement] ^[null] ^[undefined] | - |

### Tooltip Events

| Name | Description | Type |
| ------ | ---- | ---- |
| popup-visible-change | Emitted when the tooltip display status changes | ^[Function]`(value: boolean) => void` |

### Tooltip Slots

| Name | Description | Type |
| ------ | ---- | ---- |
| content | Content | - |
