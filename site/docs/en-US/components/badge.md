# Badge

A number or status mark on buttons and icons.

## Basic usage

:::demo src="../examples/badge/basic.vue" title="Displays the amount of new messages."

:::

## Standalone

:::demo src="../examples/badge/single.vue" title="Used in standalone when default slot is empty."

:::

## Max Value

:::demo src="../examples/badge/max.vue" title="you can customize the max value. The max value is defined by property max which is a Number. Note that it only works when value is also a Number."

:::

## Customizations

:::demo src="../examples/badge/custom.vue" title="Displays text content other than numbers. When value is a String, it can display customized text."

:::

## Color

:::demo src="../examples/badge/colorful.vue" title="We provide a variety of preset colors for the badge. And you can also set a custom color by the color property."

:::

## Badge API

### Badge Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| value | display value | ^[String] ^[Number] | - |
| max | maximum value, shows {max}+ when exceeded. Only works if value is a number | ^[Number] | - |
| is-dot | if a little dot is displayed | ^[Boolean] | false |
| hidden | hidden badge | ^[Boolean] | false |
| type | badge type | ^[String]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | danger |
| color | customize dot color | ^[String] | - |
| text | set the display text of the status dot | ^[String] | - |
