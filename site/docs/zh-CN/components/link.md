# Link 链接

文字超链接

## 基础用法

:::demo src="../examples/link/basic.vue" title="基础的文字链接用法。"

:::

## 禁用状态

:::demo src="../examples/link/disabled.vue" title="文字链接不可用状态。"

:::

## 下划线

:::demo src="../examples/link/underline.vue" title="文字链接下划线。"

:::

## 图标

:::demo src="../examples/link/icon.vue" title="带图标的链接。"

:::

## Link API

### Link Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| type | 类型 | ^[String]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` | default |
| underline | 是否下划线 | ^[Boolean] | true |
| disabled | 是否禁用状态 | ^[Boolean] | false |
| href | 原生 href 属性 | ^[String] | - |
| icon | 图标组件 | ^[String] ^[Component] | - |

### Link Slots

| 参数名 | 描述 |
| ------ | ---- |
| default | 自定义默认内容 |
| icon | 自定义图标组件 |