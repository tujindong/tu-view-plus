# BackTop

A button to back to top.

## Basic usage

:::demo src="../examples/back-top/basic.vue" title="Scroll down to see the bottom-right button."

:::

## Customizations

:::demo src="../examples/back-top/custom.vue" title="custom back to top"

:::

## BackTop API

### BackTop Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| visible-height | the button will not show until the scroll height reaches this value. | ^[Number] | 200 |
| target | the target to trigger scroll. | ^[string] | - |
| right | right distance. | ^[Number] | 30 |
| bottom | bottom distance. | ^[Number] | 20 |

### BackTop Events

| Name | Description | Type |
| ------ | ---- | ---- |
| click | triggers when click. | ^[Function]`(evt: MouseEvent) => void` |

### BackTop Slots

| Name | Description |
| ------ | ---- |
| default | customize default content. |
