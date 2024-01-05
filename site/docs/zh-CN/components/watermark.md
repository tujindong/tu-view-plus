# Watermark 水印

用于给页面的指定区域加上水印

## 基础用法

:::demo src="../examples/watermark/basic.vue" title="水印的基础用法。"

:::

## 多行文本

:::demo src="../examples/watermark/multiline.vue" title="通过 content 设置字符串数组可指定多行文字水印内容。"

:::

## 图片水印

:::demo src="../examples/watermark/image.vue" title="通过 image 设置图片水印。为了确保图像清晰展示而不是被拉伸，请设置宽度和高度，建议使用至少两倍的宽度和高度的图片来保证显示效果（支持Base64）。"

:::

## 自定义

:::demo src="../examples/watermark/custom.vue" title="通过自定义参数以实现更多的水印效果。"

:::


## Watermark API

### Watermark Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| content | 水印文本内容 | ^[String] ^[Object]`string[]` | - |
| imgage | 水印图片，建议使用 2x 或 3x 图像 | ^[String] | - |
| width | 水印宽度（默认为内容宽度） | ^[Number] | - |
| height | 水印高度（默认为内容高度） | ^[Number] | - |
| gap | 水印间的间距 | ^[Object]`[number,number]` | [90,90] |
| offset | 距离容器左上角的偏移量，默认为水印间距的一半 | ^[Object]`[number,number]` | [gap[0]/2, gap[1]/2] |
| rotate | 旋转角度 | ^[Number] | -22 |
| font | 水印字体样式 | ^[Font] | Font |
| z-index | 水印层级 | ^[Number] | 6 |
| alpha | 透明度 | ^[Number] | 1 |
| anti-tamper | 水印防篡改 | ^[Boolean] | true |
| grayscale | 灰阶水印 | ^[Boolean] | false |
| repeat | 是否重复水印 | ^[Boolean] | true |
| staggered | 是否错开排列 | ^[Boolean] | true |

### Font

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| color | 字体颜色 | ^[String] | rgba(128, 128, 128, 0.18) |
| fontSize | 字体大小 | ^[Number] | 16 |
| fontFamily | 字体类型 | ^[String] | Microsoft YaHei |
| fontStyle | 字体样式 | ^[String]`'none' \| 'normal' \| 'italic' \| 'oblique'` | normal |
| textAlign | 字体对齐方式 | ^[String]`'start' \| 'end' \| 'left' \| 'right'\| 'cneter'` | center |
| fontWeight | 字体粗细 | ^[String]`'normal' \| 'bold' \| 'bolder' \| 'lighter'\| 'number'` | lighter |