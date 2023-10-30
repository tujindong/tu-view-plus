# Affix 固钉

## 何时使用

将页面元素固定在特定可视区域。

## 基础用法

:::demo src="../examples/affix/basic.vue" title="固钉默认固定在页面顶部。通过设置 offset 属性来改变吸顶距离，默认值为 0。"

:::

## 指定容器

:::demo src="../examples/affix/target.vue" title="通过设置 target 属性，让固钉始终保持在容器内， 超过范围则隐藏。"

:::

## 固定位置

:::demo src="../examples/affix/position.vue" title="组件提供 2 个固定的位置参数 top 和 bottom。通过设置 position 属性来改变固定位置，默认值为 top。"

:::

## Affix API

### Affix Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| offset | 偏移距离 | ^[Number] | 0 |
| position | 位置 | ^[String]`'top' \| 'bottom'` | `'top'` | top |
| target | 指定容器 (CSS 选择器) | ^[String] | - |
| z-index | z-index | ^[Number] | 100 |

### Affix Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| change | fixed 状态改变时触发的事件 | ^[Function]`(fixed: boolean) => void` |
| scroll | 滚动时触发的事件 | ^[Function]`(value: { scrollTop: number, fixed: boolean }) => void` |

### Affix Slots

| 参数名 | 描述 |
| ------ | ---- |
| default | 自定义默认内容 |
