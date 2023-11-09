# Avatar 头像

用作头像显示，可以为图片、图标或字符形式展示。

## 基础用法

:::demo src="../examples/avatar/basic.vue" title="头像的基础使用。如果头像是文字的话，会自动调节字体大小，来适应头像框。"

:::

## 大小和形状

:::demo src="../examples/avatar/shapeSize.vue" title="通过设置 size 字段，可以调节头像的大小，默认大小为 40px。设置 shape 字段，可以设置头像是圆形 (circle) 还是正方形 (square)。"

:::

## 头像组

:::demo src="../examples/avatar/group.vue" title="使用 Avatar.Group 可以使用头像组功能，可通过 size 指定头像的大小。"

:::

## 交互按钮

:::demo src="../examples/avatar/interaction.vue" title="可以通过 trigger-icon trigger-type 来定制交互按钮，类型有 mask (遮罩) 和 button (按钮) 两种。"

:::

## 自动调整字体大小

:::demo src="../examples/avatar/autoSize.vue" title="如果头像是文字的话，会自动调节字体大小，来适应头像框。"

:::

## 自定义头像路径

:::demo src="../examples/avatar/customUrl.vue" title="自定义头像图片路径"

:::

## 主题

:::demo src="../examples/avatar/effect.vue" title="avatar 组件提供了三个不同的主题：line、up、down。通过设置 effect 属性来改变主题，默认为 line。"

:::

## Avatar API

### Avatar Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| shape              | 头像的形状，有圆形(circle)和正方形(square)两种           | ^[String]`'circle' \| 'square'`   | circle |
| imageUrl           | 自定义头像图片地址，如果传入该属性，会默认渲染 img 标签  | ^[String]                         |   -    |
| size               | 头像的尺寸大小，单位是 px。未填写时使用样式中的大小 40px | ^[Number]                         |   -    |
| auto-fix-font-size | 是否自动根据头像尺寸调整字体大小                         | ^[Boolean]                        |  true  |
| triggerType        | 可点击的头像交互类型。                                   | ^[String]`'mask' \| 'button'`     |  mask  |
| trigger-icon-style | 交互图标的样式                                           | ^[CSSProperties]                  |   -    |
| effect             | 主题                                                     | ^[String]`'line' \| 'up'\|'down'` |  line  |

### Avatar Event

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| click  | 点击回调     | ^[Function]`(ev: MouseEvent ) => void` |
| error  | 图片加载错误 | -                                      |
| load   | 图片加载成功 | -                                      |

### Avatar Slots

| 参数名 | 描述 |
| ------ | ---- |
| trigger-icon | 可点击的头像交互图标 |

## AvatarGroup API

### AvatarGroup Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| shape              | 头像的形状，有圆形(circle)和正方形(square)两种           | ^[String]`'circle' \| 'square'` | circle |
| size               | 头像的尺寸大小，单位是 px。未填写时使用样式中的大小 40px | ^[Number]                       |   -    |
| auto-fix-font-size | 是否自动根据头像尺寸调整字体大小                         | ^[Boolean]                      |  true  |
| max-count          | 头像组最多显示的头像数量，多余头像将以 +x 的形式展示。   | ^[Number]                       |   0    |
| z-index-ascend     | 头像组内的头像 z-index 递增，默认是递减。                | ^[Boolean]                      | false  |
| max-style          | 多余头像样式。                                           | ^[CSSProperties]                |   -    |
