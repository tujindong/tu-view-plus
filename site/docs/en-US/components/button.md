# Button

## When To Use

A button is a command component to trigger an operation.

## Basic usage

:::demo src="../examples/button/basic.vue" title="Use type, plain, round and circle to define Buttons style."

:::

## Disabled Button

:::demo src="../examples/button/disabled.vue" title="The disabled attribute determines if the button is disabled. Use disabled attribute to determine whether a button is disabled. It accepts a Boolean value."

:::

## Text Button

:::demo src="../examples/button/text.vue" title="Button without border and background color."

:::

## Icon Button

:::demo src="../examples/button/icon.vue" title="Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text."

:::

## Button Group

:::demo src="../examples/button/group.vue" title="Displayed as a button group, can be used to group a series of similar operations. Use tag <tu-button-group> to group your buttons."

:::

## Loading Button

:::demo src="../examples/button/loading.vue" title="Click the button to load data, then the button displays a loading state. Set loading attribute to true to display loading state."

:::

## Sizes

:::demo src="../examples/button/size.vue" title="Besides default size, Button component provides three additional sizes for you to choose among different scenarios. Use attribute size to set additional sizes with mini, small, large."

:::

## Button API

### Button Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| size | 尺寸 | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| type | 类型 | ^[String]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'text'` | - |
| round | 是否圆角按钮 | ^[Boolean] | false |
| circle | 是否圆形按钮 | ^[Boolean] | false |
| loading | 是否加载中状态 | ^[Boolean] | false |
| loading-icon | 自定义加载图标 | ^[String] ^[Component] | Loading |
| disabled | 是否禁用状态 | ^[Boolean] | false |
| icon | 图标组件 | ^[String] ^[Component] | - |
| autofocus | 原生属性，自动获取焦点 | ^[Boolean] | false |
| native-type | 原生属性，按钮类型 | ^[String]`'button' \| 'submit' \| 'reset'` | button |

### Button Slots

| 参数名 | 描述 |
| ------ | ---- |
| default | 自定义默认内容 |
| loading | 自定义加载中组件 |
| icon | 自定义图标 |

### Button Exposes

| 参数名 | 描述 | 类型 |
| ------ | ---- | ---- |
| ref | 按钮元素 | ^[Object]`Ref<HTMLButtonElement>` |
| size | 按钮尺寸 | ^[Object]`ComputedRef<'' \| 'small' \| 'default' \| 'large'>` |
| type | 按钮类型 | ^[Object]`ComputedRef<'' \| 'default' \| 'primary' \| 'success' \| 'warning' \| 'info' \| 'danger' \| 'text'>` |
| disabled | 按钮禁用 | ^[Object]`ComputedRef<boolean>` |

## ButtonGroup API

### ButtonGroup Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| size | 按钮组尺寸 | ^[String]`'large' \| 'default' \| 'small'` | - |
| type | 按钮组类型 | ^[String]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | - |

### ButtonGroup Slots

| 参数名 | 描述 | 类型 |
| ------ | ---- | ---- |
| default | 自定义按钮组内容 | Button |
