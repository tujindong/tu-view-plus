# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 基础用法

:::demo src="./basic.vue" title="基础的按钮用法。"

使用 `type` `plain` `round` 和 `circle` 属性来定义 Button 的样式。

:::

## 禁用状态

:::demo src="./disabled.vue" title="按钮不可用状态。"

你可以使用 `disabled` 属性来定义按钮是否可用，它接受一个 Boolean 值。

:::

## 文字按钮

:::demo src="./text.vue" title="没有边框和背景色的按钮。"

:::

## 图标按钮

:::demo src="./icon.vue" title="带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。"

:::

## 按钮组

:::demo src="./group.vue" title="以按钮组的方式出现，常用于多项类似操作。"

使用 `<tu-button-group>` 标签来嵌套你的按钮。

:::

## 加载中

:::demo src="./loading.vue" title="点击按钮后进行数据加载操作，在按钮上显示加载状态。"

要设置为 loading 状态，只要设置 `loading` 属性为 true 即可。

:::

## 不同尺寸

:::demo src="./size.vue" title="Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。"

额外的尺寸：`medium` `small` `mini`，通过设置 `size` 属性来配置它们。

:::

<!-- ## Button API

### Button Attributes

| Name         | Description                            | Type                                                                            | Default |
| ------------ | -------------------------------------- | ------------------------------------------------------------------------------- | ------- |
| size         | button size                            | ^[enum]`'large'\| 'default'\| 'small'`                                          | —       |
| type         | button type                            | ^[enum]`'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'\| 'text'(delete)` | —       |
| round        | determine whether it's a round button  | ^[boolean]                                                                      | false   |
| circle       | determine whether it's a circle button | ^[boolean]                                                                      | false   |
| loading      | determine whether it's loading         | ^[boolean]                                                                      | false   |
| loading-icon | customize loading icon component       | ^[string] / ^[Component]                                                        | Loading |
| disabled     | disable the button                     | ^[boolean]                                                                      | false   |
| icon         | icon component                         | ^[string] / ^[Component]                                                        | —       |
| autofocus    | same as native button's `autofocus`    | ^[boolean]                                                                      | false   |
| native-type  | same as native button's `type`         | ^[enum]`'button'\| 'submit'\| 'reset'`                                          | button  |

### Button Slots

| Name    | Description                 |
| ------- | --------------------------- |
| default | customize default content   |
| loading | customize loading component |
| icon    | customize icon component    |

### Button Exposes

| Name     | Description         | Type                                                                                                           |
| -------- | ------------------- | -------------------------------------------------------------------------------------------------------------- |
| ref      | button html element | ^[object]`Ref<HTMLButtonElement>`                                                                              |
| size     | button size         | ^[object]`ComputedRef<'' \| 'small' \| 'default' \| 'large'>`                                                  |
| type     | button type         | ^[object]`ComputedRef<'' \| 'default' \| 'primary' \| 'success' \| 'warning' \| 'info' \| 'danger' \| 'text'>` |
| disabled | button disabled     | ^[object]`ComputedRef<boolean>`                                                                                |

## ButtonGroup API

### ButtonGroup Attributes

| Name | Description                                      | Type                                                           | Default |
| ---- | ------------------------------------------------ | -------------------------------------------------------------- | ------- |
| size | control the size of buttons in this button-group | ^[enum]`'large'\| 'default'\| 'small'`                         | —       |
| type | control the type of buttons in this button-group | ^[enum]`'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'` | —       |

### ButtonGroup Slots

| Name    | Description                    | Subtags |
| ------- | ------------------------------ | ------- |
| default | customize button group content | Button  | -->
