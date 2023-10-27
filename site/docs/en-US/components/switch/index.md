# Switch 开关

## 何时使用

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

:::demo src="./basic.vue" title="绑定 v-model 到一个 Boolean 类型的变量。"

:::

## 开关类型

:::demo src="./type.vue" title="开关分为 circle 圆形（默认）、round 圆角两种类型。"

:::

## 禁用状态

:::demo src="./disabled.vue" title="设置 disabled 属性，接受一个Boolean，设置 true 即可禁用。"

:::

## 文字描述

:::demo src="./text-description.vue" title="使用 active-text 属性与 inactive-text 属性来设置开关的文字描述。使用 inline-prompt 属性来控制文本是否显示在点内。"

:::

## 显示自定义图标

:::demo src="./custom-icons.vue" title="使用 inactive-icon 和 active-icon 属性来添加图标。 使用 inline-prompt 属性来控制图标显示在点内。"

:::

## 扩展的 value 类型

:::demo src="./extended-value-types.vue" title="可以设置 active-value 和 inactive-value 属性， 接受 Boolean、String 或 Number 类型的值。"

:::

## 加载状态

:::demo src="./loading.vue" title="设置 loading 属性，接受一个 Boolean，设置 true 即加载中状态。"

:::

## 阻止切换

:::demo src="./prevent-switching.vue" title="设置 beforeChange 属性，若返回 false 或者返回 Promise 且被 reject，则停止切换。"

:::

## 开关尺寸

:::demo src="./size.vue" title="开关组件提供除了默认值 medium 以外的三种尺寸。"

额外的尺寸：large、small、mini，通过设置 size 属性来配置它们。

:::

## Switch API

### Switch Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| v-model | 绑定值，须等于 active-value 或 inactive-value，默认为 Boolean 类型 | ^[Boolean] ^[String] ^[Number] | false |
| disabled | 是否禁用 | ^[Boolean] | false |
| loading | 是否显示加载中 | ^[Boolean] | false |
| type | 开关类型 | ^[String]`'circle' \| 'round'` | circle |
| size | 开关尺寸 | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| width | 开关的宽度 | ^[String] ^[Number] | false |
| inline-prompt | 无论图标或文本是否显示在点内，只会呈现文本的第一个字符 | ^[Boolean] | false |
| active-value | 开关打开的值 | ^[Boolean] ^[String] ^[Number] | true |
| inactive-value | 开关关闭的值 | ^[Boolean] ^[String] ^[Number] | false |
| active-icon | 开关打开时所显示图标，设置此项会忽略 active-text | ^[String] ^[Component] | - |
| inactive-icon | 开关关闭时所显示图标，设置此项会忽略 inactive-text | ^[String] ^[Component] | - |
| active-text | 开关打开时的文字描述 | ^[String] | '' |
| inactive-text | 开关关闭时的文字描述 | ^[String] | '' |
| name | 开关对应的 name 属性 | ^[String] | '' |
| validate-event | 开关状态改变时是否触发表单的校验 | ^[Boolean] | true |
| before-change | 开关状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换 | ^[Boolean]  ^[Function]`() => Promise<boolean>`  | - |
| id | input 的 id | ^[String] | - |
| tabindex | input 的 tabindex | ^[String] ^[Number] | - |

### Switch Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| change | 开关状态发生变化时的回调函数 | ^[Function]`(val: boolean \| string \| number) => void` |

### Switch Exposes

| 参数名 | 描述 | 类型 |
| ------ | ---- | ---- |
| focus  | 手动 focus 到开关组件 | ^[Function]`() => void` |
