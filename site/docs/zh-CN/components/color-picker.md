# ColorPicker 颜色选择框

用于选择和展示颜色。

## 基础用法

:::demo src="../examples/color-picker/basic.vue" title="颜色选择框的基本用法。"

:::

## 禁用

:::demo src="../examples/color-picker/disabled.vue" title="设置 disabled 禁用选择器。"

:::

## 颜色格式

:::demo src="../examples/color-picker/format.vue" title="通过 format 设置颜色值的格式，支持 hex 和 rgb。"

:::

## 预设颜色和历史颜色

:::demo src="../examples/color-picker/colors.vue" title="通过 showPreset 和 showHistory 开启预设颜色和历史颜色区域。历史颜色需要用户自行控制展示内容。"

:::

## 触发器

:::demo src="../examples/color-picker/trigger.vue" title="可以通过 trigger-props 设置触发器的所有属性。"

:::

## 自定义触发器

:::demo src="../examples/color-picker/trigger-element.vue" title="自定义触发元素。"

:::

## 尺寸

:::demo src="../examples/color-picker/size.vue" title="tu-color-picker 组件提供除了默认值 medium 以外的三种尺寸。额外的尺寸：large、small、mini，通过设置 size 属性来配置它们。"

:::

## 只使用面板

:::demo src="../examples/color-picker/only-panel.vue" title="只用颜色选择面板。"

:::

## ColorPicker API

### ColorPicker Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| model-value | 绑定值 | ^[String] | - |
| default-value | 默认值（非受控状态）| ^[String] | - |
| format | 颜色值的格式 | ^[String]`'hex' \| 'rgb'` | - |
| size | 尺寸 | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| show-text | 显示颜色值 | ^[Boolean] | false |
| show-history | 显示历史颜色 | ^[Boolean] | false |
| show-preset | 显示预设颜色 | ^[Boolean] | false |
| disabled | 禁用 | ^[Boolean] | false |
| disabled-alpha | 禁用透明通道 | ^[Boolean] | false |
| hide-trigger | 没有触发元素，只显示颜色面板 | ^[Boolean] | false |
| trigger-props | 接受所有 Trigger 组件的Props | ^[Object]`Partial<TriggerProps>` | - |
| history-colors | 历史颜色的颜色数组 | ^[Array]`string[]` | - |
| preset-colors | 预设颜色的颜色数组 | ^[Array]`string[]` | colors |

### ColorPicker Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| change | 颜色值改变时触发 | ^[Function]`(value: string) => void` |
| popup-visible-change | 颜色面板展开和收起时触发 | ^[Function]`(visible: boolean, value: string) => void` |
