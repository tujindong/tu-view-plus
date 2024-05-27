
# Link

Text hyperlink

## Basic

:::demo src="../examples/link/basic.vue" title="Basic text link"

:::

## Disabled

:::demo src="../examples/link/disabled.vue" title="Disabled state of link"

:::

## Underline

:::demo src="../examples/link/underline.vue" title="Underline of link"

:::

## Icon

:::demo src="../examples/link/icon.vue" title="Link with icon"

:::

## Link API

### Link Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| type | Type | ^[String]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` | default |
| underline | Whether the component has underline | ^[Boolean] | true |
| disabled | Whether the component is disabled | ^[Boolean] | false |
| href | Same as native hyperlink's href | ^[String] | - |
| icon | Icon component | ^[String] ^[Component] | - |

### Link Slots

| Name | Description |
| ------ | ---- |
| default | Customize default content |
| icon | Customize icon component |
