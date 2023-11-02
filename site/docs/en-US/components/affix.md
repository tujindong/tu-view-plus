# Affix

Fix the element to a specific visible area.

## Basic usage

:::demo src="../examples/affix/basic.vue" title="Affix is fixed at the top of the page by default. You can set offset attribute to change the offset top，the default value is 0."

:::

## Target container

:::demo src="../examples/affix/target.vue" title="You can set target attribute to keep the affix in the container at all times. It will be hidden if out of range. Please notice that the container avoid having scrollbar."

:::

## Fixed Position

:::demo src="../examples/affix/position.vue" title="The affix component provides two fixed positions: top and bottom. You can set position attribute to change the fixed position, the default value is top."

:::

## Affix API

### Affix Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| offset | offset distance | ^[Number] | 0 |
| position | position of affix | ^[String]`'top' \| 'bottom'` | `'top'` | top |
| target | target container. (CSS selector) | ^[String] | - |
| z-index | z-index of affix | ^[Number] | 100 |

### Affix Events

| Name | Description | Type |
| ------ | ---- | ---- |
| change | triggers when fixed state changed. | ^[Function]`(fixed: boolean) => void` |
| scroll | triggers when scrolling. | ^[Function]`(value: { scrollTop: number, fixed: boolean }) => void` |

### Affix Slots

| Name | Description |
| ------ | ---- |
| default | customize default content. |
