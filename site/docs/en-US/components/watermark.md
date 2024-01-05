# Watermark

Used to Add a watermark to a specified area.

## Basic usage

:::demo src="../examples/watermark/basic.vue" title="Basic usage of the watermark."

:::

## Multiline text

:::demo src="../examples/watermark/multiline.vue" title="Multi-line text watermarks can be specified with the content set string array."

:::

## Image watermark

:::demo src="../examples/watermark/image.vue" title="Set an image watermark using the image property. To ensure that the image is high definition and not stretched, set the width and height, and upload at least twice the width and height of the logo image address. (supports Base64)."

:::

## Custom

:::demo src="../examples/watermark/custom.vue" title="Customize the watermark."

:::


## Watermark API

### Watermark Attributes

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| content | watermark text content | ^[String] ^[Object]`string[]` | - |
| imgage | image watermark address | ^[String] | - |
| width | watermark width | ^[Number] | - |
| height | watermark height | ^[Number] | - |
| gap | watermark spacing | ^[Object]`[number,number]` | [90,90] |
| offset | the offset from the upper left corner of the container, the default is half the watermark spacing | ^[Object]`[number,number]` | [gap[0]/2, gap[1]/2] |
| rotate | watermark rotation angle | ^[Number] | -22 |
| font | watermark font style | ^[Font] | Font |
| z-index | watermark z-index | ^[Number] | 6 |
| alpha | watermark opacity | ^[Number] | 1 |
| anti-tamper | watermark anti-tampering | ^[Boolean] | true |
| grayscale | grayscale watermark | ^[Boolean] | false |
| repeat | whether to repeat the watermark | ^[Boolean] | true |
| staggered | whether to stagger the arrangement layout | ^[Boolean] | true |

### Font

| Name | Description | Type | Default |
| ------ | ---- | ---- | :----: |
| color | Font color | ^[String] | rgba(128, 128, 128, 0.18) |
| fontSize | Font size | ^[Number] | 16 |
| fontFamily | Font family | ^[String] | Microsoft YaHei |
| fontStyle | Font style | ^[String]`'none' \| 'normal' \| 'italic' \| 'oblique'` | normal |
| textAlign | Font align | ^[String]`'start' \| 'end' \| 'left' \| 'right'\| 'cneter'` | center |
| fontWeight | Font weight | ^[String]`'normal' \| 'bold' \| 'bolder' \| 'lighter'\| 'number'` | lighter |
