# Spin 加载中

## 何时使用

用于页面和区块的加载中状态 - 页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 基本用法

:::demo src="../examples/spin/basic.vue" title="用于展示加载中的状态。"

:::

## 不同尺寸

:::demo src="../examples/spin/size.vue" title="设置 size 可以得到不同尺寸的加载图标。"

:::

## 点类型指示符

:::demo src="../examples/spin/dot.vue" title="通过 dot 属性，可以展示点类型的指示符。"

:::

## 区域加载

:::demo src="../examples/spin/inside-container.vue" title="可以给任意内容添加加载中指示符。"

:::

## 添加描述文案

:::demo src="../examples/spin/tip.vue" title="通过 tip 属性添加描述文案。"

:::

## 自定义图标

:::demo src="../examples/spin/custom-icon.vue" title="通过 #icon 插槽可以自定义图标。"

:::

## Spin API

### Spin Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| --------- | ---- | ---- | :----: |
| size | 尺寸 | ^[Number] | 14 |
| loading | 是否为加载中状态 | ^[Boolean] | true |
| dot | 是否使用点类型的动画 | ^[Boolean]  | false |
| tip | 提示内容 | ^[String] | - |

### Radio Slots

| 参数名 | 描述 |
| ------ | ---- |
| default | 自定义内容 |
| tip | 提示内容 |
| icon | 自定义图标（自动旋转） |
