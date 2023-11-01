# Popover

When the mouse hovers, focus, or click on a component, a bubble-like card floating layer will pop up. You can manipulate the elements on the card.

## Basic usage

:::demo src="../examples/popover/basic.vue" title="Move the mouse in or click to pop up bubbles, which can operate on the elements on the floating layer, and carry complex content and operations."

:::

## Trigger

:::demo src="../examples/popover/trigger.vue" title="By setting trigger, you can specify different trigger methods."

:::

## Popup position

:::demo src="../examples/popover/position.vue" title="Popover supports 12 different positions. They are: upper left upper upper right lower left down lower right upper left left lower left upper right right lower right."

:::

## Sizes

:::demo src="../examples/popover/size.vue" title="Besides default size, tu-popover component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

## Popover API

### Popover Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :-----: |
| popup-visible / v-model | whether the popover is visible | ^[Boolean]  | - |
| default-popup-visible | whether the popover is visible by default (uncontrolled mode) | ^[Boolean]  | false |
| title | title of Popover | ^[String] | - |
| content | content of Popover | ^[String] | - |
| trigger | trigger method | ^[String]`'hover' \| 'click' \| 'focus' \| 'contextMenu'`| hover |
| position | position of Popover | ^[String]`'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br' \| 'left' \| 'lt' \| 'lb' \| 'right' \| 'rt' \| 'rb'` | top |
| content-class | the class name of the popup content | ^[ClassName] | - |
| content-style | the style of the popup content | ^[CSSProperties] | - |
| arrow-class | the class name of the popup arrow | ^[ClassName] | - |
| arrow-style | the style of the popup arrow | ^[CSSProperties] | - |
| popup-container | mount container for pop-up box | ^[String] ^[HTMLElement] ^[null] ^[undefined] | - |

### Popover Events

| Name | Description | Type |
| ------ | ---- | ---- |
| popup-visible-change | triggered when the text bubble display status changes | ^[Function]`(value: boolean) => void` |

### Popover Slots

| Name | Description | Type |
| ------ | ---- | ---- |
| title | title | - |
| content | content | - |
