# Avatar

Used as an avatar, it can be displayed in the form of pictures, icons or characters.

## Basic Usage

:::demo src="../examples/avatar/basic.vue" title="The basic use of avatars. If the avatar is text, the font size will be automatically adjusted to fit the avatar."

:::

## Size

:::demo src="../examples/avatar/shape-size.vue" title="The size of the avatar can be adjusted by setting the size field. The default size is 40px. Set the shape field, you can set whether the profile picture is a circle or a square."

:::

## Group

:::demo src="../examples/avatar/group.vue" title="Use Avatar.Group to group a list of avatars. size can be used to specify the size of each avatar.."

:::

## Trigger Icon

:::demo src="../examples/avatar/interaction.vue" title="You can customize the interactive button through trigger-icon and trigger-type. There are two types: mask and button."

:::

## Auto Fix Font Size

:::demo src="../examples/avatar/auto-size.vue" title="If the avatar content is text, the font size will be automatically adjusted to fit the content in the avatar."

:::

## Custom Avatar Path

:::demo src="../examples/avatar/custom-url.vue" title="Custom Avatar Path"

:::

## Effects

:::demo src="../examples/avatar/effect.vue" title="Card provide five different themes: outset、inset、bordered、outlined and flat. Using effect to change, default is outset."

:::

## Avatar API

### Avatar Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| shape | the shape of the avatar, there are two kinds of circle (circle) and square (square) | ^[String]`'circle' \| 'square'` | circle |
| imageUrl | custom avatar image address. If this attribute is passed in, the img tag will be rendered by default | ^[String] | - |
| size | the size of the avatar, the unit is px. Use size 40px in styles when not filled | ^[Number] | - |
| auto-fix-font-size | whether to automatically adjust the font size according to the size of the avatar. | ^[Boolean] | true |
| triggerType | clickable avatar interaction type | ^[String]`'mask' \| 'button'` | mask |
| trigger-icon-style | interactive icon style | ^[CSSProperties] | - |
| effect | effect | ^[String]`'outset' \| 'inset' \| 'bordered' \| 'outlined' \| 'flat'` | outset |

### Avatar Event

| Name | Description | Type |
| ------ | ---- | ---- |
| click | callback when clicked | ^[Function]`(ev: MouseEvent ) => void` |
| error | image load error | - |
| load | image load success | - |

### Avatar Slots

| Name | Description |
| ------ | ---- |
| trigger-icon | Clickable avatar interaction icon |

## AvatarGroup API

### AvatarGroup Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| shape | The shape of the avatar in the group, there are two kinds of circle (circle) and square (square) | ^[String]`'circle' \| 'square'` | circle |
| size | The size of the avatar in the group, the unit is px | ^[Number] | - |
| auto-fix-font-size | Whether to automatically adjust the font size according to the size of the avatar. | ^[Boolean] | true |
| max-count | The maximum number of avatars displayed in the avatar group. The excess avatars will be displayed in the form of +x. | ^[Number] | 0 |
| z-index-ascend | The avatar z-index in the avatar group increases, and the default is decreasing. | ^[Boolean] | false |
| max-style | Style for +x. | ^[CSSProperties] | - |
