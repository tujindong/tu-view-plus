# Card

Integrate information in a card container.

## Basic usage

:::demo src="../examples/card/basic.vue" title="Card includes title, content and operations. Card is made up of header and body. header is optional, and its content distribution depends on a named slot."

:::

## Simple card

:::demo src="../examples/card/simple.vue" title="The header part can be omitted."

:::

## Effects

:::demo src="../examples/card/effect.vue" title="Card provide five different themes: outset、inset、bordered、outlined and flat. Using effect to change, default is outset."

:::

## With images

:::demo src="../examples/card/photo.vue" title="Display richer content by adding some configs.The body-style attribute defines CSS style of custom body. This example also uses tu-col for layout."

:::

## Sizes

:::demo src="../examples/card/size.vue" title="Besides default size, tu-card component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

## Card API

### Card Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| title | title of Card | ^[String] | - |
| extra | content to render in the top-right corner of the card | ^[String] | - |
| body-style | the style of the Card body | ^[Object] | - |
| effect | effect of Card | ^[String]`'outset' \| 'inset' \| 'bordered' \| 'outlined' \| 'flat'` | outset |
| size | size of Card | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |

### Card Slots

| Name | Description |
| ------ | ---- |
| title | title of Card |
| extra | content to render in the top-right corner of the card |
| default | customize default content |
