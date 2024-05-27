# Popconfirm

A simple confirmation dialog of an element click action.

## Basic usage

:::demo src="../examples/popconfirm/basic.vue" title="Basic usage of popconfirm."

:::

## Custom button

:::demo src="../examples/popconfirm/custom-button.vue" title="Customize the text or icon of the button."

:::

## Popup position

:::demo src="../examples/popconfirm/position.vue" title="popconfirm supports 12 different positions. They are: upper left upper upper right lower left down lower right upper left left lower left upper right right lower right."

:::

## Type

:::demo src="../examples/popconfirm/types.vue" title="The type of the confirmation box can be set via the type property."

:::

## Popconfirm API

### Popconfirm Attributes

| Name | Description | Type | Default |
|  ------ |  ---- |  ---- |  :-----: |
| popup-visible / v-model | Whether the popconfirm is visible | ^[Boolean] | - |
| default-popup-visible | Whether the popconfirm is visible by default (uncontrolled mode) | ^[Boolean] | false |
| content | content | ^[String] | - |
| position | Popup position | ^[String]`'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br' \| 'left' \| 'lt' \| 'lb' \| 'right' \| 'rt' \| 'rb'` | top |
| type | Types of the popconfirm| ^[String]`'info' \|  'success' \|  'warning' \|  'error'`| info |
| ok-text | The content of the ok button | ^[String] | - |
| cancel-text | The content of the cancel button| ^[String] | - |
| ok-loading | Whether the ok button is in the loading state | ^[Boolean] | false |
| ok-button-props | Whether the ok button is in the loading state | ^[ButtonProps] | - |
| cancel-button-props | Props of cancel button | ^[ButtonProps] | - |
| content-class | The class name of the popup content | ^[ClassName] | - |
| content-style | The style of the popup content | ^[CSSProperties] | - |
| arrow-class | The class name of the popup arrow | ^[ClassName] | - |
| arrow-style | The style of the popup arrow | ^[CSSProperties] | - |
| popup-container | Mount container for popup | ^[String] ^[HTMLElement] ^[null] ^[undefined] | - |
| on-before-ok | The callback function before the ok event is triggered. If false is returned, subsequent events will not be triggered, and done can also be used to close asynchronously. | ^[Function]`(done: (closed: boolean) => void) => void \| boolean \| Promise<void \| boolean>` | - |
| on-before-cancel | The callback function before the cancel event is triggered. If it returns false, no subsequent events will be triggered. | ^[Function]`() => boolean`| - |

### Popconfirm Events

| Name | Description | Type |
| ------ | ---- | ---- |
| popup-visible-change | Triggered when the visible or hidden state of the bubble confirmation box changes. | ^[Function]`(value: boolean) => void` |
| ok | Triggered when the confirm button is clicked. | - |
| cancel| Triggered when the cancel button is clicked. | - |

### Popconfirm Slots

| Name | Description |
| ------ | ---- |
| icon | Icon |
| content | Content |
