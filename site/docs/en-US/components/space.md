# Space

Providing unified space between each components

## Basic usage

:::demo src="../examples/space/basic.vue" title="Basic usage of spacing components."

:::

## Vertical

:::demo src="../examples/space/vertical.vue" title="You can set the spacing in the vertical direction."

:::

## Size

:::demo src="../examples/space/size.vue" title="Built-in 4 sizes, mini-4px、small-8px、 (default)、medium-16px large-24px, and also support to pass numbers to customize the size."

:::

## Align

:::demo src="../examples/space/align.vue" title="There are 4 built-in alignment methods, namely start、center、end、baseline, and the default is center in horizontal mode."

:::

## Wrap

:::demo src="../examples/space/wrap.vue" title="Surround type spacing, there are spacing on all sides, generally used in the scene of line wrapping."

:::

## Divider

:::demo src="../examples/space/divider.vue" title="Set separators for adjacent child elements."

:::

## Space API

### Space Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| align | alignment | ^[String]`'start' \| 'end' \| 'center' \| 'baseline'` | - |
| direction | spacing direction | ^[String]`'vertical' \| 'horizontal'` | horizontal |
| size | spacing size, support for setting horizontal and vertical spacing separately | ^[String]`number \| 'mini' \| 'small' \| 'medium' \| 'large' \| [SpaceSize, SpaceSize]`|`'small'` | small |
| wrap | the spacing of the wrapping type, used in the scene of wrapping. | ^[Boolean] | false |
| fill | fill the block | ^[Boolean] | false |

### Radio Slots

| Name | Description |
| ------ | ---- |
| divider | set separator |
