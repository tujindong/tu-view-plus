# Breadcrumb 面包屑导航

显示当前页面在系统层级结构中的位置，并能向上返回。

## 基础用法

:::demo src="../examples/breadcrumb/basic.vue" title="面包屑的基本用法。"

:::

## 自定义分隔符

:::demo src="../examples/breadcrumb/separator.vue" title="通过 separator 属性或插槽自定义分隔符。面包屑子项也可通过 separator 属性或插槽自定义分隔符，且优先级高于父项。"

:::

## 自定义尺寸

:::demo src="../examples/breadcrumb/size.vue" title="通过指定样式来自定义面包屑的尺寸。"

:::

## 自定义图标

:::demo src="../examples/breadcrumb/icon.vue" title="可以在内容中使用自定义图标。"

:::

## 参数化配置

:::demo src="../examples/breadcrumb/routes.vue" title="通过 routes 来传递面包屑数据。若是要自定义面包屑的话，建议使用 a-breadcrumb-item 组件。默认使用 a 标签的 href 属性绑定路径，可通过 item 插槽自定义渲染。"

:::

## 带有下拉菜单

:::demo src="../examples/breadcrumb/dropdown.vue" title="通过 droplist 或者 routes 来指定下拉菜单。"

:::

## 显示省略

:::demo src="../examples/breadcrumb/ellipsis.vue" title="通过 max-count 来指定面包屑的最多渲染数量，超出的部分将显示为省略号。"

:::

## Breadcrumb API

### Breadcrumb Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| max-count | 最多展示的面包屑数量（0表示不限制）| ^[Number] | 0 |
| routes | 设置路径 | ^[Array]`BreadcrumbRoute[]` |  - |
| separator | 分隔符文字| ^[String]^[Number] | - |
| custom-url | 自定义链接地址 | ^[Function]`(paths: string[]) => string` | - |

### Breadcrumb Slots

| 参数名 | 描述 |
| ------ | ---- |
| more-icon | 自定义更多图标 |
| item-render | routes 设置时生效，自定义渲染面包屑 |
| separator | 自定义分隔符 |

### Breadcrumb-Item Attributes

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| separator | 分隔符文字 | ^[String]^[Number] | - |
| droplist | 下拉菜单内容 | ^[Object]`BreadcrumbRoute['children']` | - |
| dropdown-props | 下拉菜单属性 | ^[Object]`DropDownProps` | - |

### Breadcrumb-Item Slots

| 参数名 | 描述 |
| ------ | ---- |
| droplist | 自定义下拉菜单 |
| separator | 自定义分隔符 |

### BreadcrumbRoute

| 参数名 | 描述 | 类型 | 默认值 |
| ------ | ---- | ---- | :----: |
| label | 面包屑名称 | ^[String] | - |
| path | 跳转路径 (a标签的href) | ^[String] | - |
| children | 下拉菜单展示项 | ^[Array]`{label: string; path: string;}[]`| - |
