# Scrollbar 滚动条

## 何时使用

用于替换浏览器原生滚动条。

## 基础用法

:::demo src="./basic.vue" title="通过 height 属性设置滚动条高度，若不设置则根据父容器高度自适应。"

:::

## 横向滚动

:::demo src="./horizontal-scroll.vue" title="当元素宽度大于滚动条宽度时，会显示横向滚动条。"

:::

## 最大高度

:::demo src="./max-height.vue" title="当元素高度超过最大高度，才会显示滚动条。"

:::

## 手动滚动

:::demo src="./manual-scroll.vue" title="通过使用 setScrollTop 与 setScrollLeft 方法，可以手动控制滚动条滚动。"

:::

## Scrollbar API

### Scrollbar Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| height | 滚动条高度 | ^[String] ^[Number] | - |
| max-height | 滚动条最大高度 | ^[String] ^[Number] | - |
| native | 是否使用原生滚动条样式 | ^[Boolean] | false |
| wrap-style | 包裹容器的自定义样式 | ^[String] ^[Object]`CSSProperties \| CSSProperties[] \| string[]` | - |
| wrap-class | 包裹容器的自定义类名 | ^[String] | - |
| view-style | 视图的自定义样式 | ^[String] ^[Object]`CSSProperties \| CSSProperties[] \| string[]` | - |
| view-class | 视图的自定义类名 | ^[String] | - |
| noresize | 不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能 | ^[Boolean] | false |
| tag | 视图的元素标签 | ^[String] | div |
| always | 滚动条总是显示 | ^[Boolean] | false |
| min-size | 滚动条最小尺寸 | ^[Number] | 20 |

### Scrollbar Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| scroll | 当触发滚动事件时，返回滚动的距离 | ^[Function]`({ scrollLeft: number, scrollTop: number }) => void` |

### Scrollbar Slots

| 参数名 | 描述 |
| ------ | ---- |
| default | 自定义默认内容 |

### Scrollbar Exposes

| 参数名 | 描述 | 类型 |
| ------ | ---- | ---- |
| handleScroll | 触发滚动事件 | ^[Function]`() => void` |
| scrollTo | 滚动到一组特定坐标 | ^[Function]`(options: ScrollToOptions \| number, yCoord?: number) => void` |
| setScrollTop | 设置滚动条到顶部的距离 | ^[Function]`(scrollTop: number) => void` |
| setScrollLeft | 设置滚动条到左边的距离 | ^[Function]`(scrollLeft: number) => void` |
| update | 手动更新滚动条状态 | ^[Function]`() => void` |
| wrapRef | 滚动条包裹的 ref 对象 | ^[Object]`Ref<HTMLDivElement>` |
