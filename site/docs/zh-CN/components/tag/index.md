# Tag 标签

## 何时使用

用于标记和选择。

## 基础用法

:::demo src="./basic.vue" title="输入框的基本用法。"

:::

## 可移除标签

:::demo src="./removable.vue" title="设置 closable 属性可以定义一个标签是否可移除。 接受一个 Boolean。 默认的标签移除时会附带渐变动画。 如果不想使用，可以设置 disable-transitions 属性，接受一个 Boolean，true 为关闭。 当 Tag 被移除时会触发 close 事件。"

:::

## 动态编辑标签

:::demo src="./editable.vue" title="动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现。"

:::

## 颜色

:::demo src="./color.vue" title="可以通过 color 属性来自定义标签颜色。。"

:::

## 主题

:::demo src="./effect.vue" title="Tag 组件提供了四个不同的主题：neumorphic、dark、light、plain。通过设置 effect 属性来改变主题，默认为 neumorphic。"

:::

## 圆形标签

:::demo src="./round.vue" title="Tag 可以像按钮组件一样变为完全圆形。"

:::

## 不同尺寸

:::demo src="./size.vue" title="tu-tag 组件提供除了默认值 medium 以外的三种尺寸。"

额外的尺寸：large、small、mini，通过设置 size 属性来配置它们。

:::

## Tag API

### Tag Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| closable | 是否可关闭 | ^[Boolean] | false |
| effect | 标签的主题 | ^[String]`'neumorphic' \| 'light' \| 'dark' \| 'plain'` | neumorphic |
| round | 标签是否为圆形 | ^[Boolean] | false |
| color | 标签的颜色 | ^[String] | - |
| disable-transitions | 是否禁用渐变动画 | ^[Boolean] | false |
| hit | 是否命中字体加粗 | ^[Boolean] | false |
| size | 标签的尺寸 | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |

### Tag Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| click | 点击 Tag 时触发的事件 | ^[Function]`(evt: MouseEvent) => void` |
| close | 关闭 Tag 时触发的事件 | ^[Function]`(evt: MouseEvent) => void` |

### Tag Slots

| 参数名 | 描述 |
| ------ | ---- |
| - | 自定义默认内容 |
