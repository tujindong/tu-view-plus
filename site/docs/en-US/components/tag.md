# Tag

Used for marking and selection.

## Basic usage

:::demo src="../examples/tag/basic.vue" title="Tag basic usage."

:::

## Removable tag

:::demo src="../examples/tag/removable.vue" title="Closable attribute can be used to define a removable tag. It accepts a Boolean. By default the removal of Tag has a fading animation. If you don t want to use it, you can set the disable-transitions attribute, which accepts a Boolean, to true. close event triggers when Tag is removed."

:::

## Edit dynamically

:::demo src="../examples/tag/editable.vue" title="You can use the close event to add and remove tag dynamically."

:::

## Color

:::demo src="../examples/tag/color.vue" title="Setting color attribute can define tag text color."

:::

## Themes

:::demo src="../examples/tag/effect.vue" title="Tag provide five different themes: up、down、dark、light and plain. Using effect to change, default is up."

:::

## Rounded

:::demo src="../examples/tag/round.vue" title="Tag can also be rounded like button."

:::

## Sizes

:::demo src="../examples/tag/size.vue" title="Besides default size, tu-tag component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

## Tag API

### Tag Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| closable | whether Tag can be removed | ^[Boolean] | false |
| effect | theme of Tag | ^[String]`'up' \| 'down' \| 'light' \| 'dark' \| 'plain'` | up |
| round | whether Tag is rounded | ^[Boolean] | false |
| color | color of the Tag | ^[String] | - |
| disable-transitions | whether to disable animations | ^[Boolean] | false |
| hit | whether Tag has a highlighted border | ^[Boolean] | false |
| size | size of Tag | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |

### Tag Events

| Name | Description | Type |
| ------ | ---- | ---- |
| click | triggers when Tag is clicked | ^[Function]`(evt: MouseEvent) => void` |
| close | triggers when Tag is removed | ^[Function]`(evt: MouseEvent) => void` |

### Tag Slots

| Name | Description |
| ------ | ---- |
| - | customize default content |
