# Alert 提示

向用户显示警告的信息时，通过警告提示，展现需要关注的信息。

## 基础用法

:::demo src="./basic.vue" title="展现需要关注的信息，适用于简短的警告提示。"

:::

## 提示类型

:::demo src="./types.vue" title="提示有 info、success、warning、error 四种类型，未设置类型则不展示图标。"

:::

## 提示主题

:::demo src="./effects.vue" title="提示有dark、light、plain、neumorphic 四种主题，通过设置 effect 属性来改变主题，默认为 neumorphic。"

:::

## 自定义关闭按钮

:::demo src="./custom-close.vue" title="自定义关闭按钮为文字或其他符号。"

:::

## 使用图标

:::demo src="./icon.vue" title="通过设置 show-icon 属性来显示提示的图标。"

:::

## 文字描述

:::demo src="./description.vue" title="可以设置 description 属性进行辅助性提示。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。"

:::

## 带图标和描述

:::demo src="./icon-description.vue" title="同时带有图标和描述的提示。"

:::

## 不同尺寸

:::demo src="./size.vue" title="tu-alert 组件提供除了默认值 medium 以外的三种尺寸。"

额外的尺寸：large、small、mini，通过设置 size 属性来配置它们。

:::

## Alert API

### Alert Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| title | 提示的标题 | ^[String] | - |
| type | 提示的类型 | ^[String]`'success' \| 'warning' \| 'info' \| 'error'` | - |
| description | 描述性文本 | ^[String] | —         |
| closable | 是否可以关闭 | ^[Boolean] | true |
| center | 文字是否居中 | ^[Boolean] | false |
| close-text | 自定义关闭按钮文本 | ^[String] | - |
| show-icon | 是否显示类型图标 | ^[Boolean] | false |
| effect |主题样式| ^[String]`'light' \| 'dark' \| 'plain' \| 'neumorphic'` | neumorphic |
| size | 尺寸 | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |

### Alert Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| close | 关闭提示时触发的事件 | ^[Function]`(event: MouseEvent) => void` |

### Alert Slots

| 参数名 | 描述 |
| ------ | ---- |
| default | 提示的内容描述 |
| title | 提示的标题 |
