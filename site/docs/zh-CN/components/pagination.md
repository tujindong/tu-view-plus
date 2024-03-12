# Pagination 分页

采用分页控制单页内的信息数量，也可进行页面跳转。

## 基础用法

:::demo src="../examples/pagination/basic.vue" title="分页的基本用法，total 属性为必填项。"

:::

## 更多页码

:::demo src="../examples/pagination/ellipsis.vue" title="当页码较大时，会使用更多页码的分页样式。"

:::

## 每页条数

:::demo src="../examples/pagination/page-size.vue" title="通过设置 show-page-size， 展示每页条数选择器。"

:::

## 页码跳转

:::demo src="../examples/pagination/jumper.vue" title="通过设置 show-jumper，显示页码跳转输入框。"

:::

## 展示总数

:::demo src="../examples/pagination/total.vue" title="通过设置 show-total 属性显示数据总数。"

:::

## 全部展示

:::demo src="../examples/pagination/all.vue" title="展示全部配置项。"

:::

## 按钮模式

:::demo src="../examples/pagination/button.vue" title="通过设置 button 属性开启按钮模式。"

:::

## 简洁模式

:::demo src="../examples/pagination/simple.vue" title="通过设置 simple 属性开启简洁模式。"

:::

## 自定义分页按钮

:::demo src="../examples/pagination/custom.vue" title="可以通过插槽自定义分页按钮内容。"

:::

## 不同尺寸

:::demo src="../examples/pagination/size.vue" title="tu-pagination 组件提供除了默认值 medium 以外的三种尺寸。额外的尺寸：large、small、mini，通过设置 size 属性来配置它们。"

:::

## Pagination API

### Pagination Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| total | 数据总数 | ^[Number] | - |
| current / v-model | 当前的页数 | ^[Number] | - |
| default-current | 默认的页数（非受控状态）| ^[Number] | 1 |
| page-size / v-model | 每页展示的数据条数 | ^[Number] | - |
| default-page-size | 默认每页展示的数据条数（非受控状态）| ^[Number] | 10 |
| disabled | 是否禁用 | ^[Boolean] | false |
| hide-on-single-page | 单页时是否隐藏分页 | ^[Boolean] | false |
| simple | 是否为简单模式 | ^[Boolean] | false |
| button | 是否为按钮样式 | ^[Boolean] | false |
| show-total | 是否显示数据总数 | ^[Boolean] | false |
| show-more | 是否显示更多按钮 | ^[Boolean] | false |
| show-jumper | 是否显示跳转 | ^[Boolean] | false |
| show-page-size | 是否显示数据条数选择器 | ^[Boolean] | false |
| page-size-options | 数据条数选择器的选项列表 | ^[Array]`number[]` | [10, 20, 30, 40, 50] |
| page-size-props | 数据条数选择器的Props | ^[Object]`SelectProps` | - |
| size | 分页选择器的大小 | ^[String]`'mini' \| 'small' \| 'medium' \| 'large'` | medium |
| page-item-style | 分页按钮的样式 | ^[Object]`CSSProperties` | - |
| active-page-item-style | 当前分页按钮的样式 | ^[Object]`CSSProperties` | - |
| base-size | 计算显示省略的基础个数。显示省略的个数为 baseSize + 2 * bufferSize | ^[Number] | 6 |
| buffer-size | 显示省略号时，当前页码左右显示的页码个数 | ^[Number] | 2 |
| auto-adjust | 是否在改变数据条数时调整页码 | ^[Boolean] | true |

### Pagination Events

| 事件名 | 描述 | 参数 |
| ------ | ---- | ---- |
| change | 页码改变时触发 | ^[Function]`(current: number) => void` |
| page-size-change | 数据条数改变时触发 | ^[Function]`(pageSize: number) => void` |

### Pagination Slots

| 参数名 | 描述 | 参数 |
| ------ | ---- | ---- |
| total | 总数 | total: ^[number] |
| page-item-ellipsis | 分页按钮（省略） | - |
| page-item-step | 分页按钮（步） | type: ^[String]`'previous'\|'next'` |
| page-item | 分页按钮 | page: ^[number] |
